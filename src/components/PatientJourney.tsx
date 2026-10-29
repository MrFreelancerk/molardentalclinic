"use client";

import { CalendarCheck, ScanFace, HeartHandshake, Sparkles, ArrowRight } from "lucide-react";

interface PatientJourneyProps {
  onOpenBooking: () => void;
}

export default function PatientJourney({ onOpenBooking }: PatientJourneyProps) {
  const steps = [
    {
      num: "01",
      title: "Easy 60-Sec Booking",
      desc: "Pick your preferred time online or message us directly on WhatsApp. Immediate confirmation.",
      icon: CalendarCheck,
    },
    {
      num: "02",
      title: "3D Scan & Discussion",
      desc: "We perform high-res 3D digital imaging to show you exactly what is happening in your mouth.",
      icon: ScanFace,
    },
    {
      num: "03",
      title: "Gentle, Pain-Free Care",
      desc: "Relax in our ergonomic chairs with computer anesthesia and music while our specialists treat you.",
      icon: HeartHandshake,
    },
    {
      num: "04",
      title: "Smile With Confidence",
      desc: "Walk out with a restored, healthy smile backed by our quality guarantee and follow-up support.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="patient-journey" className="py-24 bg-[var(--page)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[var(--card-soft)] border border-[var(--line)] text-[#2675D8] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#39A852]" />
            What to Expect
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink)] tracking-tight mb-4">
            Your Seamless Patient Journey
          </h2>
          <p className="text-[var(--ink-soft)] text-base sm:text-lg">
            From your very first greeting at reception to your final checkup, here is how we ensure an effortless visit.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-[var(--card-soft)] rounded-3xl p-7 border border-[var(--line)]/80 hover:border-[#2675D8] transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#2675D8]/25 font-mono">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[var(--card)] text-[#2675D8] shadow-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--ink)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[var(--ink-soft)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--line)]/60 flex items-center gap-1.5 text-xs font-bold text-[#39A852]">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-[#2675D8] hover:bg-[#1C5EB0] text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-[#2675D8]/20 transition-all cursor-pointer"
          >
            <span>Start Your Journey Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

