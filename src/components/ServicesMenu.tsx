import React, { useState } from 'react';
import { Sparkles, Clock, ArrowRight, Star } from 'lucide-react';
import { SERVICES } from '../data/barberData';
import { ServiceCategory } from '../types';

interface ServicesMenuProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesMenu: React.FC<ServicesMenuProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-[#0d0d0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#d4af37]" />
            <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest">
              Master Craftsmanship
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Services & Bespoke Rituals
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl font-normal">
            Every cut includes personal consultation, straight-razor perimeter finishing, and aromatic cooling splash.
          </p>
        </div>

        {/* Category Tabs Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {[
            { id: 'all', label: 'All Offerings' },
            { id: 'cuts', label: 'Signature Cuts' },
            { id: 'beard', label: 'Beard & Lineup' },
            { id: 'combos', label: 'Combo Packages' },
            { id: 'treatments', label: 'Spa Treatments' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as ServiceCategory)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-lg shadow-[#d4af37]/20 font-extrabold'
                  : 'bg-[#161616] text-zinc-400 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services List / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`group p-6 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                service.popular
                  ? 'bg-[#161616] border-[#d4af37]/40 hover:border-[#d4af37] shadow-xl'
                  : 'bg-[#141414] border-white/5 hover:border-white/20 hover:bg-[#181818]'
              }`}
            >
              <div>
                {/* Top: Title & Price */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">
                        {service.name}
                      </h3>
                      {service.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <div className="text-2xl sm:text-3xl font-black text-[#d4af37] tracking-tight">
                    ${service.price}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mt-3 mb-5">
                  {service.description}
                </p>
              </div>

              {/* Bottom: Action trigger */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                  {service.category === 'combos' ? 'VIP Full Ritual' : 'Master Precision'}
                </span>

                <button
                  onClick={() => onSelectService(service.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4af37] hover:text-white uppercase tracking-wider group-hover:translate-x-1 transition-all"
                >
                  <span>{service.category === 'combos' ? 'Reserve Crown' : 'Select'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
