# Energomera34

Сайт компании `Энергомера34` на `React + Vite`.

## Переменные окружения

Фронтенд использует переменные из `.env` на этапе сборки:

```env
VITE_CONTACT_FORM_ENDPOINT=https://<your-yandex-cloud-endpoint>
```

Для локальной разработки создайте `.env` на основе `.env.example`.

## 1. Переход на Timeweb

Проект переведён на обычные URL через `BrowserRouter`, поэтому для production нужен SPA fallback.

Что уже подготовлено в репозитории:

- `public/.htaccess` для rewrite всех маршрутов на `index.html`;
- `vite.config.ts` с `base: '/'`;
- роутинг без `#` в адресах.

Как выкладывать на `Timeweb`:

1. Установить зависимости:

   ```bash
   npm install
   ```

2. Собрать проект:

   ```bash
   npm run build
   ```

3. Загрузить содержимое папки `dist/` в корень сайта на `Timeweb`.

4. Убедиться, что файл `.htaccess` попал в корень сайта вместе со сборкой.

5. В панели `Timeweb` привязать домен к каталогу со сборкой.

Если сайт будет размещаться не на Apache-хостинге `Timeweb`, а на отдельном `Nginx`-окружении, потребуется аналогичное правило rewrite на стороне сервера.

## 2. Переход формы на Yandex Cloud

Фронтенд больше не использует сторонние form-сервисы и ожидает HTTP endpoint вашей `Yandex Cloud Function`.

Шаблон функции лежит в:

`cloud-functions/contact-form`

Функция принимает JSON, валидирует поля формы и отправляет письмо через SMTP.

### Деплой функции

1. Перейдите в папку функции:

   ```bash
   cd cloud-functions/contact-form
   ```

2. Установите зависимости:

   ```bash
   npm install --omit=dev
   ```

3. Создайте функцию в `Yandex Cloud` с runtime `Node.js`.

4. Загрузите содержимое папки `cloud-functions/contact-form`.

5. Укажите entrypoint:

   ```text
   index.handler
   ```

6. Добавьте переменные окружения функции:

   ```env
   SMTP_HOST=
   SMTP_PORT=
   SMTP_USER=
   SMTP_PASSWORD=
   FORM_TO_EMAIL=
   SMTP_SECURE=false
   FORM_FROM_EMAIL=
   FORM_FROM_NAME=Энергомера34
   FORM_SUBJECT=Новая заявка с сайта Энергомера34
   ALLOWED_ORIGINS=https://your-domain.ru,https://www.your-domain.ru
   ```

7. После публикации функции укажите её URL во фронтенде:

   ```env
   VITE_CONTACT_FORM_ENDPOINT=https://<your-yandex-cloud-endpoint>
   ```
