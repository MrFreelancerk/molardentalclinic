"use client";

import { useState, type CSSProperties } from "react";
import { Calendar, Phone, Check } from "lucide-react";

interface HeroProps {
  onOpenBooking: (service?: string) => void;
}

const PHOTO_SRC = "/hero-dentist-1200.webp";
const PHOTO_SRCSET = "/hero-dentist-640.webp 640w, /hero-dentist-1200.webp 1200w";

const STATS: { value: string; label: string; note?: string }[] = [
  { value: "4.9★", label: "Google rating", note: "(120+ reviews)" },
  { value: "1,500+", label: "Treatments completed" },
  { value: "14+", label: "Years of experience" },
  { value: "7 Days", label: "Open every week" },
];

const PROMISES = ["Digital X-ray on site", "Open all 7 days"];

// Reveal timings (ms). Kept in one place so the choreography is easy to tune.
const D = {
  eyebrow: 80,
  line1: 150,
  line2: 240,
  line3: 330,
  actions: 430,
  promises: 500,
  portrait: 220,
  paragraph: 620,
  statFirst: 520,
  statStep: 85,
};

// The portrait brings its own pastel backdrop, so its edges are feathered into
// the hero bed rather than framed: a horizontal fade on the left/right plus a
// soft top fade, intersected so both apply at once.
const FEATHER_DESKTOP: CSSProperties = {
  maskImage:
    "linear-gradient(to right, transparent 0%, #000 18%, #000 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 14%, #000 100%)",
  maskComposite: "intersect",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, #000 18%, #000 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 14%, #000 100%)",
  WebkitMaskComposite: "source-in",
};

const FEATHER_MOBILE: CSSProperties = {
  maskImage: "linear-gradient(to bottom, transparent 0%, #000 16%, #000 74%, transparent 100%)",
  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 16%, #000 74%, transparent 100%)",
};

export default function Hero({ onOpenBooking }: HeroProps) {
  // If the portrait file is ever missing the hero still reads as a complete
  // pastel composition instead of collapsing to a broken-image icon.
  const [photoLoaded, setPhotoLoaded] = useState(true);

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden">
      {/* Pastel bed: the blurred portrait sits underneath, so the crisp copy
          blends into the exact same colours and the two never seam. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(116deg,#CFE3E3_0%,#DCE9E7_24%,#EAE4E3_52%,#F1E1E4_78%,#E4DDE4_100%)]" />
        <div className="absolute -top-[24%] -left-[10%] h-[78%] w-[56%] rounded-full bg-[#8CB9BA]/35 blur-[130px]" />
        <div className="absolute -bottom-[28%] -left-[14%] h-[72%] w-[54%] rounded-full bg-[#F1CDD2]/35 blur-[140px]" />
        <div className="absolute -top-[14%] -right-[12%] h-[66%] w-[48%] rounded-full bg-[#E6D2D8]/45 blur-[130px]" />
        {photoLoaded && (
          <img
            src={PHOTO_SRC}
            alt=""
            onError={() => setPhotoLoaded(false)}
            className="hero-bed-in h-full w-full scale-125 object-cover opacity-60 blur-3xl"
          />
        )}
        {/* Soft teal wash behind the copy, so the headline sits in its own light
            pocket instead of fighting the portrait's highlights. */}
        <div className="absolute inset-0 bg-[radial-gradient(130%_90%_at_14%_44%,rgba(247,252,251,0.84)_0%,rgba(244,250,249,0.5)_38%,rgba(244,250,249,0)_66%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1560px] flex-1 grid-cols-1 px-6 pt-28 pb-10 sm:px-10 sm:pt-32 xl:grid-cols-12 xl:grid-rows-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:gap-x-8 xl:px-14 xl:pt-32 xl:pb-12">
        {/* Crisp portrait: bottom-anchored like a studio shot, ending before the
            figures rail so the numbers stay legible */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-[13%] -z-10 hidden xl:block">
          {photoLoaded && (
            <img
              src={PHOTO_SRC}
              srcSet={PHOTO_SRCSET}
              sizes="46vw"
              alt=""
              onError={() => setPhotoLoaded(false)}
              style={{ ...FEATHER_DESKTOP, animationDelay: `${D.portrait}ms` }}
              className="hero-portrait-in absolute right-0 bottom-0 h-[84%] w-auto max-w-none object-cover object-top"
            />
          )}
        </div>

        {/* Eyebrow, headline, actions — one block so it centres as a unit */}
        <div className="order-1 xl:col-span-7 xl:col-start-1 xl:row-start-2">
          <p
            style={{ animationDelay: `${D.eyebrow}ms` }}
            className="hero-rise text-[10.5px] font-semibold tracking-[0.26em] text-[#35606A] uppercase sm:text-[11.5px]"
          >
            Dental Hospital in Patancheru
          </p>

          <h1 className="mt-4 text-[clamp(2.1rem,4.2vw,4.15rem)] leading-[0.92] font-semibold tracking-[-0.035em] text-[#0C2A32] uppercase sm:mt-5">
            <span style={{ animationDelay: `${D.line1}ms` }} className="hero-line-in block">
              Painless dental
            </span>
            <span
              style={{ animationDelay: `${D.line2}ms` }}
              className="hero-line-in mt-2 flex items-center gap-3 sm:gap-4"
            >
              {/* Inset photograph, mirroring the reference headline */}
              <img
                src="/bento-smile.jpg"
                alt=""
                width={112}
                height={64}
                className="h-[0.72em] w-[1.2em] shrink-0 rounded-[3px] object-cover shadow-[0_10px_26px_-12px_rgba(12,42,50,0.65)]"
              />
              <span>care for your</span>
            </span>
            <span style={{ animationDelay: `${D.line3}ms` }} className="hero-line-in block">
              whole family
            </span>
          </h1>

          <div
            style={{ animationDelay: `${D.actions}ms` }}
            className="hero-rise mt-7 flex flex-wrap items-center gap-3 sm:mt-8 xl:mt-9"
          >
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#0E2E36] px-6 py-3.5 text-[11.5px] font-bold tracking-[0.1em] text-white shadow-[0_20px_44px_-20px_rgba(10,38,45,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#16414B] hover:shadow-[0_26px_52px_-20px_rgba(10,38,45,0.9)] active:translate-y-0 sm:text-[12.5px]"
            >
              <Calendar className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
              Book an Appointment
            </button>

            <a
              href="tel:+919133933392"
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[11.5px] font-bold tracking-[0.1em] text-[#0C2A32] uppercase shadow-[0_20px_44px_-24px_rgba(12,42,50,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_50px_-22px_rgba(12,42,50,0.6)] active:translate-y-0 sm:text-[12.5px]"
            >
              <Phone className="h-4 w-4 text-[#2C7A6B]" strokeWidth={2.2} aria-hidden="true" />
              Call Now
            </a>
          </div>

          <ul
            style={{ animationDelay: `${D.promises}ms` }}
            className="hero-rise mt-4 flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {PROMISES.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-[#35606A] sm:text-xs">
                <Check className="h-3.5 w-3.5 text-[#2C7A6B]" strokeWidth={3} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Supporting line, bottom-left on desktop as in the reference */}
        <p
          style={{ animationDelay: `${D.paragraph}ms` }}
          className="hero-rise order-3 mt-6 max-w-[30rem] text-[13.5px] leading-relaxed text-[#35606A] xl:order-none xl:col-span-6 xl:col-start-1 xl:row-start-3 xl:mt-0 xl:max-w-[33rem] xl:self-end xl:text-[14px]"
        >
          Root canals, implants, braces and aligners from experienced dentists in Patancheru.
        </p>

        {/* Portrait on small screens: sits in the flow between copy and figures */}
        <div aria-hidden="true" className="order-4 mt-8 xl:hidden">
          {photoLoaded && (
            <img
              src={PHOTO_SRC}
              srcSet={PHOTO_SRCSET}
              sizes="92vw"
              alt=""
              onError={() => setPhotoLoaded(false)}
              style={{ ...FEATHER_MOBILE, animationDelay: `${D.portrait}ms` }}
              className="hero-portrait-in h-[clamp(230px,34vh,330px)] w-full object-cover object-[64%_22%]"
            />
          )}
        </div>

        {/* Figures rail — far right, right-aligned, stretched to exactly the same
            height as the copy block so the first figure lines up with the eyebrow
            and the last one with the promise ticks */}
        <dl className="order-5 mt-9 grid grid-cols-2 gap-x-6 gap-y-7 xl:order-none xl:col-span-3 xl:col-start-10 xl:row-start-2 xl:mt-0 xl:flex xl:flex-col xl:justify-between xl:gap-y-4 xl:justify-self-end xl:self-stretch xl:text-right">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              style={{ animationDelay: `${D.statFirst + index * D.statStep}ms` }}
              className="hero-rise flex flex-col-reverse gap-2 xl:items-end"
            >
              <dt className="text-[11px] leading-snug font-medium text-[#3A5F68]">
                {stat.label}
                {stat.note && <span className="text-[#3A5F68]/75"> {stat.note}</span>}
              </dt>
              <dd className="text-[27px] leading-none font-semibold tracking-[-0.035em] text-[#0C2A32] tabular-nums sm:text-[31px] xl:text-[38px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
