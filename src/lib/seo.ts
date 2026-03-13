import { PLACEHOLDERS } from '@/lib/placeholders';
import type { ServiceItem } from '@/lib/services';

const normalizedAddress = PLACEHOLDERS.address.replace(/\s+/g, ' ').trim();
const normalizedPhone = PLACEHOLDERS.phoneLink.replace(/[^\d+]/g, '');

export const DEFAULT_SEO = {
  siteName: PLACEHOLDERS.companyName,
  locale: 'ru_RU',
  title: 'Энергомера34 — поверка приборов учета и средств измерений в Волжском',
  description:
    'Энергомера34 выполняет поверку приборов учета, ремонт средств измерений, обслуживание узлов учета и дистанционный мониторинг в Волжском и Волгограде.',
  keywords: [
    'Энергомера34',
    'Энергомера',
    'поверка Волжский',
    'поверка приборов учета',
    'поверка средств измерений',
    'ремонт средств измерений',
    'обслуживание узлов учета',
    'АСКУРДЭ',
    'приборы учета Волжский',
  ],
} as const;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export const buildAbsoluteUrl = (path = '/') => {
  const trimmedPath = path.startsWith('/') ? path : `/${path}`;

  if (typeof window !== 'undefined' && window.location?.origin) {
    return new URL(trimmedPath, window.location.origin).toString();
  }

  if (PLACEHOLDERS.website?.startsWith('http')) {
    return new URL(trimmedPath, PLACEHOLDERS.website).toString();
  }

  return trimmedPath;
};

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': buildAbsoluteUrl('/#organization'),
  name: PLACEHOLDERS.companyName,
  alternateName: 'Энергомера34',
  url: buildAbsoluteUrl('/'),
  telephone: normalizedPhone,
  email: PLACEHOLDERS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: normalizedAddress,
    addressLocality: 'Волжский',
    addressRegion: 'Волгоградская область',
    addressCountry: 'RU',
  },
  areaServed: ['Волжский', 'Волгоград'],
  description: DEFAULT_SEO.description,
  serviceType: [
    'Поверка приборов учета',
    'Поверка средств измерений',
    'Ремонт средств измерений',
    'Дистанционный мониторинг показаний',
  ],
});

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: buildAbsoluteUrl(item.path),
  })),
});

export const buildServiceSchema = (service: ServiceItem) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.description,
  areaServed: ['Волжский', 'Волгоград'],
  serviceType: service.title,
  url: buildAbsoluteUrl(`/services/${service.slug}`),
  provider: {
    '@type': 'ProfessionalService',
    name: PLACEHOLDERS.companyName,
    url: buildAbsoluteUrl('/'),
    telephone: normalizedPhone,
  },
});

export const buildServiceListSchema = (services: ServiceItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: buildAbsoluteUrl(`/services/${service.slug}`),
    name: service.title,
    description: service.shortDescription,
  })),
});
