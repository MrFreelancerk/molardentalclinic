"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Calendar,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Activity,
  Anchor,
  Smile,
  AlignHorizontalDistributeCenter,
  Crown,
  ScanLine,
  Sparkles,
  Syringe,
} from "lucide-react";
import { serviceNav } from "@/data/services";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/contact" },
];

// One glyph per treatment, so the menu can be scanned by icon as well as text.
const serviceIcons: Record<string, typeof Activity> = {
  "root-canal-treatment": Activity,
  "dental-implants": Anchor,
  "invisible-aligners": Smile,
  braces: AlignHorizontalDistributeCenter,
  "zirconia-crowns": Crown,
  "digital-rvg-x-ray": ScanLine,
  "teeth-whitening": Sparkles,
  "tooth-extraction": Syringe,
};

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the services dropdown on outside click or Escape
  useEffect(() => {
    if (!servicesOpen) return;

    const handlePointer = (event: MouseEvent | TouchEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [servicesOpen]);

  // Lock body scroll behind the mobile drawer
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isServicesActive = pathname.startsWith("/services");
  const isContactActive = pathname === "/contact";
  const isHomeActive = pathname === "/";

  const navLinkClass = (active: boolean) =>
    `text-sm sm:text-[15px] font-semibold tracking-wide transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all ${
      active ? "after:w-full" : "after:w-0 hover:after:w-full"
    } ${
      isScrolled
        ? active
          ? "text-[#2675D8] after:bg-[#2675D8]"
          : "text-[var(--ink-soft)] hover:text-[#2675D8] after:bg-[#2675D8]"
        : active
          ? "text-white after:bg-[var(--card)]"
          : "text-white/85 hover:text-white after:bg-[var(--card)]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-200 py-1.5 sm:py-2 px-6 sm:px-10 lg:px-14 flex items-center ${
        isScrolled
          ? "bg-[var(--card)]/95 backdrop-blur-md border-b border-[var(--line)] shadow-sm text-[var(--ink)]"
          : "bg-black/40 backdrop-blur-sm border-b border-white/10 text-white"
      }`}
    >
      <div className="w-full flex items-center justify-between">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Molar Dental Hospital — home">
          <img
            src={isScrolled ? "/molar-logo-dark.png" : "/molar-logo.png"}
            alt="Molar Dental Hospital"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center" aria-label="Main navigation">
          <div className="flex items-center gap-6 xl:gap-7">

            <Link
              href="/"
              onClick={() => setServicesOpen(false)}
              aria-current={isHomeActive ? "page" : undefined}
              className={navLinkClass(isHomeActive)}
            >
              Home
            </Link>

            {/* Services + treatments dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/services"
                  onClick={() => setServicesOpen(false)}
                  aria-current={isServicesActive ? "page" : undefined}
                  className={navLinkClass(isServicesActive)}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  onFocus={() => setServicesOpen(true)}
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  aria-label="Toggle treatments menu"
                  className={`p-0.5 rounded transition-colors ${
                    isScrolled ? "text-[var(--ink-soft)] hover:text-[#2675D8]" : "text-white/80 hover:text-white"
                  }`}
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {servicesOpen && (
                <div
                  id="services-menu"
                  className="absolute left-1/2 top-full -translate-x-1/2 pt-4 w-[34rem]"
                >
                  <div className="rounded-none border border-[var(--line)] bg-[var(--card)] p-3 shadow-xl shadow-slate-900/10">
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                      {serviceNav.map((service) => {
                        const Icon = serviceIcons[service.slug] ?? Activity;
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-start gap-3 px-2.5 py-2.5 transition-colors"
                          >
                            <Icon
                              aria-hidden="true"
                              strokeWidth={1.6}
                              className="mt-0.5 w-4 h-4 shrink-0 text-[var(--ink-faint)] transition-colors group-hover:text-[#2675D8]"
                            />
                            <span className="min-w-0">
                              <span className="block text-[13px] font-semibold text-[var(--ink)] transition-colors group-hover:text-[#2675D8]">
                                {service.name}
                              </span>
                              <span className="block text-[11px] text-[var(--ink-soft)]">
                                {service.category}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-2 flex items-center justify-between border-t border-[var(--line)] px-3 pt-3 pb-1">
                      <span className="text-[11px] text-[var(--ink-soft)]">
                        Complete dental care under one roof
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#2675D8] hover:text-[#1C5EB0]"
                      >
                        All services
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => {
              const active = link.href === "/contact" && isContactActive;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setServicesOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={navLinkClass(active)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <ThemeToggle
            className={
              isScrolled
                ? "bg-[var(--card-soft)] text-[var(--ink)] border-[var(--line)] hover:border-[#2675D8] hover:text-[#2675D8]"
                : "bg-white/10 text-white border-white/25 hover:bg-white/20 backdrop-blur-md"
            }
          />

          <a
            href="tel:+919133933392"
            className={`inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold px-4.5 py-2.5 rounded-full border transition-all duration-200 ${
              isScrolled
                ? "bg-[var(--card-soft)] text-[var(--ink)] border-[var(--line)] hover:border-[#2675D8] hover:text-[#2675D8] hover:bg-[var(--card)] shadow-2xs"
                : "bg-white/10 text-white border-white/25 hover:bg-white/20 backdrop-blur-md"
            }`}
          >
            <Phone className={`w-3.5 h-3.5 ${isScrolled ? "text-[#39A852]" : "text-emerald-400"}`} />
            <span>Call Now</span>
          </a>

          <button
            onClick={onOpenBooking}
            className={`inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold px-5.5 py-2.5 rounded-full shadow-md transition-all duration-200 hover:scale-105 active:scale-100 cursor-pointer ${
              isScrolled
                ? "bg-[#2675D8] hover:bg-[#1C5EB0] text-white shadow-[#2675D8]/20"
                : "bg-white hover:bg-slate-100 text-[#123B65] shadow-black/20"
            }`}
          >
            <Calendar className={`w-3.5 h-3.5 ${isScrolled ? "text-white" : "text-[#2675D8]"}`} />
            <span>Book Visit</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle
            className={
              isScrolled
                ? "bg-[var(--card-soft)] text-[var(--ink)] border-[var(--line)]"
                : "bg-white/10 text-white border-white/20"
            }
          />

          <a
            href="tel:+919133933392"
            className={`p-2 rounded-full text-xs font-medium border ${
              isScrolled ? "bg-[var(--card-soft)] text-[var(--ink)] border-[var(--line)]" : "bg-white/10 text-white border-white/20"
            }`}
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4 text-[#39A852]" />
          </a>

          <button
            onClick={onOpenBooking}
            className={`p-2 rounded-full text-xs font-medium ${
              isScrolled ? "bg-[#2675D8] text-white" : "bg-[var(--card)] text-[var(--ink)]"
            }`}
            aria-label="Book visit"
          >
            <Calendar className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`p-2 focus:outline-none transition-colors ${
              isScrolled ? "text-[var(--ink)] hover:text-[var(--ink)]" : "text-white hover:text-sky-300"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className={`lg:hidden absolute top-full left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto p-6 shadow-2xl border-b flex flex-col gap-4 animate-in fade-in duration-200 ${
            isScrolled
              ? "bg-[var(--card)] border-[var(--line)] text-[var(--ink)]"
              : "bg-[#071727]/98 backdrop-blur-2xl border-white/20 text-white"
          }`}
        >
          <nav className="flex flex-col" aria-label="Mobile navigation">
            <Link
              href="/"
              onClick={() => {
                setMobileMenuOpen(false);
                if (pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              aria-current={isHomeActive ? "page" : undefined}
              className={`text-base font-semibold py-3 border-b transition-colors ${
                isScrolled
                  ? "border-[var(--line)] hover:text-[#2675D8]"
                  : "border-white/10 hover:text-sky-300"
              }`}
            >
              Home
            </Link>

            {/* Services accordion */}
            <div
              className={`border-b ${isScrolled ? "border-[var(--line)]" : "border-white/10"}`}
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex-1 py-3 text-base font-semibold transition-colors ${
                    isScrolled ? "hover:text-[#2675D8]" : "hover:text-sky-300"
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-menu"
                  aria-label="Toggle treatments list"
                  className={`p-2 rounded-lg transition-colors ${
                    isScrolled ? "text-[var(--ink-soft)] hover:bg-[var(--card-soft)]" : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <ul id="mobile-services-menu" className="pb-3 pl-1 space-y-1">
                  {serviceNav.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                          isScrolled
                            ? "text-[var(--ink-soft)] hover:bg-[var(--card-soft)] hover:text-[#2675D8]"
                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                        isScrolled ? "text-[#2675D8] hover:bg-[var(--card-soft)]" : "text-sky-300 hover:bg-white/10"
                      }`}
                    >
                      All services
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-3 border-b transition-colors ${
                  isScrolled
                    ? "border-[var(--line)] hover:text-[#2675D8]"
                    : "border-white/10 hover:text-sky-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 pt-1">
            <a
              href="tel:+919133933392"
              className={`flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-xl border ${
                isScrolled
                  ? "bg-[var(--card-soft)] text-[var(--ink)] border-[var(--line)]"
                  : "bg-white/10 text-white border-white/20"
              }`}
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Call Now
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#2675D8] hover:bg-[#1C5EB0] text-white font-bold py-3.5 rounded-xl shadow-lg text-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
