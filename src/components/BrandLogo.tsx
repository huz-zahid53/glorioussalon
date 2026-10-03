import React from 'react';
import { SALON_INFO } from '../data/salonData';

interface BrandLogoMarkProps {
  size?: number;
  className?: string;
}

export const BrandLogoMark: React.FC<BrandLogoMarkProps> = ({ size = 38, className = '' }) => {
  const uniqueId = React.useId();
  const gradGold = `goldLuster-${uniqueId}`;
  const gradRose = `roseLuster-${uniqueId}`;
  const gradHalo = `haloRadiance-${uniqueId}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-all duration-300 hover:scale-105 ${className}`}
      aria-label={`${SALON_INFO.name} Haute Luxury Crest`}
    >
      <defs>
        {/* Luminous Royal Champagne Gold */}
        <linearGradient id={gradGold} x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#fff9ee" />
          <stop offset="25%" stopColor="#f7e0b5" />
          <stop offset="55%" stopColor="#dfbe7e" />
          <stop offset="85%" stopColor="#b38a43" />
          <stop offset="100%" stopColor="#e8cf96" />
        </linearGradient>

        {/* Soft Cashmere Rose Gold */}
        <linearGradient id={gradRose} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf0f2" />
          <stop offset="35%" stopColor="#f0c2c8" />
          <stop offset="70%" stopColor="#d98993" />
          <stop offset="100%" stopColor="#8c3b46" />
        </linearGradient>

        {/* Deep Ambient Aura Glow */}
        <radialGradient id={gradHalo} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#dfbe7e" stopOpacity="0.32" />
          <stop offset="50%" stopColor="#8c3b46" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0a060a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Deep Obsidian-Velvet Curved Shield Base */}
      <rect width="100" height="100" rx="24" fill="#0d080f" stroke="rgba(247, 224, 181, 0.22)" strokeWidth="1.2" />

      {/* Soft Ambient Radiance Aura */}
      <circle cx="50" cy="50" r="44" fill={`url(#${gradHalo})`} />

      {/* Outer Concentric Hairline Ring */}
      <circle cx="50" cy="50" r="43" fill="none" stroke={`url(#${gradGold})`} strokeWidth="0.8" strokeOpacity="0.4" />
      
      {/* Delicate Dotted Stippling Halo Ring */}
      <circle cx="50" cy="50" r="39.5" fill="none" stroke={`url(#${gradGold})`} strokeWidth="1" strokeOpacity="0.65" strokeDasharray="3 4.5" />

      {/* Four Cardinal Micro-Diamonds (✦) */}
      <polygon points="50,6.5 52,9.5 50,12.5 48,9.5" fill={`url(#${gradGold})`} />
      <polygon points="50,87.5 52,90.5 50,93.5 48,90.5" fill={`url(#${gradGold})`} />
      <polygon points="6.5,50 9.5,52 12.5,50 9.5,48" fill={`url(#${gradGold})`} />
      <polygon points="87.5,50 90.5,52 93.5,50 90.5,48" fill={`url(#${gradGold})`} />

      {/* Royal Bridal Tiara Crown at 12 o'clock */}
      <g transform="translate(50, 20.5) scale(0.72)">
        <path
          d="M-15 4 L-9 -8 L0 -14 L9 -8 L15 4 L0 0 Z"
          fill={`url(#${gradGold})`}
          opacity="0.95"
        />
        <circle cx="0" cy="-14" r="2" fill="#ffffff" />
        <circle cx="-9" cy="-8" r="1.5" fill={`url(#${gradGold})`} />
        <circle cx="9" cy="-8" r="1.5" fill={`url(#${gradGold})`} />
        <circle cx="-15" cy="4" r="1.2" fill={`url(#${gradGold})`} />
        <circle cx="15" cy="4" r="1.2" fill={`url(#${gradGold})`} />
      </g>

      {/* Majestic Haute-Couture Monogram "G" for Glorious */}
      <path
        d="M62 38.5 C58 32 48 31 40 34 C31 38 27 47 27 56 C27 66 33 74 43 76 C53 78 61 74 65 67 C67 63 67.5 59 67.5 56.5 L48 56.5 L48 50.5 L73.5 50.5 C74 54 74 63 71 68 C66 77 55 82 42 80 C29 77 20 68 20 54 C20 42 27 30 40 26 C51 23 62 26 67.5 33.5 Z"
        fill={`url(#${gradGold})`}
      />

      {/* Elegant Inner Accent Line on G Stem */}
      <path
        d="M48 53.5 L69 53.5"
        stroke="#ffffff"
        strokeWidth="1"
        strokeOpacity="0.85"
      />

      {/* Multifaceted Diamond Radiance Flare at Crown Junction */}
      <g transform="translate(68, 35)">
        <path
          d="M0,-11 Q0,0 11,0 Q0,0 0,11 Q0,0 -11,0 Q0,0 0,-11 Z"
          fill={`url(#${gradGold})`}
        />
        <path d="M-5,-5 L5,5 M-5,5 L5,-5" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.85" />
        <circle cx="0" cy="0" r="1.8" fill="#ffffff" />
      </g>

      {/* Symmetrical Twin Botanical Laurel Petals at Base */}
      <g transform="translate(50, 78) scale(0.65)">
        <path
          d="M-22 -4 C-16 2 -7 5 0 6 C-6 3 -14 0 -22 -4 Z"
          fill={`url(#${gradRose})`}
          opacity="0.8"
        />
        <path
          d="M22 -4 C16 2 7 5 0 6 C6 3 14 0 22 -4 Z"
          fill={`url(#${gradRose})`}
          opacity="0.8"
        />
        <circle cx="0" cy="6" r="1.6" fill={`url(#${gradGold})`} />
      </g>
    </svg>
  );
};

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  withTagline = true,
  className = '',
}) => {
  const markSizes = {
    sm: 32,
    md: 40,
    lg: 52,
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
  };

  const subSizes = {
    sm: 'text-[8px] tracking-[0.28em]',
    md: 'text-[9.5px] tracking-[0.3em]',
    lg: 'text-[11px] tracking-[0.32em]',
  };

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <BrandLogoMark size={markSizes[size]} />
      <div className="flex flex-col">
        <span className={`font-serif tracking-tight font-medium text-white leading-none ${titleSizes[size]} drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]`}>
          {SALON_INFO.brandWord}
          <span className="text-[#dfbe7e] font-serif ml-0.5">.</span>
        </span>
        {withTagline && (
          <span
            className={`uppercase text-[#edd09f]/90 font-medium mt-1 font-sans leading-none ${subSizes[size]}`}
          >
            {SALON_INFO.ownerLine}
          </span>
        )}
      </div>
    </div>
  );
};
