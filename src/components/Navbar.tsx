"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Calendar,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Activity,
  Home,
  Users,
  PhoneCall,
  Stethoscope,
} from "lucide-react";

function ToothIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7.2 2.5C5 2.5 3 4.2 3 7c0 3.2 1.4 6.3 2 9.5.4 2.2 1.8 4 4 4 1.8 0 2.5-1.5 3-3 .5 1.5 1.2 3 3 3 2.2 0 3.6-1.8 4-4 .6-3.2 2-6.3 2-9.5 0-2.8-2-4.5-4.2-4.5-2.2 0-3.3 1.2-4.8 1.2-1.5 0-2.6-1.2-4.8-1.2Z" />
    </svg>
  );
}
import { serviceNav } from "@/data/services";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// One dental line-art glyph per treatment (files in public/icons), so the menu
// can be scanned by icon as well as text.
const serviceIcons: Record<string, string> = {
  "root-canal-treatment": "root-canal-treatment.svg",
  "dental-implants": "dental-implants.svg",
  "invisible-aligners": "invisible-aligners.svg",
  braces: "braces.svg",
  "zirconia-crowns": "zirconia-crowns.svg",
  "digital-rvg-x-ray": "digital-rvg-x-ray.svg",
  "teeth-whitening": "teeth-whitening.svg",
  "tooth-extraction": "tooth-extraction.svg",
};

// The artwork is solid black on transparent, so it is used as a mask and tinted
// with the theme ink colour instead of being shown as a flat black image.
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

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Listen to dark mode changes on <html>
  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // The home hero is a light pastel composition in light mode when parked at top.
  // In dark mode or when scrolled, dark/scrolled styles apply.
  const onLightHero = pathname === "/" && !isScrolled && !isDark;
  const onLight = (isScrolled && !isDark) || onLightHero;

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
      onLight
        ? active
          ? "text-[#0072CE] after:bg-[#0072CE]"
          : "text-[var(--ink)] hover:text-[#0072CE] after:bg-[#0072CE]"
        : active
          ? "text-white after:bg-[#0072CE]"
          : "text-white/85 hover:text-white after:bg-white"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-200 py-1.5 sm:py-2 px-6 sm:px-10 lg:px-14 flex items-center ${
        isScrolled
          ? "bg-[var(--card)]/95 backdrop-blur-md border-b border-[var(--line)] shadow-sm text-[var(--ink)]"
          : onLightHero
            ? "bg-white/25 backdrop-blur-md border-b border-white/40 text-[#10313A]"
            : "bg-[#060E17]/80 backdrop-blur-md border-b border-white/10 text-white"
      }`}
    >
      <div className="w-full flex items-center justify-between">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Molar Dental Hospital — home">
          <img
            src={isDark ? "/molar-logo.png" : onLight ? "/molar-logo-dark.png" : "/molar-logo.png"}
            alt="Molar Dental Hospital"
            className="h-7 min-[380px]:h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
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
                    onLight ? "text-[var(--ink-soft)] hover:text-[#2675D8]" : "text-white/80 hover:text-white"
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
                        const iconFile = serviceIcons[service.slug];
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-start gap-3 px-2.5 py-2.5 transition-colors"
                          >
                            {iconFile ? (
                              <span
                                aria-hidden="true"
                                style={iconMask(iconFile)}
                                className="h-7 w-7 shrink-0 bg-[var(--ink-soft)] transition-colors group-hover:bg-[#2675D8]"
                              />
                            ) : (
                              <Activity
                                aria-hidden="true"
                                strokeWidth={1.6}
                                className="mt-0.5 w-4 h-4 shrink-0 text-[var(--ink-faint)] transition-colors group-hover:text-[#2675D8]"
                              />
                            )}
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

        {/* Right Action Buttons — same breakpoint as the desktop nav links, so the
            pill cluster and the compact icon row never render at the same time */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <ThemeToggle
            className={
              onLightHero
                ? "bg-white/80 text-[#0C2A32] border-[#0C2A32]/20 backdrop-blur-md hover:bg-white shadow-2xs"
                : onLight
                  ? "bg-[var(--card-soft)] text-[var(--ink)] border-[var(--line)] hover:border-[#0072CE] hover:text-[#0072CE]"
                  : "bg-white/10 text-white border-white/25 hover:bg-white/20 backdrop-blur-md"
            }
          />

          <a
            href="tel:+919133933392"
            className={`inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold px-4.5 py-2.5 rounded-full border transition-all duration-200 ${
              onLightHero
                ? "bg-white/80 text-[#0C2A32] border-[#0C2A32]/20 backdrop-blur-md hover:bg-white shadow-2xs"
                : onLight
                  ? "bg-[var(--card-soft)] text-[var(--ink)] border-[var(--line)] hover:border-[#0072CE] hover:text-[#0072CE] hover:bg-[var(--card)] shadow-2xs"
                  : "bg-white/10 text-white border-white/25 hover:bg-white/20 backdrop-blur-md"
            }`}
          >
            <Phone className={`w-3.5 h-3.5 ${onLight ? "text-[#00B050]" : "text-emerald-400"}`} />
            <span>Call Now</span>
          </a>

          <button
            onClick={onOpenBooking}
            className={`inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold px-5.5 py-2.5 rounded-full shadow-md transition-all duration-200 hover:scale-105 active:scale-100 cursor-pointer ${
              onLightHero
                ? "bg-[#143A66] hover:bg-[#0E2A4D] text-white shadow-[#143A66]/25"
                : onLight
                  ? "bg-[#0072CE] hover:bg-[#005bb5] text-white shadow-[#0072CE]/20"
                  : "bg-[#0072CE] hover:bg-[#005FA8] text-white shadow-[#0072CE]/30"
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5 text-white" />
            <span>Book Visit</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-1.5 min-[380px]:gap-2 lg:hidden">
          <ThemeToggle
            className={
              onLight
                ? "bg-[var(--card-soft)] text-[var(--ink)] border-[var(--line)]"
                : "bg-white/10 text-white border-white/20"
            }
          />

          <a
            href="tel:+919133933392"
            className={`p-2 rounded-full text-xs font-medium border max-[379px]:hidden ${
              onLight ? "bg-[var(--card-soft)] text-[var(--ink)] border-[var(--line)]" : "bg-white/10 text-white border-white/20"
            }`}
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4 text-[#39A852]" />
          </a>

          <button
            onClick={onOpenBooking}
            className={`p-2 rounded-full text-xs font-medium ${
              onLight ? "bg-[#2675D8] text-white" : "bg-[var(--card)] text-[var(--ink)]"
            }`}
            aria-label="Book visit"
          >
            <Stethoscope className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`p-2 focus:outline-none transition-colors ${
              onLight ? "text-[var(--ink)] hover:text-[var(--ink)]" : "text-white hover:text-sky-300"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Full Height Slide-over with space on the left & smooth transitions) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-[visibility] duration-350 ${
          mobileMenuOpen ? "visible pointer-events-auto" : "invisible pointer-events-none delay-350"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop Scrim: dims background, tapping closes drawer */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-350 ease-out ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Sidebar Panel: Takes full height (100dvh), anchored right, leaves space on the left */}
        <aside
          id="mobile-menu"
          aria-label="Mobile navigation sidebar"
          className={`fixed inset-y-0 right-0 z-50 flex h-full min-h-[100dvh] w-[84%] max-w-[340px] flex-col bg-[var(--card)] text-[var(--ink)] shadow-[0_0_50px_rgba(0,0,0,0.35)] border-l border-[var(--line)] transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar Header: Logo, Theme toggle, and Close button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--line)] shrink-0 bg-[var(--card)]">
            <div className="flex items-center gap-2">
              <img
                src="/molar-logo-dark.png"
                alt="Molar Dental"
                className="h-7 w-auto object-contain dark:hidden"
              />
              <img
                src="/molar-logo.png"
                alt="Molar Dental"
                className="h-7 w-auto object-contain hidden dark:block"
              />
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle className="bg-[var(--card-soft)] text-[var(--ink)] border-[var(--line)]" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--card-soft)] text-[var(--ink)] hover:bg-[var(--surface-alt)] transition-colors focus:outline-none cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sidebar Nav Items with Icons */}
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5" aria-label="Mobile navigation links">
            {/* Home */}
            <Link
              href="/"
              onClick={() => {
                setMobileMenuOpen(false);
                if (pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-[15px] font-semibold transition-all ${
                isHomeActive
                  ? "bg-[#0072CE]/10 text-[#0072CE]"
                  : "text-[var(--ink)] hover:bg-[var(--card-soft)] hover:text-[#0072CE]"
              }`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  isHomeActive ? "bg-[#0072CE] text-white" : "bg-[var(--card-soft)] text-[var(--ink-soft)]"
                }`}
              >
                <Home className="w-4 h-4" />
              </div>
              <span>Home</span>
            </Link>

            {/* Services Accordion with Tooth Icon */}
            <div className="rounded-xl overflow-hidden transition-colors">
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 flex-1 px-3.5 py-3 rounded-l-xl text-[15px] font-semibold transition-all ${
                    isServicesActive ? "text-[#0072CE]" : "text-[var(--ink)] hover:text-[#0072CE]"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      isServicesActive ? "bg-[#0072CE] text-white" : "bg-[var(--card-soft)] text-[#0072CE]"
                    }`}
                  >
                    <ToothIcon className="w-4 h-4" />
                  </div>
                  <span>Services</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-menu"
                  aria-label="Toggle treatments list"
                  className="p-3 mr-1 text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors rounded-lg hover:bg-[var(--card-soft)] cursor-pointer"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-[#0072CE]" : ""}`}
                  />
                </button>
              </div>

              {/* Smooth Animated Services Accordion (No outer box, borderless hover-based items) */}
              <div
                id="mobile-services-menu"
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                } overflow-hidden`}
              >
                <div className="min-h-0 pl-3.5 pr-1 py-1 space-y-0.5">
                  {serviceNav.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-[14px] font-medium text-[var(--ink)] hover:text-[#0072CE] hover:bg-[#E8F2FB] dark:hover:bg-[#0E253C] transition-colors group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          style={iconMask(serviceIcons[service.slug] || "root-canal-treatment.svg")}
                          className="w-4 h-4 shrink-0 bg-[#0072CE] transition-transform duration-200 group-hover:scale-115"
                        />
                        <span className="truncate">{service.name}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-faint)] group-hover:text-[#0072CE] group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  ))}

                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-[13px] font-bold text-[#0072CE] hover:bg-[#E8F2FB] dark:hover:bg-[#0E253C] transition-colors group mt-0.5"
                  >
                    <span>Explore All Services</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* About */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-[15px] font-semibold text-[var(--ink)] hover:bg-[var(--card-soft)] hover:text-[#0072CE] transition-all"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--card-soft)] text-[var(--ink-soft)]">
                <Users className="w-4 h-4" />
              </div>
              <span>About</span>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-[15px] font-semibold transition-all ${
                isContactActive
                  ? "bg-[#0072CE]/10 text-[#0072CE]"
                  : "text-[var(--ink)] hover:bg-[var(--card-soft)] hover:text-[#0072CE]"
              }`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  isContactActive ? "bg-[#0072CE] text-white" : "bg-[var(--card-soft)] text-[var(--ink-soft)]"
                }`}
              >
                <PhoneCall className="w-4 h-4" />
              </div>
              <span>Contact</span>
            </Link>
          </nav>

          {/* Sidebar Bottom CTAs (Matching Image 1 Reference exactly) */}
          <div className="p-4 border-t border-[var(--line)] bg-[var(--card)] flex flex-col gap-3 shrink-0">
            {/* Call us Card */}
            <div className="flex items-center gap-3.5 rounded-2xl bg-[#F4F8FB] dark:bg-[#101F2F] p-3 border border-[#E3EAF2] dark:border-[#1E3347]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-[#162A3E] shadow-2xs text-[#00B050]">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-[#5E7690]">Call us</span>
                <a
                  href="tel:+919133933392"
                  className="text-[14px] font-bold text-[#143A66] dark:text-[#EDF3F8] hover:text-[#0072CE] transition-colors tracking-tight"
                >
                  +91 91339 33392
                </a>
              </div>
            </div>

            {/* Book appointment button: Navy Pill */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#143A66] py-3.5 text-[14px] font-semibold text-white shadow-md transition-all hover:bg-[#0E2A4D] active:scale-[0.99]"
            >
              <Stethoscope className="h-4 w-4" />
              <span>Book appointment</span>
            </button>

            {/* Chat on WhatsApp button: White Pill with Green Border */}
            <a
              href="https://wa.me/919133933392"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#00B050] bg-white dark:bg-transparent py-3 text-[14px] font-semibold text-[#0B6B33] dark:text-[#00B050] transition-all hover:bg-[#E9F7EF] dark:hover:bg-[#0B291A]/30 active:scale-[0.99]"
            >
              <svg className="h-4 w-4 fill-[#00B050]" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.55 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.19 8.19 0 0 1-5.82 2.41h-.01c-1.47 0-2.92-.39-4.18-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.214 8.214 0 0 1-1.26-4.41c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
