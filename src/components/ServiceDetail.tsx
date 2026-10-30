"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Phone, Check, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import AppointmentModal from "@/components/AppointmentModal";
import { services, serviceSrcSet, type Service } from "@/data/services";

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const related = services.filter((item) => item.slug !== service.slug);

  return (
    <div className="min-h-screen bg-[var(--page)]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main id="main">
        {/* Hero */}
        <section className="bg-[var(--navy)] pb-14 pt-28 text-white sm:pb-16 sm:pt-36">
          <div className="container-page">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[11.5px] text-white/65">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <Link href="/services" className="transition-colors hover:text-white">
                Services
              </Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-white/80" aria-current="page">
                {service.name}
              </span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  {service.category}
                </p>
                <h1 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[48px]">
                  {service.heroTitle}
                </h1>
                <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-white/65 sm:text-[15px]">
                  {service.heroSubtitle}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[14px] font-semibold text-[#0e2439] transition-colors hover:bg-white/90 cursor-pointer"
                  >
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    Book this treatment
                  </button>

                  <a
                    href="tel:+919133933392"
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-5 text-[14px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
                  >
                    <Phone className="h-4 w-4 text-white/70" aria-hidden="true" />
                    Call the clinic
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={service.image}
                    srcSet={serviceSrcSet(service.image)}
                    sizes="(min-width: 1024px) 40vw, 92vw"
                    alt={service.imageAlt}
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="border-b border-[var(--line)] bg-[var(--page)] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-[15px] font-normal leading-relaxed text-[var(--ink)] sm:text-[16px]">
              {service.intro[0]}
            </p>
            {service.intro.slice(1).map((paragraph) => (
              <p key={paragraph} className="mt-4 text-[14px] leading-relaxed text-[var(--ink-soft)]">
                {paragraph}
              </p>
            ))}

            <div className="mt-10 border-t border-[var(--line)] pt-8">
              <h2 className="text-[22px] font-semibold leading-snug tracking-[-0.02em] text-[var(--ink)] sm:text-[26px]">
                {service.whatIs.heading}
              </h2>
              {service.whatIs.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-[14px] leading-relaxed text-[var(--ink-soft)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Detail blocks */}
        <section className="border-b border-[var(--line)] bg-[var(--surface-alt)] py-16 sm:py-20">
          <div className="mx-auto max-w-4xl space-y-12 px-6 sm:space-y-16">
            {service.blocks.map((block) => (
              <div key={block.heading}>
                <h2 className="text-[22px] font-semibold leading-snug tracking-[-0.02em] text-[var(--ink)] sm:text-[26px]">
                  {block.heading}
                </h2>
                {block.intro && (
                  <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
                    {block.intro}
                  </p>
                )}

                {block.kind === "list" ? (
                  <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--accent)]"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        <span className="text-[13.5px] leading-relaxed text-[var(--ink)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ol className="mt-5 space-y-2.5">
                    {block.items.map((step, index) => (
                      <li
                        key={step.title}
                        className="flex items-start gap-4 rounded-xl border border-[var(--line)] bg-[var(--card)] p-4 sm:p-5"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[11px] font-semibold text-[var(--accent)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-[13.5px] font-semibold leading-snug text-[var(--ink)]">
                            {step.title}
                          </h3>
                          {step.description && (
                            <p className="mt-1 text-[13px] leading-relaxed text-[var(--ink-soft)]">
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

        {/* Why choose us */}
        {service.whyChoose && (
          <section className="border-b border-[var(--line)] bg-[var(--page)] py-16 sm:py-20">
            <div className="mx-auto max-w-4xl px-6">
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 sm:p-8">
                <h2 className="text-[22px] font-semibold leading-snug tracking-[-0.02em] text-[var(--ink)] sm:text-[26px]">
                  {service.whyChoose.heading}
                </h2>
                {service.whyChoose.intro && (
                  <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
                    {service.whyChoose.intro}
                  </p>
                )}

                <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {service.whyChoose.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--accent)]"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      <span className="text-[13.5px] leading-relaxed text-[var(--ink)]">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-[13px] font-semibold text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-strong)] cursor-pointer"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Book your consultation
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Closing CTA */}
        <section className="bg-[var(--navy)] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.02em] sm:text-[34px]">
              {service.closing.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-white/65">
              {service.closing.body}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setIsBookingOpen(true)}
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
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="border-t border-[var(--line)] bg-[var(--page)] py-12">
          <div className="mx-auto max-w-4xl px-6">
            <p className="eyebrow">Other treatments</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] px-3.5 py-2 text-[12.5px] font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
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
