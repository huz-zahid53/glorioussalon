import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ServiceExplorer } from './components/ServiceExplorer';
import { BridalCustomizer } from './components/BridalCustomizer';
import { TransformationSlider } from './components/TransformationSlider';
import { EditorialGallery } from './components/EditorialGallery';
import { TestimonialSection } from './components/TestimonialSection';
import { FaqSection } from './components/FaqSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { LuxuryBackground } from './components/LuxuryBackground';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. High-Precision Lenis Smooth Scrolling (Configured to eliminate all jitter/shake)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false, // Essential to prevent trackpad/touch rubberband jitter
      wheelMultiplier: 0.95,
      touchMultiplier: 1.0,
    });

    // Attach to window for smooth navigation scrolls
    (window as unknown as { __lenis: Lenis }).__lenis = lenis;

    // 2. Direct GPU progress update (Zero React tree re-renders on scroll)
    lenis.on('scroll', (e: { progress: number }) => {
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${e.progress})`;
      }
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  const handleOpenBooking = (serviceTitle?: string) => {
    setSelectedServiceForBooking(serviceTitle);
    setIsBookingOpen(true);
  };

  return (
    <div id="top" className="min-h-screen bg-[#080509] text-[#fcf9f5] relative selection:bg-[#dfbe7e] selection:text-[#120712]">
      {/* Top Luminous Scroll Progress Indicator (GPU accelerated scaleX) */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#b38a43] via-[#dfbe7e] to-[#f7e0b5] z-[60] origin-left pointer-events-none transform scale-x-0 will-change-transform shadow-[0_0_8px_rgba(223,190,126,0.5)]"
      ></div>

      {/* Global Subtle Noise Texture Scrim */}
      <div
        className="fixed inset-0 pointer-events-none z-30 opacity-[0.035] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Haute Luxury Animated Background: Diamond Stardust, Silk Veils & Glowing Orbs */}
      <LuxuryBackground />

      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <Marquee />
        <ServiceExplorer onSelectService={(title) => handleOpenBooking(title)} />
        <BridalCustomizer />
        <TransformationSlider />
        <EditorialGallery />
        <TestimonialSection />
        <FaqSection />
        <LocationContact />
      </main>

      {/* Footer & Floating Triggers */}
      <Footer />
      <FloatingWhatsApp />

      {/* Booking Appointment Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedService={selectedServiceForBooking}
      />
    </div>
  );
}
