import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import YandexMapEmbed from '@/components/YandexMapEmbed';
import { PLACEHOLDERS } from '@/lib/placeholders';

const CONTACTS_INFO_TEXT = {
  title: 'Контакты и реквизиты',
  consultation: 'Номер офиса',
  email: 'Электронная почта',
  address: 'Адрес компании',
  schedule: 'График работы',
  scheduleValue: 'Пн-Пт с 08:30 до 17:00, обед с 12:30 до 13:00, выходные дни: суббота, воскресенье',
  requisites: 'Реквизиты компании',
  company: 'Компания',
  innKpp: 'ИНН/КПП',
  checking: 'р/с',
  correspondent: 'к/с',
  bik: 'БИК',
  ogrn: 'ОГРН',
  okved: 'ОКВЭД',
  okato: 'ОКАТО',
  okpo: 'ОКПО',
  director: 'Директор',
  partnerCard: 'Карта партнера',
  downloadPartnerCard: 'Скачать документ',
  contactsTab: 'Контакты',
  requisitesTab: 'Реквизиты',
};

export const ContactsInfoSection: React.FC = () => {
  const partnerCardHref = `${import.meta.env.BASE_URL}${encodeURIComponent('Карта парнера.doc')}`;
  const [activeTab, setActiveTab] = useState<'contacts' | 'requisites'>('contacts');

  const contactItems = [
    {
      key: 'phone',
      label: CONTACTS_INFO_TEXT.consultation,
      value: PLACEHOLDERS.phoneDisplay,
      href: `tel:${PLACEHOLDERS.phoneLink}`,
    },
    {
      key: 'email',
      label: CONTACTS_INFO_TEXT.email,
      value: PLACEHOLDERS.email,
      href: `mailto:${PLACEHOLDERS.email}`,
    },
    {
      key: 'address',
      label: CONTACTS_INFO_TEXT.address,
      value: PLACEHOLDERS.address,
    },
    {
      key: 'schedule',
      label: CONTACTS_INFO_TEXT.schedule,
      value: CONTACTS_INFO_TEXT.scheduleValue,
    },
  ];

  const requisites = [
    { label: CONTACTS_INFO_TEXT.company, value: PLACEHOLDERS.companyName },
    { label: CONTACTS_INFO_TEXT.innKpp, value: PLACEHOLDERS.innKpp },
    { label: CONTACTS_INFO_TEXT.checking, value: PLACEHOLDERS.checkingAccount },
    { label: CONTACTS_INFO_TEXT.correspondent, value: PLACEHOLDERS.correspondentAccount },
    { label: CONTACTS_INFO_TEXT.bik, value: PLACEHOLDERS.bik },
    { label: CONTACTS_INFO_TEXT.ogrn, value: PLACEHOLDERS.ogrn },
    { label: CONTACTS_INFO_TEXT.okved, value: PLACEHOLDERS.okved },
    { label: CONTACTS_INFO_TEXT.okato, value: PLACEHOLDERS.okato },
    { label: CONTACTS_INFO_TEXT.okpo, value: PLACEHOLDERS.okpo },
    { label: CONTACTS_INFO_TEXT.director, value: PLACEHOLDERS.director },
  ];

  return (
    <section className="page-section">
      <h1 className="page-title mb-8">{CONTACTS_INFO_TEXT.title}</h1>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('contacts')}
          aria-pressed={activeTab === 'contacts'}
          className={`rounded-xl px-5 py-3 text-sm font-medium transition-colors sm:px-6 sm:text-base ${activeTab === 'contacts' ? 'bg-primary text-primary-foreground' : 'bg-secondary/60 text-foreground hover:bg-secondary'}`}
        >
          {CONTACTS_INFO_TEXT.contactsTab}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('requisites')}
          aria-pressed={activeTab === 'requisites'}
          className={`rounded-xl px-5 py-3 text-sm font-medium transition-colors sm:px-6 sm:text-base ${activeTab === 'requisites' ? 'bg-primary text-primary-foreground' : 'bg-secondary/60 text-foreground hover:bg-secondary'}`}
        >
          {CONTACTS_INFO_TEXT.requisitesTab}
        </button>
      </div>

      <div className="content-card-white overflow-hidden">
        {activeTab === 'contacts' ? (
          <div className="p-6 md:p-7">
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">{CONTACTS_INFO_TEXT.contactsTab}</h2>
            <dl className="mt-5 grid gap-x-6 lg:grid-cols-2">
              {contactItems.map((item) => (
                <div key={item.key} className="border-b border-border/60 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-1 min-w-0 text-sm font-medium leading-6 text-foreground">
                    {item.href ? (
                      <a href={item.href} className="hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/70">
              <YandexMapEmbed className="min-h-[320px] rounded-none bg-transparent md:min-h-[380px] lg:min-h-[420px]" />
            </div>
          </div>
        ) : null}

        {activeTab === 'requisites' ? (
          <div className="p-6 md:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border/60 pb-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground md:text-2xl">{CONTACTS_INFO_TEXT.requisites}</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{PLACEHOLDERS.bankName}</p>
              </div>

              <Button asChild className="rounded-xl px-5">
                <a href={partnerCardHref} download="karta-partnera-energomera34.doc">
                  <Download className="h-4 w-4" />
                  {CONTACTS_INFO_TEXT.downloadPartnerCard}
                </a>
              </Button>
            </div>

            <dl className="mt-5 grid gap-x-6 lg:grid-cols-2">
              {requisites.map((item) => (
                <div key={item.label} className="border-b border-border/60 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-6 text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}

      </div>
    </section>
  );
};

export default ContactsInfoSection;
