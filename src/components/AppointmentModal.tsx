"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Send, CheckCircle2, Phone, ShieldCheck } from "lucide-react";

const SERVICE_OPTIONS = [
  "Comprehensive Oral Checkup",
  "Dental Implants & Restorations",
  "Single-Sitting Root Canal (RCT)",
  "Clear Invisible Aligners",
  "Laser Teeth Whitening",
  "Pediatric & Family Dentistry",
  "Emergency Tooth Pain",
];

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  selectedService,
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: selectedService || "Comprehensive Oral Checkup",
    date: "",
    timeSlot: "Morning (9 AM – 2 PM)",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#123B65]/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-[var(--card)] rounded-3xl shadow-2xl border border-[var(--line)] overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Header */}
        <div className="bg-[#123B65] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#39A852] mb-1">
            <span className="w-2 h-2 rounded-full bg-[#39A852]" />
            Priority Scheduling
          </div>
          <h3 className="text-xl font-bold">Book Your Dental Consultation</h3>
          <p className="text-xs text-blue-100 mt-1">
            Zero wait times. Dedicated specialists at Molar Dental Hospital.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[var(--green-soft)] text-[#39A852] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-extrabold text-[var(--ink)] mb-2">
                Booking Received!
              </h4>
              <p className="text-sm text-[var(--ink-soft)] mb-6 max-w-sm mx-auto">
                Thanks, <span className="font-bold text-[var(--ink)]">{formData.name}</span>. Our desk has reserved your request. We will reach you shortly at <span className="font-bold text-[var(--ink)]">{formData.phone}</span>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#2675D8] text-white font-semibold text-xs px-6 py-3 rounded-full hover:bg-[#1C5EB0] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[var(--ink)] mb-1">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vamsi Krishna"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--card-soft)] border border-[var(--line)] rounded-xl px-4 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[#2675D8]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--ink)] mb-1">
                  Mobile Number (for SMS & WhatsApp Confirmation) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[var(--card-soft)] border border-[var(--line)] rounded-xl px-4 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[#2675D8]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--ink)] mb-1">
                    Select Treatment
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[var(--card-soft)] border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[#2675D8]"
                  >
                    {/* Keeps anything passed in (e.g. a doctor consultation) selectable */}
                    {formData.service && !SERVICE_OPTIONS.includes(formData.service) && (
                      <option>{formData.service}</option>
                    )}
                    {SERVICE_OPTIONS.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--ink)] mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[var(--card-soft)] border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[#2675D8]"
                  >
                    <option>Morning (9 AM – 2 PM)</option>
                    <option>Evening (5 PM – 9 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--ink)] mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[var(--card-soft)] border border-[var(--line)] rounded-xl px-4 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[#2675D8]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#2675D8] hover:bg-[#1C5EB0] text-white font-bold text-sm py-3.5 rounded-xl shadow-lg transition-all cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Appointment Booking</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[var(--ink-soft)] pt-2">
                <ShieldCheck className="w-4 h-4 text-[#39A852]" />
                <span>Free cancellation anytime. No advance payment required.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

