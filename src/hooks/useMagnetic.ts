import { useEffect, useRef } from 'react';

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

interface UseMagneticOptions {
  /** How strongly the element follows the cursor (0–1). */
  strength?: number;
  /** Scale applied while the cursor is engaged. */
  scale?: number;
}

/**
 * Magnetic pointer attraction for a control. The element eases toward the
 * cursor while hovered and springs back on leave. Disabled entirely for
 * reduced-motion users and coarse (touch) pointers, where it would misbehave.
 *
 * The element should carry the `magnetic` class (see motion.css) so the
 * spring-back transition applies.
 */
export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(
  options: UseMagneticOptions = {},
) {
  const { strength = 0.35, scale = 1.04 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;

    let frame = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate(${relX * strength}px, ${relY * strength}px) scale(${scale})`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.transform = '';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength, scale]);

  return ref;
}
