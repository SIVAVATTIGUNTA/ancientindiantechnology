import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type AutoRevealOptions = {
  selector?: string;
  rootMargin?: string;
  threshold?: number;
};

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function parseDelayMs(raw: string | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;

  const numeric = Number(trimmed);
  if (Number.isFinite(numeric)) return `${numeric}ms`;

  if (/^\d+ms$/i.test(trimmed)) return trimmed.toLowerCase();
  if (/^\d+s$/i.test(trimmed)) return trimmed.toLowerCase();

  return null;
}

export function useAutoRevealAnimations({
  selector = '[data-ait-reveal]',
  rootMargin = '0px 0px -12% 0px',
  threshold = 0.15,
}: AutoRevealOptions = {}) {
  const location = useLocation();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

    // If the user prefers reduced motion (or IO is unavailable), show everything immediately.
    if (prefersReducedMotion() || typeof window.IntersectionObserver === 'undefined') {
      elements.forEach((element) => {
        element.setAttribute('data-ait-revealed', 'true');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          element.setAttribute('data-ait-revealed', 'true');
          observer.unobserve(element);
        });
      },
      { rootMargin, threshold }
    );

    elements.forEach((element) => {
      if (element.getAttribute('data-ait-revealed') === 'true') return;

      const delay = parseDelayMs(element.getAttribute('data-ait-delay'));
      if (delay && !element.style.getPropertyValue('--ait-reveal-delay')) {
        element.style.setProperty('--ait-reveal-delay', delay);
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname, rootMargin, selector, threshold]);
}

