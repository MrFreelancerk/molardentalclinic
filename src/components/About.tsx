"use client";

import { ChevronRight } from "lucide-react";

export default function About() {
  const cards = [
    {
      category: "Expertise",
      title: "Experienced Dentists",
      description: "Skilled professionals dedicated to providing exceptional dental care.",
      image: "/hero-1280.webp",
      srcSet: "/hero-640.webp 640w, /hero-960.webp 960w, /hero-1280.webp 1280w",
      alt: "Experienced dentists providing exceptional dental care",
    },
    {
      category: "Technology",
      title: "Advanced Technology",
      description: "Modern equipment for accurate diagnosis and comfortable treatments.",
      image: "/services/root-canal-procedure-1200.webp",
      srcSet:
        "/services/root-canal-procedure-640.webp 640w, /services/root-canal-procedure-1200.webp 1200w",
      alt: "Advanced dental technology and modern equipment",
    },
    {
      category: "Personalized",
      title: "Personalized Care",
      description: "Customized treatment plans designed for every patient's unique needs.",
      image: "/exact-care.jpg",
      alt: "Personalized care and customized treatment plans",
    },
    {
      category: "Comfort",
      title: "Comfortable Experience",
      description: "A welcoming clinic where your comfort and safety come first.",
      image: "/exact-comfort.jpg",
      alt: "Comfortable and welcoming clinic experience",
    },
    {
      category: "Affordable",
      title: "Affordable Treatments",
      description: "Quality dental care at transparent and reasonable prices.",
      image: "/exact-trust.jpg",
      alt: "Affordable dental treatments with transparent pricing",
    },
    {
      category: "Families",
      title: "Trusted by Families",
      description: "Building healthy, confident smiles with compassionate care.",
      image: "/exact-welcome.jpg",
      alt: "Families trusting Molar Dental Hospital",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-[var(--page)] border-t border-[var(--line)] scroll-mt-10">
      <div id="why-us" className="sr-only scroll-mt-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Exact Header Alignment */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="text-xs font-semibold text-[var(--ink)] mb-2">
            Why
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[var(--ink)] tracking-tight leading-tight mb-3">
            Patients Choose Our Molar Dental Hospital
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-soft)] font-normal">
            Quality dental care at patient-friendly pricing
          </p>
        </div>

        {/* 6 Cards Grid (Exact Borders, Radius, Colors & Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[var(--card)] rounded-lg border border-[var(--line)] overflow-hidden shadow-none flex flex-col justify-between"
            >
              {/* Card Top Text Area */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-xs font-semibold text-[var(--ink)] block mb-3">
                    {card.category}
                  </span>
                  <h3 className="text-[19px] sm:text-[20px] font-bold text-[var(--ink)] tracking-tight leading-snug mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[var(--ink-soft)] leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                <a
                  href="#location"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--ink)] hover:text-[#2675D8] transition-colors mt-auto"
                >
                  <span>Learn</span>
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>

              {/* Card Bottom Exact Photo */}
              <div className="h-36 sm:h-40 w-full overflow-hidden bg-[var(--card-soft)] border-t border-[#F2F2F2]">
                <img
                  src={card.image}
                  srcSet={card.srcSet}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                  alt={card.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
