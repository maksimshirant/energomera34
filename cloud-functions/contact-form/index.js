'use strict';

const nodemailer = require('nodemailer');

const REQUIRED_ENV_VARS = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'FORM_TO_EMAIL'];
const RU_PHONE_REGEX = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

const json = (statusCode, payload, headers = {}) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    ...headers,
  },
  body: JSON.stringify(payload),
});

const getAllowedOrigins = () =>
  (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

const getCorsHeaders = (origin) => {
  const allowedOrigins = getAllowedOrigins();

  if (allowedOrigins.length === 0) {
    return {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
  }

  const allowOrigin = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
};

const decodeBody = (body, isBase64Encoded) => {
  if (!body) {
    return '';
  }

  return isBase64Encoded ? Buffer.from(body, 'base64').toString('utf8') : body;
};

const getPayload = (event) => {
  const rawBody = decodeBody(event.body, event.isBase64Encoded);

  if (!rawBody) {
    return {};
  }

  return JSON.parse(rawBody);
};

const getMethod = (event) => event.httpMethod || event.requestContext?.http?.method || '';

const requireEnv = () => {
  const missing = REQUIRED_ENV_VARS.filter((name) => !process.env[name]);

  if (missing.length > 0) {
    throw new Error(`Missing required env vars: ${missing.join(', ')}`);
  }
};

const normalizeText = (value) => (typeof value === 'string' ? value.trim() : '');

const validatePayload = (payload) => {
  if (!payload || typeof payload !== 'object') {
    return 'Некорректное тело запроса.';
  }

  const name = normalizeText(payload.name);
  const phone = normalizeText(payload.phone);

  if (!name) {
    return 'Имя обязательно.';
  }

  if (!phone) {
    return 'Телефон обязателен.';
  }

  if (!RU_PHONE_REGEX.test(phone)) {
    return 'Телефон должен быть в формате +7 (999) 999-99-99.';
  }

  if (payload.consentToPrivacy !== true) {
    return 'Требуется согласие на обработку персональных данных.';
  }

  return null;
};

const createTransport = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

const buildMessageText = (payload) => {
  const message = normalizeText(payload.message) || 'Без дополнительного комментария';
  const pageUrl = normalizeText(payload.pageUrl);
  const submittedAt = normalizeText(payload.submittedAt);
  const source = normalizeText(payload.source);

  const lines = [
    `Имя: ${normalizeText(payload.name)}`,
    `Телефон: ${normalizeText(payload.phone)}`,
    `Сообщение: ${message}`,
  ];

  if (pageUrl) {
    lines.push(`Страница: ${pageUrl}`);
  }

  if (source) {
    lines.push(`Источник: ${source}`);
  }

  if (submittedAt) {
    lines.push(`Отправлено: ${submittedAt}`);
  }

  return lines.join('\n');
};

exports.handler = async (event) => {
  const method = getMethod(event);
  const origin = event.headers?.origin || event.headers?.Origin || '';
  const corsHeaders = getCorsHeaders(origin);

  if (method === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: corsHeaders,
      body: '',
    };
  }

  if (method !== 'POST') {
    return json(405, { ok: false, error: 'Method not allowed' }, corsHeaders);
  }

  let payload;
  try {
    payload = getPayload(event);
  } catch {
    return json(400, { ok: false, error: 'Некорректный JSON.' }, corsHeaders);
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return json(400, { ok: false, error: validationError }, corsHeaders);
  }

  try {
    requireEnv();

    const transporter = createTransport();
    const messageText = buildMessageText(payload);

    await transporter.sendMail({
      from: `"${process.env.FORM_FROM_NAME || 'Энергомера34'}" <${
        process.env.FORM_FROM_EMAIL || process.env.SMTP_USER
      }>`,
      to: process.env.FORM_TO_EMAIL,
      subject: process.env.FORM_SUBJECT || 'Новая заявка с сайта Энергомера34',
      text: messageText,
    });

    return json(200, { ok: true, message: 'Заявка отправлена.' }, corsHeaders);
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return json(500, { ok: false, error: 'Не удалось отправить заявку.' }, corsHeaders);
  }
};
