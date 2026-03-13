import React from 'react';
import YandexMapEmbed from '@/components/YandexMapEmbed';
import { PLACEHOLDERS } from '@/lib/placeholders';

const CONTACTS_INFO_TEXT = {
  title: 'Контакты и реквизиты',
  consultation: 'Номер офиса',
  email: 'Электронная почта',
  address: 'Адрес компании',
  schedule: 'График работы',
  scheduleValue: 'Пн-Пт с 08:00 до 17:00',
  requisites: 'Реквизиты компании',
  company: 'Компания',
  innKpp: 'ИНН/КПП',
  checking: 'р/с',
  correspondent: 'к/с',
  bik: 'БИК',
  ogrn: 'ОГРН',
  okved: 'ОКВЭД',
};

export const ContactsInfoSection: React.FC = () => {
  return (
    <section className="page-section">
      <h1 className="page-title mb-8">{CONTACTS_INFO_TEXT.title}</h1>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(34,211,238,0.72))] p-5 text-white shadow-[0_20px_50px_-35px_rgba(15,23,42,0.18)]">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            {CONTACTS_INFO_TEXT.consultation}
          </p>
          <a href={`tel:${PLACEHOLDERS.phoneLink}`} className="text-lg font-semibold text-white hover:text-white/80">
            {PLACEHOLDERS.phoneDisplay}
          </a>
        </div>
        <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(34,211,238,0.72))] p-5 text-white shadow-[0_20px_50px_-35px_rgba(15,23,42,0.18)]">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            {CONTACTS_INFO_TEXT.email}
          </p>
          <a href={`mailto:${PLACEHOLDERS.email}`} className="text-base font-medium text-white hover:text-white/80">
            {PLACEHOLDERS.email}
          </a>
        </div>
        <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(34,211,238,0.72))] p-5 text-white shadow-[0_20px_50px_-35px_rgba(15,23,42,0.18)]">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            {CONTACTS_INFO_TEXT.address}
          </p>
          <p className="text-base font-medium text-white">{PLACEHOLDERS.address}</p>
        </div>
        <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(34,211,238,0.72))] p-5 text-white shadow-[0_20px_50px_-35px_rgba(15,23,42,0.18)]">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            {CONTACTS_INFO_TEXT.schedule}
          </p>
          <p className="text-base font-medium text-white">{CONTACTS_INFO_TEXT.scheduleValue}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <YandexMapEmbed className="content-card min-h-[420px]" />

        <div className="content-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">{CONTACTS_INFO_TEXT.requisites}</h3>
          <p className="mb-5 text-sm text-muted-foreground">{PLACEHOLDERS.bankName}</p>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-3">
              <span className="text-sm text-muted-foreground">{CONTACTS_INFO_TEXT.company}</span>
              <span className="text-right font-medium text-foreground">{PLACEHOLDERS.companyName}</span>
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-3">
              <span className="text-sm text-muted-foreground">{CONTACTS_INFO_TEXT.innKpp}</span>
              <span className="text-right font-medium text-foreground">{PLACEHOLDERS.innKpp}</span>
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-3">
              <span className="text-sm text-muted-foreground">{CONTACTS_INFO_TEXT.checking}</span>
              <span className="text-right font-medium text-foreground">{PLACEHOLDERS.checkingAccount}</span>
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-3">
              <span className="text-sm text-muted-foreground">{CONTACTS_INFO_TEXT.correspondent}</span>
              <span className="text-right font-medium text-foreground">{PLACEHOLDERS.correspondentAccount}</span>
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-3">
              <span className="text-sm text-muted-foreground">{CONTACTS_INFO_TEXT.bik}</span>
              <span className="text-right font-medium text-foreground">{PLACEHOLDERS.bik}</span>
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-3">
              <span className="text-sm text-muted-foreground">{CONTACTS_INFO_TEXT.ogrn}</span>
              <span className="text-right font-medium text-foreground">{PLACEHOLDERS.ogrn}</span>
            </div>
            <div className="flex items-start justify-between gap-4">
              <span className="text-sm text-muted-foreground">{CONTACTS_INFO_TEXT.okved}</span>
              <span className="text-right font-medium text-foreground">{PLACEHOLDERS.okved}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsInfoSection;
