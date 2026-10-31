"use client";

export default function Reviews() {
  const reviews = [
    {
      name: "Venkatesh",
      location: "Ameenpur, Hyderabad",
      headline: "Completely Painless Root Canal",
      text: "I was nervous about getting a root canal, but the entire procedure was smooth and painless. The doctors were caring, and the staff made me feel comfortable throughout.",
    },
    {
      name: "Rakesh",
      location: "Beeramguda, Hyderabad",
      headline: "Best Dental Implant Experience",
      text: "My dental implant feels just like a natural tooth. The treatment was professional, the clinic was spotless, and the results are outstanding and i can eat & smile with complete confidence!",
    },
    {
      name: "Diya",
      location: "Miyapur, Hyderabad",
      headline: "Excellent Care for My Child",
      text: "The pediatric dentist was incredibly patient and friendly. My child felt comfortable throughout the treatment and now visits the dentist without fear. Truly grateful for the gentle care.",
    },
    {
      name: "Ramesh",
      location: "Beeramguda, Hyderabad",
      headline: "Life-Changing Smile Makeover",
      text: "I never imagined my smile could look this beautiful. The doctors explained every step, and the results exceeded my expectations. I finally smile with confidence!",
    },
  ];

  return (
    <section id="reviews" className="py-24 sm:py-28 bg-[var(--page)] border-t border-b border-[var(--line)] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight mb-3">
            Patient stories
          </h2>
          <p className="text-[var(--ink-soft)] text-sm sm:text-base font-normal">
            Real experiences from our patients
          </p>
        </div>

        {/* 4 Clean Cards Grid (100% Real Reviews from molardental.in - No Fake Avatars) */}
        <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              data-reveal
              className="bg-[var(--card)] rounded-none p-6 sm:p-7 border border-[var(--line)] flex flex-col justify-between shadow-none transition-colors duration-200 hover:border-[var(--line-strong)]"
            >
              <div>
                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Treatment Headline */}
                <h3 className="text-sm font-bold text-[var(--ink)] mb-2 leading-snug">
                  {review.headline}
                </h3>

                {/* Real Review Text */}
                <p className="text-[13px] sm:text-[14px] text-[var(--ink)] leading-relaxed font-normal">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Patient Info (Pure Clean Text - No Fake Photos) */}
              <div className="mt-6">
                <h4 className="text-sm font-bold text-[var(--ink)] leading-tight">
                  {review.name}
                </h4>
                <p className="text-xs text-[var(--ink-soft)] font-normal mt-0.5">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
