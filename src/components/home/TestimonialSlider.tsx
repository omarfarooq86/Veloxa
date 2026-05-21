import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { Testimonial } from '@/data/homeMarketingContent';

type Props = {
  items: Testimonial[];
  /** Autoplay interval in ms; set 0 to disable. */
  autoMs?: number;
};

export const TestimonialSlider: React.FC<Props> = ({ items, autoMs = 8000 }) => {
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (delta: number) => {
      setIndex((prev) => (prev + delta + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    if (autoMs <= 0 || items.length < 2) return;
    const id = window.setInterval(() => go(1), autoMs);
    return () => window.clearInterval(id);
  }, [autoMs, go, items.length]);

  const current = items[index];
  const prevIndex = (index - 1 + items.length) % items.length;
  const nextIndex = (index + 1) % items.length;

  const renderTestimonial = (item: Testimonial, isActive: boolean) => (
    <blockquote
      className="card"
      style={{
        margin: 0,
        borderLeft: isActive ? '3px solid var(--color-primary)' : '3px solid transparent',
        minHeight: 'clamp(240px, 32vh, 340px)',
        display: 'flex',
        flexDirection: 'column',
        opacity: isActive ? 1 : 0.5,
        transform: isActive ? 'scale(1)' : 'scale(0.95)',
        transition: 'all 0.3s ease',
      }}
    >
      <Quote size={22} className="text-primary mb-4" style={{ opacity: 0.85 }} aria-hidden />
      <p className="text-muted mb-6" style={{ fontSize: '1.05rem', lineHeight: 1.65, flexGrow: 1 }}>
        {item.quote}
      </p>
      <footer>
        <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{item.name}</strong>
        <span className="text-muted" style={{ fontSize: '0.95rem' }}>
          {item.role}
        </span>
      </footer>
    </blockquote>
  );

  return (
    <div
      className="testimonial-slider"
      style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}
    >
      <div aria-live="polite" aria-atomic="true" style={{ display: 'flex', alignItems: 'center', gap: '1rem', overflow: 'hidden' }}>
        {/* Previous testimonial (half visible) */}
        <motion.div
          key={items[prevIndex].name + String(prevIndex)}
          style={{ flex: '0 0 30%' }}
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderTestimonial(items[prevIndex], false)}
        </motion.div>

        {/* Current testimonial (fully visible) */}
        <motion.div
          key={current.name + String(index)}
          style={{ flex: '0 0 40%' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderTestimonial(current, true)}
        </motion.div>

        {/* Next testimonial (half visible) */}
        <motion.div
          key={items[nextIndex].name + String(nextIndex)}
          style={{ flex: '0 0 30%' }}
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderTestimonial(items[nextIndex], false)}
        </motion.div>
      </div>

      <button
        type="button"
        className="testimonial-slider__btn"
        aria-label="Previous testimonial"
        onClick={() => go(-1)}
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 44,
          height: 44,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          color: 'var(--color-text)',
          cursor: 'pointer',
          transition: 'var(--transition, 0.2s ease)',
        }}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        className="testimonial-slider__btn"
        aria-label="Next testimonial"
        onClick={() => go(1)}
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 44,
          height: 44,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          color: 'var(--color-text)',
          cursor: 'pointer',
          transition: 'var(--transition, 0.2s ease)',
        }}
      >
        <ChevronRight size={24} />
      </button>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }} role="tablist" aria-label="Testimonial slides">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            style={{
              width: i === index ? 28 : 10,
              height: 10,
              borderRadius: 999,
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              background: i === index ? 'var(--color-primary)' : 'rgba(255,255,255,0.2)',
              transition: 'width 0.25s ease, background 0.2s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};
