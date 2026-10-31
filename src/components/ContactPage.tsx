"use client";

import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Check,
  ArrowUpRight,
  Calendar,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import AppointmentModal from "@/components/AppointmentModal";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.174-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Molar+Dental+Hospital+Near+Shivaji+Statue+Junction+Indresham+Road+Bachuguda+Patancheru+502319";

const mapEmbedUrl =
  "https://www.google.com/maps?q=Molar+Dental+Hospital,+Indresham+Road,+Bachuguda,+Patancheru,+Hyderabad&output=embed";

const services = [
  "Comprehensive Oral Checkup",
  "Dental Implants & Restorations",
  "Single-Sitting Root Canal (RCT)",
  "Clear Invisible Aligners",
  "Laser Teeth Whitening",
  "Pediatric & Family Dentistry",
  "Emergency Tooth Pain",
];

const fieldClass =
  "h-11 w-full rounded-none border border-[var(--line)] bg-[var(--page)] px-3.5 text-[13.5px] text-[var(--ink)] placeholder:text-[var(--ink-faint)] transition-colors focus:border-[#0072CE] focus:bg-[var(--card)] outline-none focus:outline-none";

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Comprehensive Oral Checkup");
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Comprehensive Oral Checkup",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    if (!isServiceDropdownOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(e.target as Node)
      ) {
        setIsServiceDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsServiceDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isServiceDropdownOpen]);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--page)]">
      <Navbar onOpenBooking={() => handleOpenBooking("Comprehensive Oral Checkup")} />

      <main id="main">
        {/* Hero */}
        <section className="bg-[var(--navy)] pb-14 pt-32 text-white sm:pb-20 sm:pt-40 border-b border-white/10">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8CBBE4]">
                Contact
              </p>
              <h1 className="mt-4 text-[34px] font-normal leading-[1.05] tracking-[-0.03em] sm:text-[52px]">
                Get in touch with
                <br className="hidden sm:block" /> Molar Dental Hospital.
              </h1>
              <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
                Call, message, or walk in during clinic hours. Our front desk will help you pick
                the right specialist, plan a treatment, or reschedule an existing visit.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleOpenBooking("Comprehensive Oral Checkup")}
                  className="inline-flex h-12 items-center gap-2 rounded-none bg-white px-6 text-[14px] font-semibold text-[#0e2439] transition-colors hover:bg-white/90 cursor-pointer"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Book an appointment
                </button>

                <a
                  href="tel:+919133933392"
                  className="inline-flex h-12 items-center gap-2 rounded-none border border-white/25 px-5 text-[14px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
                >
                  <Phone className="h-4 w-4 text-white/70" aria-hidden="true" />
                  +91 91339 33392
                </a>

                {/* WhatsApp Hero Button — Highlighted in WhatsApp Green */}
                <a
                  href="https://wa.me/919133933392?text=Hello%20Molar%20Dental%20Hospital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2.5 rounded-none border border-[#00B050] bg-[#00B050]/20 hover:bg-[#00B050] text-[#00E676] hover:text-white px-5 text-[14px] font-semibold transition-all duration-200"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact info cards — Sharper borders */}
        <section className="border-b border-[var(--line)] bg-[var(--card)] py-14 sm:py-18">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-none border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4 shadow-xs">
              <div className="bg-[var(--card)] p-6">
                <Phone className="h-4.5 w-4.5 text-[#0072CE]" strokeWidth={1.75} aria-hidden="true" />
                <h2 className="mt-4 text-[13.5px] font-semibold text-[var(--ink)]">Call us</h2>
                <p className="mt-1 text-[12px] leading-relaxed text-[var(--ink-soft)]">
                  Front desk, 9 AM – 2 PM &amp; 5 PM – 9 PM
                </p>
                <div className="mt-3 space-y-1 text-[13px]">
                  <a href="tel:+919133933392" className="block font-medium text-[var(--ink)] hover:text-[#0072CE] transition-colors">
                    +91 91339 33392
                  </a>
                  <a href="tel:+917893983913" className="block font-medium text-[var(--ink)] hover:text-[#0072CE] transition-colors">
                    +91 78939 83913
                  </a>
                </div>
              </div>

              <div className="bg-[var(--card)] p-6">
                <Mail className="h-4.5 w-4.5 text-[#0072CE]" strokeWidth={1.75} aria-hidden="true" />
                <h2 className="mt-4 text-[13.5px] font-semibold text-[var(--ink)]">Email us</h2>
                <p className="mt-1 text-[12px] leading-relaxed text-[var(--ink-soft)]">
                  Reports, estimates and general queries
                </p>
                <a
                  href="mailto:molardentalhospital@gmail.com"
                  className="mt-3 block break-all text-[13px] font-medium text-[var(--ink)] hover:text-[#0072CE] transition-colors"
                >
                  molardentalhospital@gmail.com
                </a>
              </div>

              <div className="bg-[var(--card)] p-6">
                <MapPin className="h-4.5 w-4.5 text-[#0072CE]" strokeWidth={1.75} aria-hidden="true" />
                <h2 className="mt-4 text-[13.5px] font-semibold text-[var(--ink)]">Clinic address</h2>
                <p className="mt-1 text-[12px] leading-relaxed text-[var(--ink-soft)]">
                  Free valet parking, wheelchair access
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--ink)]">
                  Near Shivaji Statue Junction, Indresham Road, Bachuguda, Patancheru, Hyderabad,
                  Telangana – 502319
                </p>
              </div>

              <div className="bg-[var(--card)] p-6">
                <Clock className="h-4.5 w-4.5 text-[#0072CE]" strokeWidth={1.75} aria-hidden="true" />
                <h2 className="mt-4 text-[13.5px] font-semibold text-[var(--ink)]">Clinic hours</h2>
                <p className="mt-1 text-[12px] leading-relaxed text-[var(--ink-soft)]">
                  Open all seven days
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--ink)]">
                  Monday – Sunday
                  <br />
                  9:00 AM – 2:00 PM
                  <br />
                  5:00 PM – 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form + map: Both cards have identical height and sharp borders */}
        <section className="py-16 sm:py-20">
          <div className="container-page">
            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Left Column: Form Card */}
              <div className="lg:col-span-7 flex flex-col h-full">
                <div className="flex flex-col justify-between flex-1 h-full rounded-none border border-[var(--line)] bg-[var(--card)] p-6 sm:p-8 shadow-xs">
                  {submitted ? (
                    <div className="py-10 text-center my-auto">
                      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-none bg-[#E9F7EF] dark:bg-[#0B291A] text-[#00B050] border border-[#00B050]/20">
                        <Check className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <h2 className="mt-4 text-[19px] font-bold text-[var(--ink)]">
                        Message received
                      </h2>
                      <p className="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed text-[var(--ink-soft)]">
                        Thanks, <span className="font-semibold text-[var(--ink)]">{formData.name}</span>.
                        Our team will call you back at{" "}
                        <span className="font-semibold text-[var(--ink)]">{formData.phone}</span>{" "}
                        during clinic hours.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            phone: "",
                            email: "",
                            service: "Comprehensive Oral Checkup",
                            message: "",
                          });
                        }}
                        className="mt-6 inline-flex items-center justify-center rounded-none bg-[#143A66] hover:bg-[#0E2A4D] dark:bg-[#0072CE] dark:hover:bg-[#005FA8] text-white text-[13px] font-semibold px-5 py-2.5 transition-colors cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <div>
                        <h2 className="text-[22px] font-normal tracking-tight text-[var(--ink)]">
                          Send us a message
                        </h2>
                        <p className="mt-1.5 mb-7 text-[13px] text-[var(--ink-soft)]">
                          Share a few details and we&apos;ll call you back to confirm a time.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-1.5">
                              <label htmlFor="contact-name" className="block text-[12px] font-bold uppercase tracking-[0.06em] text-[var(--ink)]">
                                Full name
                              </label>
                              <input
                                id="contact-name"
                                type="text"
                                required
                                autoComplete="name"
                                placeholder="Vamsi Krishna"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className={fieldClass}
                              />
                            </div>

                            <div className="space-y-1.5">
                              <label htmlFor="contact-phone" className="block text-[12px] font-bold uppercase tracking-[0.06em] text-[var(--ink)]">
                                Mobile number
                              </label>
                              <input
                                id="contact-phone"
                                type="tel"
                                required
                                autoComplete="tel"
                                inputMode="tel"
                                pattern="[0-9+\s()-]{7,}"
                                placeholder="+91 98765 43210"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className={fieldClass}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-1.5">
                              <label htmlFor="contact-email" className="block text-[12px] font-bold uppercase tracking-[0.06em] text-[var(--ink)]">
                                Email address <span className="font-normal text-[var(--ink-faint)] lowercase">(optional)</span>
                              </label>
                              <input
                                id="contact-email"
                                type="email"
                                autoComplete="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className={fieldClass}
                              />
                            </div>

                            {/* Reason for visit — Custom Glassmorphic Dropdown */}
                            <div className="space-y-1.5 relative" ref={serviceDropdownRef}>
                              <label
                                id="reason-label"
                                className="block text-[12px] font-bold uppercase tracking-[0.06em] text-[var(--ink)]"
                              >
                                Reason for visit
                              </label>

                              <button
                                type="button"
                                aria-haspopup="listbox"
                                aria-expanded={isServiceDropdownOpen}
                                aria-labelledby="reason-label"
                                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                                className="h-11 w-full flex items-center justify-between rounded-none border border-[var(--line)] bg-[var(--page)] hover:bg-[var(--card-soft)] px-3.5 text-[13.5px] text-[var(--ink)] transition-colors focus:border-[#0072CE] focus:bg-[var(--card)] outline-none focus:outline-none cursor-pointer select-none"
                              >
                                <span className="truncate">{formData.service}</span>
                                <ChevronDown
                                  className={`w-4 h-4 text-[var(--ink-soft)] shrink-0 ml-2 transition-transform duration-200 ${
                                    isServiceDropdownOpen ? "rotate-180 text-[#0072CE]" : ""
                                  }`}
                                />
                              </button>

                              {/* Glassmorphic Options Menu */}
                              {isServiceDropdownOpen && (
                                <div
                                  role="listbox"
                                  aria-labelledby="reason-label"
                                  className="absolute top-[calc(100%+4px)] left-0 right-0 z-50 max-h-64 overflow-y-auto rounded-none border border-white/40 dark:border-white/10 bg-[var(--card)]/80 dark:bg-[#0E1721]/85 backdrop-blur-2xl shadow-[0_18px_40px_-10px_rgba(10,34,59,0.25)] dark:shadow-[0_18px_40px_-10px_rgba(0,0,0,0.7)] py-1.5 animate-in fade-in zoom-in-95 duration-150"
                                >
                                  {services.map((service) => {
                                    const isSelected = formData.service === service;
                                    return (
                                      <button
                                        key={service}
                                        type="button"
                                        role="option"
                                        aria-selected={isSelected}
                                        onClick={() => {
                                          setFormData({ ...formData, service });
                                          setIsServiceDropdownOpen(false);
                                        }}
                                        className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-[13px] transition-colors cursor-pointer outline-none focus:outline-none ${
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
                          </div>

                          <div className="space-y-1.5">
                            <label htmlFor="contact-message" className="block text-[12px] font-bold uppercase tracking-[0.06em] text-[var(--ink)]">
                              Message
                            </label>
                            <textarea
                              id="contact-message"
                              rows={4}
                              placeholder="Tell us about your symptoms, or ask anything about treatment and pricing."
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              className="w-full resize-none rounded-none border border-[var(--line)] bg-[var(--page)] px-3.5 py-3 text-[13.5px] leading-relaxed text-[var(--ink)] placeholder:text-[var(--ink-faint)] transition-colors focus:border-[#0072CE] focus:bg-[var(--card)] outline-none focus:outline-none"
                            />
                          </div>

                          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                            <button
                              type="submit"
                              className="inline-flex h-11 items-center justify-center gap-2 rounded-none bg-[#143A66] hover:bg-[#0E2A4D] dark:bg-[#0072CE] dark:hover:bg-[#005FA8] px-6 text-[13px] font-semibold text-white transition-colors cursor-pointer outline-none focus:outline-none"
                            >
                              <Send className="h-4 w-4" aria-hidden="true" />
                              <span>Send message</span>
                            </button>

                            {/* Prefer WhatsApp Button — Highlighted in WhatsApp Green */}
                            <a
                              href="https://wa.me/919133933392?text=Hello%20Molar%20Dental%20Hospital"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex h-11 items-center justify-center gap-2 rounded-none border border-[#00B050] bg-[#E9F7EF] dark:bg-[#0B291A]/50 px-5 text-[13px] font-semibold text-[#0B6B33] dark:text-[#25D366] transition-all hover:bg-[#00B050] hover:text-white group outline-none focus:outline-none"
                            >
                              <WhatsAppIcon className="h-4 w-4 fill-[#00B050] group-hover:fill-white transition-colors" />
                              <span>Prefer WhatsApp?</span>
                            </a>
                          </div>

                          <p className="flex items-center gap-2 pt-1 text-[11.5px] text-[var(--ink-soft)]">
                            <ShieldCheck className="h-4 w-4 text-[#00B050]" aria-hidden="true" />
                            Your details stay private. No advance payment required.
                          </p>
                        </form>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right Column: Google Maps Card — Stretches to match exact height */}
              <div className="lg:col-span-5 flex flex-col h-full">
                <div className="flex flex-col h-full overflow-hidden rounded-none border border-[var(--line)] bg-[var(--card)] shadow-xs">
                  {/* Map area expands to fill all available vertical space */}
                  <div className="relative w-full flex-1 min-h-[280px] bg-[var(--card-soft)]">
                    <iframe
                      title="Molar Dental Hospital location on Google Maps"
                      src={mapEmbedUrl}
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="shrink-0 p-6 border-t border-[var(--line)]">
                    <h2 className="text-[15px] font-bold text-[var(--ink)]">Find us</h2>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--ink-soft)]">
                      Near Shivaji Statue Junction, Indresham Road, Bachuguda, Patancheru,
                      Hyderabad, Telangana – 502319.
                    </p>

                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3.5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0072CE] hover:text-[#005FA8] transition-colors"
                    >
                      <span>Get directions</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>

                    <div className="mt-5 space-y-2 border-t border-[var(--line)] pt-4 text-[12px] text-[var(--ink-soft)]">
                      <p className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-[#0072CE]" aria-hidden="true" />
                        <span>Mon – Sun, 9:00 AM – 2:00 PM &amp; 5:00 PM – 9:00 PM</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#00B050]" aria-hidden="true" />
                        <span>Sterile, hospital-grade infection control</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}
