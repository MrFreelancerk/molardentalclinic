"use client";

import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react";

interface BookingSectionProps {
  initialService?: string;
}

export default function BookingSection({ initialService }: BookingSectionProps) {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Molar+Dental+Hospital+Near+Shivaji+Statue+Junction+Indresham+Road+Bachuguda+Patancheru+502319";

  return (
    <section
      id="location"
      className="py-20 sm:py-28 bg-[var(--page)] text-[var(--ink)] border-t border-[var(--line)] relative scroll-mt-20 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Contact Details */}
          <div data-reveal className="lg:col-span-5 flex flex-col justify-center">
            {/* Header */}
            <div className="mb-10 sm:mb-12">
              <p className="text-[11px] font-bold text-[#0072CE] uppercase tracking-[0.2em] mb-2.5">
                Contact
              </p>
              <h2 className="text-4xl sm:text-5xl font-normal text-[var(--ink)] tracking-tight mb-3">
                Get in touch
              </h2>
              <p className="text-[var(--ink-soft)] text-sm sm:text-base font-normal">
                We&apos;re here to answer your questions anytime
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-7 sm:space-y-8">
              {/* 1. Phone */}
              <div className="space-y-1">
                <div className="w-5 h-5 text-[#0072CE] mb-1.5">
                  <Phone className="w-4 h-4 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--ink)]">
                  Phone
                </h3>
                <p className="text-xs text-[var(--ink-soft)]">
                  Call us for quick assistance
                </p>
                <div className="flex flex-wrap items-center gap-x-3 pt-0.5">
                  <a
                    href="tel:+919133933392"
                    className="text-sm font-semibold text-[var(--ink)] hover:text-[#0072CE] transition-colors"
                  >
                    +91 91339 33392
                  </a>
                  <span className="text-[var(--ink-faint)]">/</span>
                  <a
                    href="tel:+917893983913"
                    className="text-sm font-semibold text-[var(--ink)] hover:text-[#0072CE] transition-colors"
                  >
                    +91 78939 83913
                  </a>
                </div>
              </div>

              {/* 2. Email */}
              <div className="space-y-1">
                <div className="w-5 h-5 text-[#0072CE] mb-1.5">
                  <Mail className="w-4 h-4 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--ink)]">
                  Email
                </h3>
                <p className="text-xs text-[var(--ink-soft)]">
                  Send us your inquiries anytime
                </p>
                <a
                  href="mailto:molardentalhospital@gmail.com"
                  className="text-sm font-semibold text-[var(--ink)] hover:text-[#0072CE] transition-colors block pt-0.5"
                >
                  molardentalhospital@gmail.com
                </a>
              </div>

              {/* 3. Address */}
              <div className="space-y-1">
                <div className="w-5 h-5 text-[#0072CE] mb-1.5">
                  <MapPin className="w-4 h-4 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--ink)]">
                  Address
                </h3>
                <p className="text-xs text-[var(--ink-soft)]">
                  Visit us at our clinic location
                </p>
                <p className="text-sm text-[var(--ink)] leading-relaxed max-w-sm pt-0.5">
                  Near Shivaji Statue Junction, Indresham Road, Bachuguda, Patancheru, Hyderabad, Telangana – 502319
                </p>
              </div>

              {/* 4. Hours */}
              <div className="space-y-1">
                <div className="w-5 h-5 text-[#0072CE] mb-1.5">
                  <Clock className="w-4 h-4 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--ink)]">
                  Hours
                </h3>
                <p className="text-sm text-[var(--ink)] leading-relaxed max-w-sm">
                  Monday to Sunday, 9:00 AM to 2:00 PM and 5:00 PM to 9:00 PM
                </p>
                <div className="pt-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#0072CE] hover:text-[#005FA8] transition-colors group"
                  >
                    <span>Get directions</span>
                    <ChevronRight className="w-4 h-4 text-[#0072CE] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Image Frame */}
          <div data-reveal className="lg:col-span-7">
            <div className="relative rounded-none overflow-hidden shadow-xl border border-[var(--line)] bg-[var(--card-soft)] aspect-[4/3] sm:aspect-[16/11] lg:h-[500px] w-full">
              <img
                src="/hospital-building.jpg"
                srcSet="/hospital-building-700.jpg 700w, /hospital-building.jpg 1402w"
                sizes="(min-width: 1024px) 58vw, 100vw"
                width={1402}
                height={1122}
                alt="Molar Dental Hospital building in Patancheru, Hyderabad"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
