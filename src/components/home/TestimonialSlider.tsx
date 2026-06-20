import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { Testimonial } from '@/data/homeMarketingContent';

type Props = {
  items: Testimonial[];
  /** Autoplay interval in ms; set 0 to disable. */
  autoMs?: number;
};

const useIsMobile = (query = '(max-width: 768px)') => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);

  return isMobile;
};

export const TestimonialSlider: React.FC<Props> = ({ items, autoMs = 8000 }) => {
  const [index, setIndex] = useState(0);
  const isMobile = useIsMobile();

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
      className={`testimonial-slider__card card${isActive ? ' testimonial-slider__card--active' : ''}`}
    >
      <Quote size={22} className="text-primary testimonial-slider__quote" aria-hidden />
      <p className="text-muted testimonial-slider__text">{item.quote}</p>
      <footer className="testimonial-slider__footer">
        <strong>{item.name}</strong>
        <span className="text-muted">{item.role}</span>
      </footer>
    </blockquote>
  );

  const navButton = (direction: 'prev' | 'next') => (
    <button
      type="button"
      className="testimonial-slider__btn"
      aria-label={direction === 'prev' ? 'Previous testimonial' : 'Next testimonial'}
      onClick={() => go(direction === 'prev' ? -1 : 1)}
    >
      {direction === 'prev' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );

  const renderDots = () =>
    items.map((_, i) => (
      <button
        key={i}
        type="button"
        role="tab"
        aria-selected={i === index}
        aria-label={`Go to testimonial ${i + 1}`}
        onClick={() => setIndex(i)}
        className={`testimonial-slider__dot${i === index ? ' testimonial-slider__dot--active' : ''}`}
      />
    ));

  if (isMobile) {
    return (
      <div className="testimonial-slider testimonial-slider--mobile">
        <div aria-live="polite" aria-atomic="true" className="testimonial-slider__track">
          <motion.div
            key={current.name + String(index)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderTestimonial(current, true)}
          </motion.div>
        </div>

        <div className="testimonial-slider__controls">
          {navButton('prev')}
          <div className="testimonial-slider__dots" role="tablist" aria-label="Testimonial slides">
            {renderDots()}
          </div>
          {navButton('next')}
        </div>
      </div>
    );
  }

  return (
    <div className="testimonial-slider">
      <div aria-live="polite" aria-atomic="true" className="testimonial-slider__track testimonial-slider__track--desktop">
        <motion.div
          key={items[prevIndex].name + String(prevIndex)}
          className="testimonial-slider__slide testimonial-slider__slide--side"
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderTestimonial(items[prevIndex], false)}
        </motion.div>

        <motion.div
          key={current.name + String(index)}
          className="testimonial-slider__slide testimonial-slider__slide--center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderTestimonial(current, true)}
        </motion.div>

        <motion.div
          key={items[nextIndex].name + String(nextIndex)}
          className="testimonial-slider__slide testimonial-slider__slide--side"
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderTestimonial(items[nextIndex], false)}
        </motion.div>
      </div>

      <button
        type="button"
        className="testimonial-slider__btn testimonial-slider__btn--side testimonial-slider__btn--prev"
        aria-label="Previous testimonial"
        onClick={() => go(-1)}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        className="testimonial-slider__btn testimonial-slider__btn--side testimonial-slider__btn--next"
        aria-label="Next testimonial"
        onClick={() => go(1)}
      >
        <ChevronRight size={24} />
      </button>

      <div className="testimonial-slider__dots testimonial-slider__dots--desktop" role="tablist" aria-label="Testimonial slides">
        {renderDots()}
      </div>
    </div>
  );
};
