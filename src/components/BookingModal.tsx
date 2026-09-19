import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, Clock, User, Phone, MapPin, Sparkles, Download, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES, BARBERS, TIME_SLOTS, BUSINESS_INFO } from '../data/barberData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<BookingFormData>;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialData }) => {
  const [step, setStep] = useState<'details' | 'confirmed'>('details');

  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: 'master-haircut',
    barberId: 'bahaa',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '03:00 PM',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    notes: '',
  });

  const [confirmationCode, setConfirmationCode] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  // Reset or lock scroll when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setStep('details');
      setErrorMsg('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];
  const currentBarber = BARBERS.find((b) => b.id === formData.barberId) || BARBERS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.clientPhone.trim() || formData.clientPhone.length < 7) {
      setErrorMsg('Please enter a valid contact phone number.');
      return;
    }

    // Generate reference code
    const randomCode = `WTBC-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmationCode(randomCode);
    setStep('confirmed');
    setErrorMsg('');
  };

  // Helper to generate and download .ics calendar file
  const handleDownloadCalendar = () => {
    const title = `${currentService.name} - WE THE BEST CUTZ`;
    const desc = `Appointment with ${currentBarber.name} at WE THE BEST CUTZ Barbershop in Chicago Ridge, IL. Reference: ${confirmationCode}. Phone: (708) 297-5899`;
    const location = BUSINESS_INFO.fullAddress;

    // Parse date and time
    const [year, month, day] = formData.date.split('-');
    const dtString = `${year}${month}${day}T150000Z`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//WE THE BEST CUTZ//Barber Booking//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${desc}`,
      `LOCATION:${location}`,
      `DTSTART:${dtString}`,
      `DTEND:${dtString}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `barber-appointment-${confirmationCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#141414] border border-[#d4af37]/30 rounded-2xl w-full max-w-xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden">
        {/* Subtle decorative gold line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] via-[#f7e497] to-[#c5a02e]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'details' ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Direct Chair Reservation
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight uppercase mt-1">
                Book Your Experience
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Zero waiting time. Confirmed directly with our Chicago Ridge master barbers.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-rose-950/50 border border-rose-500/40 text-rose-300 text-xs font-semibold">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Select */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Select Service
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} — ${s.price} ({s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Barber Specialist */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Barber Specialist
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {BARBERS.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, barberId: b.id })}
                      className={`p-2 rounded-xl border text-center transition-all text-xs font-semibold ${
                        formData.barberId === b.id
                          ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold'
                          : 'bg-[#1b1b1b] text-zinc-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="truncate">{b.name}</div>
                      <div
                        className={`text-[10px] truncate ${
                          formData.barberId === b.id ? 'text-black/80' : 'text-zinc-500'
                        }`}
                      >
                        {b.id === 'bahaa' ? 'Master' : b.id === 'any' ? 'First Chair' : 'Specialist'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Client Contact Info */}
              <div className="pt-2 border-t border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Alex Miller"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g., (708) 555-0199"
                      value={formData.clientPhone}
                      onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                      className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                      required
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                    Custom Style Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Skin taper, high fade, beard lineup, skin sensitivity"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Price Summary & Submit */}
              <div className="pt-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-zinc-400 uppercase">Estimated Total</span>
                  <div className="text-xl font-black text-[#d4af37]">${currentService.price}</div>
                </div>

                <button
                  type="submit"
                  id="modal-submit-booking"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6ca65] hover:from-[#c5a02e] hover:to-[#d4af37] text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#d4af37]/20 transition-all"
                >
                  <span>Confirm Reservation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-2">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 border border-[#d4af37] flex items-center justify-center text-[#d4af37] mx-auto mb-4 shadow-xl shadow-[#d4af37]/10">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-2">
              Chair Reserved Successfully
            </span>

            <h3 className="text-2xl font-black text-white tracking-tight uppercase">
              You’re In The Chair, {formData.clientName.split(' ')[0]}
            </h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto mt-1">
              Your appointment has been registered at WE THE BEST CUTZ studio.
            </p>

            {/* Receipt Card */}
            <div className="my-6 p-4 rounded-xl bg-[#1c1c1c] border border-white/10 text-left space-y-2.5 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-zinc-400 uppercase tracking-wider">Reference Code</span>
                <span className="font-mono font-bold text-sm text-[#d4af37]">
                  {confirmationCode}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Service:</span>
                <span className="font-semibold text-white">
                  {currentService.name} (${currentService.price})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Barber:</span>
                <span className="font-semibold text-white">{currentBarber.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Date & Time:</span>
                <span className="font-semibold text-white">
                  {formData.date} at {formData.timeSlot}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Location:</span>
                <span className="font-semibold text-white text-right">
                  10135 S Harlem Ave, Chicago Ridge
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
              <button
                onClick={handleDownloadCalendar}
                className="py-3 px-4 rounded-xl bg-[#222] hover:bg-[#2a2a2a] border border-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Save to Calendar (.ics)</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-3 px-4 rounded-xl bg-[#222] hover:bg-[#2a2a2a] border border-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Call Studio: (708) 297-5899</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6ca65] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#d4af37]/20"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
