import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // anchor links
    const handler = (e: Event) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor) {
        const id = anchor.getAttribute('href');
        if (id && id.length > 1) {
          e.preventDefault();
          const el = document.querySelector(id);
          if (el) lenis.scrollTo(el as HTMLElement, { offset: -70 });
        }
      }
    };
    document.addEventListener('click', handler);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handler);
      lenis.destroy();
    };
  }, []);
}
