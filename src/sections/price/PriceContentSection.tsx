import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type PriceItem = {
  name: string;
  price: string;
};

const PRICE_CONTENT_TEXT = {
  title: 'Прайс',
  verificationTab: 'Поверка СИ',
  repairTab: 'Ремонт оборудования',
  tableName: 'Наименование',
  tablePrice: 'Цена, ₽ (без НДС)',
  verificationSections: [
    {
      title: 'Поверка электромагнитных, ультразвуковых и вихреакустических расходомеров (ПРЭМ, МастерФлоу, ЭРСВ, и др.):',
      items: [
        { name: 'Ду 20', price: '2 950' },
        { name: 'Ду 25', price: '2 950' },
        { name: 'Ду 32', price: '3 150' },
        { name: 'Ду 40', price: '3 300' },
        { name: 'Ду 50', price: '3 450' },
        { name: 'Ду 65', price: '3 500' },
        { name: 'Ду 80', price: '3 700' },
        { name: 'Ду 100', price: '3 850' },
      ],
    },
    {
      title: 'Поверка беспроливным методом:',
      items: [
        { name: 'ВЭПС', price: '3 000' },
        { name: 'Метран-300ПР', price: '2 500' },
        { name: 'ИПРЭ Ду 20-50', price: '3 700' },
      ],
    },
    {
      title: 'Поверка механических расходомеров:',
      items: [
        { name: 'Ду 15', price: '300' },
        { name: 'Ду 20', price: '500' },
        { name: 'Ду 25', price: '1 800' },
        { name: 'Ду 32', price: '2 100' },
        { name: 'Ду 40', price: '2 200' },
        { name: 'Ду 50', price: '2 300' },
        { name: 'Ду 65', price: '2 450' },
        { name: 'Ду 80', price: '3 600' },
        { name: 'Ду 100', price: '2 100' },
      ],
    },
    {
      title: 'Поверка комплектных теплосчётчиков:',
      items: [
        { name: 'ТС-07 однотрубный', price: '8 500' },
        { name: 'ТС-07 двухтрубный', price: '12 800' },
        { name: 'Эльф', price: '8 500' },
      ],
    },
    {
      title: 'Поверка тепловычислителей:',
      items: [
        { name: 'Карат', price: '2 940' },
        { name: 'Эльф', price: '2 640' },
        { name: 'ТЭКОН-17 + за кажд. МКТ,МЧВ, МГТ', price: '2 650 + 400' },
        { name: 'ТЭКОН-19', price: '1 640' },
        { name: 'СПТ-941 (2,3)', price: '2 650' },
      ],
    },
  ],
  repairSection: {
    title: 'Ремонт оборудования:',
    items: [
      { name: 'СПТ (941, 942, 943, 961), СПГ и др.', price: 'от 1500' },
      { name: 'КАРАТ 2000, 2001, 2001-01 и др.', price: 'от 1500' },
      { name: 'ТМК Н-130', price: 'от 1800' },
      { name: 'Вычислитель Эльф', price: 'от 1000' },
      { name: 'ТЭКОН-19', price: 'от 1000' },
      { name: 'ТЭКОН-17', price: 'от 1800' },
      { name: 'Адаптеры А98, АМ70, АЕ67, АИ88 и др.', price: 'от 600' },
      { name: 'Блок питания БП-63 и БП других производителей', price: 'от 500' },
      { name: 'Метран 300ПР, Метрин 305, Метран 320', price: 'от 1500' },
      { name: 'Метран 55 ДИ, Метран 22 ДИ, Метран 43 ДИ', price: 'от 700' },
    ],
  },
};

const PriceTable = ({ items }: { items: PriceItem[] }) => (
  <div className="content-card overflow-hidden">
    <table className="w-full">
      <thead>
        <tr className="bg-secondary/70">
          <th className="p-4 text-left font-semibold text-foreground">{PRICE_CONTENT_TEXT.tableName}</th>
          <th className="p-4 text-right font-semibold text-foreground">{PRICE_CONTENT_TEXT.tablePrice}</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={`${item.name}-${index}`} className={index % 2 === 0 ? 'bg-white/70' : 'bg-secondary/20'}>
            <td className="p-4 text-foreground">{item.name}</td>
            <td className="p-4 text-right text-foreground">{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const PriceContentSection: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'verification' | 'repair'>('verification');

  useEffect(() => {
    if (location.hash === '#repair') {
      setActiveTab('repair');
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      setActiveTab('verification');
    }
  }, [location.hash]);

  return (
    <section className="page-section">
      <h1 className="page-title mb-8">{PRICE_CONTENT_TEXT.title}</h1>

      <div className="mb-8 flex gap-2">
        <button
          onClick={() => setActiveTab('verification')}
          className={`rounded-xl px-6 py-3 font-medium transition-colors ${activeTab === 'verification' ? 'bg-primary text-primary-foreground' : 'bg-secondary/60 text-foreground hover:bg-secondary'}`}
        >
          {PRICE_CONTENT_TEXT.verificationTab}
        </button>
        <button
          onClick={() => setActiveTab('repair')}
          className={`rounded-xl px-6 py-3 font-medium transition-colors ${activeTab === 'repair' ? 'bg-primary text-primary-foreground' : 'bg-secondary/60 text-foreground hover:bg-secondary'}`}
        >
          {PRICE_CONTENT_TEXT.repairTab}
        </button>
      </div>

      {activeTab === 'verification' ? (
        <div className="space-y-8">
          {PRICE_CONTENT_TEXT.verificationSections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 text-xl font-semibold text-foreground">{section.title}</h2>
              <PriceTable items={section.items} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="mb-4 text-xl font-semibold text-foreground">{PRICE_CONTENT_TEXT.repairSection.title}</h2>
          <PriceTable items={PRICE_CONTENT_TEXT.repairSection.items} />
        </div>
      )}
    </section>
  );
};

export default PriceContentSection;
