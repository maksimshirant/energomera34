import { useEffect } from 'react';
import { DEFAULT_SEO, buildAbsoluteUrl } from '@/lib/seo';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const upsertMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const upsertLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  keywords = [...DEFAULT_SEO.keywords],
  path = '/',
  type = 'website',
  noindex = false,
  structuredData,
}) => {
  useEffect(() => {
    const fullTitle = title.includes(DEFAULT_SEO.siteName) ? title : `${title} | ${DEFAULT_SEO.siteName}`;
    const canonicalUrl = buildAbsoluteUrl(path);
    const robots = noindex
      ? 'noindex,follow,max-image-preview:large'
      : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

    document.title = fullTitle;
    document.documentElement.lang = 'ru';

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords.join(', '));
    upsertMeta('name', 'robots', robots);
    upsertMeta('name', 'author', DEFAULT_SEO.siteName);
    upsertMeta('property', 'og:locale', DEFAULT_SEO.locale);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:site_name', DEFAULT_SEO.siteName);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertLink('canonical', canonicalUrl);

    document.querySelectorAll('script[data-seo-managed="true"]').forEach((element) => element.remove());

    const entries = structuredData ? (Array.isArray(structuredData) ? structuredData : [structuredData]) : [];
    entries.forEach((entry) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoManaged = 'true';
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
    });
  }, [description, keywords, noindex, path, structuredData, title, type]);

  return null;
};

export default Seo;
