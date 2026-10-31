"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, CheckCircle2, X, Phone, Calendar } from "lucide-react";

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

export default function Dentists({ onOpenBooking, showDetails }: DentistsProps) {
  const pathname = usePathname();
  // Show rich details (bio description, experience, specialties) ONLY on the home page
  const shouldShowDetails = showDetails ?? (pathname === "/");

  // Desktop: null by default (closed); opens smoothly only on hover
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  // Mobile: tapped card opens detail dialog when details are enabled
  const [selectedMobileIdx, setSelectedMobileIdx] = useState<number | null>(null);

  const selectedDoctor = selectedMobileIdx !== null ? doctors[selectedMobileIdx] : null;

  return (
    <section id="dentists" className="py-20 sm:py-24 bg-[var(--page)] border-t border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-reveal className="mb-12 sm:mb-14 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-normal text-[var(--ink)] tracking-tight">
            Meet The Dentists
          </h2>
          <p className="text-[var(--ink-soft)] text-sm sm:text-base font-normal mt-2">
            Experienced dental specialists dedicated to your comfort and lifelong oral health
          </p>
        </div>

        {/* Desktop — one row, all cards equal by default, hovered card widens and reveals its details */}
        <div
          data-reveal
          className="hidden lg:flex h-[440px] gap-4"
          onMouseLeave={() => setOpenIdx(null)}
        >
          {doctors.map((doctor, index) => {
            const isOpen = openIdx === index;

            return (
              <button
                key={doctor.name}
                type="button"
                onMouseEnter={() => setOpenIdx(index)}
                onMouseLeave={() => setOpenIdx(null)}
                onFocus={() => setOpenIdx(index)}
                onBlur={() => setOpenIdx(null)}
                onClick={() => onOpenBooking(`Consultation with ${doctor.name}`)}
                aria-label={`${doctor.name} — ${doctor.role}. Book a consultation`}
                style={{ flexGrow: isOpen ? 4.6 : 1 }}
                className="group relative flex min-w-0 basis-0 overflow-hidden rounded-none border border-[var(--line)] bg-[var(--card)] text-left cursor-pointer transition-[flex-grow,border-color] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#123B65] focus-visible:outline-none focus-visible:border-[#123B65] focus-visible:ring-2 focus-visible:ring-[#2675D8]"
              >
                {/* Portrait — the photo is never zoomed or re-cropped; the card just grows around it */}
                <div
                  className={`relative h-full shrink-0 overflow-hidden bg-[var(--card-soft)] transition-[width] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isOpen ? "w-[44%]" : "w-full"
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
                    <h3 className="text-lg font-normal text-white tracking-tight leading-snug">
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
                  <div className="flex h-full min-w-0 flex-col justify-between border-l border-[var(--line)] p-5 xl:p-6 overflow-y-auto">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                        {doctor.qualification}
                      </p>
                      <h3 className="mt-1.5 text-lg xl:text-xl font-normal text-[var(--ink)] tracking-tight leading-snug">
                        {doctor.name}
                      </h3>
                      <p className="mt-1 text-[13px] font-semibold text-[#0072CE]">{doctor.role}</p>

                      {/* Home Page Exclusive Details: Experience, Bio Description, Specialties */}
                      {shouldShowDetails && (
                        <div className="mt-3.5 border-t border-[var(--line)] pt-3.5 space-y-3">
                          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0072CE] bg-[#0072CE]/10 px-2.5 py-1 rounded-none border border-[#0072CE]/20">
                            {doctor.experience}
                          </span>

                          <p className="text-[12.5px] leading-relaxed text-[var(--ink-soft)] font-normal">
                            {doctor.bio}
                          </p>

                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--ink-faint)] mb-1.5">
                              Clinical Specialties
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {doctor.specialties.map((spec) => (
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

                    <div className="pt-4 mt-auto border-t border-[var(--line)]/60 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0072CE] group-hover:text-[#005FA8] transition-colors">
                        Book consultation
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile / tablet — 2-up grid */}
        <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:hidden">
          {doctors.map((doctor, index) => (
            <button
              key={doctor.name}
              type="button"
              onClick={() => {
                if (shouldShowDetails) {
                  setSelectedMobileIdx(index);
                } else {
                  onOpenBooking(`Consultation with ${doctor.name}`);
                }
              }}
              aria-label={`${doctor.name} — ${doctor.role}`}
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
                <h3 className="mt-1.5 text-lg font-normal text-white tracking-tight leading-snug">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-xs text-white/75 font-medium">{doctor.role}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                  {shouldShowDetails ? "View profile & book" : "Book consultation"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Doctor Details Modal — Home Page Only */}
      {selectedDoctor && shouldShowDetails && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedMobileIdx(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[var(--card)] rounded-none shadow-2xl border border-[var(--line)] overflow-hidden z-10 animate-in zoom-in-95 duration-200 max-h-[90dvh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-[var(--line)] flex items-start justify-between bg-[var(--card-soft)]/60 shrink-0">
              <div className="flex items-center gap-3.5">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-14 h-14 rounded-none object-cover object-top border border-[var(--line)]"
                />
                <div>
                  <span className="text-[11px] font-semibold text-[#0072CE]">
                    {selectedDoctor.qualification} &bull; {selectedDoctor.experience}
                  </span>
                  <h3 className="text-lg font-normal text-[var(--ink)] mt-0.5">
                    {selectedDoctor.name}
                  </h3>
                  <p className="text-xs text-[var(--ink-soft)] font-medium">
                    {selectedDoctor.role}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMobileIdx(null)}
                className="w-8 h-8 rounded-none bg-[var(--card)] hover:bg-[var(--card-soft)] border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors cursor-pointer"
                aria-label="Close profile"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 space-y-4 overflow-y-auto flex-1">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-faint)] mb-1.5">
                  About Specialist
                </h4>
                <p className="text-[13px] text-[var(--ink-soft)] leading-relaxed font-normal">
                  {selectedDoctor.bio}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-faint)] mb-2">
                  Clinical Specialties
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDoctor.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center gap-1.5 text-xs bg-[var(--page)] text-[var(--ink)] font-medium px-2.5 py-1 rounded-none border border-[var(--line)]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B050]" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-5 border-t border-[var(--line)] flex flex-col sm:flex-row gap-2.5 bg-[var(--card-soft)]/40 shrink-0">
              <a
                href="tel:+919133933392"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-none border border-[var(--line)] text-[var(--ink)] hover:bg-[var(--card-soft)] text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
                <span>Call Clinic</span>
              </a>
              <button
                onClick={() => {
                  const doc = selectedDoctor.name;
                  setSelectedMobileIdx(null);
                  onOpenBooking(`Consultation with ${doc}`);
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-[#143A66] hover:bg-[#0E2A4D] text-white font-semibold text-xs py-2.5 px-4 rounded-none shadow-sm transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
