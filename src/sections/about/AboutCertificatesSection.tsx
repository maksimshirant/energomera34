import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ABOUT_CERTIFICATES, ABOUT_CERTIFICATES_TEXT } from '@/content/about';

export const AboutCertificatesSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 1280 ? 3 : 1);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);

    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const pageCount = useMemo(
    () => Math.ceil(ABOUT_CERTIFICATES.length / visibleCount),
    [visibleCount]
  );

  const getCardStep = () => {
    const container = sliderRef.current;
    if (!container) return 0;

    const first = container.children[0] as HTMLElement | undefined;
    const second = container.children[1] as HTMLElement | undefined;

    if (!first) return 0;
    if (!second) return first.clientWidth;

    return second.offsetLeft - first.offsetLeft;
  };

  const scrollToIndex = (index: number) => {
    const container = sliderRef.current;
    if (!container) return;

    const nextIndex = Math.max(0, Math.min(index, ABOUT_CERTIFICATES.length - visibleCount));
    const step = getCardStep();

    container.scrollTo({
      left: step * nextIndex,
      behavior: 'smooth',
    });
  };

  const handlePrev = () => {
    const step = visibleCount;
    scrollToIndex(pageIndex * visibleCount - step);
  };

  const handleNext = () => {
    const step = visibleCount;
    scrollToIndex(pageIndex * visibleCount + step);
  };

  const handleScroll = () => {
    const container = sliderRef.current;
    if (!container) return;

    const step = getCardStep();
    if (!step) return;

    const currentItemIndex = Math.round(container.scrollLeft / step);
    setPageIndex(Math.floor(currentItemIndex / visibleCount));
  };

  return (
    <section className="bg-secondary/30 py-16">
      <div className="section-shell">
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-foreground">{ABOUT_CERTIFICATES_TEXT.title}</h2>
          {pageCount > 1 && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-white hover:bg-secondary/40"
                aria-label={ABOUT_CERTIFICATES_TEXT.prev}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-white hover:bg-secondary/40"
                aria-label={ABOUT_CERTIFICATES_TEXT.next}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {ABOUT_CERTIFICATES.map((certificate, index) => (
              <button
                key={certificate.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="w-full shrink-0 basis-full snap-start text-left xl:basis-[calc((100%-3rem)/3)]"
              >
                <div className="content-card-white overflow-hidden p-0 transition-shadow hover:shadow-[0_20px_60px_-32px_rgba(15,23,42,0.22)]">
                  <div className={`flex aspect-[210/297] items-end bg-gradient-to-br ${certificate.gradientClass} p-6`}>
                    <div>
                      <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                        Документ
                      </span>
                      <h3 className="mt-4 text-xl font-semibold text-white">{certificate.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/60 px-5 py-4">
                    <span className="font-medium text-foreground">{certificate.name}</span>
                    <span className="text-sm text-primary">{ABOUT_CERTIFICATES_TEXT.open}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {pageCount > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToIndex(index * visibleCount)}
                className={`h-2 rounded-full transition-all ${index === pageIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/30'}`}
                aria-label={`Страница ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="max-w-4xl border border-border/70 bg-white/95 p-0" showCloseButton={false}>
          {selectedIndex !== null && (
            <div>
              <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                <h3 className="font-medium text-foreground">{ABOUT_CERTIFICATES[selectedIndex].name}</h3>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-white text-foreground transition-colors hover:text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className={`m-4 flex min-h-[70vh] items-end rounded-2xl bg-gradient-to-br ${ABOUT_CERTIFICATES[selectedIndex].gradientClass} p-8`}>
                <div>
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                    Документ
                  </span>
                  <h3 className="mt-4 text-3xl font-semibold text-white">{ABOUT_CERTIFICATES[selectedIndex].name}</h3>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutCertificatesSection;
