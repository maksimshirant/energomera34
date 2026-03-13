import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { buildBreadcrumbSchema } from '@/lib/seo';
import ConsentContentSection from '@/sections/legal/ConsentContentSection';

const CONSENT_PAGE_TEXT = {
  home: 'Главная',
  title: 'Согласие на обработку персональных данных',
};

export const Consent: React.FC = () => {
  return (
    <main className="page-shell">
      <Seo
        title="Согласие на обработку персональных данных"
        description="Согласие на обработку персональных данных компании Энергомера34."
        path="/consent"
        noindex
        structuredData={buildBreadcrumbSchema([
          { name: 'Главная', path: '/' },
          { name: 'Согласие на обработку персональных данных', path: '/consent' },
        ])}
      />
      <div className="page-breadcrumb">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="page-breadcrumb-link">{CONSENT_PAGE_TEXT.home}</Link>
          <span className="page-breadcrumb-separator">/</span>
          <span className="page-breadcrumb-separator">{CONSENT_PAGE_TEXT.title}</span>
        </div>
      </div>
      <ConsentContentSection />
    </main>
  );
};

export default Consent;
