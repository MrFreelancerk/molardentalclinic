"use client";

import { useState, type CSSProperties } from "react";
import { Phone, ChevronsUpDown } from "lucide-react";

function ToothIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7.2 2.5C5 2.5 3 4.2 3 7c0 3.2 1.4 6.3 2 9.5.4 2.2 1.8 4 4 4 1.8 0 2.5-1.5 3-3 .5 1.5 1.2 3 3 3 2.2 0 3.6-1.8 4-4 .6-3.2 2-6.3 2-9.5 0-2.8-2-4.5-4.2-4.5-2.2 0-3.3 1.2-4.8 1.2-1.5 0-2.6-1.2-4.8-1.2Z" />
    </svg>
  );
}

interface HeroProps {
  onOpenBooking: (service?: string) => void;
}

const PHOTO_SRC = "/hero-dentist-1200.webp";
const PHOTO_SRCSET = "/hero-dentist-640.webp 640w, /hero-dentist-1200.webp 1200w";

const STATS: { value: string; label: string; note?: string }[] = [
  { value: "4.9/5", label: "Patient Rating", note: "120+ reviews" },
  { value: "1,500+", label: "Treatments Completed" },
  { value: "14+", label: "Years Experience" },
  { value: "7 Days", label: "Open Every Week" },
];

// Reveal timings (ms). Kept in one place so the choreography is easy to tune.
const D = {
  eyebrow: 80,
  line1: 150,
  line2: 240,
  line3: 330,
  actions: 430,
  portrait: 220,
  paragraph: 620,
  statFirst: 520,
  statStep: 85,
};

const FEATHER_DESKTOP: CSSProperties = {
  maskImage:
    "linear-gradient(to right, transparent 0%, #000 12%, #000 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 100%)",
  maskComposite: "intersect",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, #000 12%, #000 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 100%)",
  WebkitMaskComposite: "source-in",
};

const FEATHER_MOBILE: CSSProperties = {
  maskImage: "linear-gradient(to bottom, transparent 0%, #000 16%, #000 84%, transparent 100%)",
  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 16%, #000 84%, transparent 100%)",
};

export default function Hero({ onOpenBooking }: HeroProps) {
  const [photoLoaded, setPhotoLoaded] = useState(true);

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden">
      {/* =========================================================================
          LAYER 1: Base Canvas & Atmospheric Ambient Glows
          ========================================================================= */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        {/* Base warm peach / champagne canvas */}
        <div className="absolute inset-0 bg-[linear-gradient(125deg,#F7EDE9_0%,#F3DFE2_32%,#EED7DC_64%,#E7CAD1_100%)]" />

        {/* Deep ambient cyan/teal aura blooms on upper left behind text */}
        <div className="absolute top-[4%] -left-[14%] h-[85%] w-[68%] rounded-full bg-[#179B92]/65 blur-[125px]" />
        <div className="absolute top-[18%] left-[4%] h-[60%] w-[45%] rounded-full bg-[#1EB2A8]/45 blur-[105px]" />
        <div className="absolute -bottom-[22%] left-[2%] h-[55%] w-[42%] rounded-full bg-[#147A73]/30 blur-[130px]" />

        {/* Warm blush aura around right side behind metrics */}
        <div className="absolute -top-[18%] right-[2%] h-[80%] w-[58%] rounded-full bg-[#F5D5DA]/75 blur-[135px]" />
        <div className="absolute -bottom-[24%] right-[0%] h-[72%] w-[52%] rounded-full bg-[#ECCFD5]/65 blur-[140px]" />

        {/* Subtle ambient lighting vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_0%,rgba(255,255,255,0.3)_0%,transparent_65%)]" />
      </div>

      {/* =========================================================================
          LAYER 2: Middle-Ground Subject Portrait (Authentic Studio Original)
          Positioned spaciously between the left narrative and right metrics
          ========================================================================= */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-[20%] 2xl:right-[22%] z-0 hidden xl:block">
        {photoLoaded && (
          <img
            src={PHOTO_SRC}
            srcSet={PHOTO_SRCSET}
            sizes="42vw"
            alt=""
            onError={() => setPhotoLoaded(false)}
            style={{ ...FEATHER_DESKTOP, animationDelay: `${D.portrait}ms` }}
            className="hero-portrait-in absolute right-0 bottom-0 h-[86%] 2xl:h-[88%] w-auto max-w-none object-contain object-bottom"
          />
        )}
      </div>

      {/* =========================================================================
          LAYER 3: Glassmorphic Frosted Veil (Desktop Only)
          Soft blur feathering from left narrative to subject
          ========================================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden xl:block w-[50%] backdrop-blur-[20px] [mask-image:linear-gradient(to_right,#000_45%,transparent_100%)] [WebkitMaskImage:linear-gradient(to_right,#000_45%,transparent_100%)]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#13877F]/75 via-[#1AA69C]/40 to-transparent" />
      </div>

      {/* =========================================================================
          LAYER 4: Foreground Content (z-10)
          ========================================================================= */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1560px] flex-1 grid-cols-1 px-6 pt-28 pb-10 sm:px-10 sm:pt-32 xl:grid-cols-12 xl:grid-rows-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:gap-x-8 xl:px-14 xl:pt-32 xl:pb-12">
        {/* Eyebrow, headline, actions */}
        <div className="order-1 xl:col-span-7 xl:col-start-1 xl:row-start-2">
          <p
            style={{ animationDelay: `${D.eyebrow}ms` }}
            className="hero-rise text-[10.5px] font-semibold tracking-[0.24em] text-white/90 uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] sm:text-[11.5px]"
          >
            Dental Hospital in Patancheru
          </p>

          <h1 className="mt-4 max-[360px]:text-[2rem] text-[clamp(2.35rem,8.8vw,3.4rem)] leading-[0.94] font-normal tracking-[-0.035em] text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.28)] sm:mt-5 sm:text-[clamp(2.5rem,4.8vw,4.5rem)] sm:leading-[0.92]">
            <span style={{ animationDelay: `${D.line1}ms` }} className="hero-line-in block">
              Painless dental
            </span>
            <span
              style={{ animationDelay: `${D.line2}ms` }}
              className="hero-line-in mt-1.5 sm:mt-2.5 flex items-center gap-2.5 sm:gap-4"
            >
              {/* Clean badge with real family smile care */}
              <span className="relative inline-flex h-[0.74em] w-[1.38em] shrink-0 items-center overflow-hidden rounded-[8px] sm:rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-1.5 ring-white/70 backdrop-blur-md">
                <img
                  src="/why-us/trusted-by-families-640.webp"
                  alt="Family smile care at Molar Dental"
                  width={120}
                  height={68}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="whitespace-nowrap">care for your</span>
            </span>
            <span style={{ animationDelay: `${D.line3}ms` }} className="hero-line-in block">
              whole family
            </span>
          </h1>

          {/* Action CTAs */}
          <div
            style={{ animationDelay: `${D.actions}ms` }}
            className="hero-rise mt-7 flex flex-wrap items-center gap-3.5 sm:mt-8 xl:mt-9"
          >
            {/* Primary CTA: Crisp White Frosted Glass for maximum visibility on teal */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex cursor-pointer items-center justify-center h-[46px] sm:h-[56px] px-[16px] sm:px-[20px] gap-[8px] text-[15px] sm:text-[18px] font-bold rounded-full border border-white/70 bg-white/20 hover:bg-white/30 backdrop-blur-xl text-white shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.85),0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-200"
            >
              <ToothIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]" />
              <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">Book an Appointment</span>
            </button>

            {/* Secondary CTA */}
            <a
              href="tel:+919133933392"
              className="inline-flex items-center justify-center h-[46px] sm:h-[56px] px-[16px] sm:px-[20px] gap-[8px] text-[15px] sm:text-[18px] font-bold rounded-full border border-white/60 dark:border-white/35 bg-white/40 hover:bg-white/60 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-xl text-[#143A66] dark:text-white shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.85),0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-200"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B050] shrink-0" strokeWidth={2.2} aria-hidden="true" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Supporting copy: Bottom-left editorial narrative */}
        <p
          style={{ animationDelay: `${D.paragraph}ms` }}
          className="hero-rise order-3 mt-6 max-w-[34rem] text-[13px] leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:text-[13.5px] xl:order-none xl:col-span-6 xl:col-start-1 xl:row-start-3 xl:mt-0 xl:self-end xl:text-[14px]"
        >
          From routine checkups to specialized treatments, Molar Dental brings experienced
          specialists across all dental fields under one roof, making expert care easier, gentler,
          and more connected.
        </p>

        {/* Mobile Portrait: Spans naturally across mobile */}
        <div aria-hidden="true" className="order-4 mt-6 -mx-6 overflow-hidden sm:-mx-10 xl:hidden flex justify-center">
          {photoLoaded && (
            <img
              src={PHOTO_SRC}
              srcSet={PHOTO_SRCSET}
              sizes="100vw"
              alt=""
              onError={() => setPhotoLoaded(false)}
              style={{ ...FEATHER_MOBILE, animationDelay: `${D.portrait}ms` }}
              className="hero-portrait-in h-[310px] sm:h-[380px] w-full object-cover object-[62%_18%]"
            />
          )}
        </div>

        {/* Metrics column — far right on desktop, clean 2x2 grid on mobile */}
        <dl className="order-5 mt-7 grid grid-cols-2 gap-x-6 gap-y-6 sm:mt-8 xl:order-none xl:col-span-3 xl:col-start-10 xl:row-start-2 xl:mt-0 xl:flex xl:flex-col xl:justify-between xl:gap-y-6 xl:justify-self-end xl:self-stretch xl:text-right">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              style={{ animationDelay: `${D.statFirst + index * D.statStep}ms` }}
              className="hero-rise flex flex-col xl:items-end"
            >
              <dd className="text-[28px] leading-none font-bold tracking-tight text-white tabular-nums drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)] sm:text-[34px] xl:text-[40px]">
                {stat.value}
              </dd>
              <dt className="mt-1.5 max-w-[140px] text-[11px] leading-snug font-medium text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.2)] sm:text-[12px] xl:text-right">
                <span className="block">{stat.label}</span>
                {stat.note && (
                  <span className="block text-[10px] text-white/75 mt-0.5">
                    ({stat.note})
                  </span>
                )}
              </dt>
            </div>
          ))}
        </dl>

        {/* Bottom-right scroll prompt pill */}
        {/* <div className="order-6 hidden xl:col-span-3 xl:col-start-10 xl:row-start-3 xl:flex xl:items-end xl:justify-end">
          <a
            href="#about"
            aria-label="Scroll to explore"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/20 text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ChevronsUpDown className="h-4 w-4" strokeWidth={2} />
          </a>
        </div> */}
      </div>
    </section>
  );
}
