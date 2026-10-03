import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  pulseSpeed: number;
  pulseOffset: number;
  isStar: boolean;
  color: string;
}

export const LuxuryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Haute Couture Palette: Royal Champagne Gold, Starlight Shimmer, Soft Cashmere Rose
    const colors = [
      'rgba(223, 190, 126, ', // #dfbe7e (signature champagne gold)
      'rgba(247, 224, 181, ', // #f7e0b5 (light champagne)
      'rgba(240, 194, 200, ', // #f0c2c8 (cashmere rose quartz)
      'rgba(255, 249, 238, ', // #fff9ee (pearl starlight)
      'rgba(255, 255, 255, ', // pure diamond glint
    ];

    // Create 45 bespoke beauty dust & diamond sparkle particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 32), 42);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedY: -(Math.random() * 0.35 + 0.12),
        speedX: (Math.random() - 0.5) * 0.16,
        opacity: Math.random() * 0.5 + 0.2,
        maxOpacity: Math.random() * 0.6 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
        isStar: Math.random() > 0.65, // 35% are 4-point bridal diamond sparkles
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update positions
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time + p.pulseOffset) * 0.15;

        // Wrap around seamlessly
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        // Smooth breathing opacity
        const currentOpacity =
          (Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * 0.5 + 0.5) * p.maxOpacity;

        if (p.isStar) {
          // Draw a delicate 4-point bridal diamond star glint (✦)
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.fillStyle = `${p.color}${currentOpacity})`;
          ctx.beginPath();
          const s = p.size * 2.5;
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.fill();

          // Star core dot
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, currentOpacity * 1.6)})`;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.45, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          // Soft circular luminous beauty ember with subtle radial aura
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.2);
          grad.addColorStop(0, `${p.color}${currentOpacity})`);
          grad.addColorStop(1, `${p.color}0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      {/* 1. Large Ambient Velvet Burgundy & Royal Champagne Orbs */}
      <div className="ambient-orb w-[680px] h-[680px] bg-[#7c2637]/22 -top-32 -left-32 animate-[floatSlow_18s_ease-in-out_infinite_alternate]"></div>
      <div className="ambient-orb w-[580px] h-[580px] bg-[#dfbe7e]/18 top-1/4 -right-40 animate-[floatSlow_22s_ease-in-out_infinite_alternate-reverse]"></div>
      <div className="ambient-orb w-[620px] h-[620px] bg-[#e5adb4]/16 bottom-1/4 left-1/4 animate-[floatSlow_26s_ease-in-out_infinite_alternate]"></div>
      <div className="ambient-orb w-[520px] h-[520px] bg-[#4d1422]/24 -bottom-32 right-1/4 animate-[floatSlow_20s_ease-in-out_infinite_alternate-reverse]"></div>

      {/* 2. Floating Silk Bridal Veil Wave Line in Champagne & Rose Gold */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="silkGlowHarmonized" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff9ee" stopOpacity="0" />
            <stop offset="35%" stopColor="#dfbe7e" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#e5adb4" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#7c2637" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M -100 250 C 350 150, 600 450, 1050 220 C 1250 120, 1400 320, 1600 240"
          fill="none"
          stroke="url(#silkGlowHarmonized)"
          strokeWidth="1.8"
          strokeDasharray="8 12"
          className="animate-[silkWave_25s_ease-in-out_infinite_alternate]"
        />
        <path
          d="M -100 550 C 250 650, 700 400, 1150 620 C 1350 720, 1500 520, 1600 600"
          fill="none"
          stroke="url(#silkGlowHarmonized)"
          strokeWidth="1.2"
          strokeDasharray="6 14"
          className="animate-[silkWave_32s_ease-in-out_infinite_alternate-reverse]"
        />
      </svg>

      {/* 3. Lightweight 60FPS Stardust & Diamond Sparkles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  );
};
