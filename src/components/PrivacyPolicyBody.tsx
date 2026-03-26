import React from 'react';
import { COMPANY_REGISTRATION, PRIVACY_POLICY_TEXT } from '@/lib/privacyPolicy';

interface PrivacyPolicyBodyProps {
  compact?: boolean;
}

export const PrivacyPolicyBody: React.FC<PrivacyPolicyBodyProps> = ({ compact = false }) => {
  const sectionGap = compact ? 'space-y-5 sm:space-y-6' : 'space-y-6 sm:space-y-8';
  const textClass = 'break-words text-[13px] leading-6 text-muted-foreground sm:text-sm sm:leading-7 md:text-[15px]';
  const listClass = 'space-y-1.5 break-words text-[13px] leading-6 text-muted-foreground sm:space-y-2 sm:text-sm sm:leading-7 md:text-[15px]';

  return (
    <div className={sectionGap}>
      <div className="space-y-2.5 sm:space-y-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-sm sm:tracking-[0.22em]">
          Актуально на {PRIVACY_POLICY_TEXT.updatedAt}
        </p>
        <p className={textClass}>
          Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального
          закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и
          меры по обеспечению безопасности персональных данных, предпринимаемые {PRIVACY_POLICY_TEXT.operatorName}
          {' '}(далее — Оператор).
        </p>
      </div>

      <div className={sectionGap}>
        <section className="space-y-2.5 sm:space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">1. Общие положения</h2>
          <p className={textClass}>
            1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и
            свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на
            неприкосновенность частной жизни, личную и семейную тайну.
          </p>
          <p className={textClass}>
            1.2. Настоящая политика Оператора в отношении обработки персональных данных применяется ко всей информации,
            которую Оператор может получить о посетителях веб-сайта {PRIVACY_POLICY_TEXT.website}.
          </p>
          <p className={textClass}>
            1.3. Реквизиты Оператора: {PRIVACY_POLICY_TEXT.operatorName}, ИНН {COMPANY_REGISTRATION.inn}, КПП{' '}
            {COMPANY_REGISTRATION.kpp}, ОГРН {COMPANY_REGISTRATION.ogrn}.
          </p>
          <p className={textClass}>
            1.4. Оператор осуществляет деятельность по адресу: {PRIVACY_POLICY_TEXT.address}. Контактный адрес
            электронной почты: {PRIVACY_POLICY_TEXT.email}, телефон: {PRIVACY_POLICY_TEXT.phone}.
          </p>
        </section>

        <section className="space-y-2.5 sm:space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">2. Основные понятия, используемые в Политике</h2>
          <ol className={listClass}>
            {PRIVACY_POLICY_TEXT.definitions.map((item, index) => (
              <li key={item}>
                2.{index + 1}. {item}
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-2.5 sm:space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">3. Основные права и обязанности Оператора</h2>
          <p className={textClass}>3.1. Оператор имеет право:</p>
          <ul className={listClass}>
            {PRIVACY_POLICY_TEXT.operatorRights.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
          <p className={textClass}>3.2. Оператор обязан:</p>
          <ul className={listClass}>
            {PRIVACY_POLICY_TEXT.operatorDuties.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2.5 sm:space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">4. Основные права и обязанности субъектов персональных данных</h2>
          <p className={textClass}>4.1. Субъекты персональных данных имеют право:</p>
          <ul className={listClass}>
            {PRIVACY_POLICY_TEXT.subjectRights.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
          <p className={textClass}>4.2. Субъекты персональных данных обязаны:</p>
          <ul className={listClass}>
            {PRIVACY_POLICY_TEXT.subjectDuties.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
          <p className={textClass}>
            4.3. Лица, передавшие Оператору недостоверные сведения о себе либо сведения о другом субъекте персональных
            данных без согласия последнего, несут ответственность в соответствии с законодательством Российской
            Федерации.
          </p>
        </section>

        <section className="space-y-2.5 sm:space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">5. Принципы обработки персональных данных</h2>
          <ol className={listClass}>
            {PRIVACY_POLICY_TEXT.principles.map((item, index) => (
              <li key={item}>
                5.{index + 1}. {item}
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-2.5 sm:space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">6. Цели обработки персональных данных</h2>
          <div className="overflow-hidden rounded-2xl border border-border/70">
            <table className="hidden w-full border-collapse text-left text-sm leading-7 text-muted-foreground md:table md:text-[15px]">
              <tbody>
                <tr className="border-b border-border/70">
                  <th className="w-44 bg-secondary/35 px-4 py-3 font-semibold text-foreground">Цель обработки</th>
                  <td className="px-4 py-3">
                    обработка входящих обращений, заявок и запросов Пользователя, обратная связь, консультирование,
                    подготовка предложений по услугам Оператора
                  </td>
                </tr>
                <tr className="border-b border-border/70">
                  <th className="bg-secondary/35 px-4 py-3 font-semibold text-foreground">Персональные данные</th>
                  <td className="px-4 py-3">фамилия, имя, отчество; номер телефона; адрес электронной почты; текст обращения или заявки</td>
                </tr>
                <tr className="border-b border-border/70">
                  <th className="bg-secondary/35 px-4 py-3 font-semibold text-foreground">Правовые основания</th>
                  <td className="px-4 py-3">
                    Федеральный закон от 27.07.2006 № 152-ФЗ «О персональных данных», согласие субъекта персональных
                    данных, действия по заключению и исполнению договора
                  </td>
                </tr>
                <tr>
                  <th className="bg-secondary/35 px-4 py-3 font-semibold text-foreground">Виды обработки</th>
                  <td className="px-4 py-3">
                    сбор, запись, систематизация, накопление, хранение, уточнение, использование, удаление,
                    уничтожение персональных данных
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="divide-y divide-border/70 md:hidden">
              <div className="space-y-1 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">Цель обработки</p>
                <p className={textClass}>
                  обработка входящих обращений, заявок и запросов Пользователя, обратная связь, консультирование,
                  подготовка предложений по услугам Оператора
                </p>
              </div>
              <div className="space-y-1 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">Персональные данные</p>
                <p className={textClass}>фамилия, имя, отчество; номер телефона; адрес электронной почты; текст обращения или заявки</p>
              </div>
              <div className="space-y-1 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">Правовые основания</p>
                <p className={textClass}>
                  Федеральный закон от 27.07.2006 № 152-ФЗ «О персональных данных», согласие субъекта персональных
                  данных, действия по заключению и исполнению договора
                </p>
              </div>
              <div className="space-y-1 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">Виды обработки</p>
                <p className={textClass}>
                  сбор, запись, систематизация, накопление, хранение, уточнение, использование, удаление,
                  уничтожение персональных данных
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-2.5 sm:space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">7. Условия обработки персональных данных</h2>
          <ol className={listClass}>
            {PRIVACY_POLICY_TEXT.processingConditions.map((item, index) => (
              <li key={item}>
                7.{index + 1}. {item}
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-2.5 sm:space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">8. Порядок сбора, хранения, передачи и других видов обработки персональных данных</h2>
          <p className={textClass}>
            8.1. Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации
            правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований
            действующего законодательства Российской Федерации в области защиты персональных данных.
          </p>
          <p className={textClass}>
            8.2. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие
            доступ к персональным данным неуполномоченных лиц.
          </p>
          <p className={textClass}>
            8.3. Персональные данные Пользователя не передаются третьим лицам, за исключением случаев, связанных с
            исполнением действующего законодательства Российской Федерации либо когда такая передача необходима для
            исполнения обращения, запроса или договора при наличии законных оснований.
          </p>
          <p className={textClass}>
            8.4. В случае выявления неточностей в персональных данных Пользователь может актуализировать их
            самостоятельно, направив Оператору уведомление на электронный адрес {PRIVACY_POLICY_TEXT.email} с пометкой
            «Актуализация персональных данных».
          </p>
          <p className={textClass}>
            8.5. Срок обработки персональных данных определяется достижением целей, для которых были собраны
            персональные данные, если иной срок не предусмотрен договором или действующим законодательством Российской
            Федерации.
          </p>
          <p className={textClass}>
            8.6. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив
            Оператору уведомление посредством электронной почты на адрес {PRIVACY_POLICY_TEXT.email} с пометкой «Отзыв
            согласия на обработку персональных данных».
          </p>
          <p className={textClass}>
            8.7. Оператор при обработке персональных данных обеспечивает конфиденциальность персональных данных.
          </p>
          <p className={textClass}>
            8.8. Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта
            персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения не
            установлен федеральным законом, договором или иным обязательным основанием.
          </p>
          <p className={textClass}>
            8.9. Условием прекращения обработки персональных данных может являться достижение целей обработки,
            истечение срока действия согласия, отзыв согласия субъектом персональных данных или выявление неправомерной
            обработки персональных данных.
          </p>
        </section>

        <section className="space-y-2.5 sm:space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">9. Перечень действий, производимых Оператором с полученными персональными данными</h2>
          <p className={textClass}>9.1. Оператор осуществляет следующие действия с персональными данными:</p>
          <ul className={listClass}>
            {PRIVACY_POLICY_TEXT.processingActions.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
          <p className={textClass}>
            9.2. Оператор осуществляет автоматизированную обработку персональных данных с получением и передачей
            информации по информационно-телекоммуникационным сетям или без таковой.
          </p>
        </section>

        <section className="space-y-2.5 sm:space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">10. Трансграничная передача персональных данных</h2>
          <p className={textClass}>
            10.1. Оператор до начала осуществления деятельности по трансграничной передаче персональных данных обязан
            уведомить уполномоченный орган по защите прав субъектов персональных данных о своем намерении осуществлять
            трансграничную передачу персональных данных в случаях, предусмотренных законодательством Российской
            Федерации.
          </p>
          <p className={textClass}>
            10.2. На момент публикации настоящей Политики Оператор не осуществляет трансграничную передачу персональных
            данных.
          </p>
        </section>

        <section className="space-y-2.5 sm:space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">11. Конфиденциальность персональных данных</h2>
          <p className={textClass}>
            11.1. Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и
            не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено
            федеральным законом.
          </p>
        </section>

        <section className="space-y-2.5 sm:space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">12. Заключительные положения</h2>
          <p className={textClass}>
            12.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его
            персональных данных, обратившись к Оператору по электронной почте {PRIVACY_POLICY_TEXT.email}.
          </p>
          <p className={textClass}>
            12.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором.
            Политика действует бессрочно до замены ее новой версией.
          </p>
          <p className={textClass}>
            12.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу{' '}
            {PRIVACY_POLICY_TEXT.privacyUrl}.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyBody;
