import React from 'react';
import YandexMapEmbed from '@/components/YandexMapEmbed';
import { PLACEHOLDERS } from '@/lib/placeholders';

const HOME_CONTACT_TEXT = {
  title: 'Наши контакты и режим работы',
  contactsTitle: 'Контакты',
  consultation: 'Бесплатная консультация',
  consultationRole: 'Главный инженер метролог',
  consultationName: 'Жугин Сергей Геннадьевич',
  emailLabel: 'Отправить вопрос на почту',
  addressLabel: 'Адрес компании',
  scheduleLabel: 'График работы',
  scheduleValue: 'Пн-Пт с 08:00 до 17:00, Выходные дни: суббота, воскресенье',
};

export const HomeContactSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="section-shell">
        <h2 className="mb-8 text-3xl font-semibold text-foreground md:text-4xl">
          {HOME_CONTACT_TEXT.title}
        </h2>

        <div className="content-card-white overflow-hidden">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="border-b border-border/70 p-6 md:p-7 xl:border-b-0 xl:border-r">
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                {HOME_CONTACT_TEXT.contactsTitle}
              </h3>

              <dl className="mt-5 divide-y divide-border/60 border-t border-border/60">
                <div className="grid gap-2 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {HOME_CONTACT_TEXT.consultation}
                  </dt>
                  <dd className="text-sm font-medium leading-6 text-foreground">
                    <p>{HOME_CONTACT_TEXT.consultationRole}</p>
                    <p>{HOME_CONTACT_TEXT.consultationName}</p>
                    <a href={`tel:${PLACEHOLDERS.phoneLink}`} className="mt-1 inline-block hover:text-primary">
                      {PLACEHOLDERS.phoneDisplay}
                    </a>
                  </dd>
                </div>

                <div className="grid gap-2 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {HOME_CONTACT_TEXT.emailLabel}
                  </dt>
                  <dd className="text-sm font-medium leading-6 text-foreground">
                    <a href={`mailto:${PLACEHOLDERS.email}`} className="hover:text-primary">
                      {PLACEHOLDERS.email}
                    </a>
                  </dd>
                </div>

                <div className="grid gap-2 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {HOME_CONTACT_TEXT.addressLabel}
                  </dt>
                  <dd className="text-sm font-medium leading-6 text-foreground">
                    {PLACEHOLDERS.address}
                  </dd>
                </div>

                <div className="grid gap-2 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {HOME_CONTACT_TEXT.scheduleLabel}
                  </dt>
                  <dd className="text-sm font-medium leading-6 text-foreground">
                    {HOME_CONTACT_TEXT.scheduleValue}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="min-h-[340px] bg-white xl:min-h-[380px] xl:border-l">
              <YandexMapEmbed className="h-full min-h-[340px] rounded-none bg-transparent xl:min-h-[380px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;
