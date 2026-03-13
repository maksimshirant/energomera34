import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export const PulseBadgeIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3.5 5 6.5v5.8c0 4.1 2.9 7.8 7 8.7 4.1-.9 7-4.6 7-8.7V6.5l-7-3Z" />
    <path d="M8.5 12h2l1.2-2.3L13.6 15l1.2-3H16.5" />
  </svg>
);

export const TeamGridIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="3" />
    <path d="M6.5 19c.8-3 2.9-4.5 5.5-4.5s4.7 1.5 5.5 4.5" />
  </svg>
);

export const LabPanelIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="5" width="16" height="14" rx="3" />
    <path d="M8 9h8" />
    <path d="M8 13h3" />
    <path d="M14.5 12.5 16 10l1.5 2.5a1.8 1.8 0 1 1-3 0Z" />
    <path d="M9 3v2" />
    <path d="M15 3v2" />
  </svg>
);

export const NodesIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3.5" y="5" width="6" height="6" rx="1.5" />
    <rect x="14.5" y="5" width="6" height="6" rx="1.5" />
    <rect x="9" y="14" width="6" height="6" rx="1.5" />
    <path d="M9.5 8h5" />
    <path d="M12 11v3" />
  </svg>
);
