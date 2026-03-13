import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { buildBreadcrumbSchema, buildOrganizationSchema } from '@/lib/seo';
import ContactsInfoSection from '@/sections/contacts/ContactsInfoSection';

const CONTACTS_PAGE_TEXT = {
  home: 'Главная',
  title: 'Контакты',
};

export const Contacts: React.FC = () => {
  return (
    <main className="page-shell">
      <Seo
        title="Контакты Энергомера34 — Волжский"
        description="Контакты Энергомера34: телефон, электронная почта, адрес в Волжском, реквизиты компании и карта проезда."
        path="/contacts"
        keywords={[
          'контакты Энергомера34',
          'Энергомера Волжский адрес',
          'поверка Волжский контакты',
        ]}
        structuredData={[
          buildOrganizationSchema(),
          buildBreadcrumbSchema([
            { name: 'Главная', path: '/' },
            { name: 'Контакты', path: '/contacts' },
          ]),
        ]}
      />
      <div className="page-breadcrumb">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="page-breadcrumb-link">{CONTACTS_PAGE_TEXT.home}</Link>
          <span className="page-breadcrumb-separator">/</span>
          <span className="page-breadcrumb-separator">{CONTACTS_PAGE_TEXT.title}</span>
        </div>
      </div>
      <ContactsInfoSection />
    </main>
  );
};

export default Contacts;
