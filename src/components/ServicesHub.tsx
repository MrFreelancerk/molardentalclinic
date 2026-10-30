"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calendar,
  Phone,
  ArrowRight,
  Check,
  Search,
  X,
  ShieldCheck,
  Stethoscope,
  ScanLine,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import AppointmentModal from "@/components/AppointmentModal";
import { services, serviceSrcSet } from "@/data/services";

const serviceHighlights: Record<
  string,
  { badge: string; categoryGroup: string; features: string[] }
> = {
  "root-canal-treatment": {
    badge: "100% Painless",
    categoryGroup: "Endodontics & Restorative",
    features: ["Save Natural Tooth", "Single-Visit Option"],
  },
  "dental-implants": {
    badge: "Lifelong Solution",
    categoryGroup: "Implants & Oral Surgery",
    features: ["Natural Chewing Force", "German Titanium"],
  },
  "invisible-aligners": {
    badge: "Virtually Invisible",
    categoryGroup: "Orthodontics & Aligners",
    features: ["Removable Trays", "Custom 3D Digital Plan"],
  },
  "braces": {
    badge: "Precise Alignment",
    categoryGroup: "Orthodontics & Aligners",
    features: ["Ceramic & Metal", "Complete Bite Correction"],
  },
  "zirconia-crowns": {
    badge: "Natural Aesthetics",
    categoryGroup: "Endodontics & Restorative",
    features: ["Metal-Free Ceramic", "Ultra-High Durability"],
  },
  "digital-rvg-x-ray": {
    badge: "Instant Diagnosis",
    categoryGroup: "Cosmetics & Diagnostics",
    features: ["90% Low Radiation", "HD Digital Imaging"],
  },
  "teeth-whitening": {
    badge: "Same-Day Glow",
    categoryGroup: "Cosmetics & Diagnostics",
    features: ["Safe Enamel Care", "Up to 8 Shades Whiter"],
  },
  "tooth-extraction": {
    badge: "Gentle Recovery",
    categoryGroup: "Implants & Oral Surgery",
    features: ["Zero-Pain Extraction", "Fast Healing Protocol"],
  },
};

const categoryFilters = [
  "All Treatments",
  "Endodontics & Restorative",
  "Orthodontics & Aligners",
  "Implants & Oral Surgery",
  "Cosmetics & Diagnostics",
];

export default function ServicesHub() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Comprehensive Oral Checkup");
  const [activeCategory, setActiveCategory] = useState("All Treatments");
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const resetFilters = () => {
    setActiveCategory("All Treatments");
    setSearchQuery("");
  };

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const highlight = serviceHighlights[service.slug];
      const matchesCategory =
        activeCategory === "All Treatments" ||
        highlight?.categoryGroup === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        service.name.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q) ||
        service.summary.toLowerCase().includes(q) ||
        highlight?.features.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[var(--page)] text-[var(--ink)]">
      <Navbar onOpenBooking={() => handleOpenBooking("Comprehensive Oral Checkup")} />

      <main id="main">
        {/* ================= HERO ================= */}
        <section className="bg-[var(--navy)] text-white pt-32 pb-14 sm:pt-40 sm:pb-18 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8CBBE4]">
                Treatments &middot; Indresham, Patancheru
              </p>

              <h1 className="mt-5 text-[32px] sm:text-[44px] lg:text-[52px] font-bold tracking-[-0.025em] leading-[1.06]">
                Dental treatments,
                <br className="hidden sm:block" />{" "}
                <span className="text-white/55">all under one roof.</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm sm:text-[15px] leading-relaxed text-slate-300/90">
                Specialised, gentle care planned digitally and performed by senior
                specialists — with hospital-grade sterilisation and modern technology.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleOpenBooking("Comprehensive Oral Checkup")}
                  className="inline-flex h-12 items-center gap-2 bg-white hover:bg-white/90 text-[#0e2439] text-[14px] font-semibold px-6 rounded-full transition-colors duration-200 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Consultation</span>
                </button>

                <a
                  href="tel:+919133933392"
                  className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 hover:bg-white/5 text-white text-[13px] font-medium px-5 py-3 rounded-full transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-white/70" />
                  <span>+91 91339 33392</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FILTERS ================= */}
        <section className="sticky top-16 z-20 bg-[var(--card)]/95 backdrop-blur-md border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 py-3.5">
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar -mx-1 px-1">
                {categoryFilters.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      aria-pressed={isActive}
                      className={`shrink-0 px-3.5 py-2 rounded-full text-[12.5px] whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[var(--ink)] text-[var(--card)] font-semibold"
                          : "text-[var(--ink-soft)] hover:text-[var(--ink)] hover:bg-[var(--card-soft)] font-medium"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full lg:w-64 shrink-0">
                <Search className="w-4 h-4 text-[var(--ink-faint)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search treatments"
                  aria-label="Search treatments"
                  className="w-full h-10 pl-9 pr-9 bg-[var(--page)] border border-[var(--line)] rounded-full text-[13px] text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--ink-faint)] hover:text-[var(--ink)] cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ================= TREATMENTS ================= */}
        <section className="py-10 sm:py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
            <div className="flex items-baseline justify-between gap-4 mb-7">
              <p className="text-[12.5px] text-[var(--ink-soft)]">
                {filteredServices.length} treatment{filteredServices.length === 1 ? "" : "s"}
                {activeCategory !== "All Treatments" && (
                  <span className="text-[var(--ink-faint)]"> &middot; {activeCategory}</span>
                )}
              </p>

              {(activeCategory !== "All Treatments" || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="text-[12.5px] font-medium text-[var(--accent)] hover:text-[var(--accent-strong)] hover:underline underline-offset-4 cursor-pointer"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredServices.length === 0 && (
              <div className="py-16 px-6 text-center bg-[var(--card)] rounded-2xl border border-[var(--line)] max-w-md mx-auto">
                <Stethoscope className="w-8 h-8 text-[var(--ink-faint)] mx-auto" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-semibold text-[var(--ink)]">
                  No treatments found
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--ink-soft)]">
                  Nothing matches &ldquo;{searchQuery}&rdquo;. Try a different term or
                  browse all treatments.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-6 inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--card)] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <span>View all treatments</span>
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service) => {
                const highlight = serviceHighlights[service.slug];

                return (
                  <article
                    key={service.slug}
                    className="group flex flex-col rounded-2xl bg-[var(--card)] border border-[var(--line)] overflow-hidden transition-all duration-300 hover:border-[var(--ink)]/20 hover:shadow-[0_20px_40px_-24px_rgba(10,34,59,0.35)]"
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="relative block aspect-[4/3] overflow-hidden bg-[var(--card-soft)]"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <img
                        src={service.image}
                        srcSet={serviceSrcSet(service.image)}
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        alt={service.imageAlt || service.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />

                      {highlight?.badge && (
                        <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10.5px] font-semibold tracking-wide text-[#0e2439] shadow-sm">
                          <Check className="w-3 h-3 text-[var(--accent)]" strokeWidth={3} />
                          {highlight.badge}
                        </span>
                      )}
                    </Link>

                    <div className="flex flex-col flex-1 p-5 sm:p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                        {service.category}
                      </p>

                      <h3 className="mt-2 text-[18px] font-bold tracking-[-0.01em] leading-snug text-[var(--ink)]">
                        <Link
                          href={`/services/${service.slug}`}
                          className="transition-colors hover:text-[var(--accent)] focus-visible:underline focus-visible:underline-offset-4"
                        >
                          {service.name}
                        </Link>
                      </h3>

                      <p className="mt-2 text-[13px] leading-[1.65] text-[var(--ink-soft)] line-clamp-2">
                        {service.summary}
                      </p>

                      {highlight?.features && highlight.features.length > 0 && (
                        <ul className="mt-4 space-y-1.5">
                          {highlight.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-[12.5px] leading-snug text-[var(--ink-soft)]"
                            >
                              <Check
                                className="w-3.5 h-3.5 mt-px text-[var(--ink-faint)] shrink-0"
                                strokeWidth={2.5}
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-auto pt-5">
                        <div className="flex items-center justify-between gap-3 border-t border-[var(--line)] pt-4">
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                          >
                            <span>View details</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </Link>

                          <button
                            type="button"
                            onClick={() => handleOpenBooking(service.name)}
                            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--ink-soft)] border border-[var(--line)] hover:border-[var(--ink)]/30 hover:text-[var(--ink)] px-3 py-1.5 rounded-full transition-colors duration-200 cursor-pointer"
                            title={`Book consultation for ${service.name}`}
                          >
                            <span>Book</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* ================= CLINIC ASSURANCE ================= */}
            <div className="mt-14 border-t border-[var(--line)] pt-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
                <div className="flex items-start gap-3.5">
                  <ShieldCheck className="w-5 h-5 mt-0.5 text-[var(--ink-faint)] shrink-0" strokeWidth={1.75} />
                  <div>
                    <h4 className="text-[13.5px] font-semibold text-[var(--ink)]">
                      Hospital-grade sterilisation
                    </h4>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--ink-soft)]">
                      Autoclaved German instrumentation and class-B sterile operatories.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <ScanLine className="w-5 h-5 mt-0.5 text-[var(--ink-faint)] shrink-0" strokeWidth={1.75} />
                  <div>
                    <h4 className="text-[13.5px] font-semibold text-[var(--ink)]">
                      Digital diagnostics
                    </h4>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--ink-soft)]">
                      Instant RVG digital imaging with 90% less radiation exposure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Stethoscope className="w-5 h-5 mt-0.5 text-[var(--ink-faint)] shrink-0" strokeWidth={1.75} />
                  <div>
                    <h4 className="text-[13.5px] font-semibold text-[var(--ink)]">
                      Senior specialists
                    </h4>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--ink-soft)]">
                      Experienced endodontists, implantologists and orthodontists.
                    </p>
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
