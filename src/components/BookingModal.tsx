import React, { useState, useEffect } from 'react';
import { SERVICES, SALON_INFO } from '../data/salonData';
import { BrandLogo } from './BrandLogo';
import { X, Calendar, Clock, User, Phone, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    preSelectedService || SERVICES[0].title
  );
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>('02:30 PM');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (preSelectedService) {
      setSelectedService(preSelectedService);
    }
  }, [preSelectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const timeSlots = [
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) return;

    const messageLines = [
      `Assalam-o-Alaikum ${SALON_INFO.name},`,
      `I would like to confirm an appointment reservation:`,
      `• Service: ${selectedService}`,
      `• Preferred Date: ${selectedDate}`,
      `• Preferred Time: ${selectedTime}`,
      `• Client Name: ${clientName}`,
      `• Contact: ${clientPhone}`,
    ];

    if (notes.trim()) {
      messageLines.push(`• Special Notes: ${notes}`);
    }

    messageLines.push(`Kindly verify slot availability.`);

    const text = encodeURIComponent(messageLines.join('\n'));
    window.open(`https://wa.me/${SALON_INFO.whatsappRaw}?text=${text}`, '_blank');
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-lg glass-panel rounded-3xl border border-[#dfbe7e]/25 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-white font-normal">
              Booking Request Prepared
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Your appointment request for <strong className="text-white">{selectedService}</strong> has been transferred to our WhatsApp concierge. Our team in {SALON_INFO.cityShort} will confirm your exact slot within a few minutes.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#fff7e8] to-[#dfbe7e] text-[#140813] text-xs font-bold shadow-md shadow-[#b38a43]/20"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <BrandLogo size="sm" withTagline={true} />
              <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#dfbe7e] font-medium px-2 py-0.5 rounded-full bg-white/[0.04] border border-[#dfbe7e]/20">
                <Sparkles className="w-3 h-3 text-[#dfbe7e]" />
                <span>Concierge</span>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
                Reserve Your <span className="italic text-gradient-rose">Glow Session.</span>
              </h3>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Selected Treatment
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs focus:outline-none focus:border-[#dfbe7e]"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title} className="bg-zinc-900 text-white">
                    {s.title} ({s.priceTag})
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#dfbe7e]" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs focus:outline-none focus:border-[#dfbe7e]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#dfbe7e]" />
                  <span>Time Slot</span>
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs focus:outline-none focus:border-[#dfbe7e]"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time} className="bg-zinc-900 text-white">
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Client Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#dfbe7e]" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ayesha Malik"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-[#dfbe7e]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#dfbe7e]" />
                  <span>Phone / WhatsApp</span>
                </label>
                <input
                  type="tel"
                  placeholder="0300 1234567"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-[#dfbe7e]"
                />
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Special Requests or Outfit Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Bridal event date, outfit color, skin sensitivity, etc."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-[#dfbe7e] resize-none"
              ></textarea>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#fff7e8] via-[#f5deb3] to-[#dfbe7e] text-[#140813] text-xs font-bold hover:from-white hover:to-[#ebd095] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#b38a43]/25 hover:scale-[1.01] border border-white/20"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>Confirm &amp; Dispatch on WhatsApp</span>
              </button>
              <p className="text-[11px] text-center text-zinc-400 mt-2">
                Fast confirmation with zero upfront payment required for regular appointments.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
