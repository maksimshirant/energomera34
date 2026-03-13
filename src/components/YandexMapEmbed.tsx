import React from 'react';
import { PLACEHOLDERS } from '@/lib/placeholders';
import { cn } from '@/lib/utils';

interface YandexMapEmbedProps {
  className?: string;
  title?: string;
}

const normalizedAddress = PLACEHOLDERS.address.replace(/\s+/g, ' ').trim();
const encodedAddress = encodeURIComponent(normalizedAddress);
const mapUrl = `https://yandex.ru/map-widget/v1/?mode=search&text=${encodedAddress}&z=17`;
const mapsLink = `https://yandex.ru/maps/?text=${encodedAddress}`;
const MAP_TEXT = {
  openExternal: 'Открыть в Яндекс Картах',
};

export const YandexMapEmbed: React.FC<YandexMapEmbedProps> = ({
  className,
  title = `Карта: ${normalizedAddress}`,
}) => {
  return (
    <div className={cn('relative overflow-hidden rounded-3xl bg-secondary/35', className)}>
      <iframe
        title={title}
        src={mapUrl}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        allowFullScreen
      />
      <a
        href={mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 inline-flex rounded-full bg-white/92 px-4 py-2 text-xs font-medium text-foreground shadow-sm transition-colors hover:text-primary"
      >
        {MAP_TEXT.openExternal}
      </a>
    </div>
  );
};

export default YandexMapEmbed;
