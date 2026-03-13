import React from 'react';

const PRIVACY_CONTENT_TEXT = {
  title: 'Политика обработки персональных данных',
  placeholder: 'Тут будет политика конфиденциальности',
};

export const PrivacyContentSection: React.FC = () => {
  return (
    <section className="section-shell py-8">
      <h1 className="page-title mb-8">{PRIVACY_CONTENT_TEXT.title}</h1>
      <div className="content-card p-8">
        <p className="text-base leading-7 text-muted-foreground">{PRIVACY_CONTENT_TEXT.placeholder}</p>
      </div>
    </section>
  );
};

export default PrivacyContentSection;
