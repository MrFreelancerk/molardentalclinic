"use client";

import Link from "next/link";
import { 
  Sparkles, 
  Smile, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Plus
} from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[var(--card-soft)] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-0" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-0" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= HEADER: SPLIT LAYOUT (LEFT TITLE, RIGHT DESC & CTA) ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-[var(--line)]/70">
          
          {/* Left: Bold Title */}
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2675D8] mb-2.5 block">
              Clinical Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--ink)] tracking-tight leading-[1.12]">
              Services We Provide <br />
              Are Listed Below
            </h2>
          </div>

          {/* Right: Description & Glossy Black Pill Button */}
          <div className="max-w-md flex flex-col items-start md:items-end text-left md:text-right">
            <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed mb-4 font-normal">
              Specialized, pain-free treatments performed with hospital-grade sterility, computerized anesthesia, and empathetic senior specialists.
            </p>
            <button
              onClick={() => onSelectService("Comprehensive Oral Checkup")}
              className="group inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold py-3 px-6 rounded-full shadow-md transition-all hover:scale-105 active:scale-100 cursor-pointer"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Subtle Section Tag Divider */}
        <div className="flex items-center justify-center gap-3 mb-10 text-[11px] font-bold uppercase tracking-widest text-[var(--ink-faint)]">
          <span className="w-8 h-px bg-[var(--line)]" />
          <span>our services</span>
          <span className="w-8 h-px bg-[var(--line)]" />
        </div>

        {/* ================= BENTO GRID: PASTEL CARDS & CLINIC PHOTOS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1: Soft Pastel Sage Green (Cavity & Scaling) */}
          <div className="bg-[var(--tint-green)] rounded-3xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-xs flex items-center justify-center text-[var(--ink)] shadow-2xs">
                  <ShieldCheck className="w-6 h-6 stroke-[1.75]" />
                </div>
                <Plus className="w-4 h-4 text-[var(--ink-soft)] group-hover:rotate-90 transition-transform" />
              </div>

              <h3 className="text-xl font-extrabold text-[var(--ink)] mb-2.5">
                Cavity Protection & Scaling
              </h3>
              <p className="text-xs text-[var(--ink)] leading-relaxed">
                Advanced ultrasonic cleaning, enamel fluoridation, and painless plaque removal for lifelong oral health.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ink)] hover:text-[#2675D8] transition-colors cursor-pointer group-hover:underline"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: Photo Card (Root Canal Therapy in Action) */}
          <div className="relative rounded-3xl overflow-hidden group shadow-xs hover:shadow-lg transition-all duration-300 min-h-[300px] flex flex-col justify-end">
            <img
              src="/services/root-canal-procedure-1200.webp"
              srcSet="/services/root-canal-procedure-640.webp 640w, /services/root-canal-procedure-1200.webp 1200w"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 92vw"
              alt="Root Canal Treatment at Molar Dental"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="relative z-10 p-6 text-white">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-emerald-500/90 text-white px-2.5 py-0.5 rounded-full mb-2">
                100% Pain-Free
              </span>
              <h4 className="text-lg font-bold leading-tight mb-1">
                Precision Micro-Endodontics
              </h4>
              <p className="text-[11px] text-slate-200 line-clamp-2 mb-3">
                Single-visit root canal completions using computer anesthesia and digital apex locators.
              </p>
              <button
                onClick={() => onSelectService("Single-Sitting Root Canal (RCT)")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <span>Book Root Canal</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 3: Soft Pastel Lavender / Lilac (Root Canal) */}
          <div className="bg-[var(--tint-violet)] rounded-3xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-xs flex items-center justify-center text-[var(--ink)] shadow-2xs">
                  <Zap className="w-6 h-6 stroke-[1.75]" />
                </div>
                <Plus className="w-4 h-4 text-[var(--ink-soft)] group-hover:rotate-90 transition-transform" />
              </div>

              <h3 className="text-xl font-extrabold text-[var(--ink)] mb-2.5">
                Single-Sitting Root Canal
              </h3>
              <p className="text-xs text-[var(--ink)] leading-relaxed">
                Save natural infected teeth in 45 minutes with zero sting numbing and rotary German endodontic precision.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="/services/root-canal-treatment"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ink)] hover:text-[#2675D8] transition-colors cursor-pointer group-hover:underline"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 4: Photo Card (Teeth Whitening Procedure) */}
          <div className="relative rounded-3xl overflow-hidden group shadow-xs hover:shadow-lg transition-all duration-300 min-h-[300px] flex flex-col justify-end">
            <img
              src="/services/teeth-whitening-1200.webp"
              srcSet="/services/teeth-whitening-640.webp 640w, /services/teeth-whitening-1200.webp 1200w"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 92vw"
              alt="Laser Teeth Whitening"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="relative z-10 p-6 text-white">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-blue-500/90 text-white px-2.5 py-0.5 rounded-full mb-2">
                Up to 8 Shades Whiter
              </span>
              <h4 className="text-lg font-bold leading-tight mb-1">
                Laser Teeth Whitening
              </h4>
              <p className="text-[11px] text-slate-200 line-clamp-2 mb-3">
                Safe clinical blue-light laser activation that lifts deep coffee, tea, and smoke stains in one sitting.
              </p>
              <button
                onClick={() => onSelectService("Laser Teeth Whitening")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-blue-300 transition-colors cursor-pointer"
              >
                <span>Book Whitening</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 5: Soft Pastel Sky Blue (Clear Invisible Aligners) */}
          <div className="bg-[var(--tint-blue)] rounded-3xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-xs flex items-center justify-center text-[var(--ink)] shadow-2xs">
                  <Smile className="w-6 h-6 stroke-[1.75]" />
                </div>
                <Plus className="w-4 h-4 text-[var(--ink-soft)] group-hover:rotate-90 transition-transform" />
              </div>

              <h3 className="text-xl font-extrabold text-[var(--ink)] mb-2.5">
                Invisible Clear Aligners
              </h3>
              <p className="text-xs text-[var(--ink)] leading-relaxed">
                Straighten teeth seamlessly without awkward metal brackets. Custom 3D digital planning preview included.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="/services/invisible-aligners"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ink)] hover:text-[#2675D8] transition-colors cursor-pointer group-hover:underline"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 6: Photo Card (Dental Implants & 3D Precision) */}
          <div className="relative rounded-3xl overflow-hidden group shadow-xs hover:shadow-lg transition-all duration-300 min-h-[300px] flex flex-col justify-end">
            <img
              src="/services/dental-implants-1200.webp"
              srcSet="/services/dental-implants-640.webp 640w, /services/dental-implants-1200.webp 1200w"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 92vw"
              alt="Swiss Titanium Dental Implants"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="relative z-10 p-6 text-white">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-amber-500/90 text-white px-2.5 py-0.5 rounded-full mb-2">
                Lifetime Stability
              </span>
              <h4 className="text-lg font-bold leading-tight mb-1">
                Titanium Dental Implants
              </h4>
              <p className="text-[11px] text-slate-200 line-clamp-2 mb-3">
                Permanent Swiss-grade root replacements that restore 100% biting power with lifelike aesthetics.
              </p>
              <button
                onClick={() => onSelectService("Dental Implants & Restorations")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-amber-300 transition-colors cursor-pointer"
              >
                <span>Book Implant Consult</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 7: Soft Pastel Peach / Warm Cream (Zirconia & Veneers) */}
          <div className="bg-[var(--tint-peach)] rounded-3xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-xs flex items-center justify-center text-[var(--ink)] shadow-2xs">
                  <Sparkles className="w-6 h-6 stroke-[1.75]" />
                </div>
                <Plus className="w-4 h-4 text-[var(--ink-soft)] group-hover:rotate-90 transition-transform" />
              </div>

              <h3 className="text-xl font-extrabold text-[var(--ink)] mb-2.5">
                Zirconia Crowns & Veneers
              </h3>
              <p className="text-xs text-[var(--ink)] leading-relaxed">
                Chip-resistant natural ceramic crowns and Hollywood veneers handcrafted for unmatched aesthetic brilliance.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="/services/zirconia-crowns"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ink)] hover:text-[#2675D8] transition-colors cursor-pointer group-hover:underline"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 8: Photo Card (Clear Aligner Confident Smile) */}
          <div className="relative rounded-3xl overflow-hidden group shadow-xs hover:shadow-lg transition-all duration-300 min-h-[300px] flex flex-col justify-end">
            <img
              src="/services/clear-aligners-1200.webp"
              srcSet="/services/clear-aligners-640.webp 640w, /services/clear-aligners-1200.webp 1200w"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 92vw"
              alt="Clear Aligners Smile Transformation"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="relative z-10 p-6 text-white">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-purple-500/90 text-white px-2.5 py-0.5 rounded-full mb-2">
                Digital Smile Design
              </span>
              <h4 className="text-lg font-bold leading-tight mb-1">
                Discreet Smile Alignment
              </h4>
              <p className="text-[11px] text-slate-200 line-clamp-2 mb-3">
                Removable crystal-clear trays customized with millimeter precision for teens and working adults.
              </p>
              <button
                onClick={() => onSelectService("Clear Invisible Aligners")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-purple-300 transition-colors cursor-pointer"
              >
                <span>Start Alignment</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
