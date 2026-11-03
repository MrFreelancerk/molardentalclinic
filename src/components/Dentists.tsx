"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface DentistsProps {
  onOpenBooking: (doctorName?: string) => void;
  showDetails?: boolean;
}

interface Doctor {
  name: string;
  qualification: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  specialties: string[];
}

// Verified clinic doctors
const doctors: Doctor[] = [
  {
    name: "Dr. B. Gopal Reddy",
    qualification: "BDS, MDS",
    role: "Chief Implantologist & Dental Surgeon",
    experience: "14+ Years Exp",
    bio: "Specializes in computer-guided dental implants, LASER dentistry, and full-mouth rehabilitation. Renowned across Hyderabad for pain-free precision treatments and high-success smile restorations.",
    image: "/doc-gopal.jpg",
    specialties: ["Dental Implants", "Laser Dentistry", "Smile Makeovers", "Full-Mouth Rehab"],
  },
  {
    name: "Dr. Harika Sedimbi",
    qualification: "BDS",
    role: "Cosmetic & General Dental Surgeon",
    experience: "9+ Years Exp",
    bio: "Dedicated to gentle, comprehensive dental care with an empathetic approach. Specializes in cosmetic smile aesthetics, conservative restorations, and anxiety-free patient visits.",
    image: "/doc-harika.jpg",
    specialties: ["Teeth Whitening", "Aesthetic Restorations", "Pediatric Care", "Root Canal Therapy"],
  },
  {
    name: "Dr. Ravi Jarupula",
    qualification: "BDS, MDS",
    role: "Consultant Orthodontist",
    experience: "Certified Invisalign Provider",
    bio: "Expert in transforming misaligned teeth and jaw irregularities using modern clear invisible aligners and aesthetic ceramic braces for teens and adults.",
    image: "/doc-ravi.jpg",
    specialties: ["Clear Aligners", "Invisalign", "Ceramic Braces", "Bite Correction"],
  },
  {
    name: "Dr. Bhargav Ram",
    qualification: "BDS, MDS",
    role: "Oral & Maxillofacial Surgeon",
    experience: "8+ Years Exp",
    bio: "Specialist in complex surgical extractions, wisdom tooth micro-surgery, and trauma reconstruction. Focuses on fast recovery, minimal discomfort, and advanced surgical protocols.",
    image: "/doc-bhargav.jpg",
    specialties: ["Wisdom Tooth Surgery", "Bone Grafting", "Facial Trauma", "Cyst Removals"],
  },
];

// Slow enough to read a sentence, fast enough to feel alive.
const AUTOPLAY_MS = 5200;

// One clock for the whole gesture: the strip glides for the full SLIDE_MS while
// the copy leaves in PANEL_OUT_MS and cascades back in over the rest.
const SLIDE_MS = 760;
const SLIDE_EASE = "cubic-bezier(0.32, 0.72, 0, 1)";
const PANEL_OUT_MS = 150;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Rubber band past either end: the strip keeps following, just less and less.
const resist = (overshoot: number) => (overshoot * 0.5) / (1 + overshoot / 280);

export default function Dentists({ onOpenBooking, showDetails }: DentistsProps) {
  const pathname = usePathname();
  // Show rich details (bio description, experience, specialties) ONLY on the home page
  const shouldShowDetails = showDetails ?? (pathname === "/");

  // Which doctor the strip is parked on
  const [active, setActive] = useState(0);
  // Which doctor the panel is showing. Trails `active` by the fade-out, so the
  // old copy leaves before the new copy arrives instead of swapping in place.
  const [displayed, setDisplayed] = useState(0);
  const [leaving, setLeaving] = useState(false);
  // Hovering the strip holds the current doctor instead of rotating
  const [paused, setPaused] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // Settled translate of the strip for the current card, in px.
  const offsetRef = useRef(0);
  const dragRef = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    lastX: 0,
    lastT: 0,
    velocity: 0,
    moved: false,
  });
  // A drag ends with a click on whatever card the pointer landed on; that click
  // belongs to the gesture, not to the card.
  const suppressClick = useRef(false);

  const displayedDoctor = doctors[displayed];

  /** Distance between two neighbouring cards, in px. */
  const stride = useCallback(() => {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    const second = track?.children[1] as HTMLElement | undefined;
    return first && second ? second.offsetLeft - first.offsetLeft : 0;
  }, []);

  /** How far the track must travel to bring `index` to the left edge. */
  const offsetFor = useCallback(
    (index: number) => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      const cards = track?.children;
      if (!track || !viewport || !cards || cards.length === 0) return 0;

      const step = stride();
      if (!step) return 0;

      // Measured from the cards themselves so it stays correct mid-slide (the
      // gap between their edges doesn't change while the track is translated).
      const first = (cards[0] as HTMLElement).getBoundingClientRect();
      const last = (cards[cards.length - 1] as HTMLElement).getBoundingClientRect();
      const full = last.right - first.left;
      const max = Math.max(0, full - viewport.clientWidth);

      return Math.min(index * step, max);
    },
    [stride],
  );

  /**
   * Move the track by writing `transform` only. Transforms are composited, so
   * the browser never lays out or repaints four portrait cards per frame — this
   * is the difference between a slide that follows your eye and one that stutters.
   */
  const moveTo = useCallback((offset: number, animate: boolean) => {
    const track = trackRef.current;
    if (!track) return;

    const useCurve = animate && !prefersReducedMotion();
    track.style.transition = useCurve ? `transform ${SLIDE_MS}ms ${SLIDE_EASE}` : "none";
    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
  }, []);

  // Park the strip on the selected card. After paint is fine: the track only
  // ever has to move while a transition is running, never on first mount.
  useEffect(() => {
    offsetRef.current = offsetFor(active);
    moveTo(offsetRef.current, true);
  }, [active, offsetFor, moveTo]);

  // Card widths are percentages, so a resize changes the stops underneath us.
  useEffect(() => {
    const onResize = () => {
      if (dragRef.current.active) return;
      offsetRef.current = offsetFor(active);
      moveTo(offsetRef.current, false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, offsetFor, moveTo]);

  // Advance one card at a time; a manual pick restarts the timer
  useEffect(() => {
    if (paused || prefersReducedMotion()) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % doctors.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [paused, active]);

  // Old copy leaves, then the new copy arrives and cascades in.
  useEffect(() => {
    if (active === displayed) return;

    const reduce = prefersReducedMotion();
    let outId: number | undefined;

    // Kick off on the next frame, so the copy leaves in its own tick rather
    // than in the same commit that moves the strip.
    const frame = requestAnimationFrame(() => {
      if (reduce) {
        setDisplayed(active);
        return;
      }

      setLeaving(true);
      outId = window.setTimeout(() => {
        setDisplayed(active);
        setLeaving(false);
      }, PANEL_OUT_MS);
    });

    return () => {
      cancelAnimationFrame(frame);
      if (outId !== undefined) window.clearTimeout(outId);
    };
  }, [active, displayed]);

  const cancelDrag = useCallback(() => {
    const drag = dragRef.current;
    if (!drag.active) return;
    drag.active = false;
    drag.moved = false;
    offsetRef.current = offsetFor(active);
    moveTo(offsetRef.current, true);
  }, [active, offsetFor, moveTo]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      lastX: event.clientX,
      lastT: performance.now(),
      velocity: 0,
      moved: false,
    };
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active || event.pointerId !== drag.pointerId) return;

    const delta = event.clientX - drag.startX;

    // Capture only once it's a real drag, so taps still reach the cards.
    if (!drag.moved) {
      if (Math.abs(delta) < 6) return;
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      if (trackRef.current) trackRef.current.style.transition = "none";
    }

    const now = performance.now();
    const elapsed = now - drag.lastT;
    if (elapsed > 0) drag.velocity = (event.clientX - drag.lastX) / elapsed;
    drag.lastX = event.clientX;
    drag.lastT = now;

    const min = 0;
    const max = offsetFor(doctors.length - 1);
    let offset = offsetRef.current - delta;

    if (offset < min) offset = min - resist(min - offset);
    else if (offset > max) offset = max + resist(offset - max);

    const track = trackRef.current;
    if (track) track.style.transform = `translate3d(${-offset}px, 0, 0)`;
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active || event.pointerId !== drag.pointerId) return;

    const delta = event.clientX - drag.startX;
    const step = stride();
    const { moved, velocity } = drag;

    drag.active = false;
    drag.moved = false;

    if (!moved) {
      offsetRef.current = offsetFor(active);
      moveTo(offsetRef.current, true);
      return;
    }

    suppressClick.current = true;
    window.setTimeout(() => {
      suppressClick.current = false;
    }, 0);

    // A quick flick carries further than its distance suggests.
    const threshold = Math.max(44, step * 0.2);
    let next = active;

    if (velocity < -0.4 || delta < -threshold) next = Math.min(doctors.length - 1, active + 1);
    else if (velocity > 0.4 || delta > threshold) next = Math.max(0, active - 1);

    if (next === active) {
      offsetRef.current = offsetFor(active);
      moveTo(offsetRef.current, true);
    } else {
      setActive(next);
    }
  };

  return (
    <section id="dentists" className="py-20 sm:py-24 bg-[var(--page)] border-t border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title row — heading on the left, supporting line on the right */}
        <div
          data-reveal
          className="flex flex-col gap-5 border-b border-[var(--line)] pb-7 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0072CE] dark:text-[#38BDF8]">
              The Clinical Team
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-normal text-[var(--ink)] tracking-tight">
              Meet The Dentists
            </h2>
          </div>
          <p className="max-w-sm text-sm sm:text-base font-normal text-[var(--ink-soft)] lg:pb-1.5 lg:text-right">
            Experienced dental specialists dedicated to your comfort and lifelong oral health
          </p>
        </div>

        {/* Content row — description left, doctors right */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Left: the active doctor's description.
              The panel is the only navigation here — no arrow buttons, no rules
              between the blocks, no counter. It changes as the strip advances. */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-28" aria-live="polite">
            <div
              className={`transition-[opacity,transform] duration-150 ease-out ${
                leaving ? "-translate-y-1 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              {/* Keyed on the doctor, so every block runs its own entrance */}
              <div key={displayed} className="team-desc">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                  {displayedDoctor.qualification}
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-normal text-[var(--ink)] tracking-tight leading-tight">
                  {displayedDoctor.name}
                </h3>
                <p className="mt-1.5 text-[13px] font-semibold text-[#0072CE] dark:text-[#38BDF8]">
                  {displayedDoctor.role}
                </p>

                {shouldShowDetails && (
                  <div className="mt-5 space-y-4">
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0072CE] bg-[#0072CE]/10 border border-[#0072CE]/20 px-2.5 py-1 rounded-none dark:text-[#38BDF8] dark:bg-[#38BDF8]/10 dark:border-[#38BDF8]/30">
                      {displayedDoctor.experience}
                    </span>

                    {/* Reserved height: bios differ by a line or two, and without
                        this the button under them hops on every change. */}
                    <p className="min-h-[4.75rem] text-[13.5px] sm:text-sm leading-relaxed text-[var(--ink-soft)] font-normal">
                      {displayedDoctor.bio}
                    </p>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--ink-faint)] mb-2">
                        Clinical Specialties
                      </p>
                      <div className="flex min-h-[3.5rem] flex-wrap content-start gap-1.5">
                        {displayedDoctor.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[var(--ink)] bg-[var(--page)] border border-[var(--line)] px-2.5 py-1 rounded-none"
                          >
                            <CheckCircle2 className="h-3 w-3 text-[#00B050] shrink-0" />
                            <span>{spec}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Outside the fading block, so this holds perfectly still while the
                copy above it swaps. */}
            <button
              type="button"
              onClick={() => onOpenBooking(`Consultation with ${displayedDoctor.name}`)}
              aria-label={`Book a consultation with ${displayedDoctor.name}`}
              className="mt-6 inline-flex items-center gap-2 bg-[#143A66] hover:bg-[#0E2A4D] text-white text-xs font-semibold uppercase tracking-[0.12em] px-5 py-3 rounded-none shadow-sm cursor-pointer transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2675D8] focus-visible:ring-offset-2"
            >
              Book a consultation
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Right: horizontal strip, driven by transform and draggable */}
          <div
            data-reveal
            className="order-1 lg:order-2"
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setPaused(true);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") setPaused(false);
            }}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div
              ref={viewportRef}
              className="relative touch-pan-y select-none overflow-hidden"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={cancelDrag}
            >
              <div ref={trackRef} className="team-track flex gap-4 will-change-transform">
                {doctors.map((doctor, index) => {
                  const isActive = index === active;

                  return (
                    <button
                      key={doctor.name}
                      type="button"
                      onClick={() => {
                        if (suppressClick.current) return;
                        setActive(index);
                      }}
                      aria-current={isActive ? "true" : undefined}
                      aria-label={`${doctor.name} — ${doctor.role}`}
                      className={`group relative aspect-[4/5] w-[82%] shrink-0 overflow-hidden rounded-none border text-left cursor-pointer transition-[opacity,border-color] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] sm:w-[58%] lg:w-[62%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2675D8] ${
                        isActive
                          ? "border-[#123B65] opacity-100"
                          : "border-[var(--line)] opacity-55 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        draggable={false}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />

                      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                      <span className="absolute left-4 top-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/70">
                          {doctor.qualification}
                        </p>
                        <h3 className="mt-1.5 text-base font-normal text-white tracking-tight leading-snug">
                          {doctor.name}
                        </h3>
                        <p className="mt-0.5 text-[11.5px] text-white/70 font-medium leading-snug">
                          {doctor.role}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
