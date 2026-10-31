"use client";

import { CalendarCheck, ScanFace, HeartHandshake, Smile, ArrowRight } from "lucide-react";

interface PatientJourneyProps {
  onOpenBooking: () => void;
}

const STEPS = [
  {
    title: "Book in a minute",
    description:
      "Pick a time online or message us on WhatsApp. You get an immediate confirmation.",
    icon: CalendarCheck,
  },
  {
    title: "Scan and discuss",
    description:
      "Digital imaging shows you exactly what is happening, and we explain every option.",
    icon: ScanFace,
  },
  {
    title: "Gentle treatment",
    description:
      "Comfortable operatories, effective anaesthesia and specialists who work at your pace.",
    icon: HeartHandshake,
  },
  {
    title: "Leave with confidence",
    description:
      "A restored smile, clear aftercare and follow-up support if you ever need us again.",
    icon: Smile,
  },
];

export default function PatientJourney({ onOpenBooking }: PatientJourneyProps) {
  return (
    <section
      id="patient-journey"
      className="scroll-mt-20 border-b border-[var(--line)] bg-[var(--card)] py-20 sm:py-24"
    >
      <div className="container-page">
        <div className="max-w-xl">
          <p className="eyebrow">What to expect</p>
          <h2 className="mt-3 text-[30px] font-normal leading-[1.1] tracking-[-0.03em] text-[var(--ink)] sm:text-[42px]">
            Four simple steps.
          </h2>
          <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
            From your first call to your final checkup, here is how a visit at Molar Dental works.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative border-t border-[var(--line)] pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-4.5 w-4.5 text-[var(--accent)]" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-[var(--ink)]">{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--ink-soft)]">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-12">
          <button
            onClick={onOpenBooking}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-[13px] font-semibold text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-strong)] cursor-pointer"
          >
            Start your visit
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
