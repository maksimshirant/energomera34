const CONTACT_FORM_ENDPOINT_ENV = 'VITE_CONTACT_FORM_ENDPOINT';

const resolveEndpoint = () => import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim();

export type ContactFormPayload = {
  name: string;
  phone: string;
  message: string;
  consentToPrivacy: boolean;
  pageUrl: string;
  submittedAt: string;
  source: string;
};

type SendFormResult = {
  ok: boolean;
  response?: Response;
  data?: Record<string, unknown>;
  error?: string;
  message?: string;
};

export const sendForm = async (payload: ContactFormPayload): Promise<SendFormResult> => {
  const endpoint = resolveEndpoint();

  if (!endpoint) {
    return {
      ok: false,
      error: 'missing_endpoint',
      message: `${CONTACT_FORM_ENDPOINT_ENV} не найден в .env (перезапустите dev-сервер)`,
    };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let data: Record<string, unknown> = {};
  try {
    data = (await response.json()) as Record<string, unknown>;
  } catch {
    data = {};
  }

  const success = response.ok && (data.success === true || data.ok === true);

  return {
    ok: success,
    response,
    data,
    error: success
      ? undefined
      : ((data?.message as string | undefined) ??
          (data?.error as string | undefined) ??
          `HTTP ${response.status}`),
  };
};
