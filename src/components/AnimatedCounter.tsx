import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  prefix = '', 
  suffix = '', 
  decimals = 0, 
  className = '' 
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newValue = startValue + (value - startValue) * easeOut;
      
      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}{currentValue.toFixed(decimals)}{suffix}
    </span>
  );
};
