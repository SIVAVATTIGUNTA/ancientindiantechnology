import { useLayoutEffect, type RefObject } from 'react';
import { useLocation } from 'react-router-dom';
import type Lenis from 'lenis';

type LenisRef = RefObject<Lenis | null>;

export function useScrollToTopOnRouteChange(lenisRef?: LenisRef) {
  const location = useLocation();

  useLayoutEffect(() => {
    const lenis = lenisRef?.current;

    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true, programmatic: true });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);
}

