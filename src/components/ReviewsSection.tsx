import React, { useState } from 'react';
import { Star, CheckCircle, Quote, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/barberData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-20 bg-[#0e0e0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#d4af37]" />
              <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest">
                Client Testimonials
              </span>
              <span className="text-xs text-zinc-500">•</span>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                5.0 Star Rated
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              Real Voices from the Chair
            </h2>
          </div>

          {/* Nav buttons for carousel */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevReview}
              aria-label="Previous review"
              className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-[#d4af37] flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              aria-label="Next review"
              className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-[#d4af37] flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#151515] border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-[#d4af37]/40 transition-all group"
            >
              <div>
                {/* Author row & stars */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#202020] border border-[#d4af37]/40 flex items-center justify-center text-sm font-black text-[#d4af37] shrink-0">
                      {review.initials}
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-white group-hover:text-[#d4af37] transition-colors">
                        {review.author}
                      </div>
                      <div className="text-[10px] text-zinc-400 flex items-center gap-1 font-medium">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        <span>Verified Google Client</span>
                      </div>
                    </div>
                  </div>

                  {/* 5 gold stars */}
                  <div className="flex items-center text-[#d4af37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                    ))}
                  </div>
                </div>

                {/* Barber / Service tag if present */}
                {review.barberAttributed && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-zinc-300 font-semibold mb-3">
                    <span className="text-[#d4af37]">Barber:</span>
                    <span>{review.barberAttributed}</span>
                  </div>
                )}

                {/* Quote body */}
                <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
                <span>{review.date}</span>
                <span className="text-[#d4af37] font-semibold">Google Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Google Consensus Banner */}
        <div className="bg-gradient-to-r from-[#171717] via-[#1a1a1a] to-[#171717] border border-[#d4af37]/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0">
              <Star className="w-6 h-6 fill-[#d4af37]" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-white">
                327+ Reviews on Google
              </div>
              <p className="text-xs text-zinc-400">
                Unanimous 5.0-Star Consensus across Chicago Ridge & South Suburbs.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#222] hover:bg-[#282828] border border-white/15 text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 transition-colors whitespace-nowrap"
          >
            <span>Read All Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
          </a>
        </div>
      </div>
    </section>
  );
};
