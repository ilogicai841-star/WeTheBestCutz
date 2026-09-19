import React from 'react';
import { Scissors, Phone, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-16 pb-24 sm:pb-16 text-center text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Emblem */}
        <div className="w-12 h-12 rounded-xl bg-[#161616] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mb-4 shadow-xl">
          <Scissors className="w-6 h-6" />
        </div>

        {/* Brand Name */}
        <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-widest uppercase">
          WE THE BEST CUTZ
        </h3>

        {/* Subtitle badge */}
        <div className="text-[11px] font-bold text-[#d4af37] uppercase tracking-widest mt-1">
          EST. 2024 — CHICAGO RIDGE
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mt-3 font-normal leading-relaxed">
          Redefining the grooming standard with relentless style, craftsmanship, and hospitality.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-zinc-300 my-8">
          <a href="#services" className="hover:text-[#d4af37] transition-colors">
            Services & Pricing
          </a>
          <a href="#reserve" className="hover:text-[#d4af37] transition-colors">
            Reserve Chair
          </a>
          <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
            Portfolio
          </a>
          <a href="#reviews" className="hover:text-[#d4af37] transition-colors">
            Google Reviews
          </a>
          <a href="#location" className="hover:text-[#d4af37] transition-colors">
            Location & Hours
          </a>
          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#d4af37] transition-colors">
            Call: (708) 297-5899
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs h-[1px] bg-white/10 my-4" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl text-[11px] text-zinc-500 pt-4 gap-2">
          <p>© {new Date().getFullYear()} WE THE BEST CUTZ. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#d4af37]" /> 10135 S Harlem Ave, Chicago Ridge, IL 60415
          </p>
        </div>
      </div>
    </footer>
  );
};
