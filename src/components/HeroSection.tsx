import React from 'react';
import { Star, Phone, Calendar, ShieldCheck, Flame, Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background ambient lighting subtle gradients */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d4af37]/4 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Trust badge */}
            <a
              href="#reviews"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181818] border border-white/10 hover:border-[#d4af37]/50 transition-colors mb-6 group cursor-pointer"
              id="hero-trust-badge"
            >
              <div className="flex items-center text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                ))}
              </div>
              <span className="text-xs font-bold text-white tracking-wide">5.0</span>
              <span className="text-zinc-500">•</span>
              <span className="text-xs text-zinc-300 font-medium group-hover:text-white transition-colors">
                {BUSINESS_INFO.reviewCount} Google Reviews
              </span>
              <ArrowUpRight className="w-3 h-3 text-[#d4af37] opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#d4af37]" />
              <span className="text-xs sm:text-sm font-bold text-[#d4af37] uppercase tracking-widest">
                Sartorial Precision & Barbershop Ritual
              </span>
            </div>

            {/* Master Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.08] mb-5 font-sans-clean">
              Where Precision Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#fae084] to-[#c5a02e] block sm:inline">
                Relentless Style
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl font-normal leading-relaxed mb-8">
              Chicago Ridge's premier men's grooming destination. Master skin fades, bespoke beard
              artistry, straight-razor detailing, and authentic barbershop culture tailored for the
              discerning gent.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBooking}
                id="hero-book-cta"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6ca65] hover:from-[#c5a02e] hover:to-[#d4af37] text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-[#d4af37]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
                <span>Book Your Cut</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                id="hero-call-cta"
                className="px-6 py-4 rounded-xl bg-[#171717] hover:bg-[#222] border border-white/15 hover:border-[#d4af37]/60 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 transition-all"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>(708) 297-5899</span>
              </a>
            </div>

            {/* Micro assurances */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs text-zinc-400 font-medium">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" /> Walk-Ins Always Welcome
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Complimentary Parking
              </span>
            </div>
          </div>

          {/* Right Column: Overlapping Asymmetric Editorial Collage */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 relative">
              {/* Main large visual (left side of collage) */}
              <div className="col-span-1 row-span-2 relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#161616]">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=700"
                  alt="WE THE BEST CUTZ Barbershop Interior Chicago Ridge"
                  className="w-full h-full min-h-[320px] sm:min-h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5">
                  <span className="inline-block px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                    Private Atelier Vibe
                  </span>
                </div>
              </div>

              {/* Top right: Master Fade */}
              <div className="col-span-1 relative group rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#161616] aspect-[4/3] sm:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600"
                  alt="Master Skin Fade at WE THE BEST CUTZ"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 right-3">
                  <span className="inline-block px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">
                    Master Fade
                  </span>
                </div>
              </div>

              {/* Bottom right: Beard Sculpt */}
              <div className="col-span-1 relative group rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#161616] aspect-[4/3] sm:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
                  alt="Razor Beard Sculpting at WE THE BEST CUTZ"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 right-3">
                  <span className="inline-block px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                    Beard Sculpt
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle floating gold seal */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#121212] border border-[#d4af37]/50 rounded-xl px-3.5 py-2.5 shadow-2xl flex items-center gap-2.5 backdrop-blur-md">
              <div className="w-8 h-8 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-white uppercase tracking-wider">Chicago Ridge, IL</p>
                <p className="text-[10px] text-zinc-400">Harlem Ave Master Studio</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Craftsmanship Badges Row */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#161616]/60 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">100% Polish</h2>
              <p className="text-xs text-zinc-400 mt-0.5">Master Artisans with obsessive detail</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#161616]/60 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">Hot Towel</h2>
              <p className="text-xs text-zinc-400 mt-0.5">Eucalyptus infusion on every shave</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#161616]/60 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">Zero-Rushing</h2>
              <p className="text-xs text-zinc-400 mt-0.5">Dedicated chair time for perfection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
