import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../data/salonData';
import { BrandLogo } from './BrandLogo';
import { Calendar, MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Bridal Suite', href: '#bridal' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'Client Reviews', href: '#reviews' },
    { label: 'Studio & FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const winWithLenis = window as unknown as { __lenis?: { scrollTo: (target: Element | string, opts?: object) => void } };
      if (winWithLenis.__lenis) {
        winWithLenis.__lenis.scrollTo(target, { offset: -60, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hi ${SALON_INFO.name}, I would like to inquire about appointments and bridal availability.`);
    window.open(`https://wa.me/${SALON_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Zone 1: Luxury Brand Emblem + Wordmark */}
          <a
            href="#top"
            className="group flex items-center transition-transform hover:scale-[1.01]"
            title={SALON_INFO.name}
          >
            <BrandLogo size="md" withTagline={true} />
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-zinc-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#dfbe7e] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={openWhatsApp}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-950/40 transition-colors whitespace-nowrap"
              title="Chat directly on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#140813] bg-gradient-to-r from-[#fff7e8] via-[#f5deb3] to-[#dfbe7e] rounded-lg hover:from-white hover:to-[#ebd095] transition-all shadow-lg shadow-[#b38a43]/25 hover:shadow-[#b38a43]/40 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap border border-white/20"
            >
              <Calendar className="w-3.5 h-3.5 text-[#140813]" />
              <span>Book Appointment</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-nav border-t border-white/10 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base text-zinc-200 hover:text-white py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openWhatsApp();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-emerald-400 border border-emerald-500/30 rounded-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp ({SALON_INFO.phone})
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
