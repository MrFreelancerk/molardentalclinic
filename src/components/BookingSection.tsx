"use client";

import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react";

interface BookingSectionProps {
  initialService?: string;
}

export default function BookingSection({ initialService }: BookingSectionProps) {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Molar+Dental+Hospital+Near+Shivaji+Statue+Junction+Indresham+Road+Bachuguda+Patancheru+502319";

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#090C10] text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Header */}
            <div className="mb-10 sm:mb-12">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Contact
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
                Get in touch
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-normal">
                We&apos;re here to answer your questions anytime
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-7 sm:space-y-8">
              
              {/* 1. Phone */}
              <div className="space-y-1">
                <div className="w-5 h-5 text-slate-300 mb-1.5">
                  <Phone className="w-4 h-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Phone
                </h3>
                <p className="text-xs text-slate-400">
                  Call us for quick assistance
                </p>
                <div className="flex flex-wrap items-center gap-x-3 pt-0.5">
                  <a
                    href="tel:+919133933392"
                    className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
                  >
                    +91 91339 33392
                  </a>
                  <span className="text-slate-600">/</span>
                  <a
                    href="tel:+917893983913"
                    className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
                  >
                    +91 78939 83913
                  </a>
                </div>
              </div>

              {/* 2. Email */}
              <div className="space-y-1">
                <div className="w-5 h-5 text-slate-300 mb-1.5">
                  <Mail className="w-4 h-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Email
                </h3>
                <p className="text-xs text-slate-400">
                  Send us your inquiries anytime
                </p>
                <a
                  href="mailto:molardentalhospital@gmail.com"
                  className="text-sm font-medium text-slate-200 hover:text-white transition-colors block pt-0.5"
                >
                  molardentalhospital@gmail.com
                </a>
              </div>

              {/* 3. Address */}
              <div className="space-y-1">
                <div className="w-5 h-5 text-slate-300 mb-1.5">
                  <MapPin className="w-4 h-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Address
                </h3>
                <p className="text-xs text-slate-400">
                  Visit us at our clinic location
                </p>
                <p className="text-sm text-slate-200 leading-relaxed max-w-sm pt-0.5">
                  Near Shivaji Statue Junction, Indresham Road, Bachuguda, Patancheru, Hyderabad, Telangana – 502319
                </p>
              </div>

              {/* 4. Hours */}
              <div className="space-y-1">
                <div className="w-5 h-5 text-slate-300 mb-1.5">
                  <Clock className="w-4 h-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Hours
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed max-w-sm">
                  Monday to Sunday, 9:00 AM to 2:00 PM and 5:00 PM to 9:00 PM
                </p>
                <div className="pt-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-slate-200 hover:text-white transition-colors group"
                  >
                    <span>Get directions</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Large Architectural Image Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#161B22] aspect-[4/3] sm:aspect-[16/11] lg:h-[500px] w-full">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
