import React from 'react';
import { ABOUT_CLIENTS, ABOUT_CLIENTS_TEXT } from '@/content/about';

export const AboutClientsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="section-shell">
        <div className="rounded-3xl border border-border/70 bg-white p-8 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.12)] md:p-10">
          <h2 className="mb-12 text-center text-3xl font-semibold text-foreground">{ABOUT_CLIENTS_TEXT.title}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {ABOUT_CLIENTS.map((client) => (
              <div
                key={client.id}
                className="flex h-32 items-center justify-center p-6"
              >
                <img
                  src={client.image}
                  alt={`Партнёр ${client.id}`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClientsSection;
