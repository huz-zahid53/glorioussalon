import React, { useState } from 'react';
import { SERVICES, SALON_INFO } from '../data/salonData';
import { Clock, Check, ArrowRight, MessageSquare } from 'lucide-react';

interface ServiceExplorerProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServiceExplorer: React.FC<ServiceExplorerProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Treatments' },
    { key: 'bridal', label: 'Bridal & Occasion' },
    { key: 'hair', label: 'Hair & Colour' },
    { key: 'skin', label: 'Skin & Facials' },
    { key: 'spa', label: 'Mani-Pedi & Spa' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  const bookViaWhatsApp = (title: string) => {
    const text = encodeURIComponent(
      `Hello ${SALON_INFO.name}, I would like to book or ask for details about: "${title}".`
    );
    window.open(`https://wa.me/${SALON_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] font-medium text-[#dfbe7e] mb-2">
              Curated Treatment Menu
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Artistry Crafted For <span className="italic font-normal text-gradient-rose">Your Distinct Glow.</span>
            </h2>
          </div>

          {/* Interactive Category Tabs (Segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/10 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-[#fff7e8] to-[#dfbe7e] text-[#140813] font-bold shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image slot with scrim */}
                <div className="aspect-[16/10] overflow-hidden relative bg-zinc-900">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = 'none';
                      if (el.parentElement) {
                        el.parentElement.classList.add('bg-gradient-to-br', 'from-[#33141e]', 'to-[#150e18]');
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a10] via-transparent to-transparent opacity-80"></div>
                  
                  {service.isPopular && (
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-md bg-[#7c2637]/90 backdrop-blur-md border border-[#dfbe7e]/35 text-[10px] uppercase font-bold tracking-wider text-[#fff9ee]">
                      Popular Choice
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-xs text-zinc-300">
                    <Clock className="w-3.5 h-3.5 text-[#dfbe7e]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-zinc-400 mb-1">
                    {service.subtitle}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2 group-hover:text-[#dfbe7e] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                    {service.included.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#dfbe7e] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="p-6 pt-0 mt-4">
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-zinc-500 block">Investment</span>
                    <span className="font-serif text-lg text-white font-medium tabular-nums">{service.priceTag}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => bookViaWhatsApp(service.title)}
                      className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/50 hover:text-emerald-300 transition-colors"
                      title="Quick Inquiry on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="px-3.5 py-2 text-xs font-bold text-[#140813] bg-gradient-to-r from-[#fff7e8] via-[#f5deb3] to-[#dfbe7e] rounded-lg hover:from-white hover:to-[#ebd095] transition-all flex items-center gap-1.5 shadow-md shadow-[#b38a43]/20 border border-white/20"
                    >
                      <span>Select</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
