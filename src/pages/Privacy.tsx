import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { buildBreadcrumbSchema } from '@/lib/seo';
import PrivacyContentSection from '@/sections/legal/PrivacyContentSection';

const PRIVACY_PAGE_TEXT = {
  home: 'Главная',
  title: 'Политика обработки персональных данных',
};

export const Privacy: React.FC = () => {
  return (
    <main className="page-shell">
      <Seo
        title="Политика обработки персональных данных"
        description="Политика обработки персональных данных компании Энергомера34."
        path="/privacy"
        noindex
        structuredData={buildBreadcrumbSchema([
          { name: 'Главная', path: '/' },
          { name: 'Политика обработки персональных данных', path: '/privacy' },
        ])}
      />
      <div className="page-breadcrumb">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="page-breadcrumb-link">{PRIVACY_PAGE_TEXT.home}</Link>
          <span className="page-breadcrumb-separator">/</span>
          <span className="page-breadcrumb-separator">{PRIVACY_PAGE_TEXT.title}</span>
        </div>
      </div>
      <PrivacyContentSection />
    </main>
  );
};

export default Privacy;
