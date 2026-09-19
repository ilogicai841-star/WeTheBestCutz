import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

export const LocationHours: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 2 is Tuesday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    const openMinutes = 9 * 60 + 30; // 9:30 AM
    const closeMinutes = 21 * 60; // 9:00 PM

    if (day === 2) {
      setIsOpenNow(false);
    } else {
      setIsOpenNow(totalMinutes >= openMinutes && totalMinutes < closeMinutes);
    }
  }, []);

  return (
    <section id="location" className="py-20 bg-[#0a0a0a] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Eyebrow & Title */}
        <div className="text-left mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#d4af37]" />
            <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest">
              Atelier Location
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Find Our Chairs
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 font-normal">
            Conveniently located on Harlem Ave in Chicago Ridge with complimentary parking.
          </p>
        </div>

        {/* Map Container Card */}
        <div className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-2xl mb-6">
          {/* Map display */}
          <div className="relative h-64 sm:h-80 w-full bg-[#1c1c1c]">
            <iframe
              title="WE THE BEST CUTZ Barbershop Location Chicago Ridge"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.873215886475!2d-87.8037887!3d41.7061111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e377e7fa66827%3A0xb33ca72a818c4015!2s10135%20S%20Harlem%20Ave%2C%20Chicago%20Ridge%2C%20IL%2060415!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              className="w-full h-full border-0 filter invert contrast-125 opacity-85"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Address Bar over Map */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#141414]/95 backdrop-blur-md border border-white/15 rounded-xl p-3 sm:p-4 flex items-center justify-between gap-3 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">
                    {BUSINESS_INFO.address}
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                  </div>
                </div>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#d4af37] hover:bg-[#c5a02e] text-black font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
              >
                <span>Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Hours of Craft Card */}
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-2xl">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Hours of Craft
              </span>
            </div>
            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border ${
                isOpenNow
                  ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                  : 'bg-rose-500/15 text-rose-400 border-rose-500/30'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'
                }`}
              />
              {isOpenNow ? 'Open Now' : 'Closed Today'}
            </span>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-semibold text-zinc-200">Wednesday – Monday</span>
              <span className="font-bold text-[#d4af37]">9:30 AM – 9:00 PM</span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-semibold text-zinc-400">Tuesday</span>
              <span className="font-bold text-rose-400 uppercase tracking-wider text-xs">
                CLOSED
              </span>
            </div>
          </div>

          {/* Direct CTA Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="py-3.5 px-4 rounded-xl bg-[#1d1d1d] hover:bg-[#252525] border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:border-[#d4af37]/40"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>(708) 297-5899</span>
            </a>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl bg-[#1d1d1d] hover:bg-[#252525] border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:border-[#d4af37]/40"
            >
              <Navigation className="w-4 h-4 text-[#d4af37]" />
              <span>Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
