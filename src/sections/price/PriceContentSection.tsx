import React from 'react';
import { Button } from '@/components/ui/button';

const PRICE_CONTENT_TEXT = {
  title: 'Прайс',
  status: 'Раздел обновляется',
  placeholderTitle: 'Обновленный прайс скоро на сайте',
  placeholderText:
    'Мы актуализируем перечень услуг и стоимость, чтобы разместить на странице только точную и актуальную информацию. Уточнить цену уже сейчас можно по телефону или через форму обратной связи.',
  ctaText: 'Не нашли нужную позицию? Свяжитесь с нами и мы поможем с решением вашего вопроса.',
  ctaButton: 'Задать вопрос',
};

interface PriceContentSectionProps {
  onOpenModal: () => void;
}

export const PriceContentSection: React.FC<PriceContentSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="page-section">
      <h1 className="page-title mb-8">{PRICE_CONTENT_TEXT.title}</h1>

      <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(241,245,249,0.92))] px-6 py-10 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.35)] md:px-10 md:py-14">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative max-w-3xl">
          <span className="inline-flex rounded-full border border-primary/15 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
            {PRICE_CONTENT_TEXT.status}
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            {PRICE_CONTENT_TEXT.placeholderTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            {PRICE_CONTENT_TEXT.placeholderText}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-primary/15 bg-primary/5 p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.12)]">
        <p className="text-base leading-7 text-foreground md:text-lg">{PRICE_CONTENT_TEXT.ctaText}</p>
        <Button onClick={onOpenModal} className="mt-5 rounded-xl px-6">
          {PRICE_CONTENT_TEXT.ctaButton}
        </Button>
      </div>
    </section>
  );
};

export default PriceContentSection;
