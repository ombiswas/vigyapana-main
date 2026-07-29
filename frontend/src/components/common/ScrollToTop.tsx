import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If a section hash is present in the URL (e.g. #ad-grants), scroll to that section
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
      return () => clearTimeout(timer);
    }

    // Otherwise smoothly scroll to top of the page on route transition
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // Trigger Lenis smooth scroll instance if initialized and valid
    const lenis = (window as any).__lenis || (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      try {
        lenis.scrollTo(0, { immediate: false });
      } catch (err) {
        // Fallback silently if Lenis scroll throws
      }
    }
  }, [pathname, hash]);

  return null;
}
