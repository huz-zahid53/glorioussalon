import React from 'react';
import { SALON_INFO } from '../data/salonData';

export const Marquee: React.FC = () => {
  const items = SALON_INFO.marquee;

  return (
    <div className="relative border-y border-white/[0.08] bg-black/40 backdrop-blur-md overflow-hidden py-4">
      <div className="flex w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-5 text-xs tracking-[0.22em] uppercase font-medium text-zinc-400">
            <span className="text-zinc-300 hover:text-[#dfbe7e] transition-colors">{text}</span>
            <span className="text-[#dfbe7e]/80 font-serif text-base select-none">✳</span>
          </div>
        ))}
      </div>
    </div>
  );
};
