import React from 'react';
import { ABOUT_HISTORY_TEXT } from '@/content/about';

export const AboutHistorySection: React.FC = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="content-card p-8 md:p-10">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">{ABOUT_HISTORY_TEXT.title}</h2>
          <div className="space-y-4 text-muted-foreground">
            {ABOUT_HISTORY_TEXT.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-7">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-border/70 bg-secondary/35 p-6">
            <h3 className="mb-4 text-lg font-semibold text-foreground">{ABOUT_HISTORY_TEXT.resultTitle}</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {ABOUT_HISTORY_TEXT.results.map((item) => (
                <div key={item} className="rounded-2xl bg-white/80 px-4 py-3 text-sm font-medium text-foreground shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="content-card-white overflow-hidden p-0">
          <div className="flex min-h-[420px] h-full items-end bg-[linear-gradient(145deg,rgba(15,23,42,0.98),rgba(30,41,59,0.94),rgba(34,211,238,0.65))] p-8">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                {ABOUT_HISTORY_TEXT.imageAlt}
              </p>
              <h3 className="max-w-sm text-2xl font-semibold text-white md:text-3xl">
                {ABOUT_HISTORY_TEXT.visualTitle}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                {ABOUT_HISTORY_TEXT.visualSubtitle}
              </p>
            </div>
          </div>
          <div className="border-t border-border/60 px-5 py-4 text-sm text-muted-foreground">
            {ABOUT_HISTORY_TEXT.imageCaption}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistorySection;
