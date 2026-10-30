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
  // Mobile / tablet: tapped card opens the detail dialog
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  // Desktop: hovered or focused card widens and reveals its details
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const selectedDoctor = activeIdx === null ? null : doctors[activeIdx];

  return (
    <section id="dentists" className="py-20 sm:py-24 bg-[var(--page)] border-t border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-14 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight">
            Meet The Dentists
          </h2>
          <p className="text-[var(--ink-soft)] text-sm sm:text-base font-normal mt-2">
            Experienced dental specialists dedicated to your comfort and lifelong oral health
          </p>
        </div>

        {/* Desktop — one row, the hovered card widens and takes space from its neighbours */}
        <div className="hidden lg:flex h-[420px] gap-4">
          {doctors.map((doctor, index) => {
            const isOpen = openIdx === index;

            return (
              <button
                key={doctor.name}
                type="button"
                onMouseEnter={() => setOpenIdx(index)}
                onMouseLeave={() => setOpenIdx((current) => (current === index ? null : current))}
                onFocus={() => setOpenIdx(index)}
                onBlur={() => setOpenIdx((current) => (current === index ? null : current))}
                onClick={() => onOpenBooking(`Consultation with ${doctor.name}`)}
                aria-label={`${doctor.name} — ${doctor.role}. Book a consultation`}
                style={{ flexGrow: isOpen ? 4.4 : 1 }}
                className="group relative flex min-w-0 basis-0 overflow-hidden rounded-none border border-[var(--line)] bg-[var(--card)] text-left cursor-pointer transition-[flex-grow,border-color] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#123B65] focus-visible:outline-none focus-visible:border-[#123B65] focus-visible:ring-2 focus-visible:ring-[#2675D8]"
              >
                {/* Portrait — the photo is never zoomed or re-cropped; the card just grows around it */}
                <div
                  className={`relative h-full shrink-0 overflow-hidden bg-[var(--card-soft)] transition-[width] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isOpen ? "w-[46%]" : "w-full"
                  }`}
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />

                  {/* Scrim + name only while collapsed; both clear when the card opens */}
                  <div
                    className={`pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span className="absolute left-5 top-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={`absolute inset-x-0 bottom-0 p-5 transition-opacity duration-300 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-white/75">{doctor.role}</p>
                  </div>
                </div>

                {/* Details — opens to the right of the portrait, like a horizontal card */}
                <div
                  className={`relative h-full min-w-0 overflow-hidden transition-opacity duration-300 ${
                    isOpen ? "flex-1 opacity-100 delay-200" : "w-0 opacity-0"
                  }`}
                >
                  <div className="flex h-full min-w-0 flex-col border-l border-[var(--line)] p-5 xl:p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                      {doctor.qualification}
                    </p>
                    <h3 className="mt-2 text-lg xl:text-xl font-bold text-[var(--ink)] tracking-tight leading-snug">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 text-[13px] font-semibold text-[#2675D8]">{doctor.role}</p>

                    <div className="mt-4 border-t border-[var(--line)] pt-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                        {doctor.experience}
                      </p>
                      <p className="mt-2 text-[13px] leading-[1.55] text-[var(--ink-soft)]">
                        {doctor.bio}
                      </p>
                      <div className="mt-4 hidden flex-wrap gap-1.5 xl:flex">
                        {doctor.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="inline-flex items-center gap-1.5 rounded-none border border-[var(--line)] px-2 py-1 text-[11px] font-medium text-[var(--ink-soft)]"
                          >
                            <CheckCircle2 className="h-3 w-3 text-[#2675D8]" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2675D8]">
                      Book a consultation
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile / tablet — 2-up grid, tap opens the detail dialog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:hidden">
          {doctors.map((doctor, index) => (
            <button
              key={doctor.name}
              type="button"
              onClick={() => setActiveIdx(index)}
              aria-label={`${doctor.name} — ${doctor.role}. View profile`}
              className="group relative block w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-none border border-[var(--line)] bg-[var(--card-soft)] text-left cursor-pointer transition-colors hover:border-[#123B65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2675D8]"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  {doctor.qualification}
                </p>
                <h3 className="mt-1.5 text-lg font-bold text-white tracking-tight leading-snug">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-xs text-white/75 font-medium">{doctor.role}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                  View profile
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Doctor Details Popup — mobile / tablet only */}
      {selectedDoctor && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveIdx(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[var(--card)] rounded-none shadow-2xl border border-[var(--line)] overflow-hidden z-10 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Doctor Thumbnail & Info */}
            <div className="p-6 pb-4 border-b border-[var(--line)] flex items-start justify-between bg-[var(--card-soft)]/60">
              <div className="flex items-center gap-4">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-16 h-16 rounded-none object-cover object-top border border-[var(--line)]"
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
                className="w-8 h-8 rounded-none bg-[var(--card)] hover:bg-[var(--card-soft)] border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors cursor-pointer"
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
                  {selectedDoctor.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center gap-1.5 text-xs bg-[var(--accent-soft)] text-[#2675D8] font-medium px-3 py-1.5 rounded-none border border-blue-100"
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
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-none border border-[var(--line)] text-[var(--ink)] hover:bg-[var(--card-soft)] text-xs font-bold transition-colors"
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
                  className="flex-1 flex items-center justify-center gap-2 bg-[#2675D8] hover:bg-[#1C5EB0] text-white font-bold text-xs py-3 px-4 rounded-none shadow-md transition-colors cursor-pointer"
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
