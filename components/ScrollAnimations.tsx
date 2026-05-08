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
      // FIX-V3: varre TODOS os :not(.is-visible) do DOM (não só os em `observed`),
      // porque após bfcache o Set `observed` pode estar inconsistente / vazio.
      // Cobre: deep-link, refresh-em-meio, back-forward com/sem bfcache,
      // anchor jumps, scroll programático rápido.
      document.querySelectorAll<HTMLElement>(".animate-on-scroll:not(.is-visible)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Reveal se: já passou (above) OR está in viewport
        if (rect.top < viewportH) {
          markVisible(el, false);
          if (observed.has(el)) {
            observer.unobserve(el);
            observed.delete(el);
          }
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

    // bfcache fix: ao voltar do navegador (botao "voltar"), o useEffect nao roda
    // de novo. O bfcache invalida o IntersectionObserver, entao alem do sweep
    // dos in-viewport, precisamos RE-OBSERVAR todos os elementos ainda nao
    // visiveis — caso contrario, scrollar apos voltar nao revela nada novo.
    const handlePageshow = (e: PageTransitionEvent) => {
      if (!e.persisted) return; // so importa em bfcache restore
      requestAnimationFrame(() => {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        document.querySelectorAll<HTMLElement>(".animate-on-scroll:not(.is-visible)").forEach((el) => {
          const rect = el.getBoundingClientRect();
          // FIX-V2: marca como visible se ja in viewport OU ja passou (above)
          // (rect.top < vh inclui ambos os casos)
          if (rect.top < vh) {
            markVisible(el, false);
            observer.unobserve(el);
            observed.delete(el);
          } else {
            // Esta abaixo da fold: re-observa (observer original morreu no bfcache)
            if (!observed.has(el)) {
              observer.observe(el);
              observed.add(el);
            }
          }
        });
      });
    };
    window.addEventListener("pageshow", handlePageshow);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pageshow", handlePageshow);
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return null;
}
