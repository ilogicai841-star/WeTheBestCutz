import React, { useState, useEffect } from 'react';
import { Scissors, Phone, Clock, Menu, X, Calendar, MapPin, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute live open status (Wed-Mon 9:30 AM - 9:00 PM, Tue Closed)
  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 2 is Tuesday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    const openMinutes = 9 * 60 + 30; // 9:30 AM
    const closeMinutes = 21 * 60; // 9:00 PM

    if (day === 2) {
      // Tuesday is closed
      setIsOpenNow(false);
    } else {
      setIsOpenNow(totalMinutes >= openMinutes && totalMinutes < closeMinutes);
    }
  }, []);

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-header py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0e0e0e]/95 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow-inner group-hover:border-[#d4af37] transition-all">
              <Scissors className="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display tracking-wider font-bold text-base sm:text-lg text-white group-hover:text-[#d4af37] transition-colors">
                  WE THE BEST CUTZ
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              </div>
              <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-medium tracking-wide uppercase">
                <span className="flex items-center gap-1 text-[#d4af37]">
                  <MapPin className="w-3 h-3" /> Chicago Ridge
                </span>
                <span className="text-zinc-600">•</span>
                <span className="flex items-center gap-1">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'
                    }`}
                  />
                  {isOpenNow ? 'Open Now' : 'Closed (Opens 9:30 AM)'}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <a
              href="#services"
              className="hover:text-[#d4af37] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d4af37] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Services & Pricing
            </a>
            <a
              href="#reserve"
              className="hover:text-[#d4af37] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d4af37] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Reserve Chair
            </a>
            <a
              href="#gallery"
              className="hover:text-[#d4af37] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d4af37] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Portfolio
            </a>
            <a
              href="#reviews"
              className="hover:text-[#d4af37] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d4af37] after:absolute after:bottom-0 after:left-0 after:transition-all flex items-center gap-1"
            >
              <span>Reviews</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30">
                5.0 ★
              </span>
            </a>
            <a
              href="#location"
              className="hover:text-[#d4af37] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d4af37] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Location & Hours
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#181818] hover:bg-[#222] border border-white/10 text-xs font-semibold text-zinc-200 transition-all hover:border-[#d4af37]/40"
              id="header-call-btn"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>(708) 297-5899</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              id="header-book-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#e6ca65] hover:from-[#c5a02e] hover:to-[#d4af37] text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#d4af37]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Cut</span>
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              aria-label="Call barbershop"
              className="w-9 h-9 rounded-lg bg-[#181818] border border-white/10 flex items-center justify-center text-[#d4af37]"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-lg bg-[#181818] border border-white/10 flex items-center justify-center text-white"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-30 bg-black/90 backdrop-blur-xl pt-20 px-6 pb-8 flex flex-col justify-between sm:hidden animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white">WE THE BEST CUTZ</span>
              </div>
              <span className="text-xs text-[#d4af37] flex items-center gap-1 font-semibold">
                <Star className="w-3.5 h-3.5 fill-[#d4af37]" /> 5.0 Google Rated
              </span>
            </div>

            <nav className="flex flex-col gap-3 text-lg font-medium">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-zinc-200 hover:text-[#d4af37] border-b border-white/5"
              >
                Services & Pricing
              </a>
              <a
                href="#reserve"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-zinc-200 hover:text-[#d4af37] border-b border-white/5"
              >
                Reserve Your Chair
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-zinc-200 hover:text-[#d4af37] border-b border-white/5"
              >
                Gallery of Precision
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-zinc-200 hover:text-[#d4af37] border-b border-white/5"
              >
                Google Reviews (327+)
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-zinc-200 hover:text-[#d4af37] border-b border-white/5"
              >
                Location & Hours
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6ca65] text-black font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Cut Now</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-3 rounded-xl bg-[#1a1a1a] border border-white/15 text-zinc-200 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call (708) 297-5899</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
