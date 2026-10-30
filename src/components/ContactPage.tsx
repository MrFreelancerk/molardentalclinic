"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Check,
  MessageCircle,
  ArrowUpRight,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import AppointmentModal from "@/components/AppointmentModal";

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
  "h-11 w-full rounded-lg border border-[var(--line)] bg-[var(--page)] px-3.5 text-[13.5px] text-[var(--ink)] placeholder:text-[var(--ink-faint)] transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/15";

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Comprehensive Oral Checkup");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Comprehensive Oral Checkup",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
        <section className="bg-[var(--navy)] pb-14 pt-32 text-white sm:pb-20 sm:pt-40">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
                Contact
              </p>
              <h1 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[52px]">
                Get in touch with
                <br className="hidden sm:block" /> Molar Dental Hospital.
              </h1>
              <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-white/65 sm:text-[15px]">
                Call, message, or walk in during clinic hours. Our front desk will help you pick
                the right specialist, plan a treatment, or reschedule an existing visit.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleOpenBooking("Comprehensive Oral Checkup")}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[14px] font-semibold text-[#0e2439] transition-colors hover:bg-white/90 cursor-pointer"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Book an appointment
                </button>

                <a
                  href="tel:+919133933392"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-5 text-[14px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
                >
                  <Phone className="h-4 w-4 text-white/70" aria-hidden="true" />
                  +91 91339 33392
                </a>

                <a
                  href="https://wa.me/919133933392?text=Hello%20Molar%20Dental%20Hospital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 px-2 text-[13.5px] font-medium text-white/70 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact cards */}
        <section className="border-b border-[var(--line)] bg-[var(--card)] py-16 sm:py-20">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-[var(--card)] p-6">
                <Phone className="h-4.5 w-4.5 text-[var(--accent)]" strokeWidth={1.75} aria-hidden="true" />
                <h2 className="mt-4 text-[13.5px] font-semibold text-[var(--ink)]">Call us</h2>
                <p className="mt-1 text-[12px] leading-relaxed text-[var(--ink-soft)]">
                  Front desk, 9 AM – 2 PM &amp; 5 PM – 9 PM
                </p>
                <div className="mt-3 space-y-1 text-[13px]">
                  <a href="tel:+919133933392" className="block font-medium text-[var(--ink)] hover:text-[var(--accent)]">
                    +91 91339 33392
                  </a>
                  <a href="tel:+917893983913" className="block font-medium text-[var(--ink)] hover:text-[var(--accent)]">
                    +91 78939 83913
                  </a>
                </div>
              </div>

              <div className="bg-[var(--card)] p-6">
                <Mail className="h-4.5 w-4.5 text-[var(--accent)]" strokeWidth={1.75} aria-hidden="true" />
                <h2 className="mt-4 text-[13.5px] font-semibold text-[var(--ink)]">Email us</h2>
                <p className="mt-1 text-[12px] leading-relaxed text-[var(--ink-soft)]">
                  Reports, estimates and general queries
                </p>
                <a
                  href="mailto:molardentalhospital@gmail.com"
                  className="mt-3 block break-all text-[13px] font-medium text-[var(--ink)] hover:text-[var(--accent)]"
                >
                  molardentalhospital@gmail.com
                </a>
              </div>

              <div className="bg-[var(--card)] p-6">
                <MapPin className="h-4.5 w-4.5 text-[var(--accent)]" strokeWidth={1.75} aria-hidden="true" />
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
                <Clock className="h-4.5 w-4.5 text-[var(--accent)]" strokeWidth={1.75} aria-hidden="true" />
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

        {/* Form + map */}
        <section className="py-16 sm:py-20">
          <div className="container-page">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 sm:p-8">
                  {submitted ? (
                    <div className="py-10 text-center">
                      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                        <Check className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <h2 className="mt-4 text-[18px] font-semibold text-[var(--ink)]">
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
                        className="mt-6 text-[13px] font-semibold text-[var(--accent)] hover:text-[var(--accent-strong)] cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-[var(--ink)]">
                        Send us a message
                      </h2>
                      <p className="mt-2 mb-7 text-[13px] text-[var(--ink-soft)]">
                        Share a few details and we&apos;ll call you back to confirm a time.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-1.5">
                            <label htmlFor="contact-name" className="block text-[12.5px] font-semibold text-[var(--ink)]">
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
                            <label htmlFor="contact-phone" className="block text-[12.5px] font-semibold text-[var(--ink)]">
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
                            <label htmlFor="contact-email" className="block text-[12.5px] font-semibold text-[var(--ink)]">
                              Email address <span className="font-normal text-[var(--ink-faint)]">(optional)</span>
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

                          <div className="space-y-1.5">
                            <label htmlFor="contact-service" className="block text-[12.5px] font-semibold text-[var(--ink)]">
                              Reason for visit
                            </label>
                            <select
                              id="contact-service"
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                              className={fieldClass}
                            >
                              {services.map((service) => (
                                <option key={service}>{service}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="contact-message" className="block text-[12.5px] font-semibold text-[var(--ink)]">
                            Message
                          </label>
                          <textarea
                            id="contact-message"
                            rows={4}
                            placeholder="Tell us about your symptoms, or ask anything about treatment and pricing."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full resize-none rounded-lg border border-[var(--line)] bg-[var(--page)] px-3.5 py-3 text-[13.5px] leading-relaxed text-[var(--ink)] placeholder:text-[var(--ink-faint)] transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/15"
                          />
                        </div>

                        <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
                          <button
                            type="submit"
                            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-[13px] font-semibold text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-strong)] cursor-pointer"
                          >
                            <Send className="h-4 w-4" aria-hidden="true" />
                            Send message
                          </button>

                          <a
                            href="https://wa.me/919133933392?text=Hello%20Molar%20Dental%20Hospital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                          >
                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                            Prefer WhatsApp?
                          </a>
                        </div>

                        <p className="flex items-center gap-2 pt-1 text-[11.5px] text-[var(--ink-soft)]">
                          <ShieldCheck className="h-4 w-4 text-[var(--ink-faint)]" aria-hidden="true" />
                          Your details stay private. No advance payment required.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)]">
                  <div className="h-64 w-full bg-[var(--card-soft)] sm:h-72">
                    <iframe
                      title="Molar Dental Hospital location on Google Maps"
                      src={mapEmbedUrl}
                      className="h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="text-[15px] font-semibold text-[var(--ink)]">Find us</h2>
                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--ink-soft)]">
                      Near Shivaji Statue Junction, Indresham Road, Bachuguda, Patancheru,
                      Hyderabad, Telangana – 502319.
                    </p>

                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--accent)] hover:text-[var(--accent-strong)]"
                    >
                      Get directions
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>

                    <div className="mt-6 space-y-2 border-t border-[var(--line)] pt-5 text-[12px] text-[var(--ink-soft)]">
                      <p className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-[var(--ink-faint)]" aria-hidden="true" />
                        Mon – Sun, 9:00 AM – 2:00 PM &amp; 5:00 PM – 9:00 PM
                      </p>
                      <p className="flex items-center gap-2">
                        <ShieldCheck className="h-3.5 w-3.5 text-[var(--ink-faint)]" aria-hidden="true" />
                        Sterile, hospital-grade infection control
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
