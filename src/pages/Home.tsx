import React from 'react';
import Seo from '@/components/Seo';
import { buildOrganizationSchema, buildServiceListSchema, DEFAULT_SEO } from '@/lib/seo';
import { services } from '@/lib/services';
import HomeAboutHighlightsSection from '@/sections/home/HomeAboutHighlightsSection';
import HomeContactSection from '@/sections/home/HomeContactSection';
import HomeHeroSection from '@/sections/home/HomeHeroSection';
import HomeServicesSection from '@/sections/home/HomeServicesSection';

interface HomeProps {
  onOpenModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenModal }) => {
  return (
    <main>
      <Seo
        title={DEFAULT_SEO.title}
        description={DEFAULT_SEO.description}
        path="/"
        keywords={[...DEFAULT_SEO.keywords]}
        structuredData={[buildOrganizationSchema(), buildServiceListSchema(services)]}
      />
      <HomeHeroSection onOpenModal={onOpenModal} />
      <HomeAboutHighlightsSection />
      <HomeServicesSection />
      <HomeContactSection />
    </main>
  );
};

export default Home;
