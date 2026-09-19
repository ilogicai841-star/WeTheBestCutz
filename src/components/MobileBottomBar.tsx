import React from 'react';
import { Scissors, Camera, Calendar, Star, MapPin } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="mobile-bottom-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#121212]/95 backdrop-blur-xl border-t border-white/10 px-2 py-2 flex items-center justify-around sm:hidden shadow-2xl"
    >
      <a
        href="#services"
        className="flex flex-col items-center justify-center p-1 text-zinc-400 hover:text-[#d4af37] transition-colors"
      >
        <Scissors className="w-4 h-4 text-[#d4af37]" />
        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Services</span>
      </a>

      <a
        href="#gallery"
        className="flex flex-col items-center justify-center p-1 text-zinc-400 hover:text-[#d4af37] transition-colors"
      >
        <Camera className="w-4 h-4" />
        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Portfolio</span>
      </a>

      {/* Prominent Gold BOOK CUT Center Action Button */}
      <button
        onClick={onOpenBooking}
        id="mobile-nav-book-cut"
        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6ca65] active:from-[#c5a02e] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#d4af37]/30 flex items-center gap-1.5 transform active:scale-95 transition-all"
      >
        <Calendar className="w-3.5 h-3.5 stroke-[2.5]" />
        <span>Book Cut</span>
      </button>

      <a
        href="#reviews"
        className="flex flex-col items-center justify-center p-1 text-zinc-400 hover:text-[#d4af37] transition-colors"
      >
        <Star className="w-4 h-4" />
        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Reviews</span>
      </a>

      <a
        href="#location"
        className="flex flex-col items-center justify-center p-1 text-zinc-400 hover:text-[#d4af37] transition-colors"
      >
        <MapPin className="w-4 h-4" />
        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Location</span>
      </a>
    </div>
  );
};
