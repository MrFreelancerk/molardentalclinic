"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Phone, CheckCircle2, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import AppointmentModal from "@/components/AppointmentModal";
import { services, type Service } from "@/data/services";

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const related = services.filter((item) => item.slug !== service.slug);

  return (
    <div className="relative min-h-screen bg-[var(--page)]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main>
        {/* ================= HERO ================= */}
        <section className="relative bg-[#090C10] text-white pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 w-[420px] h-[420px] bg-[#2675D8]/20 blur-3xl rounded-full"
          />

          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[var(--ink-soft)] mb-7"
            >
              <Link href="/" className="hover:text-slate-300 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-slate-300 transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-slate-300">{service.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#39A852] mb-4">
                  {service.category}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.08]">
                  {service.heroTitle}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal">
                  {service.heroSubtitle}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#123B65] text-sm font-bold px-6 py-3 rounded-full shadow-md transition-all hover:scale-[1.03] active:scale-100 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#2675D8]" />
                    <span>Book this treatment</span>
                  </button>

                  <a
                    href="tel:+919133933392"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-full backdrop-blur-md transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Call the clinic</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] w-full">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section className="bg-[var(--page)] py-14 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-base sm:text-lg text-[var(--ink)] leading-relaxed font-normal">
              {service.intro[0]}
            </p>
            {service.intro.slice(1).map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed font-normal"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-10 pt-8 border-t border-[var(--line)]">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--ink)] tracking-tight mb-3">
                {service.whatIs.heading}
              </h2>
              {service.whatIs.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed font-normal"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ================= DETAIL BLOCKS ================= */}
        <section className="bg-[var(--surface-alt)] border-t border-[var(--line)] py-14 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-14">
            {service.blocks.map((block) => (
              <div key={block.heading}>
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--ink)] tracking-tight mb-2">
                  {block.heading}
                </h2>
                {block.intro && (
                  <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-normal mb-5 max-w-2xl">
                    {block.intro}
                  </p>
                )}

                {block.kind === "list" ? (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-5">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#39A852] shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--ink)] leading-relaxed font-normal">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ol className="space-y-3 mt-5">
                    {block.items.map((step, index) => (
                      <li
                        key={step.title}
                        className="flex items-start gap-4 bg-[var(--card)] border border-[var(--line)] rounded-xl p-4 sm:p-5"
                      >
                        <span className="w-9 h-9 rounded-full bg-[var(--blue-soft)] text-[#2675D8] text-[11px] font-bold flex items-center justify-center shrink-0">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-sm font-bold text-[var(--ink)] leading-snug">
                            {step.title}
                          </h3>
                          {step.description && (
                            <p className="text-xs text-[var(--ink-soft)] leading-relaxed font-normal mt-1">
                              {step.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        {service.whyChoose && (
          <section className="bg-[var(--page)] py-14 sm:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="bg-[var(--card)] border border-[var(--line)] rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--ink)] tracking-tight mb-2">
                  {service.whyChoose.heading}
                </h2>
                {service.whyChoose.intro && (
                  <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-normal mb-5 max-w-2xl">
                    {service.whyChoose.intro}
                  </p>
                )}

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {service.whyChoose.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#39A852] shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--ink)] leading-relaxed font-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="mt-7 inline-flex items-center gap-2 bg-[#2675D8] hover:bg-[#1C5EB0] text-white text-sm font-bold px-6 py-3 rounded-full shadow-sm transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book your consultation</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ================= CLOSING CTA ================= */}
        <section className="bg-[#090C10] text-white py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {service.closing.heading}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--ink-faint)] leading-relaxed font-normal">
              {service.closing.body}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#123B65] text-sm font-bold px-6 py-3 rounded-full transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#2675D8]" />
                <span>Book an Appointment</span>
              </button>
              <a
                href="tel:+919133933392"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 91339 33392</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================= RELATED SERVICES ================= */}
        <section className="bg-[var(--page)] border-t border-[var(--line)] py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--ink-faint)] mb-4">
              Other treatments
            </p>
            <div className="flex flex-wrap gap-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="inline-flex items-center gap-1.5 border border-[var(--line)] rounded-full px-4 py-2 text-xs font-medium text-[var(--ink)] hover:border-[#2675D8] hover:text-[#2675D8] transition-colors"
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={service.name}
      />
    </div>
  );
}
