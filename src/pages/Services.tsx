import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { buildBreadcrumbSchema, buildServiceListSchema } from '@/lib/seo';
import { services } from '@/lib/services';
import ServicesCatalogSection from '@/sections/services/ServicesCatalogSection';

interface ServicesProps {
  onOpenModal: () => void;
}

const SERVICES_PAGE_TEXT = {
  home: 'Главная',
  title: 'Услуги',
};

export const Services: React.FC<ServicesProps> = ({ onOpenModal }) => {
  return (
    <main className="page-shell">
      <Seo
        title="Услуги — поверка, ремонт приборов учета и АСКУРДЭ"
        description="Услуги Энергомера34: поверка средств измерений, ремонт приборов учета с демонтажом и монтажом, дистанционный мониторинг показаний через АСКУРДЭ."
        path="/services"
        keywords={[
          'услуги Энергомера34',
          'поверка приборов учета',
          'ремонт средств измерений',
          'АСКУРДЭ Волжский',
        ]}
        structuredData={[
          buildServiceListSchema(services),
          buildBreadcrumbSchema([
            { name: 'Главная', path: '/' },
            { name: 'Услуги', path: '/services' },
          ]),
        ]}
      />
      <div className="page-breadcrumb">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="page-breadcrumb-link">{SERVICES_PAGE_TEXT.home}</Link>
          <span className="page-breadcrumb-separator">/</span>
          <span className="page-breadcrumb-separator">{SERVICES_PAGE_TEXT.title}</span>
        </div>
      </div>
      <ServicesCatalogSection onOpenModal={onOpenModal} />
    </main>
  );
};

export default Services;
