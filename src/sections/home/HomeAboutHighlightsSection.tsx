import React from 'react';
import { ABOUT_ACHIEVEMENTS } from '@/content/about';

const HOME_ABOUT_HIGHLIGHTS_TEXT = {
  title: 'Наши преимущества',
};

export const HomeAboutHighlightsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="section-shell">
        <h2 className="mb-12 text-center text-3xl font-semibold text-foreground md:text-4xl">
          {HOME_ABOUT_HIGHLIGHTS_TEXT.title}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ABOUT_ACHIEVEMENTS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/70 bg-secondary/35 p-6 transition-shadow hover:shadow-[0_20px_50px_-35px_rgba(15,23,42,0.18)]"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/12">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAboutHighlightsSection;
