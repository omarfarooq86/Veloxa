import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/utils';

type RevealVariant = 'up' | 'fade' | 'blur' | 'scale' | 'clip';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which material carries the entrance. Vary this across sections. */
  variant?: RevealVariant;
  /** Entrance delay in ms. */
  delay?: number;
  /** Reveal once (default) or every time it enters. */
  once?: boolean;
  /** Stagger direct children instead of animating the block as one. */
  group?: boolean;
}

/**
 * Wraps a block and reveals it when scrolled into view. Use `group` for
 * lists so children cascade; otherwise pick a `variant` that fits the content
 * (a statement rises, an image clips open, a panel scales in).
 */
export const Reveal: React.FC<RevealProps> = ({
  variant = 'up',
  delay = 0,
  once = true,
  group = false,
  className,
  style,
  children,
  ...rest
}) => {
  const { ref, inView } = useReveal<HTMLDivElement>({ once });

  return (
    <div
      ref={ref}
      className={cn(
        group ? 'reveal-group' : ['reveal', `reveal--${variant}`],
        inView && 'is-inview',
        className,
      )}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Reveal;
