"use client";

import { useEffect } from "react";

/**
 * Progressive scroll reveal for the homepage sections below the hero.
 *
 * Any element marked with `data-reveal` starts faded and nudged down, then
 * settles into place the first time it enters the viewport. The styles only
 * apply while <html> carries `reveal-ready`, a class this component adds after
 * mount — so with JavaScript disabled (or with reduced motion requested) every
 * section simply renders normally instead of staying invisible.
 *
 * After the transition finishes the attribute is dropped again, so each card's
 * own hover transitions (shadow, border, scale) take back over untouched.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (targets.length === 0) return;

    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const element = entry.target as HTMLElement;
          observer.unobserve(element);
          element.classList.add("is-in");

          // Longest transition is 0.7s plus the stagger delay; dropping the
          // reveal hooks after that restores the element's own transitions.
          window.setTimeout(() => {
            element.classList.remove("is-in");
            element.removeAttribute("data-reveal");
          }, 1200);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );

    targets.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
