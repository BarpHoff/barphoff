"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const markVisible = (el: HTMLElement, respectDelay = true) => {
      const delay = respectDelay ? el.dataset.delay : undefined;
      if (delay) {
        window.setTimeout(() => el.classList.add("is-visible"), parseInt(delay, 10));
      } else {
        el.classList.add("is-visible");
      }
    };

    if (prefersReducedMotion) {
      document.querySelectorAll<HTMLElement>(".animate-on-scroll").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            markVisible(el);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    const elements = document.querySelectorAll<HTMLElement>(".animate-on-scroll");

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Already scrolled past (above viewport) OR already fully inside viewport:
      // reveal immediately so deep-link/refresh-in-middle-of-page doesn't leave ghosts.
      if (rect.bottom <= 0 || (rect.top >= 0 && rect.bottom <= viewportH)) {
        markVisible(el, false);
        return;
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
