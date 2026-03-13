import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { buildBreadcrumbSchema, buildOrganizationSchema } from '@/lib/seo';
import AboutCertificatesSection from '@/sections/about/AboutCertificatesSection';
import AboutClientsSection from '@/sections/about/AboutClientsSection';
import AboutHistorySection from '@/sections/about/AboutHistorySection';

const ABOUT_PAGE_TEXT = {
  home: 'Главная',
  title: 'О компании',
};

interface AboutProps {
  onOpenModal: () => void;
}

export const About: React.FC<AboutProps> = () => {
  return (
    <main className="page-shell">
      <Seo
        title="О компании Энергомера34 — поверка и сервисный центр в Волжском"
        description="Информация о компании Энергомера34: история предприятия, сервисный центр, официальные партнёры, лицензии и сертификаты."
        path="/about"
        keywords={[
          'о компании Энергомера34',
          'Энергомера Волжский',
          'сервисный центр Энергомера',
          'поверка приборов учета Волжский',
        ]}
        structuredData={[
          buildOrganizationSchema(),
          buildBreadcrumbSchema([
            { name: 'Главная', path: '/' },
            { name: 'О компании', path: '/about' },
          ]),
        ]}
      />
      <div className="page-breadcrumb">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="page-breadcrumb-link">{ABOUT_PAGE_TEXT.home}</Link>
          <span className="page-breadcrumb-separator">/</span>
          <span className="page-breadcrumb-separator">{ABOUT_PAGE_TEXT.title}</span>
        </div>
      </div>

      <div className="page-section">
        <h1 className="page-title mb-12">{ABOUT_PAGE_TEXT.title}</h1>
        <AboutHistorySection />
      </div>

      <AboutClientsSection />
      <AboutCertificatesSection />
    </main>
  );
};

export default About;
