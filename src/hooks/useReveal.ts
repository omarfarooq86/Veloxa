import { useEffect, useRef, useState } from 'react';

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

interface UseRevealOptions {
  /** 0–1 portion of the element that must be visible to trigger. */
  threshold?: number;
  /** IntersectionObserver rootMargin — negative bottom delays the trigger slightly. */
  rootMargin?: string;
  /** Reveal only once (default) or re-hide when scrolled away. */
  once?: boolean;
}

/**
 * Scroll-triggered reveal. Returns a ref to attach and an `inView` flag.
 * Content is shown immediately when reduced-motion is requested or when
 * IntersectionObserver is unavailable, so nothing is ever hidden by a
 * failed script.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {},
) {
  const { threshold = 0.15, rootMargin = '0px 0px -12% 0px', once = true } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
