import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '@/components/Seo';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/lib/seo';
import ServiceDetailSection from '@/sections/services/ServiceDetailSection';
import { getServiceBySlug } from '@/lib/services';

interface ServiceDetailProps {
  onOpenModal: () => void;
}

const SERVICE_DETAIL_PAGE_TEXT = {
  home: 'Главная',
  services: 'Услуги',
};

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ onOpenModal }) => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main className="page-shell">
      <Seo
        title={`${service.title} в Волжском`}
        description={service.description}
        path={`/services/${service.slug}`}
        keywords={[
          service.title,
          'Энергомера34',
          'поверка Волжский',
          'приборы учета',
          'средства измерений',
        ]}
        structuredData={[
          buildServiceSchema(service),
          buildBreadcrumbSchema([
            { name: 'Главная', path: '/' },
            { name: 'Услуги', path: '/services' },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <div className="page-breadcrumb">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="page-breadcrumb-link">{SERVICE_DETAIL_PAGE_TEXT.home}</Link>
          <span className="page-breadcrumb-separator">/</span>
          <Link to="/services" className="page-breadcrumb-link">{SERVICE_DETAIL_PAGE_TEXT.services}</Link>
          <span className="page-breadcrumb-separator">/</span>
          <span className="page-breadcrumb-separator">{service.title}</span>
        </div>
      </div>
      <ServiceDetailSection service={service} onOpenModal={onOpenModal} />
    </main>
  );
};

export default ServiceDetail;
