"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import {
  Calendar,
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  Compass,
  MapPin,
  Clock,
  HeartHandshake,
  Check,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import AppointmentModal from "@/components/AppointmentModal";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.174-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const iconMask = (file: string): CSSProperties => ({
  maskImage: `url(/icons/${file})`,
  WebkitMaskImage: `url(/icons/${file})`,
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
  maskPosition: "center",
  WebkitMaskPosition: "center",
  maskSize: "contain",
  WebkitMaskSize: "contain",
});

interface Doctor {
  name: string;
  qualification: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  specialties: string[];
}

const doctors: Doctor[] = [
  {
    name: "Dr. B. Gopal Reddy",
    qualification: "BDS, MDS",
    role: "Chief Implantologist & Dental Surgeon",
    experience: "14+ Years Exp",
    bio: "Renowned expert in computer-guided dental implants, LASER dentistry, and full-mouth rehabilitation. Committed to painless precision treatments and lasting smile restorations.",
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
    bio: "Expert in transforming misaligned teeth and bite disorders using modern clear invisible aligners and aesthetic ceramic braces for children, teens, and working adults.",
    image: "/doc-ravi.jpg",
    specialties: ["Clear Aligners", "Invisalign", "Ceramic Braces", "Bite Correction"],
  },
  {
    name: "Dr. Bhargav Ram",
    qualification: "BDS, MDS",
    role: "Oral & Maxillofacial Surgeon",
    experience: "8+ Years Exp",
    bio: "Specialist in complex surgical extractions, wisdom tooth micro-surgery, and facial trauma reconstruction with focus on minimal post-operative downtime.",
    image: "/doc-bhargav.jpg",
    specialties: ["Wisdom Tooth Surgery", "Bone Grafting", "Facial Trauma", "Cyst Removals"],
  },
];

const reasonsToChoose = [
  {
    icon: "dental-implants.svg",
    title: "Experienced Specialists",
    tag: "Clinical Mastery",
    bgClass: "bg-[var(--tint-green)]",
    iconBg: "bg-[#0B6B33]",
    description:
      "Our team brings together highly qualified MDS & BDS specialists across Endodontics, Implantology, Orthodontics, and Maxillofacial Surgery with up to 14+ years of dedicated practice.",
  },
  {
    icon: "digital-rvg-x-ray.svg",
    title: "Advanced Dental Technology",
    tag: "High-Tech Diagnostics",
    bgClass: "bg-[var(--tint-blue)]",
    iconBg: "bg-[#0072CE]",
    description:
      "Equipped with Digital RVG X-Rays (90% reduced radiation), rotary apex locators, computerized local anesthesia, and 3D intraoral digital smile design for spot-on accuracy.",
  },
  {
    icon: "root-canal-treatment.svg",
    title: "Personalized, Stress-Free Care",
    tag: "100% Patient-First",
    bgClass: "bg-[var(--tint-violet)]",
    iconBg: "bg-[#6B46C1]",
    description:
      "We design custom treatment plans tailored to your medical history and lifestyle. From clear cost estimates to gentle chairside reassurance, your comfort is guaranteed.",
  },
  {
    icon: "zirconia-crowns.svg",
    title: "Hospital-Grade Sterilization",
    tag: "NABH Standards",
    bgClass: "bg-[var(--tint-peach)]",
    iconBg: "bg-[#C05621]",
    description:
      "We strictly adhere to multi-stage Class-B vacuum autoclave sterilization, hermetically sealed diagnostic pouches, and rigorous sanitization before every patient visit.",
  },
];

const patientJourneySteps = [
  {
    step: "01",
    title: "Digital Consultation & Exam",
    description:
      "We begin with a gentle clinical evaluation, high-definition digital X-rays, and an open conversation about your symptoms and smile goals.",
  },
  {
    step: "02",
    title: "Transparent Treatment Plan",
    description:
      "You receive a clear, printed roadmap explaining required treatments, expected timelines, and all costs with zero hidden surprises.",
  },
  {
    step: "03",
    title: "Painless, Precision Care",
    description:
      "Treatments are carried out using computer-controlled local anesthesia, German rotary tools, and micro-precision for total comfort.",
  },
  {
    step: "04",
    title: "Lifelong Follow-up & Care",
    description:
      "We guide you with clear post-procedure care routines, scheduled check-in reminders, and preventive maintenance for healthy, lasting smiles.",
  },
];

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Comprehensive Oral Checkup");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[var(--page)] text-[var(--ink)]">
      <Navbar onOpenBooking={() => handleOpenBooking("Comprehensive Oral Checkup")} />

      <main id="main">
        {/* ================= HERO SECTION ================= */}
        <section className="bg-[var(--navy)] text-white pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-white/10 relative overflow-hidden">
          {/* Subtle Ambient Light Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-[#0072CE]/20 rounded-full blur-[120px] -z-0"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00B050]/15 rounded-full blur-[100px] -z-0"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/70">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-white font-medium">About Us</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8CBBE4] border border-[#8CBBE4]/30 px-3.5 py-1.5 rounded-none mb-5 bg-white/5 backdrop-blur-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00B050]" />
                Built On Trust • Driven By Excellence
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.08] mb-6">
                Redefining The Dental Experience in{" "}
                <span className="text-[#8CBBE4]">Patancheru</span>
              </h1>
              <p className="text-sm sm:text-lg text-white/85 leading-relaxed font-normal mb-8 max-w-2xl">
                Founded to transform how families perceive dentistry. At Molar Dental Hospital, we combine senior clinical expertise, hospital-grade sterility, and gentle bedside care to create healthy smiles that last a lifetime.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleOpenBooking("Comprehensive Oral Checkup")}
                  className="inline-flex items-center gap-2 bg-[#0072CE] hover:bg-[#005bb5] text-white text-xs sm:text-sm font-bold py-3.5 px-7 rounded-none shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <a
                  href="tel:+919133933392"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-none transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#8CBBE4]" />
                  <span>+91 91339 33392</span>
                </a>

                <a
                  href="https://wa.me/919133933392?text=Hello%20Molar%20Dental%20Hospital,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00B050] hover:bg-[#099b49] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-none shadow-sm transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= KEY IMPACT STATS BAR ================= */}
        <section className="bg-[var(--card)] border-b border-[var(--line)] py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="border-l-2 border-[#0072CE] pl-4 sm:pl-5">
                <span className="block text-2xl sm:text-4xl font-black text-[var(--ink)] tracking-tight">
                  1,500+
                </span>
                <span className="text-xs sm:text-sm text-[var(--slate)] font-medium mt-1 block">
                  Treatments Completed
                </span>
              </div>
              <div className="border-l-2 border-[#00B050] pl-4 sm:pl-5">
                <span className="block text-2xl sm:text-4xl font-black text-[var(--ink)] tracking-tight">
                  4.9 / 5.0
                </span>
                <span className="text-xs sm:text-sm text-[var(--slate)] font-medium mt-1 block">
                  Patient Rating (120+ Reviews)
                </span>
              </div>
              <div className="border-l-2 border-[#143A66] pl-4 sm:pl-5">
                <span className="block text-2xl sm:text-4xl font-black text-[var(--ink)] tracking-tight">
                  14+ Yrs
                </span>
                <span className="text-xs sm:text-sm text-[var(--slate)] font-medium mt-1 block">
                  Senior Specialist Experience
                </span>
              </div>
              <div className="border-l-2 border-[#F5A623] pl-4 sm:pl-5">
                <span className="block text-2xl sm:text-4xl font-black text-[var(--ink)] tracking-tight">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-[var(--slate)] font-medium mt-1 block">
                  Class-B Sterile Assurance
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OUR STORY SECTION ================= */}
        <section className="py-20 sm:py-28 bg-[var(--page)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Clinic Building Photo */}
              <div className="lg:col-span-5">
                <div className="border border-[var(--line)] bg-[var(--card)] p-2 shadow-lg rounded-none">
                  <img
                    src="/hospital-building-700.jpg"
                    alt="Molar Dental Hospital Building in Indresham, Patancheru"
                    className="w-full h-auto object-cover rounded-none"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: Narrative Copy */}
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0072CE] mb-2.5 block">
                  Our Story & Purpose
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--ink)] tracking-tight leading-[1.15] mb-6">
                  Built on Trust. <br />
                  <span className="text-[#0072CE]">Driven by Excellence.</span>
                </h2>
                
                <div className="space-y-4 text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed font-normal">
                  <p>
                    <strong className="font-semibold text-[var(--ink)]">Molar Dental Hospital</strong> was founded with one clear ambition: to fundamentally redefine the patient experience in modern dentistry. For too long, dental visits have been associated with dread, anxiety, and opacity. We envisioned a hospital where patients feel welcomed, understood, and cared for from the moment they step through the door.
                  </p>
                  <p>
                    By blending compassionate human empathy with cutting-edge dental innovations, we have helped thousands of patients in Patancheru and the surrounding Hyderabad industrial corridor overcome dental fear and embrace confident, painless smiles.
                  </p>
                  <p>
                    Whether you require a single-sitting precision root canal, computer-guided dental implants, subtle invisible aligners, or a joyful first checkup for your child, our hospital delivers specialized hospital-level sterile protocols with friendly neighborhood warmth.
                  </p>
                </div>

                {/* 3 Core Pillars Checklist */}
                <div className="mt-8 pt-6 border-t border-[var(--line)] grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B050] shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-[var(--ink)]">
                      Transparent, Fixed Pricing
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B050] shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-[var(--ink)]">
                      Computerized Painless Numbing
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B050] shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-[var(--ink)]">
                      Zero Overtreatment Guarantee
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= VISION & MISSION SECTION ================= */}
        <section className="py-20 sm:py-24 bg-[var(--card-soft)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0072CE] mb-2 block">
                Our Guiding Light
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-[var(--ink)] tracking-tight">
                Our Vision & Mission
              </h2>
              <p className="text-sm text-[var(--ink-soft)] mt-2">
                Setting new benchmarks for clinical mastery and heartfelt patient relationships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Vision Card */}
              <div className="bg-[var(--tint-blue)] border border-black/5 dark:border-white/10 p-8 sm:p-10 flex flex-col justify-between rounded-none shadow-xs hover:shadow-lg transition-all duration-300 relative group">
                <span className="absolute top-0 left-0 right-0 h-1 bg-[#0072CE]" />
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#0072CE] bg-white/70 px-3 py-1 rounded-none border border-black/5">
                      Our Vision
                    </span>
                    <Compass className="w-5 h-5 text-[#0072CE]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-normal text-[var(--ink)] mb-4 tracking-tight leading-snug">
                    Setting New Standards in Modern Dentistry
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                    To become the most trusted and respected dental hospital in Patancheru and Hyderabad by consistently delivering exceptional clinical outcomes, adopting cutting-edge advancements in dental sciences, and forging lifelong, caring relationships with every patient and family we serve.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-black/10 flex items-center gap-2 text-xs font-bold text-[#0072CE]">
                  <span>Pioneering Dental Excellence</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-[var(--tint-green)] border border-black/5 dark:border-white/10 p-8 sm:p-10 flex flex-col justify-between rounded-none shadow-xs hover:shadow-lg transition-all duration-300 relative group">
                <span className="absolute top-0 left-0 right-0 h-1 bg-[#00B050]" />
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B6B33] bg-white/70 px-3 py-1 rounded-none border border-black/5">
                      Our Mission
                    </span>
                    <HeartHandshake className="w-5 h-5 text-[#0B6B33]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-normal text-[var(--ink)] mb-4 tracking-tight leading-snug">
                    Creating Healthy Smiles That Last a Lifetime
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                    To make world-class, painless, and specialized dental care accessible and affordable to all. We combine state-of-the-art diagnostic technology, ethical patient consultation, and genuine human compassion to restore and protect the natural smiles of our community.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-black/10 flex items-center gap-2 text-xs font-bold text-[#0B6B33]">
                  <span>Accessible Care For Every Family</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= WHY PATIENTS CHOOSE US ================= */}
        <section className="py-20 sm:py-28 bg-[var(--page)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0072CE] mb-2 block">
                The Molar Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--ink)] tracking-tight">
                Why Patients Choose Our Hospital
              </h2>
              <p className="text-sm sm:text-base text-[var(--ink-soft)] mt-3">
                Because every smile deserves uncompromising clinical precision and heartfelt comfort
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {reasonsToChoose.map((item, idx) => (
                <div
                  key={idx}
                  className={`${item.bgClass} rounded-none border border-black/5 dark:border-white/10 p-7 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-7">
                      <div className="w-12 h-12 rounded-none bg-white/75 dark:bg-black/20 backdrop-blur-xs flex items-center justify-center border border-black/5 dark:border-white/10 shadow-2xs">
                        <div
                          style={iconMask(item.icon)}
                          className={`w-6 h-6 ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink)]/80 bg-white/60 dark:bg-black/20 px-2 py-0.5 rounded-none">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-normal text-[var(--ink)] mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--ink)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/10">
                    <button
                      onClick={() => handleOpenBooking(item.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ink)] hover:text-[#0072CE] transition-colors cursor-pointer group-hover:underline"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MEET THE SPECIALISTS ================= */}
        <section className="py-20 sm:py-28 bg-[var(--card)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-[var(--line)]">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0072CE] mb-2.5 block">
                  Clinical Faculty
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--ink)] tracking-tight">
                  Meet Our Specialist Dentists
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[var(--ink-soft)] max-w-md">
                Each treatment at Molar Dental Hospital is performed by experienced senior dentists with advanced post-graduate qualifications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {doctors.map((doctor, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--page)] border border-[var(--line)] rounded-none overflow-hidden flex flex-col justify-between group hover:border-[#143A66] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Doctor Portrait */}
                    <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-100">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Details */}
                    <div className="p-5">
                      <h3 className="text-lg font-normal text-[var(--ink)] leading-snug">
                        {doctor.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#0072CE] mt-1.5">
                        {doctor.qualification}
                      </p>
                      <p className="text-xs text-[var(--ink-soft)] font-medium mt-0.5">
                        {doctor.role}
                      </p>
                    </div>
                  </div>

                  {/* Booking Action */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => handleOpenBooking(`Consultation with ${doctor.name}`)}
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-[var(--navy)] hover:bg-[#0072CE] text-white text-xs font-bold py-2.5 px-4 rounded-none transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Consultation</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 4-STEP PATIENT JOURNEY ================= */}
        <section className="py-20 sm:py-24 bg-[var(--card-soft)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0072CE] mb-2 block">
                The Patient Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-[var(--ink)] tracking-tight">
                How We Care For You
              </h2>
              <p className="text-sm text-[var(--ink-soft)] mt-2">
                A structured, empathetic process designed to eliminate uncertainty and fear
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {patientJourneySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--card)] border border-[var(--line)] p-7 rounded-none relative group hover:border-[#0072CE] transition-colors"
                >
                  <span className="text-4xl font-black text-[#0072CE]/20 group-hover:text-[#0072CE]/40 transition-colors block mb-4">
                    {step.step}
                  </span>
                  <h3 className="text-base font-normal text-[var(--ink)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[var(--ink-soft)] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CLINIC LOCATION & WORKING HOURS CARD ================= */}
        <section className="py-16 sm:py-20 bg-[var(--page)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[var(--card)] border border-[var(--line)] rounded-none p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0072CE] mb-2 block">
                  Find Our Hospital
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-[var(--ink)] tracking-tight mb-4">
                  Conveniently Located in Indresham, Patancheru
                </h3>
                <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed mb-6">
                  Situated right near the iconic Shivaji Statue Junction, our ground-floor facility features comfortable parking, wheelchair accessibility, and warm hospitality.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[var(--ink)]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#0072CE] shrink-0 mt-0.5" />
                    <span>
                      Near Shivaji Statue Junction, Indresham Road, Bachuguda, Patancheru, Hyderabad, Telangana 502319.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#00B050] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Open 7 Days a Week</strong>
                      <span className="text-[var(--ink-soft)]">
                        Morning: 9:00 AM – 2:00 PM <br />
                        Evening: 5:00 PM – 9:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Molar+Dental+Hospital+Near+Shivaji+Statue+Junction+Indresham+Road+Bachuguda+Patancheru+502319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#143A66] hover:bg-[#0072CE] dark:bg-[#0072CE] dark:hover:bg-[#005FA8] text-white text-xs font-bold py-3.5 px-6 rounded-none transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <a
                  href="tel:+919133933392"
                  className="inline-flex items-center justify-center gap-2 border border-[#143A66] dark:border-white/25 text-[#143A66] dark:text-white hover:bg-[#143A66] hover:text-white text-xs font-bold py-3.5 px-6 rounded-none transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hospital Reception (+91 91339 33392)</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ================= FINAL CTA SECTION ================= */}
        <section className="bg-[var(--navy)] text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8CBBE4] mb-3 block">
              Begin Your Smile Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight mb-4">
              Experience the Gentle Difference at Molar Dental
            </h2>
            <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
              Book a consultation with our senior specialists today. Transparent pricing, zero discomfort, and genuine care.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleOpenBooking("Comprehensive Oral Checkup")}
                className="inline-flex items-center gap-2 bg-[#0072CE] hover:bg-[#005bb5] text-white text-xs sm:text-sm font-bold py-3.5 px-8 rounded-none shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule An Appointment</span>
              </button>
              <a
                href="https://wa.me/919133933392?text=Hello%20Molar%20Dental%20Hospital,%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00B050] hover:bg-[#089a47] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-none transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}
