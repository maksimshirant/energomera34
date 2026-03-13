import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { ServiceItem } from '@/lib/services';

interface ServiceDetailSectionProps {
  service: ServiceItem;
  onOpenModal: () => void;
}

const SERVICE_DETAIL_TEXT = {
  request: 'Оставить заявку',
  allServices: 'Все услуги',
};

export const ServiceDetailSection: React.FC<ServiceDetailSectionProps> = ({ service, onOpenModal }) => {
  const [templatePreviewOpen, setTemplatePreviewOpen] = useState(false);

  return (
    <section className="page-section">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <h1 className="page-title mb-6">{service.title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{service.description}</p>
          <div className="mt-8 space-y-3">
            {service.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3 text-foreground">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="leading-7">{bullet}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button onClick={onOpenModal} className="rounded-xl px-7">
              {SERVICE_DETAIL_TEXT.request}
            </Button>
            <Link
              to="/services"
              className="inline-flex h-11 items-center rounded-xl border border-border/70 px-5 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              {SERVICE_DETAIL_TEXT.allServices}
            </Link>
          </div>
        </div>

        <div className="content-card overflow-hidden p-0">
          <img
            src={service.image}
            alt={service.title}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>
      </div>

      {service.extendedInfo ? (
        <div className="mt-12 rounded-3xl border border-border/70 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.18)] md:p-8 lg:p-10">
          <p className="max-w-4xl text-base leading-8 text-muted-foreground md:text-lg">
            {service.extendedInfo.intro}
          </p>

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {service.extendedInfo.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-border/70 bg-secondary/30 p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.14)]"
              >
                <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
                <p className="mt-4 text-muted-foreground leading-7">{section.description}</p>

                <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                  <h3 className="text-lg font-semibold text-foreground">{section.prosTitle}</h3>
                  <div className="mt-4 space-y-3">
                    {section.pros.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-foreground">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                        <span className="leading-7">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-border/70 bg-white p-5">
                  <h3 className="text-lg font-semibold text-foreground">{section.consTitle}</h3>
                  <div className="mt-4 space-y-3">
                    {section.cons.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-foreground">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-400" />
                        <span className="leading-7">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {service.requestTemplate ? (
        <div className="mt-12 rounded-3xl border border-border/70 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.18)] md:p-8 lg:p-10">
          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
            <div>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                {service.requestTemplate.intro}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                {service.requestTemplate.note}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                {service.requestTemplate.priceTextBeforeLink}
                <Link to={service.requestTemplate.priceLinkHref} className="font-medium text-primary hover:text-primary/80">
                  {service.requestTemplate.priceLinkLabel}
                </Link>
                {service.requestTemplate.priceTextAfterLink}
              </p>
              <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                <p className="text-base font-medium leading-7 text-foreground md:text-lg">
                  {service.requestTemplate.ctaText}
                </p>
                <Button onClick={onOpenModal} className="mt-5 rounded-xl px-6">
                  {service.requestTemplate.ctaButtonLabel}
                </Button>
              </div>
            </div>

            <div className="flex justify-center xl:justify-end">
              <div className="w-full max-w-[380px]">
                <div className="w-full rounded-[28px] border border-border/70 bg-secondary/20 p-4 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.14)]">
                  <button
                    type="button"
                    onClick={() => setTemplatePreviewOpen(true)}
                    className="block w-full text-left"
                  >
                    <div className="aspect-[210/297] rounded-[22px] border border-border/70 bg-gradient-to-br from-slate-950 via-slate-800 to-cyan-600 p-6 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.16)]">
                      <div className="flex h-full flex-col">
                        <div className="border-b border-white/15 pb-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/90">
                            {service.requestTemplate.previewTitle}
                          </p>
                          <h2 className="mt-3 text-xl font-semibold text-white">
                            {service.requestTemplate.previewSubtitle}
                          </h2>
                        </div>

                        <div className="mt-6 flex-1 space-y-4">
                          {service.requestTemplate.previewFields.map((field) => (
                            <div key={field}>
                              <p className="mb-2 text-xs uppercase tracking-[0.14em] text-white/70">{field}</p>
                              <div className="h-8 rounded-none border-b border-dashed border-white/35" />
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 border-t border-white/15 pt-4">
                          <div className="h-8 w-2/3 rounded-none border-b border-dashed border-white/35" />
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <a
                  href={service.requestTemplate.fileHref}
                  download={service.requestTemplate.fileName}
                  className="mt-4 inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {service.requestTemplate.buttonLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Dialog open={templatePreviewOpen} onOpenChange={setTemplatePreviewOpen}>
        <DialogContent className="max-w-3xl border border-border/70 bg-white/95 p-0" showCloseButton={false}>
          {service.requestTemplate ? (
            <div>
              <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                <h3 className="font-medium text-foreground">{service.requestTemplate.previewTitle}</h3>
                <button
                  type="button"
                  onClick={() => setTemplatePreviewOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-white text-foreground transition-colors hover:text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="m-4 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-800 to-cyan-600 p-8">
                <div className="mx-auto max-w-[560px] rounded-[26px] border border-white/15 bg-white/8 p-6 backdrop-blur-sm">
                  <div className="aspect-[210/297] rounded-[20px] border border-white/15 bg-white/6 p-8">
                    <div className="flex h-full flex-col">
                      <div className="border-b border-white/15 pb-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/90">
                          {service.requestTemplate.previewTitle}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">
                          {service.requestTemplate.previewSubtitle}
                        </h3>
                      </div>
                      <div className="mt-7 flex-1 space-y-5">
                        {service.requestTemplate.previewFields.map((field) => (
                          <div key={field}>
                            <p className="mb-2 text-xs uppercase tracking-[0.14em] text-white/70">{field}</p>
                            <div className="h-10 border-b border-dashed border-white/35" />
                          </div>
                        ))}
                      </div>
                      <div className="mt-7 border-t border-white/15 pt-5">
                        <div className="h-10 w-2/3 border-b border-dashed border-white/35" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServiceDetailSection;
