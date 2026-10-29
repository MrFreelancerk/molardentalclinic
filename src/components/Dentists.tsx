"use client";

import { useState } from "react";
import { ArrowRight, X, CheckCircle2, Calendar, Phone } from "lucide-react";

interface DentistsProps {
  onOpenBooking: (doctorName?: string) => void;
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

interface Cell {
  key: string;
  doctor: Doctor;
  index: number;
  /** Column span on the desktop 4-column grid */
  span: 1 | 2 | 3;
  expanded: boolean;
}

/**
 * Desktop layout: the clicked doctor takes the width of three cards.
 * Cards 1–2 expand to the right, cards 3–4 expand into the columns on their
 * left (there is not enough room to the right for a 3-card panel), so every
 * row stays completely filled.
 */
function buildDesktopLayout(activeIdx: number | null, doctors: Doctor[]): Cell[] {
  if (activeIdx === null) {
    return doctors.map((doctor, index) => ({
      key: `tile-${index}`,
      doctor,
      index,
      span: 1,
      expanded: false,
    }));
  }

  const others = doctors
    .map((doctor, index) => ({ doctor, index }))
    .filter((entry) => entry.index !== activeIdx);

  const tile = (entry: { doctor: Doctor; index: number }, span: 1 | 2): Cell => ({
    key: `tile-${entry.index}`,
    doctor: entry.doctor,
    index: entry.index,
    span,
    expanded: false,
  });

  const expanded: Cell = {
    key: `expanded-${activeIdx}`,
    doctor: doctors[activeIdx],
    index: activeIdx,
    span: 3,
    expanded: true,
  };

  if (activeIdx === 0) {
    return [expanded, tile(others[0], 1), tile(others[1], 2), tile(others[2], 2)];
  }
  if (activeIdx === 1) {
    return [tile(others[0], 1), expanded, tile(others[1], 2), tile(others[2], 2)];
  }
  return [tile(others[0], 2), tile(others[1], 2), expanded, tile(others[2], 1)];
}

const spanClass = (span: 1 | 2 | 3) =>
  span === 3 ? "lg:col-span-3" : span === 2 ? "lg:col-span-2" : "lg:col-span-1";

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

export default function Dentists({ onOpenBooking }: DentistsProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const selectedDoctor = activeIdx === null ? null : doctors[activeIdx];

  return (
    <section id="dentists" className="py-20 sm:py-24 bg-[var(--page)] border-t border-b border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight">
              Meet The Dentists
            </h2>
            <p className="text-[var(--ink-soft)] text-sm sm:text-base font-normal mt-2">
              Experienced dental specialists dedicated to your comfort and lifelong oral health
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-[var(--ink-faint)] font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            <span>Available for Consultations Daily</span>
          </div>
        </div>

        {/* Doctor Cards — portrait tiles; on desktop the selected doctor expands inline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {buildDesktopLayout(activeIdx, doctors).map((cell) =>
            cell.expanded ? (
              <article
                key={cell.key}
                className={`hidden lg:flex lg:h-[420px] rounded-2xl bg-[var(--card)] ring-1 ring-[var(--line)] shadow-xl overflow-hidden relative ${spanClass(
                  cell.span
                )}`}
              >
                {/* Portrait */}
                <div className="relative w-[38%] shrink-0 bg-[var(--blue-soft)]">
                  <img
                    src={cell.doctor.image}
                    alt={cell.doctor.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[var(--ink)] shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Available Today
                  </span>
                </div>

                {/* Details */}
                <div className="relative flex-1 min-w-0 flex flex-col p-6 xl:p-7">
                  <button
                    type="button"
                    onClick={() => setActiveIdx(null)}
                    aria-label="Close doctor details"
                    className="absolute top-5 right-5 w-7 h-7 rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--ink-faint)] hover:text-[var(--ink)] hover:bg-[var(--card-soft)] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>

                  <h3 className="text-xl xl:text-2xl font-bold text-[var(--ink)] tracking-tight pr-10">
                    {cell.doctor.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#2675D8] mt-1">{cell.doctor.role}</p>

                  <div className="flex items-stretch gap-5 mt-4 pb-4 border-b border-[var(--line)]">
                    <div>
                      <p className="text-sm font-bold text-[var(--ink)]">{cell.doctor.experience}</p>
                      <p className="text-[11px] text-[var(--ink-soft)] mt-0.5">Experience</p>
                    </div>
                    <div className="w-px bg-[var(--line)]" />
                    <div>
                      <p className="text-sm font-bold text-[var(--ink)]">{cell.doctor.qualification}</p>
                      <p className="text-[11px] text-[var(--ink-soft)] mt-0.5">Qualification</p>
                    </div>
                  </div>

                  <p className="text-[13px] leading-relaxed text-[var(--ink-soft)] mt-4 line-clamp-3">
                    {cell.doctor.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {cell.doctor.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-[var(--accent-soft)] text-[#2675D8] px-2.5 py-1 rounded-full"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(`Consultation with ${cell.doctor.name}`)}
                      className="flex-1 inline-flex items-center justify-between gap-2 bg-[#2675D8] hover:bg-[#1C5EB0] text-white text-xs font-bold pl-4 pr-3 py-3 rounded-xl shadow-sm transition-colors cursor-pointer"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Book Appointment
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="tel:+919133933392"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[var(--line)] text-[var(--ink)] hover:bg-[var(--card-soft)] text-xs font-bold transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[var(--ink-soft)]" />
                      Call Clinic
                    </a>
                  </div>
                </div>
              </article>
            ) : (
              <button
                key={cell.key}
                type="button"
                onClick={() => setActiveIdx(cell.index)}
                aria-label={`${cell.doctor.name} — ${cell.doctor.role}. View details and book`}
                className={`group relative block w-full aspect-[3/4] lg:aspect-auto lg:h-[420px] rounded-xl overflow-hidden bg-[var(--card-soft)] text-left cursor-pointer ring-1 ring-[var(--line)]/80 hover:ring-[#2675D8]/50 shadow-sm hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2675D8] ${spanClass(
                  cell.span
                )}`}
              >
                <img
                  src={cell.doctor.image}
                  alt={cell.doctor.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Readability scrim */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* Name + specialization overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    {cell.doctor.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-medium mt-1">
                    {cell.doctor.role}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/90">
                    <span>View Details &amp; Book</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            )
          )}
        </div>

      </div>

      {/* Doctor Details Popup — mobile / tablet only (desktop shows the inline panel) */}
      {selectedDoctor && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveIdx(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[var(--card)] rounded-2xl shadow-2xl border border-[var(--line)] overflow-hidden z-10 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Doctor Thumbnail & Info */}
            <div className="p-6 pb-4 border-b border-[var(--line)] flex items-start justify-between bg-[var(--card-soft)]/60">
              <div className="flex items-center gap-4">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-16 h-16 rounded-lg object-cover object-top border border-[var(--line)] shadow-sm"
                />
                <div>
                  <span className="text-xs font-bold text-[#2675D8]">
                    {selectedDoctor.qualification} • {selectedDoctor.experience}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--ink)] mt-0.5">
                    {selectedDoctor.name}
                  </h3>
                  <p className="text-xs text-[var(--ink-soft)] font-medium">
                    {selectedDoctor.role}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveIdx(null)}
                className="w-8 h-8 rounded-full bg-[var(--card)] hover:bg-[var(--card-soft)] border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink-faint)] mb-2">
                  Doctor Background
                </h4>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed font-normal">
                  {selectedDoctor.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink-faint)] mb-2">
                  Core Clinical Specialties
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDoctor.specialties.map((spec, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs bg-[var(--accent-soft)] text-[#2675D8] font-medium px-3 py-1.5 rounded-lg border border-blue-100"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2675D8]" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919133933392"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[var(--line)] text-[var(--ink)] hover:bg-[var(--card-soft)] text-xs font-bold transition-all"
                >
                  <Phone className="w-4 h-4 text-[var(--ink-soft)]" />
                  <span>Call Clinic</span>
                </a>
                <button
                  onClick={() => {
                    const doc = selectedDoctor.name;
                    setActiveIdx(null);
                    onOpenBooking(`Consultation with ${doc}`);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#2675D8] hover:bg-[#1C5EB0] text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Visit with {selectedDoctor.name.split(" ")[1]}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
