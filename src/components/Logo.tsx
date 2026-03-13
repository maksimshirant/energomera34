import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 620 150"
      role="img"
      aria-label="ЭНЕРГОМЕРА34"
      className={className || 'h-11 w-auto text-primary'}
      style={{ color: 'hsl(var(--primary))' }}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="square">
        <path
          d="M14 20 L118 20 L118 34"
          strokeWidth="8"
        />
        <path
          d="M14 20 L14 128"
          strokeWidth="8"
        />
        <path
          d="M14 128 C36 126, 58 126, 80 128 C94 129, 108 129, 122 128"
          strokeWidth="8"
        />
        <path
          d="M122 128 L122 104"
          strokeWidth="8"
        />
        <path
          d="M22 12 L118 12"
          strokeWidth="2.5"
          opacity="0.28"
        />
      </g>

      <text
        x="48"
        y="90"
        fill="currentColor"
        fontFamily="'Arial Narrow', Arial, Helvetica, sans-serif"
        fontSize="66"
        fontWeight="400"
        letterSpacing="2"
        lengthAdjust="spacingAndGlyphs"
        textLength="548"
      >
        ЭНЕРГОМЕРА34
      </text>
    </svg>
  );
};

export default Logo;
