import React, { useState } from 'react';
import { Check, Clock, User, Scissors, Phone, Sparkles, Calendar } from 'lucide-react';
import { SERVICES, BARBERS, TIME_SLOTS, BUSINESS_INFO } from '../data/barberData';
import { BookingFormData } from '../types';

interface ReserveChairSectionProps {
  onOpenBookingModal: (prefill?: Partial<BookingFormData>) => void;
}

export const ReserveChairSection: React.FC<ReserveChairSectionProps> = ({ onOpenBookingModal }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('master-haircut');
  const [selectedBarberId, setSelectedBarberId] = useState<string>('bahaa');
  const [selectedTime, setSelectedTime] = useState<string>('03:00 PM');
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const selectedBarber = BARBERS.find((b) => b.id === selectedBarberId) || BARBERS[0];

  const handleConfirmReservation = () => {
    onOpenBookingModal({
      serviceId: selectedServiceId,
      barberId: selectedBarberId,
      timeSlot: selectedTime,
      date: selectedDate,
    });
  };

  return (
    <section id="reserve" className="py-16 sm:py-20 relative bg-[#0b0b0b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header indicator */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Fast Frictionless Booking
          </span>
          <span className="px-2.5 py-0.5 rounded bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 text-[11px] font-bold uppercase tracking-wider">
            Step-By-Step
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase mb-8">
          Reserve Your Chair
        </h2>

        {/* Interactive Booking Container */}
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle gold line accent at top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          {/* STEP 1: SERVICE PREFERENCE */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3.5">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center text-[10px]">
                  1
                </span>
                Service Preference
              </label>
              <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider">
                {selectedService.name} Selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Option 1: Signature Haircut */}
              <button
                type="button"
                onClick={() => setSelectedServiceId('master-haircut')}
                className={`text-left p-4 rounded-xl border transition-all ${
                  selectedServiceId === 'master-haircut'
                    ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-lg shadow-[#d4af37]/20 font-semibold'
                    : 'bg-[#1a1a1a] text-zinc-300 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">Signature Haircut</span>
                  <span
                    className={`text-sm font-black ${
                      selectedServiceId === 'master-haircut' ? 'text-black' : 'text-[#d4af37]'
                    }`}
                  >
                    $35
                  </span>
                </div>
                <div
                  className={`text-xs mt-1 ${
                    selectedServiceId === 'master-haircut' ? 'text-black/80' : 'text-zinc-400'
                  }`}
                >
                  $35 • 30 mins
                </div>
              </button>

              {/* Option 2: Beard & Towel */}
              <button
                type="button"
                onClick={() => setSelectedServiceId('sculpted-beard')}
                className={`text-left p-4 rounded-xl border transition-all ${
                  selectedServiceId === 'sculpted-beard'
                    ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-lg shadow-[#d4af37]/20 font-semibold'
                    : 'bg-[#1a1a1a] text-zinc-300 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">Beard & Hot Towel</span>
                  <span
                    className={`text-sm font-black ${
                      selectedServiceId === 'sculpted-beard' ? 'text-black' : 'text-[#d4af37]'
                    }`}
                  >
                    $25
                  </span>
                </div>
                <div
                  className={`text-xs mt-1 ${
                    selectedServiceId === 'sculpted-beard' ? 'text-black/80' : 'text-zinc-400'
                  }`}
                >
                  $25 • 25 mins
                </div>
              </button>

              {/* Option 3: The Executive Crown Combo */}
              <button
                type="button"
                onClick={() => setSelectedServiceId('executive-crown')}
                className={`col-span-1 sm:col-span-2 text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  selectedServiceId === 'executive-crown'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#e6ca65] text-black border-[#d4af37] shadow-lg shadow-[#d4af37]/20 font-semibold'
                    : 'bg-[#1a1a1a] text-zinc-300 border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm">The Executive Crown Combo</span>
                    <span
                      className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded font-bold ${
                        selectedServiceId === 'executive-crown'
                          ? 'bg-black text-[#d4af37]'
                          : 'bg-[#d4af37]/20 text-[#d4af37]'
                      }`}
                    >
                      VIP
                    </span>
                  </div>
                  <div
                    className={`text-xs mt-0.5 ${
                      selectedServiceId === 'executive-crown' ? 'text-black/80' : 'text-zinc-400'
                    }`}
                  >
                    Cut + Beard Sculpt + Razor + Facial
                  </div>
                </div>
                <span
                  className={`text-lg font-black ${
                    selectedServiceId === 'executive-crown' ? 'text-black' : 'text-[#d4af37]'
                  }`}
                >
                  $55
                </span>
              </button>
            </div>
          </div>

          {/* STEP 2: BARBER SPECIALIST */}
          <div className="mb-8">
            <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2 mb-3.5">
              <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center text-[10px]">
                2
              </span>
              Barber Specialist
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {BARBERS.map((barber) => (
                <button
                  key={barber.id}
                  type="button"
                  onClick={() => setSelectedBarberId(barber.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    selectedBarberId === barber.id
                      ? 'bg-[#202020] border-[#d4af37] text-white shadow-md'
                      : 'bg-[#191919] border-white/5 text-zinc-400 hover:border-white/20 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        selectedBarberId === barber.id
                          ? 'bg-[#d4af37] text-black'
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      {barber.name.charAt(0)}
                    </div>
                    <div className="text-left truncate">
                      <div className="text-xs font-bold text-white truncate">
                        {barber.id === 'bahaa' ? 'Bahaa (Master)' : barber.name}
                      </div>
                      <div className="text-[10px] text-zinc-400 truncate">
                        {barber.id === 'any' ? 'First Chair' : barber.specialty.split(',')[0]}
                      </div>
                    </div>
                  </div>
                  {selectedBarberId === barber.id && (
                    <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* STEP 3: PREFERRED TIME */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3.5">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center text-[10px]">
                  3
                </span>
                Preferred Time
              </label>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                + Walk-Ins Welcome
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {['10:30 AM', '12:00 PM', '03:00 PM', '05:15 PM'].map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border text-center ${
                    selectedTime === time
                      ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-md shadow-[#d4af37]/20'
                      : 'bg-[#1a1a1a] text-zinc-300 border-white/10 hover:border-white/20'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Action Confirmation button */}
          <div className="space-y-3">
            <button
              onClick={handleConfirmReservation}
              id="confirm-booking-inline-btn"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6ca65] hover:from-[#c5a02e] hover:to-[#d4af37] text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-[#d4af37]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
              <span>Confirm Chair Reservation</span>
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 pt-2 gap-2">
              <span className="text-center sm:text-left">
                Instant scheduling confirmation with Chicago Ridge studio.
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-[#d4af37] font-semibold hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" /> Call directly: (708) 297-5899
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
