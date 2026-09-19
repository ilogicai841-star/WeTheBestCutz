import React from 'react';
import { Scissors, Award, Shield, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { BARBERS, BUSINESS_INFO } from '../data/barberData';

interface AboutArtisansProps {
  onOpenBooking: (serviceId?: string, barberId?: string) => void;
}

export const AboutArtisans: React.FC<AboutArtisansProps> = ({ onOpenBooking }) => {
  return (
    <section id="artisans" className="py-20 bg-[#0e0e0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image collage / Barber chair photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#161616]">
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800"
                alt="Master Barber Craftsmanship at WE THE BEST CUTZ"
                className="w-full h-auto min-h-[380px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-bold text-[#d4af37] tracking-widest block">
                  The Chicago Ridge Heritage
                </span>
                <p className="text-sm font-bold text-white mt-0.5">
                  Bespoke Grooming Tailored to the Individual
                </p>
              </div>
            </div>

            {/* Overlapping stat pill */}
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#141414] border border-[#d4af37]/40 rounded-xl p-3.5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#d4af37]" />
                <div>
                  <div className="text-xs font-black text-white">Master Barber Standard</div>
                  <div className="text-[10px] text-zinc-400">Zero Rush • Full Consultation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#d4af37]" />
              <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest">
                Artisans of the Craft
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              A Private Sanctuary Built On Pure Precision
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mt-4">
              Founded on the belief that a haircut is more than maintenance—it is a personal sartorial
              ritual. At WE THE BEST CUTZ, Master Barber Bahaa and our artisan staff blend old-world
              hot-towel barbering with razor-crisp modern geometry.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-[#161616] border border-white/5">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Surgical Blade Detailing</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Every razor edge is freshly sterilized, paired with eucalyptus foam and precision lines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#161616] border border-white/5">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Dedicated Chair Time</span>
                </div>
                <p className="text-xs text-zinc-400">
                  No overlapping appointments. You receive the barber's complete, unhurried focus.
                </p>
              </div>
            </div>

            {/* Barber Roster Cards */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                Select Your Artisan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {BARBERS.map((barber) => (
                  <div
                    key={barber.id}
                    className="p-3 rounded-xl bg-[#151515] border border-white/5 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{barber.name}</span>
                        {barber.id === 'bahaa' && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#d4af37]/20 text-[#d4af37] font-extrabold uppercase">
                            Founder
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-zinc-400 mt-1">{barber.role}</p>
                    </div>

                    <button
                      onClick={() => onOpenBooking(undefined, barber.id)}
                      className="mt-3 text-[11px] font-bold text-[#d4af37] hover:text-white uppercase tracking-wider text-left flex items-center gap-1"
                    >
                      Book Chair →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
