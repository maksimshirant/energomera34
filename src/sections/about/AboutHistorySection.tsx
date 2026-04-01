import React from 'react';
import { ABOUT_HISTORY_TEXT } from '@/content/about';

export const AboutHistorySection: React.FC = () => {
  return (
    <section>
      <div className="content-card p-8 md:p-10 lg:p-12">
        <div className="max-w-5xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">{ABOUT_HISTORY_TEXT.title}</h2>
          <div className="max-w-4xl space-y-4 text-base leading-7 text-muted-foreground md:text-lg">
            {ABOUT_HISTORY_TEXT.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 border-t border-border/70 pt-8">
            <h3 className="max-w-4xl text-lg font-semibold leading-8 text-foreground md:text-xl">
              {ABOUT_HISTORY_TEXT.resultTitle}
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {ABOUT_HISTORY_TEXT.results.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[88px] items-start gap-3 rounded-2xl border border-border/60 bg-background/70 px-4 py-4 text-sm font-medium leading-6 text-foreground"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistorySection;
