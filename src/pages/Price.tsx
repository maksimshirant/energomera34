import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { buildBreadcrumbSchema } from '@/lib/seo';
import PriceContentSection from '@/sections/price/PriceContentSection';

interface PriceProps {
  onOpenModal: () => void;
}

const PRICE_PAGE_TEXT = {
  home: 'Главная',
  title: 'Прайс',
};

export const Price: React.FC<PriceProps> = () => {
  return (
    <main className="page-shell">
      <Seo
        title="Прайс на поверку и обслуживание приборов учета"
        description="Прайс Энергомера34 на поверку средств измерений, обслуживание узлов учета и сопутствующие услуги в Волжском."
        path="/price"
        keywords={[
          'прайс поверка Волжский',
          'стоимость поверки приборов учета',
          'Энергомера34 прайс',
        ]}
        structuredData={buildBreadcrumbSchema([
          { name: 'Главная', path: '/' },
          { name: 'Прайс', path: '/price' },
        ])}
      />
      <div className="page-breadcrumb">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="page-breadcrumb-link">{PRICE_PAGE_TEXT.home}</Link>
          <span className="page-breadcrumb-separator">/</span>
          <span className="page-breadcrumb-separator">{PRICE_PAGE_TEXT.title}</span>
        </div>
      </div>
      <PriceContentSection />
    </main>
  );
};

export default Price;
