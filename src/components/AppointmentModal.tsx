"use client";

import { useState, useEffect, useRef } from "react";
import {
  X,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Check,
} from "lucide-react";

const SERVICE_OPTIONS = [
  "Comprehensive Oral Checkup",
  "Root Canal Treatment",
  "Dental Implants",
  "Invisible Aligners",
  "Braces",
  "Zirconia Crowns",
  "Digital RVG X-Ray",
  "Teeth Whitening",
  "Tooth Extraction",
  "Pediatric Dentistry",
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isDropdownOpen) {
          setIsDropdownOpen(false);
        } else {
          onClose();
        }
      }
    };

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      setSubmitted(false);
      setIsDropdownOpen(false);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, onClose, selectedService, isDropdownOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  // Combine default services with any custom service passed in
  const availableServices =
    formData.service && !SERVICE_OPTIONS.includes(formData.service)
      ? [formData.service, ...SERVICE_OPTIONS]
      : SERVICE_OPTIONS;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-4 md:p-6 flex min-h-full items-center justify-center animate-in fade-in duration-200"
    >
      {/* Backdrop with smooth blur and fade */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 bg-[#0A223B]/70 dark:bg-black/80 backdrop-blur-md cursor-pointer"
      />

      {/* Sharp Architectural Modal Dialog — Fully responsive with bounded max-height */}
      <div className="relative w-full max-w-lg my-auto max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)] flex flex-col bg-[var(--card)] rounded-none border border-[var(--line)] shadow-[0_24px_64px_-16px_rgba(10,34,59,0.35)] dark:shadow-[0_24px_64px_-16px_rgba(0,0,0,0.8)] overflow-hidden z-10 animate-in zoom-in-[0.98] duration-200">
        {/* Brand Tri-Color Precision Hairline across Top Edge */}
        <div
          aria-hidden="true"
          className="h-[3px] w-full shrink-0 bg-gradient-to-r from-[#143A66] via-[#0072CE] to-[#00B050]"
        />

        {/* Modal Header — Fixed & always visible */}
        <div className="shrink-0 p-4 sm:px-6 sm:py-5 border-b border-[var(--line)] bg-[var(--card)] flex items-start justify-between gap-3">
          <div className="min-w-0 pr-1">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#0072CE]">
              <span className="h-1.5 w-1.5 shrink-0 bg-[#00B050]" />
              <span>Priority Scheduling</span>
            </div>

            <h3
              id="modal-title"
              className="mt-0.5 text-[18px] sm:text-[21px] font-bold text-[var(--ink)] tracking-tight leading-snug"
            >
              Book Your Dental Consultation
            </h3>

            <p className="mt-0.5 text-[11.5px] sm:text-[12.5px] text-[var(--ink-soft)] leading-relaxed">
              Direct reservation with senior specialists at Molar Dental Hospital. Zero wait times.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="h-8 w-8 shrink-0 rounded-none border border-[var(--line)] hover:border-[var(--ink)] hover:bg-[var(--card-soft)] text-[var(--ink-soft)] hover:text-[var(--ink)] flex items-center justify-center transition-all duration-200 cursor-pointer outline-none focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body — Smooth scroll on short viewports */}
        <div className="overflow-y-auto overscroll-contain p-4 sm:p-6 flex-1">
          {submitted ? (
            /* ================= Confirmation Receipt State ================= */
            <div className="py-2 text-center">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-none bg-[#E9F7EF] dark:bg-[#0B291A] text-[#00B050] border border-[#00B050]/20 mb-3">
                <Check className="w-5 h-5" strokeWidth={2.5} />
              </div>

              <h4 className="text-[19px] font-bold text-[var(--ink)] tracking-tight">
                Appointment Request Confirmed
              </h4>

              <p className="mt-1 text-[12.5px] text-[var(--ink-soft)] max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[var(--ink)]">{formData.name}</span>. Our clinic desk in Indresham has logged your priority reservation.
              </p>

              {/* Receipt Summary Card */}
              <div className="mt-5 rounded-none border border-[var(--line)] bg-[var(--page)] p-3.5 text-left space-y-2">
                <div className="flex justify-between items-center text-[12px] border-b border-[var(--line)]/60 pb-1.5">
                  <span className="text-[var(--ink-soft)]">Treatment</span>
                  <span className="font-semibold text-[var(--ink)]">{formData.service}</span>
                </div>
                <div className="flex justify-between items-center text-[12px] border-b border-[var(--line)]/60 pb-1.5">
                  <span className="text-[var(--ink-soft)]">Scheduled Slot</span>
                  <span className="font-semibold text-[var(--ink)]">{formData.timeSlot}</span>
                </div>
                {formData.date && (
                  <div className="flex justify-between items-center text-[12px] border-b border-[var(--line)]/60 pb-1.5">
                    <span className="text-[var(--ink-soft)]">Preferred Date</span>
                    <span className="font-semibold text-[var(--ink)]">{formData.date}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-[var(--ink-soft)]">Confirmation Sent To</span>
                  <span className="font-semibold text-[var(--ink)]">+91 {formData.phone}</span>
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center bg-[#143A66] hover:bg-[#0E2A4D] dark:bg-[#0072CE] dark:hover:bg-[#005FA8] text-white text-[13px] font-semibold py-2.5 rounded-none transition-colors duration-200 cursor-pointer outline-none focus:outline-none"
                >
                  Close Window
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full inline-flex items-center justify-center border border-[var(--line)] hover:border-[var(--ink)] bg-[var(--card)] hover:bg-[var(--card-soft)] text-[var(--ink)] text-[13px] font-semibold py-2.5 rounded-none transition-colors duration-200 cursor-pointer outline-none focus:outline-none"
                >
                  Book Another
                </button>
              </div>
            </div>
          ) : (
            /* ================= Form State ================= */
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {/* Patient Full Name */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--ink)] mb-1">
                  Patient Full Name <span className="text-[#0072CE]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vamsi Krishna"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--page)] border border-[var(--line)] rounded-none px-3 py-2 sm:py-2.5 text-[13px] sm:text-[13.5px] text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:border-[#0072CE] focus:bg-[var(--card)] outline-none focus:outline-none transition-all duration-200"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                  <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--ink)]">
                    Mobile Number <span className="text-[#0072CE]">*</span>
                  </label>
                  <span className="text-[10px] text-[var(--ink-faint)]">
                    SMS & WhatsApp confirmation
                  </span>
                </div>
                <div className="relative flex">
                  <span className="inline-flex items-center px-2.5 sm:px-3 border border-r-0 border-[var(--line)] bg-[var(--card-soft)] text-[12.5px] sm:text-[13px] font-semibold text-[var(--ink-soft)] select-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    className="w-full bg-[var(--page)] border border-[var(--line)] rounded-none px-3 py-2 sm:py-2.5 text-[13px] sm:text-[13.5px] text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:border-[#0072CE] focus:bg-[var(--card)] outline-none focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Select Treatment — Custom Glassmorphic Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--ink)] mb-1">
                  Select Treatment <span className="text-[#0072CE]">*</span>
                </label>

                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="h-10 sm:h-11 w-full flex items-center justify-between rounded-none border border-[var(--line)] bg-[var(--page)] hover:bg-[var(--card-soft)] px-3 py-2 sm:py-2.5 text-[13px] sm:text-[13.5px] text-[var(--ink)] transition-colors focus:border-[#0072CE] focus:bg-[var(--card)] outline-none focus:outline-none cursor-pointer select-none"
                >
                  <span className="truncate">{formData.service}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[var(--ink-soft)] shrink-0 ml-2 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180 text-[#0072CE]" : ""
                    }`}
                  />
                </button>

                {/* Glassmorphic Dropdown Popup */}
                {isDropdownOpen && (
                  <div
                    role="listbox"
                    className="absolute top-[calc(100%+4px)] left-0 right-0 z-50 max-h-56 overflow-y-auto rounded-none border border-white/40 dark:border-white/10 bg-[var(--card)]/80 dark:bg-[#0E1721]/85 backdrop-blur-2xl shadow-[0_18px_40px_-10px_rgba(10,34,59,0.25)] dark:shadow-[0_18px_40px_-10px_rgba(0,0,0,0.7)] py-1 animate-in fade-in zoom-in-95 duration-150"
                  >
                    {availableServices.map((service) => {
                      const isSelected = formData.service === service;
                      return (
                        <button
                          key={service}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            setFormData({ ...formData, service });
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2 text-left text-[12.5px] sm:text-[13px] transition-colors cursor-pointer outline-none focus:outline-none ${
                            isSelected
                              ? "bg-[#0072CE]/12 text-[#0072CE] font-semibold"
                              : "text-[var(--ink)] hover:bg-[var(--card-soft)]/90 hover:text-[#0072CE]"
                          }`}
                        >
                          <span className="truncate">{service}</span>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-[#0072CE] shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Interactive Preferred Time Slot Selection */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--ink)] mb-1">
                  Preferred Time Slot <span className="text-[#0072CE]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, timeSlot: "Morning (9 AM – 2 PM)" })
                    }
                    className={`px-2 py-2 sm:py-2.5 text-center text-[11px] sm:text-[12px] font-semibold rounded-none border transition-all duration-200 cursor-pointer outline-none focus:outline-none ${
                      formData.timeSlot.startsWith("Morning")
                        ? "bg-[#143A66] dark:bg-[#0072CE] text-white border-[#143A66] dark:border-[#0072CE] shadow-xs"
                        : "bg-[var(--page)] text-[var(--ink-soft)] border-[var(--line)] hover:text-[var(--ink)] hover:border-[var(--ink)]/40 hover:bg-[var(--card-soft)]"
                    }`}
                  >
                    Morning (9 AM – 2 PM)
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, timeSlot: "Evening (5 PM – 9 PM)" })
                    }
                    className={`px-2 py-2 sm:py-2.5 text-center text-[11px] sm:text-[12px] font-semibold rounded-none border transition-all duration-200 cursor-pointer outline-none focus:outline-none ${
                      formData.timeSlot.startsWith("Evening")
                        ? "bg-[#143A66] dark:bg-[#0072CE] text-white border-[#143A66] dark:border-[#0072CE] shadow-xs"
                        : "bg-[var(--page)] text-[var(--ink-soft)] border-[var(--line)] hover:text-[var(--ink)] hover:border-[var(--ink)]/40 hover:bg-[var(--card-soft)]"
                    }`}
                  >
                    Evening (5 PM – 9 PM)
                  </button>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--ink)] mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={today}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[var(--page)] border border-[var(--line)] rounded-none px-3 py-2 sm:py-2.5 text-[13px] sm:text-[13.5px] text-[var(--ink)] focus:border-[#0072CE] focus:bg-[var(--card)] outline-none focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Primary Action Button */}
              <div className="pt-1.5">
                <button
                  type="submit"
                  className="group relative w-full flex items-center justify-center gap-2 bg-[#143A66] hover:bg-[#0E2A4D] dark:bg-[#0072CE] dark:hover:bg-[#005FA8] text-white font-semibold text-[13px] sm:text-[13.5px] py-3 sm:py-3.5 rounded-none shadow-md transition-all duration-200 cursor-pointer active:scale-[0.99] outline-none focus:outline-none"
                >
                  <span>Confirm Appointment Booking</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="flex items-center justify-center gap-1.5 text-[10.5px] sm:text-[11px] text-[var(--ink-soft)] pt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00B050] shrink-0" />
                <span>Free cancellation anytime &middot; No advance payment required</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
