import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap, Target, BarChart3, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMagnetic } from '@/hooks/useMagnetic';
import ParticleBackground from '@/components/ParticleBackground';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const ctaRef = useMagnetic<HTMLAnchorElement>({ strength: 0.4, scale: 1.05 });

  // Subtle cursor parallax on the ambient glow. Disabled for reduced-motion
  // and touch pointers.
  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      glow.style.transform = '';
    };

    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-stretch justify-center overflow-hidden text-white pt-28 hero-particles-bg"
    >
      <ParticleBackground />
{/* Ambient glow — nudged by the cursor */}
      <div ref={glowRef} className="hero-parallax absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[160px] opacity-[0.08]" style={{ background: 'var(--color-primary)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-[0.05]" style={{ background: 'var(--color-accent)' }} />
      </div>

      {/* Subtle grain-like grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container relative z-10 flex flex-col items-center justify-center text-center px-4 flex-1">
        {/* Status pill */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-10" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--color-primary)' }} />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: 'var(--color-primary)' }} />
          </span>
          <span className="text-sm font-medium text-white/70 tracking-wide">Results-Driven Digital Agency</span>
        </div>

        {/* Headline — word cascade, with a measure-line under "Revenue" */}
        <h1 className="tracking-tighter mb-6 leading-[1.06] text-balance max-w-4xl" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>
          <span className="hero-word" style={{ animationDelay: '0.15s' }}>We</span>{' '}
          <span className="hero-word" style={{ animationDelay: '0.25s' }}>Turn</span>{' '}
          <span className="hero-word" style={{ animationDelay: '0.35s' }}>Clicks</span>
          <br />
          <span className="hero-word" style={{ animationDelay: '0.5s' }}>Into</span>{' '}
          <span className="hero-word hero-accent" style={{ animationDelay: '0.6s' }}>
            <span className="bg-gradient-to-r from-[#e8964a] via-[#d4782c] to-[#b05e1e] bg-clip-text text-transparent">Revenue</span>
            <span className="hero-measure" aria-hidden="true" />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up text-lg md:text-xl text-white/50 max-w-xl mb-12 leading-relaxed text-pretty" style={{ animationDelay: '0.9s' }}>
          SEO, web design, and campaigns that don't just look good — they convert. We measure everything. We prove everything.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up flex flex-col sm:flex-row gap-4 items-center" style={{ animationDelay: '1.05s' }}>
          <Link
            ref={ctaRef}
            to="/contact"
            className="magnetic group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-semibold text-lg"
            style={{
              background: 'var(--color-primary)',
              boxShadow: '0 8px 32px rgba(212, 120, 44, 0.25)',
            }}
          >
            Get a Free Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.85)' }}
          >
            View Our Work
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="animate-fade-up mt-20 flex flex-wrap justify-center gap-4 md:gap-8" style={{ animationDelay: '1.2s' }}>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="p-2 rounded-lg" style={{ background: 'rgba(212,120,44,0.10)' }}>
              <Zap size={18} style={{ color: 'var(--color-primary-light)' }} />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white/80">Fast Results</p>
              <p className="text-xs text-white/40">Avg. 4x ROI in 90 days</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="p-2 rounded-lg" style={{ background: 'rgba(212,120,44,0.10)' }}>
              <Target size={18} style={{ color: 'var(--color-primary-light)' }} />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white/80">Data-Driven</p>
              <p className="text-xs text-white/40">Real-time analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="p-2 rounded-lg" style={{ background: 'rgba(212,120,44,0.10)' }}>
              <BarChart3 size={18} style={{ color: 'var(--color-primary-light)' }} />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white/80">Proven ROI</p>
              <p className="text-xs text-white/40">500+ brands scaled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/20 animate-fade-in">
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">Scroll</span>
        <ChevronDown size={16} className="animate-[scroll-indicator_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
};

export default Hero;
