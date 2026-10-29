"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone, Check } from "lucide-react";

interface HeroProps {
  onOpenBooking: (service?: string) => void;
}

const STATS = [
  { label: "Root Canals", value: 500 },
  { label: "Paediatric RCT", value: 200 },
  { label: "Extractions", value: 400 },
  { label: "Surgical Extractions", value: 25 },
  { label: "Zirconia Crowns", value: 200 },
  { label: "Dental Bridges", value: 200 },
];

const PROOF = ["Painless treatment", "Digital RVG X-ray on site", "Open all 7 days"];

/** Counts from 0 to `target` once `run` flips to true (eased, ~1.6s). */
function useCountUp(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = reduced ? 1 : Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, run, duration]);

  return value;
}

function StatCell({ label, value, run }: { label: string; value: number; run: boolean }) {
  const displayed = useCountUp(value, run);

  return (
    <div className="flex flex-col justify-between gap-3 border-l border-t border-white/[0.08] px-4 py-4 sm:px-5 sm:py-5">
      {/* Number first, label pinned to the bottom so every figure sits on one line */}
      <dd className="order-1 text-[26px] leading-none font-extrabold tracking-tight text-white tabular-nums sm:text-[28px]">
        {displayed}
        <span className="text-[#8CC0F5]">+</span>
      </dd>
      <dt className="order-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 leading-snug sm:text-[11px]">
        {label}
      </dt>
    </div>
  );
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const shelfRef = useRef<HTMLDListElement>(null);
  const [counting, setCounting] = useState(false);

  // Start the counters the first time the shelf scrolls into view.
  useEffect(() => {
    const el = shelfRef.current;
    if (!el || counting) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setCounting(true);
          observer.disconnect();
        }
      },
      // Fire as soon as any part of the shelf is on screen, so the figures are
      // never left sitting at 0 on shorter viewports.
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [counting]);

  return (
    <section id="home" className="relative w-full min-h-[100svh] overflow-hidden bg-[#070D14] flex flex-col">
      {/* Full-bleed clinic photograph (WebP srcset, JPEG fallback) */}
      <picture className="absolute inset-0">
        <source
          type="image/webp"
          srcSet="/hero-640.webp 640w, /hero-960.webp 960w, /hero-1280.webp 1280w, /hero-1600.webp 1600w, /hero-1871.webp 1871w"
          sizes="100vw"
        />
        <img
          src="/hero-fallback.jpg"
          alt=""
          width={1871}
          height={840}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[68%_center] sm:object-[70%_center] lg:object-right"
        />
      </picture>

      {/* Layered scrims: directional for the copy, vertical for the stats shelf */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050A11]/96 via-[#050A11]/78 to-[#050A11]/20 sm:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050A11] via-[#050A11]/10 to-[#050A11]/45" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-[#2675D8]/15 blur-[140px]" />

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 sm:px-10 lg:px-14 pt-28 sm:pt-32 pb-6 sm:pb-8">
        <div className="flex flex-1 items-center">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Locality badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#39A852]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">
                Indresham · Patancheru · Hyderabad
              </span>
            </span>

            {/* Headline */}
            <h1 className="mt-6 text-[2.6rem] leading-[0.98] tracking-[-0.03em] font-extrabold text-white sm:text-6xl lg:text-[4.25rem]">
              Modern dentistry.
              <span className="mt-1 block text-[#8CC0F5]">Genuinely painless.</span>
            </h1>

            {/* Real description */}
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/70 sm:text-base">
              A multi-speciality dental hospital in Patancheru for implants, clear aligners,
              single-sitting root canals, zirconia crowns and smile makeovers — delivered by
              specialist dentists with digital X-rays and gentle technique, for every member of your family.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="group inline-flex items-center gap-3 rounded-full bg-white pl-7 pr-2.5 py-2.5 text-sm font-extrabold text-[#0F2C4A] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.9)] transition-all hover:scale-[1.03] active:scale-100 cursor-pointer sm:text-[15px]"
              >
                <span>Book an Appointment</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2675D8] text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>

              <a
                href="tel:+919133933392"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.08] px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/[0.16] hover:scale-[1.03] active:scale-100"
              >
                <Phone className="h-4 w-4 text-[#5FD68A]" />
                <span>+91 91339 33392</span>
              </a>
            </div>

            {/* Micro-proof */}
            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
              {PROOF.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/55 sm:text-xs">
                  <Check className="h-3.5 w-3.5 text-[#5FD68A]" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Treatment counter shelf */}
        <div className="mt-10 w-full">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#070D14]/60 backdrop-blur-xl shadow-[0_24px_60px_-30px_rgba(0,0,0,1)]">
            {/* 1px hairline grid: each cell carries its top/left border, the wrapper clips the outer edges */}
            <dl ref={shelfRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 -ml-px -mt-px">
              {STATS.map((stat) => (
                <StatCell key={stat.label} label={stat.label} value={stat.value} run={counting} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
