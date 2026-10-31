"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Is dental treatment painful?",
    answer:
      "No. At Molar Dental Hospital, we use advanced technology, modern equipment, and gentle treatment techniques to make your dental procedures as comfortable and pain-free as possible. Our experienced dentists prioritize your comfort, ensuring a safe, stress-free experience with faster recovery and personalized care.",
  },
  {
    question: "How often should I visit a dentist?",
    answer:
      "Dentists recommend visiting every six months for a routine dental checkup and professional teeth cleaning to prevent cavities, gum disease, and other oral health problems.",
  },
  {
    question: "Are dental implants permanent?",
    answer:
      "Yes. Dental implants are a long-lasting solution for replacing missing teeth. With proper oral hygiene and regular dental checkups, implants can last for many years.",
  },
  {
    question: "Is root canal treatment painful?",
    answer:
      "Modern root canal treatment is virtually painless thanks to advanced techniques and local anesthesia. It removes infection, relieves tooth pain, and saves your natural tooth.",
  },
  {
    question: "Which is better: braces or invisible aligners?",
    answer:
      "Both are effective. Traditional braces are suitable for complex cases, while invisible aligners provide a discreet and comfortable option for mild to moderate teeth alignment.",
  },
  {
    question: "How long does teeth whitening last?",
    answer:
      "Professional teeth whitening results can last from several months to a few years, depending on oral hygiene, diet, and lifestyle habits such as smoking or consuming staining foods.",
  },
  {
    question: "When should a child first visit the dentist?",
    answer:
      "Children should visit a dentist by their first birthday or within six months after their first tooth erupts. Early dental visits help prevent cavities and support healthy oral development.",
  },
  {
    question: "How can I prevent cavities and gum disease?",
    answer:
      "Brush twice daily with fluoride toothpaste, floss every day, reduce sugary foods and drinks, and visit your dentist every six months for regular checkups and professional cleaning.",
  },
];

export default function Faq() {
  // All answers start collapsed; visitors open only what they need.
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  return (
    <section id="faq" className="py-24 sm:py-28 bg-[var(--page)] border-t border-[var(--line)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div data-reveal className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight mb-3">
            FAQs
          </h2>
          <p className="text-[var(--ink-soft)] text-sm sm:text-base font-normal">
            Find answers to common questions about our clinic, services, and appointment process.
          </p>
        </div>

        {/* FAQ Cards */}
        <div data-reveal-stagger className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div
                key={faq.question}
                data-reveal
                className="bg-[var(--card)] rounded-lg border border-[var(--line)] px-5 py-4 sm:px-6 sm:py-5 shadow-none"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="text-sm sm:text-[15px] font-semibold text-[var(--ink)] leading-snug">
                    {faq.question}
                  </span>
                  <Plus
                    aria-hidden="true"
                    className={`w-4 h-4 shrink-0 mt-0.5 text-[var(--ink)] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="text-[13px] sm:text-sm text-[var(--ink-soft)] leading-relaxed font-normal mt-3">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Need More Help */}
        <div data-reveal className="text-center mt-14 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--ink)] tracking-tight mb-2">
            Need more help?
          </h3>
          <p className="text-[var(--ink-soft)] text-sm font-normal max-w-sm mx-auto">
            Reach out to us directly through phone, WhatsApp, or visit our clinic in person.
          </p>
          <a
            href="#location"
            className="inline-block mt-5 bg-[var(--card)] border border-[var(--line)] text-[var(--ink)] text-sm font-medium px-5 py-2 rounded-md hover:bg-[var(--card-soft)] transition-colors"
          >
            Contact
          </a>
        </div>

      </div>
    </section>
  );
}
