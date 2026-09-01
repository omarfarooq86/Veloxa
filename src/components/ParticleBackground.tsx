import React, { useEffect, useRef } from 'react';

/**
 * Simple particle background that follows the mouse cursor.
 * The particles are drawn on a <canvas> element that fills its parent.
 * It respects prefers‑reduced‑motion and coarse pointer preferences.
 */
const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const particles = useRef<Array<{ x: number; y: number; vx: number; vy: number; size: number }>>([]);

  // Initialise particles once the canvas size is known
  const initParticles = (width: number, height: number) => {
    const count = Math.min(100, Math.floor((width * height) / 15000)); // density based on size
    particles.current = [];
    for (let i = 0; i < count; i++) {
      particles.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1,
      });
    }
  };

  const draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);

    // Draw connections between close particles for a subtle network effect
    const maxDist = 80;
    for (let i = 0; i < particles.current.length; i++) {
      const p1 = particles.current[i];
      for (let j = i + 1; j < particles.current.length; j++) {
        const p2 = particles.current[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.hypot(dx, dy);
        if (dist < maxDist) {
          const alpha = 1 - dist / maxDist;
          ctx.strokeStyle = `rgba(212,120,44,${alpha * 0.4})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (const p of particles.current) {
      ctx.fillStyle = 'rgba(212,120,44,0.9)'; // primary color with opacity
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { width, height } = canvas;

    // Update particle positions
    for (const p of particles.current) {
      // Attract towards mouse when within a radius
      const dx = mouse.current.x - p.x;
      const dy = mouse.current.y - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 120) {
        const pull = (1 - dist / 120) * 0.3;
        p.vx += dx * pull * 0.001;
        p.vy += dy * pull * 0.001;
      }
      // Apply velocity
      p.x += p.vx;
      p.y += p.vy;
      // Dampen motion
      p.vx *= 0.98;
      p.vy *= 0.98;
      // Wrap around edges
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;
    }

    draw(ctx, width, height);
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect user preferences – no animation if reduced motion or coarse pointer
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReduced || coarsePointer) {
      // Just clear the canvas – we don't want a moving background.
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles(rect.width, rect.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouse);

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles-canvas absolute inset-0 w-full h-full pointer-events-none" />;
};

export default ParticleBackground;
