import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/services';

interface ServicesCatalogSectionProps {
  onOpenModal: () => void;
}

const SERVICES_CATALOG_TEXT = {
  title: 'Услуги',
  details: 'Подробнее',
  request: 'Оставить заявку',
};

export const ServicesCatalogSection: React.FC<ServicesCatalogSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="page-section">
      <h1 className="page-title mb-12">{SERVICES_CATALOG_TEXT.title}</h1>
      <div className="space-y-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`content-card flex flex-col items-center gap-8 overflow-hidden ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          >
            <div className="flex-1 p-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground md:text-2xl">{service.title}</h3>
              <p className="mb-6 whitespace-pre-line text-muted-foreground">{service.description}</p>
              <div className="flex flex-wrap gap-3">
                <Link to={`/services/${service.slug}`}>
                  <Button className="rounded-xl">{SERVICES_CATALOG_TEXT.details}</Button>
                </Link>
                <Button onClick={onOpenModal} variant="outline" className="rounded-xl">
                  {SERVICES_CATALOG_TEXT.request}
                </Button>
              </div>
            </div>

            <div className="relative h-64 w-full flex-1 lg:h-80">
              <div className={`absolute top-0 z-10 h-full w-24 ${index % 2 === 0 ? 'left-0' : 'right-0'}`}>
                <svg viewBox="0 0 100 300" className="h-full w-full" preserveAspectRatio="none">
                  <path
                    d={index % 2 === 0 ? 'M100 0 Q50 50 75 150 Q100 250 50 300 L0 300 L0 0 Z' : 'M0 0 Q50 50 25 150 Q0 250 50 300 L100 300 L100 0 Z'}
                    fill="rgba(34, 211, 238, 0.75)"
                  />
                </svg>
              </div>
              <img
                src={service.image}
                alt={service.title}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCatalogSection;
