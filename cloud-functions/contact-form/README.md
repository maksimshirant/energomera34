# Contact Form Function

Шаблон `Yandex Cloud Function` для сайта `Энергомера34`.

Функция:

- принимает `POST` с JSON;
- проверяет имя, телефон и согласие на обработку данных;
- отвечает с CORS-заголовками;
- отправляет письмо через SMTP.

## Runtime

- `Node.js`
- entrypoint: `index.handler`

## Переменные окружения

Обязательные:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `FORM_TO_EMAIL`

Опциональные:

- `SMTP_SECURE=true|false`
- `FORM_FROM_EMAIL`
- `FORM_FROM_NAME=Энергомера34`
- `FORM_SUBJECT=Новая заявка с сайта Энергомера34`
- `ALLOWED_ORIGINS=https://your-domain.ru,https://www.your-domain.ru`

## Ожидаемый payload

```json
{
  "name": "Иван",
  "phone": "+7 (999) 999-99-99",
  "message": "Нужна консультация по поверке счётчика",
  "consentToPrivacy": true,
  "pageUrl": "https://energomera34.ru/contacts",
  "submittedAt": "2026-04-15T10:00:00.000Z",
  "source": "contact-modal"
}
```
