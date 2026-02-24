import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

const SmoothScroll = () => {
  const { pathname, hash } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    let rafId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;

    if (hash) {
      const id = hash.replace('#', '');
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          lenisRef.current?.scrollTo(element, { offset: 0 });
        }
      }, 100);
    } else {
      // Scroll to top immediately on route change
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname, hash]);

  return null;
};

export default SmoothScroll;