import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/services';

const HOME_SERVICES_TEXT = {
  title: 'Комплекс услуг',
  cta: 'Подробнее',
};

export const HomeServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="section-shell">
        <h2 className="mb-12 text-center text-3xl font-semibold text-foreground md:text-4xl">
          {HOME_SERVICES_TEXT.title}
        </h2>
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col items-center gap-8 overflow-hidden rounded-3xl border border-border/70 bg-secondary/30 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.18)] ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="flex-1 p-8">
                <h3 className="mb-4 text-xl font-semibold text-foreground md:text-2xl">{service.title}</h3>
                <p className="mb-6 whitespace-pre-line text-muted-foreground">{service.description}</p>
                <Link to={`/services/${service.slug}`}>
                  <Button className="rounded-xl">{HOME_SERVICES_TEXT.cta}</Button>
                </Link>
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
      </div>
    </section>
  );
};

export default HomeServicesSection;
