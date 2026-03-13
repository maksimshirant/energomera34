import React from 'react';
import { Phone } from 'lucide-react';
import YandexMapEmbed from '@/components/YandexMapEmbed';
import { PLACEHOLDERS } from '@/lib/placeholders';

const HOME_CONTACT_TEXT = {
  title: 'Наши контакты и режим работы',
  contactsTitle: 'Контакты',
  consultation: 'Бесплатная консультация',
  emailLabel: 'Отправить вопрос на почту',
  addressLabel: 'Адрес компании',
  scheduleLabel: 'График работы',
  scheduleValue: 'Пн-Пт с 08:00 до 17:00',
  teamContacts: [
    {
      name: PLACEHOLDERS.contactPerson,
      role: PLACEHOLDERS.contactRole,
      phone: `${PLACEHOLDERS.phoneDisplay} ${PLACEHOLDERS.phoneExtension}`,
      phoneLink: PLACEHOLDERS.phoneLink,
    },
    {
      name: 'Бухгалтерия',
      role: 'Финансовые документы и расчёты',
      phone: '+7 (900) 000-00-00 доб. 200',
      phoneLink: '+79000000000',
    },
  ],
};

export const HomeContactSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="section-shell">
        <h2 className="mb-12 text-center text-3xl font-semibold text-foreground md:text-4xl">
          {HOME_CONTACT_TEXT.title}
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6">
            {HOME_CONTACT_TEXT.teamContacts.map((contact) => (
              <div
                key={contact.name}
                className="rounded-3xl border border-border/70 bg-secondary/35 p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.18)]"
              >
                <h3 className="text-center text-xl font-semibold text-foreground">{contact.name}</h3>
                <p className="mb-5 text-center text-muted-foreground">{contact.role}</p>
                <div className="mb-3 flex items-center justify-center gap-2 text-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={`tel:${contact.phoneLink}`} className="hover:text-primary">
                    {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border/70 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.18)] md:grid-cols-2">
              <div className="bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(34,211,238,0.72))] p-8 text-white">
                <h3 className="mb-6 text-2xl font-semibold">{HOME_CONTACT_TEXT.contactsTitle}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-white/70">{HOME_CONTACT_TEXT.consultation}</p>
                    <a href={`tel:${PLACEHOLDERS.phoneLink}`} className="text-xl font-semibold hover:text-white/80">
                      {PLACEHOLDERS.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">{HOME_CONTACT_TEXT.emailLabel}</p>
                    <a href={`mailto:${PLACEHOLDERS.email}`} className="text-lg hover:text-white/80">
                      {PLACEHOLDERS.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">{HOME_CONTACT_TEXT.addressLabel}</p>
                    <p className="text-lg">{PLACEHOLDERS.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">{HOME_CONTACT_TEXT.scheduleLabel}</p>
                    <p className="text-lg">{HOME_CONTACT_TEXT.scheduleValue}</p>
                  </div>
                </div>
              </div>
              <YandexMapEmbed className="h-80 md:h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;
