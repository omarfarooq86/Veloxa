import React from 'react';
import { Sparkles, ArrowRight, Zap, Target, BarChart3, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-stretch justify-center overflow-hidden text-white pt-28"
      style={{ background: 'radial-gradient(140% 140% at 50% 0%, #11203f 0%, #0a1226 60%, #070d1c 100%)' }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[#1e4aff]/15 rounded-full blur-[140px] animate-[blob_8s_ease-in-out_infinite]" />
        <div className="absolute top-[15%] right-[-5%] w-[45vw] h-[45vw] bg-[#059669]/10 rounded-full blur-[120px] animate-[blob_10s_ease-in-out_infinite_2s]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-[#4d7cff]/10 rounded-full blur-[110px] animate-[blob_12s_ease-in-out_infinite_4s]" />
      </div>

      {/* Floating particles layer 1 — tiny dots */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 5 === 0 ? 'rgba(30,74,255,0.5)' : i % 7 === 0 ? 'rgba(5,150,105,0.4)' : 'rgba(255,255,255,0.20)',
              boxShadow: i % 5 === 0 ? '0 0 6px rgba(30,74,255,0.3)' : 'none',
              animation: `float ${Math.random() * 14 + 12}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles layer 2 — rings & diamonds */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className="absolute rounded-full border"
            style={{
              width: `${Math.random() * 18 + 10}px`,
              height: `${Math.random() * 18 + 10}px`,
              left: `${Math.random() * 85 + 5}%`,
              top: `${Math.random() * 85 + 5}%`,
              borderColor: i % 3 === 0 ? 'rgba(30,74,255,0.25)' : 'rgba(255,255,255,0.12)',
              borderWidth: '1px',
              animation: `ring-pulse ${Math.random() * 6 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={`diamond-${i}`}
            className="absolute"
            style={{
              width: `${Math.random() * 5 + 3}px`,
              height: `${Math.random() * 5 + 3}px`,
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              background: i % 2 === 0 ? 'rgba(77,124,255,0.30)' : 'rgba(255,255,255,0.15)',
              transform: 'rotate(45deg)',
              borderRadius: '1px',
              animation: `drift ${Math.random() * 16 + 14}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute"
            style={{
              width: '100px',
              height: '1px',
              left: `${Math.random() * 60 + 20}%`,
              top: `${Math.random() * 30 + 5}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)',
              animation: `shooting-star ${Math.random() * 8 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 12 + i * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Twinkling starfield */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={`twinkle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
              background: 'rgba(255,255,255,0.6)',
              boxShadow: '0 0 4px rgba(255,255,255,0.3)',
              animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 flex flex-col items-center justify-center text-center px-4 flex-1">
        {/* Premium badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm shadow-[0_0_30px_rgba(30,74,255,0.08)] mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-white/80">The New Standard in Digital</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-1 tracking-tighter mb-6 leading-[1.08] text-balance max-w-5xl">
          We Build{' '}
          <span className="bg-gradient-to-r from-[#4d7cff] via-[#3b82f6] to-[#0ea5e9] bg-clip-text text-transparent">
            Super Impressive
          </span>
          <br />
          Digital Experiences
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up delay-2 text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed text-pretty">
          From SEO to full-scale campaigns, we turn clicks into customers and ideas into brands that grow — with measurable results.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-3 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#1e4aff] to-[#4d7cff] text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(30,74,255,0.35)] hover:shadow-[0_12px_40px_rgba(30,74,255,0.45)] active:scale-95"
          >
            Get a Free Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/[0.04] border border-white/[0.12] text-white/90 font-semibold text-lg transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.20] hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            View Our Work
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="animate-fade-up delay-4 mt-20 flex flex-wrap justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
            <div className="p-2.5 rounded-xl bg-[#1e4aff]/10">
              <Zap size={20} className="text-[#4d7cff]" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white/90">Fast Results</p>
              <p className="text-xs text-white/50">Avg. 4x ROI in 90 days</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
            <div className="p-2.5 rounded-xl bg-[#1e4aff]/10">
              <Target size={20} className="text-[#4d7cff]" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white/90">Data-Driven</p>
              <p className="text-xs text-white/50">Real-time analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
            <div className="p-2.5 rounded-xl bg-[#1e4aff]/10">
              <BarChart3 size={20} className="text-[#4d7cff]" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white/90">Proven ROI</p>
              <p className="text-xs text-white/50">500+ brands scaled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 animate-fade-in">
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">Scroll</span>
        <ChevronDown size={16} className="animate-[scroll-indicator_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
};

export default Hero;
