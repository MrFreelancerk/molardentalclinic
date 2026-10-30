"use client";

import Link from "next/link";

export default function About() {
  const cards = [
    {
      category: "Expertise",
      title: "Experienced Dentists",
      description: "Skilled professionals dedicated to providing exceptional dental care.",
      href: "/#dentists",
      image: "/why-us/experienced-dentists-1200.webp",
      srcSet:
        "/why-us/experienced-dentists-640.webp 640w, /why-us/experienced-dentists-1200.webp 1200w",
      alt: "Experienced dentists providing exceptional dental care",
    },
    {
      category: "Technology",
      title: "Advanced Technology",
      description: "Modern equipment for accurate diagnosis and comfortable treatments.",
      href: "/services/digital-rvg-x-ray",
      image: "/why-us/advanced-technology-1200.webp",
      srcSet:
        "/why-us/advanced-technology-640.webp 640w, /why-us/advanced-technology-1200.webp 1200w",
      alt: "Advanced dental technology and modern equipment",
    },
    {
      category: "Personalized",
      title: "Personalized Care",
      description: "Customized treatment plans designed for every patient's unique needs.",
      href: "/services",
      image: "/why-us/personalized-care-1200.webp",
      srcSet:
        "/why-us/personalized-care-640.webp 640w, /why-us/personalized-care-1200.webp 1200w",
      alt: "Personalized care and customized treatment plans",
    },
    {
      category: "Comfort",
      title: "Comfortable Experience",
      description: "A welcoming clinic where your comfort and safety come first.",
      href: "/#reviews",
      image: "/why-us/comfortable-experience-1200.webp",
      srcSet:
        "/why-us/comfortable-experience-640.webp 640w, /why-us/comfortable-experience-1200.webp 1200w",
      alt: "Comfortable and welcoming clinic experience",
    },
    {
      category: "Affordable",
      title: "Affordable Treatments",
      description: "Quality dental care at transparent and reasonable prices.",
      href: "/#location",
      image: "/why-us/affordable-treatments-1200.webp",
      srcSet:
        "/why-us/affordable-treatments-640.webp 640w, /why-us/affordable-treatments-1200.webp 1200w",
      alt: "Affordable dental treatments with transparent pricing",
    },
    {
      category: "Families",
      title: "Trusted by Families",
      description: "Building healthy, confident smiles with compassionate care.",
      href: "/#reviews",
      image: "/why-us/trusted-by-families-1200.webp",
      srcSet:
        "/why-us/trusted-by-families-640.webp 640w, /why-us/trusted-by-families-1200.webp 1200w",
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
            <Link
              key={idx}
              href={card.href}
              className="group relative flex flex-col bg-[var(--card)] rounded-none border border-[var(--line)] overflow-hidden transition-colors duration-200 hover:border-[#123B65] focus-visible:border-[#123B65]"
            >
              {/* Sharp accent rule that draws across the top edge on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-[2px] origin-left scale-x-0 bg-[#2675D8] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />

              {/* Card Top Text Area */}
              <div className="p-6 sm:p-7">
                <span className="text-xs font-semibold text-[var(--ink)] block mb-3">
                  {card.category}
                </span>
                <h3 className="text-[19px] sm:text-[20px] font-bold text-[var(--ink)] tracking-tight leading-snug mb-3">
                  {card.title}
                </h3>
                <p className="text-xs text-[var(--ink-soft)] leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Card Bottom Photo */}
              <div className="mt-auto h-36 sm:h-40 w-full overflow-hidden bg-[var(--card-soft)]">
                <img
                  src={card.image}
                  srcSet={card.srcSet}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                  alt={card.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
