"use client";

import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  ArrowUp,
  ArrowUpRight,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

const CONTACT = {
  phone: "+919133933392",
  phoneDisplay: "+91 91339 33392",
  email: "molardentalhospital@gmail.com",
  whatsapp:
    "https://wa.me/919133933392?text=Hello%20Molar%20Dental%20Hospital",
  maps: "https://www.google.com/maps/search/?api=1&query=Molar+Dental+Hospital+Near+Shivaji+Statue+Junction+Indresham+Road+Bachuguda+Patancheru+502319",
};

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61579036284395",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/molardentalhospital/",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.79.22 2.43.46.66.26 1.22.6 1.77 1.16.56.55.9 1.11 1.16 1.77.24.64.41 1.36.46 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.79-.46 2.43a4.9 4.9 0 0 1-1.16 1.77c-.55.56-1.11.9-1.77 1.16-.64.24-1.36.41-2.43.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.46a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77c-.24-.64-.41-1.36-.46-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.79.46-2.43.26-.66.6-1.22 1.16-1.77.55-.56 1.11-.9 1.77-1.16.64-.24 1.36-.41 2.43-.46C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.98.04-1.5.21-1.86.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.13.36-.3.88-.34 1.86-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.98.21 1.5.34 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.13.88.3 1.86.34 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.98-.04 1.5-.21 1.86-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.13-.36.3-.88.34-1.86.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.98-.21-1.5-.34-1.86a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.36-.13-.88-.3-1.86-.34-1.05-.05-1.37-.06-4.04-.06Zm0 3.06a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28Zm0 1.8a3.34 3.34 0 1 0 0 6.68 3.34 3.34 0 0 0 0-6.68Zm5.34-3.03a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@MolarDentalhospital",
    path: "M21.58 7.19a2.76 2.76 0 0 0-1.94-1.95C17.93 4.77 12 4.77 12 4.77s-5.93 0-7.64.47A2.76 2.76 0 0 0 2.42 7.2C1.95 8.91 1.95 12 1.95 12s0 3.09.47 4.81a2.76 2.76 0 0 0 1.94 1.95c1.71.47 7.64.47 7.64.47s5.93 0 7.64-.47a2.76 2.76 0 0 0 1.94-1.95c.47-1.72.47-4.81.47-4.81s0-3.09-.47-4.81ZM10.05 15.32V8.68L15.55 12l-5.5 3.32Z",
  },
];

const TREATMENTS = [
  { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Invisible Aligners", href: "/services/invisible-aligners" },
  { label: "Braces", href: "/services/braces" },
  { label: "Zirconia Crowns", href: "/services/zirconia-crowns" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Why Molar", href: "/#why-us" },
  { label: "Our Dentists", href: "/#dentists" },
  { label: "Patient Reviews", href: "/#reviews" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--card)] border-t border-[var(--line)] text-[var(--ink-soft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block group" aria-label="Molar Dental Hospital — home">
              <img
                src="/molar-logo-dark.png"
                alt="Molar Dental Hospital"
                className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--ink-soft)]">
              Advanced, gentle and anxiety-free dentistry in Patancheru — from
              single-sitting root canals to full smile makeovers.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Molar Dental Hospital on ${social.label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--ink-soft)] transition-colors hover:border-[#2675D8] hover:bg-[#2675D8] hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--green-soft)] px-3 py-1.5 text-[11px] font-semibold text-[#1F7A3B]">
              <ShieldCheck className="h-3.5 w-3.5" />
              NABH Standards · 100% Sterile Protocol
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink)]">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--ink-soft)] transition-colors hover:text-[#2675D8]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="lg:col-span-3">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink)]">
              Treatments
            </h2>
            <ul className="mt-4 space-y-2.5">
              {TREATMENTS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--ink-soft)] transition-colors hover:text-[#2675D8]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 pt-1 text-sm font-semibold text-[#2675D8] hover:text-[#1C5EB0]"
                >
                  All treatments
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink)]">
              Visit Us
            </h2>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2675D8]" />
                <a
                  href={CONTACT.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-[var(--ink-soft)] transition-colors hover:text-[#2675D8]"
                >
                  Near Shivaji Statue Junction, Indresham Road, Bachuguda,
                  Patancheru, Hyderabad, Telangana – 502319
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#2675D8]" />
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-[var(--ink-soft)] transition-colors hover:text-[#2675D8]"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#2675D8]" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all text-[var(--ink-soft)] transition-colors hover:text-[#2675D8]"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#2675D8]" />
                <span className="leading-relaxed text-[var(--ink-soft)]">
                  Mon – Sun · 9:00 AM – 2:00 PM
                  <br />
                  5:00 PM – 9:00 PM
                </span>
              </li>
            </ul>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#123B65] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0A223B]"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#4ADE80]" />
              Chat on WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-[var(--line)] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--ink-soft)]">
            © 2026 Molar Dental Hospital. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[var(--ink-soft)]">
            <Link href="/contact" className="transition-colors hover:text-[var(--ink)]">
              Book a Visit
            </Link>
            <Link href="/services" className="transition-colors hover:text-[var(--ink)]">
              Services
            </Link>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <span>Free Valet Parking · Wheelchair Accessible</span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink-soft)] transition-colors hover:border-[#2675D8] hover:text-[#2675D8]"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
