import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/barberData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-[#0c0c0c] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#d4af37]" />
            <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest">
              Need To Know
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#141414] border border-white/5 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-[#d4af37] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
