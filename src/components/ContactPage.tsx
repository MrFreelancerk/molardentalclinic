"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
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
    <div className="relative min-h-screen bg-[var(--page)]">
      <Navbar onOpenBooking={() => handleOpenBooking("Comprehensive Oral Checkup")} />

      <main>
        {/* ================= HERO ================= */}
        <section className="relative bg-[#090C10] text-white pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 w-[420px] h-[420px] bg-[#2675D8]/20 blur-3xl rounded-full"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#39A852]/10 blur-3xl rounded-full"
          />

          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#39A852] mb-4">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] max-w-3xl">
              Get in touch with
              <br className="hidden sm:block" /> Molar Dental Hospital
            </h1>
            <p className="mt-5 max-w-xl text-sm sm:text-base text-[var(--ink-faint)] font-normal leading-relaxed">
              Call, message, or walk in during clinic hours. Our front desk will help you pick the
              right specialist, plan a treatment, or reschedule an existing visit.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenBooking("Comprehensive Oral Checkup")}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#123B65] text-sm font-bold px-6 py-3 rounded-full shadow-md transition-all hover:scale-[1.03] active:scale-100 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#2675D8]" />
                <span>Book an Appointment</span>
              </button>

              <a
                href="tel:+919133933392"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-full backdrop-blur-md transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 91339 33392</span>
              </a>

              <a
                href="https://wa.me/919133933392?text=Hello%20Molar%20Dental%20Hospital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors px-2 py-3"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================= CONTACT DETAILS ================= */}
        <section className="bg-[var(--page)] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {/* Phone */}
              <div className="border border-[var(--line)] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--green-soft)] flex items-center justify-center mb-5">
                  <Phone className="w-4.5 h-4.5 text-[#39A852]" />
                </div>
                <h2 className="text-sm font-bold text-[var(--ink)] mb-1">Call us</h2>
                <p className="text-xs text-[var(--ink-soft)] mb-3 font-normal">
                  Front desk, 9 AM – 2 PM & 5 PM – 9 PM
                </p>
                <div className="space-y-1">
                  <a
                    href="tel:+919133933392"
                    className="block text-sm font-medium text-[var(--ink)] hover:text-[#2675D8] transition-colors"
                  >
                    +91 91339 33392
                  </a>
                  <a
                    href="tel:+917893983913"
                    className="block text-sm font-medium text-[var(--ink)] hover:text-[#2675D8] transition-colors"
                  >
                    +91 78939 83913
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="border border-[var(--line)] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--blue-soft)] flex items-center justify-center mb-5">
                  <Mail className="w-4.5 h-4.5 text-[#2675D8]" />
                </div>
                <h2 className="text-sm font-bold text-[var(--ink)] mb-1">Email us</h2>
                <p className="text-xs text-[var(--ink-soft)] mb-3 font-normal">
                  Reports, estimates, and queries
                </p>
                <a
                  href="mailto:molardentalhospital@gmail.com"
                  className="block text-sm font-medium text-[var(--ink)] hover:text-[#2675D8] transition-colors break-all"
                >
                  molardentalhospital@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="border border-[var(--line)] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--violet-soft)] flex items-center justify-center mb-5">
                  <MapPin className="w-4.5 h-4.5 text-[#7C5CD6]" />
                </div>
                <h2 className="text-sm font-bold text-[var(--ink)] mb-1">Clinic address</h2>
                <p className="text-xs text-[var(--ink-soft)] mb-3 font-normal">
                  Free valet parking, wheelchair access
                </p>
                <p className="text-sm text-[var(--ink)] leading-relaxed font-normal">
                  Near Shivaji Statue Junction, Indresham Road, Bachuguda, Patancheru, Hyderabad,
                  Telangana – 502319
                </p>
              </div>

              {/* Hours */}
              <div className="border border-[var(--line)] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--peach-soft)] flex items-center justify-center mb-5">
                  <Clock className="w-4.5 h-4.5 text-[#D98829]" />
                </div>
                <h2 className="text-sm font-bold text-[var(--ink)] mb-1">Clinic hours</h2>
                <p className="text-xs text-[var(--ink-soft)] mb-3 font-normal">
                  Open all seven days
                </p>
                <p className="text-sm text-[var(--ink)] leading-relaxed font-normal">
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

        {/* ================= FORM + MAP ================= */}
        <section className="bg-[var(--surface-alt)] border-t border-[var(--line)] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

              {/* Message form */}
              <div className="lg:col-span-7">
                <div className="bg-[var(--card)] border border-[var(--line)] rounded-2xl p-6 sm:p-8">
                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-[var(--green-soft)] text-[#39A852] flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h2 className="text-xl font-bold text-[var(--ink)] mb-2">Message received</h2>
                      <p className="text-sm text-[var(--ink-soft)] max-w-sm mx-auto leading-relaxed">
                        Thanks,{" "}
                        <span className="font-semibold text-[var(--ink)]">{formData.name}</span>. Our
                        team will call you back at{" "}
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
                        className="mt-6 text-sm font-semibold text-[#2675D8] hover:text-[#1C5EB0] transition-colors cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--ink)] tracking-tight">
                        Send us a message
                      </h2>
                      <p className="text-sm text-[var(--ink-soft)] mt-2 mb-7 font-normal">
                        Share a few details and we&apos;ll call you back to confirm a time.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="contact-name"
                              className="block text-xs font-semibold text-[var(--ink)] mb-1.5"
                            >
                              Full name *
                            </label>
                            <input
                              id="contact-name"
                              type="text"
                              required
                              placeholder="e.g. Vamsi Krishna"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              className="w-full bg-[var(--card-soft)] border border-[var(--line)] rounded-lg px-4 py-2.5 text-sm text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:outline-none focus:ring-2 focus:ring-[#2675D8]"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="contact-phone"
                              className="block text-xs font-semibold text-[var(--ink)] mb-1.5"
                            >
                              Mobile number *
                            </label>
                            <input
                              id="contact-phone"
                              type="tel"
                              required
                              pattern="[0-9+\s()-]{7,}"
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              className="w-full bg-[var(--card-soft)] border border-[var(--line)] rounded-lg px-4 py-2.5 text-sm text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:outline-none focus:ring-2 focus:ring-[#2675D8]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="contact-email"
                              className="block text-xs font-semibold text-[var(--ink)] mb-1.5"
                            >
                              Email address
                            </label>
                            <input
                              id="contact-email"
                              type="email"
                              placeholder="you@example.com"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              className="w-full bg-[var(--card-soft)] border border-[var(--line)] rounded-lg px-4 py-2.5 text-sm text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:outline-none focus:ring-2 focus:ring-[#2675D8]"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="contact-service"
                              className="block text-xs font-semibold text-[var(--ink)] mb-1.5"
                            >
                              Reason for visit
                            </label>
                            <select
                              id="contact-service"
                              value={formData.service}
                              onChange={(e) =>
                                setFormData({ ...formData, service: e.target.value })
                              }
                              className="w-full bg-[var(--card-soft)] border border-[var(--line)] rounded-lg px-3 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[#2675D8]"
                            >
                              {services.map((service) => (
                                <option key={service}>{service}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="contact-message"
                            className="block text-xs font-semibold text-[var(--ink)] mb-1.5"
                          >
                            Message
                          </label>
                          <textarea
                            id="contact-message"
                            rows={4}
                            placeholder="Tell us about your symptoms, or ask us anything about treatment and pricing."
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            className="w-full bg-[var(--card-soft)] border border-[var(--line)] rounded-lg px-4 py-3 text-sm text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:outline-none focus:ring-2 focus:ring-[#2675D8] resize-none"
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 bg-[#2675D8] hover:bg-[#1C5EB0] text-white text-sm font-bold px-6 py-3 rounded-full shadow-sm transition-colors cursor-pointer"
                          >
                            <Send className="w-4 h-4" />
                            <span>Send message</span>
                          </button>

                          <a
                            href="https://wa.me/919133933392?text=Hello%20Molar%20Dental%20Hospital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
                          >
                            <MessageCircle className="w-4 h-4 text-[#25D366]" />
                            <span>Prefer WhatsApp?</span>
                          </a>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-[var(--ink-soft)] pt-1">
                          <ShieldCheck className="w-4 h-4 text-[#39A852]" />
                          <span>Your details stay private. No advance payment required.</span>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* Map & directions */}
              <div className="lg:col-span-5">
                <div className="bg-[var(--card)] border border-[var(--line)] rounded-2xl overflow-hidden">
                  <div className="h-64 sm:h-72 w-full bg-[var(--card-soft)]">
                    <iframe
                      title="Molar Dental Hospital location on Google Maps"
                      src={mapEmbedUrl}
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="text-base font-bold text-[var(--ink)] mb-2">Find us</h2>
                    <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-normal">
                      Near Shivaji Statue Junction, Indresham Road, Bachuguda, Patancheru,
                      Hyderabad, Telangana – 502319.
                    </p>

                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#2675D8] hover:text-[#1C5EB0] transition-colors group"
                    >
                      <span>Get directions</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <div className="mt-6 pt-5 border-t border-[var(--line)] space-y-2 text-xs text-[var(--ink-soft)]">
                      <p className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#39A852]" />
                        <span>Mon – Sun, 9:00 AM – 2:00 PM &amp; 5:00 PM – 9:00 PM</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#39A852]" />
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
