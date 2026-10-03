import React, { useState, useCallback, useEffect } from 'react';
import { SALON_INFO } from '../data/salonData';
import { X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  imageUrl: string;
  span: string;
}

export const EditorialGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const images: GalleryItem[] = [
    {
      id: 'g-1',
      title: 'The Glow Studio',
      tag: 'Clinical Skin Radiance',
      imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/f1813b4af_generated_image.png',
      span: 'lg:col-span-8 aspect-[16/10]',
    },
    {
      id: 'g-2',
      title: 'Hydrafacial Rituals',
      tag: 'Skin Treatments',
      imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/62dd1c826_generated_image.png',
      span: 'lg:col-span-4 aspect-[4/5]',
    },
    {
      id: 'g-3',
      title: 'Bridal Artistry',
      tag: 'Signature Makeup',
      imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/578021f7d_generated_image.png',
      span: 'lg:col-span-4 aspect-[4/5]',
    },
    {
      id: 'g-4',
      title: 'Calm & Comfort',
      tag: 'Studio Sanctuary',
      imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/d41c47f30_generated_image.png',
      span: 'lg:col-span-8 aspect-[16/10]',
    },
  ];

  const handleOpen = useCallback((item: GalleryItem) => {
    setActiveItem(item);
  }, []);

  const handleClose = useCallback(() => {
    setActiveItem(null);
  }, []);

  useEffect(() => {
    if (!activeItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, handleClose]);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] font-medium text-[#dfbe7e] mb-2">
              Visual Archive
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Moments Captured in <span className="italic font-normal text-gradient-rose">Pure Radiance.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            A curated portfolio of modern brides, celebratory occasions, and precision styling created inside our {SALON_INFO.cityShort} studio.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {images.map((img) => (
            <button
              key={img.id}
              onClick={() => handleOpen(img)}
              className={`${img.span} rounded-2xl overflow-hidden relative group cursor-pointer glass-card border border-white/10 text-left`}
              aria-label={`View enlarged image: ${img.title}`}
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" aria-hidden="true"></div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Text Card overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#dfbe7e]">
                  {img.tag}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-light mt-0.5">
                  {img.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image preview: ${activeItem.title}`}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeItem.imageUrl}
            alt={activeItem.title}
            className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
