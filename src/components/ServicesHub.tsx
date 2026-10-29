"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import AppointmentModal from "@/components/AppointmentModal";
import { services } from "@/data/services";

export default function ServicesHub() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Comprehensive Oral Checkup");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsBookingOpen(true);
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
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] max-w-3xl">
              Dental treatments,
              <br className="hidden sm:block" /> all under one roof
            </h1>
            <p className="mt-5 max-w-xl text-sm sm:text-base text-[var(--ink-faint)] font-normal leading-relaxed">
              From single-sitting root canals and implants to aligners, crowns, whitening and
              diagnostics — every treatment is planned digitally and delivered with gentle,
              hospital-grade care in Indresham, Patancheru.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenBooking("Comprehensive Oral Checkup")}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#123B65] text-sm font-bold px-6 py-3 rounded-full shadow-md transition-all hover:scale-[1.03] active:scale-100 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#2675D8]" />
                <span>Book a Consultation</span>
              </button>

              <a
                href="tel:+919133933392"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-full backdrop-blur-md transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 91339 33392</span>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium text-[var(--ink-faint)]">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#39A852]" />
                Sterile, hospital-grade protocols
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#39A852]" />
                Digital diagnosis & treatment planning
              </span>
            </div>
          </div>
        </section>

        {/* ================= SERVICE CARDS ================= */}
        <section className="bg-[var(--page)] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-[var(--card)] rounded-xl border border-[var(--line)] overflow-hidden flex flex-col hover:border-[#2675D8]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="h-40 sm:h-44 w-full overflow-hidden bg-[var(--card-soft)]">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2675D8] mb-2">
                      {service.category}
                    </span>
                    <h2 className="text-lg font-bold text-[var(--ink)] tracking-tight leading-snug mb-2">
                      {service.name}
                    </h2>
                    <p className="text-xs text-[var(--ink-soft)] leading-relaxed font-normal mb-5">
                      {service.summary}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--ink)] group-hover:text-[#2675D8] transition-colors">
                      <span>Read more</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-[#090C10] text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Not sure which treatment you need?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--ink-faint)] font-normal">
              Book a comprehensive oral checkup. Our specialists will examine, take digital X-rays
              if required, and recommend the right plan for your smile.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => handleOpenBooking("Comprehensive Oral Checkup")}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#123B65] text-sm font-bold px-6 py-3 rounded-full transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#2675D8]" />
                <span>Book an Appointment</span>
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <span>Contact the clinic</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
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
