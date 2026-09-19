import React, { useState } from 'react';
import { Sparkles, Maximize2, X, Calendar, Check, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/barberData';
import { GalleryItem } from '../types';

interface PortfolioGalleryProps {
  onBookStyle: (styleName: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onBookStyle }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => {
          if (activeFilter === 'skinfade') return item.category === 'skinfade';
          if (activeFilter === 'beard') return item.category === 'beard';
          if (activeFilter === 'scissor') return item.category === 'scissor';
          if (activeFilter === 'studio') return item.category === 'studio';
          return true;
        });

  return (
    <section id="gallery" className="py-20 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#d4af37]" />
              <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest">
                Our Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              Gallery of Precision
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Updated Weekly • Chicago Ridge Atelier</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {[
            { id: 'all', label: '#ALL' },
            { id: 'skinfade', label: '#SKINFADE' },
            { id: 'beard', label: '#BEARDSCULPT' },
            { id: 'scissor', label: '#SCISSORWORK' },
            { id: 'studio', label: '#STUDIOSANCTUARY' },
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => setActiveFilter(pill.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                activeFilter === pill.id
                  ? 'bg-white text-black border-white'
                  : 'bg-[#181818] text-zinc-400 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className={`group relative rounded-2xl overflow-hidden bg-[#161616] border border-white/10 cursor-pointer shadow-xl ${
                item.category === 'studio' ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-auto sm:h-80 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity" />

                {/* Hover zoom icon badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#d4af37]" />
                </div>

                {/* Card Content info overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-300 font-medium mt-0.5">{item.tagline}</p>
                  </div>

                  {item.category === 'studio' && (
                    <span className="px-2.5 py-1 rounded bg-[#d4af37] text-black text-[10px] font-black uppercase tracking-wider">
                      Chicago Ridge
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="fixed inset-0"
            onClick={() => setActiveLightboxItem(null)}
          />

          <div className="relative bg-[#141414] border border-[#d4af37]/30 rounded-2xl max-w-2xl w-full overflow-hidden z-10 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxItem(null)}
              aria-label="Close Lightbox"
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-black"
            >
              <X className="w-4 h-4" />
            </button>

            {/* High-res Image */}
            <div className="relative max-h-[60vh] overflow-hidden bg-black">
              <img
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.title}
                className="w-full h-full object-cover max-h-[60vh]"
              />
            </div>

            {/* Lightbox Footer */}
            <div className="p-6 bg-[#171717] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold">
                  Portfolio Showcase • WE THE BEST CUTZ
                </span>
                <h4 className="text-xl font-bold text-white mt-0.5">
                  {activeLightboxItem.title}
                </h4>
                <p className="text-xs text-zinc-400 mt-1">{activeLightboxItem.tagline}</p>
              </div>

              <button
                onClick={() => {
                  const style = activeLightboxItem.title;
                  setActiveLightboxItem(null);
                  onBookStyle(style);
                }}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6ca65] hover:from-[#c5a02e] hover:to-[#d4af37] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20 shrink-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Look</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
