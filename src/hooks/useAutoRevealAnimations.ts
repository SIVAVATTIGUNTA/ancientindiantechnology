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
    const applyDelay = (element: HTMLElement) => {
      const delay = parseDelayMs(element.getAttribute('data-ait-delay'));
      if (delay && !element.style.getPropertyValue('--ait-reveal-delay')) {
        element.style.setProperty('--ait-reveal-delay', delay);
      }
    };

    const revealAll = () => {
      Array.from(document.querySelectorAll<HTMLElement>(selector)).forEach((element) => {
        applyDelay(element);
        element.setAttribute('data-ait-revealed', 'true');
      });
    };

    // If the user prefers reduced motion (or IO is unavailable), show everything immediately.
    if (prefersReducedMotion() || typeof window.IntersectionObserver === 'undefined') {
      revealAll();
      const fallbackMutationObserver = new MutationObserver(revealAll);
      fallbackMutationObserver.observe(document.body, { childList: true, subtree: true });
      return () => fallbackMutationObserver.disconnect();
    }

    const observed = new WeakSet<HTMLElement>();
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

    const observeElements = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
      elements.forEach((element) => {
        if (element.getAttribute('data-ait-revealed') === 'true') return;
        if (observed.has(element)) return;

        applyDelay(element);
        observed.add(element);
        observer.observe(element);
      });
    };

    let frame = 0;
    const scheduleObserve = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(observeElements);
    };

    observeElements();

    // Dynamic pages (blog filters/search/pagination) can add new reveal elements without a path change.
    const mutationObserver = new MutationObserver(scheduleObserve);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frame);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [location.pathname, location.search, rootMargin, selector, threshold]);
}
