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

    const observed = new Set<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            markVisible(el);
            observer.unobserve(el);
            observed.delete(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    const sweepAlreadyVisibleOrPast = () => {
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      // Reveal anything that is already in/past viewport — covers deep-link, refresh-in-middle,
      // anchor jumps, fast wheel scrolls, and any case where IO would have missed an intersection.
      observed.forEach((el) => {
        if (el.classList.contains("is-visible")) {
          observer.unobserve(el);
          observed.delete(el);
          return;
        }
        const rect = el.getBoundingClientRect();
        if (
          rect.bottom <= 0 ||
          (rect.top >= 0 && rect.bottom <= viewportH) ||
          (rect.top < viewportH * 0.9 && rect.bottom > 0)
        ) {
          markVisible(el, false);
          observer.unobserve(el);
          observed.delete(el);
        }
      });
    };

    const elements = document.querySelectorAll<HTMLElement>(".animate-on-scroll");
    const viewportH = window.innerHeight || document.documentElement.clientHeight;

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Already scrolled past (above viewport) OR already inside viewport:
      // reveal immediately so deep-link/refresh-in-middle-of-page doesn't leave ghosts.
      if (rect.bottom <= 0 || (rect.top >= 0 && rect.bottom <= viewportH)) {
        markVisible(el, false);
        return;
      }
      observer.observe(el);
      observed.add(el);
    });

    // Safety net: on scroll/resize, sweep any element the IntersectionObserver may have missed
    // (happens when an element transitions from below-viewport directly to above-viewport
    // during fast scrolls, anchor jumps, or browser scroll-restoration).
    let rafId = 0;
    const schedule = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        sweepAlreadyVisibleOrPast();
      });
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return null;
}
