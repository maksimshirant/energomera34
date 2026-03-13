import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hero1Image from '@/assets/optimized/hero1.jpg';
import hero2Image from '@/assets/optimized/hero2.jpg';

interface HomeHeroSectionProps {
  onOpenModal: () => void;
}

const HOME_HERO_TEXT = {
  cta: 'Оставить заявку',
};

const slides = [
  {
    id: 1,
    title: 'Техническое обслуживание узлов учета и АИТП',
    subtitle: 'Поддерживаем надежную и эффективную работу узлов учета и АИТП для бесперебойной эксплуатации системы.',
    image: hero1Image,
  },
  {
    id: 2,
    title: 'Поверка и ремонт средств измерений',
    subtitle: 'Обеспечиваем корректность показаний и продлеваем срок службы средств измерений.',
    image: hero2Image,
  },
];

export const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({ onOpenModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] overflow-hidden border-b border-border/70">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt=""
            aria-hidden="true"
            width={1280}
            height={853}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={index === 0 ? 'high' : 'low'}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-900/72 to-cyan-900/52" />
      </div>

      <div className="absolute right-0 top-0 hidden h-full w-1/3 lg:block">
        <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="none">
          <path d="M100 0 Q200 100 150 250 Q100 400 200 500 L400 500 L400 0 Z" fill="rgba(34, 211, 238, 0.34)" />
          <path d="M150 0 Q250 100 200 250 Q150 400 250 500 L400 500 L400 0 Z" fill="rgba(15, 23, 42, 0.4)" />
        </svg>
      </div>

      <div className="section-shell relative flex h-full items-center">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
            {slides[currentSlide].title}
          </h1>
          <p className="mb-8 text-lg text-white/90">{slides[currentSlide].subtitle}</p>
          <Button onClick={onOpenModal} className="h-12 rounded-xl px-8 text-base">
            {HOME_HERO_TEXT.cta}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-2">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Предыдущий слайд"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-colors backdrop-blur hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          aria-label="Следующий слайд"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-colors backdrop-blur hover:bg-white/20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeHeroSection;
