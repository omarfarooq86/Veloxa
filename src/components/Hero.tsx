import React from 'react';
import { Sparkles, ArrowRight, Zap, Target, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-stretch justify-center overflow-hidden text-white"
      style={{ background: 'radial-gradient(140% 140% at 50% 0%, #11203f 0%, #0a1226 60%, #070d1c 100%)' }}
    >
      {/* Animated gradient orbs - CSS only, performant */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] animate-[blob_8s_ease-in-out_infinite]" />
        <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] bg-secondary/15 rounded-full blur-[100px] animate-[blob_10s_ease-in-out_infinite_2s]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-[#1e4aff]/10 rounded-full blur-[110px] animate-[blob_12s_ease-in-out_infinite_4s]" />
      </div>

      {/* Floating particles - CSS only, performant */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
          <Sparkles size={16} className="text-secondary" />
          <span className="text-sm font-semibold tracking-wide">The New Standard in Digital</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-1 tracking-tighter mb-6 leading-[1.1]">
          We Build <span className="gradient-text">Super Impressive</span> <br />
          Digital Experiences
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up delay-2 text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
          From SEO to full-scale campaigns, we turn clicks into customers and ideas into brands that grow.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-3 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1e4aff] text-white font-semibold transition-all hover:bg-[#1a3ae6] hover:scale-105 hover:shadow-[0_8px_24px_rgba(30,74,255,0.4)]"
          >
            Get a Free Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold transition-all hover:bg-white/10 hover:scale-105 backdrop-blur-sm"
          >
            View Our Work
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="animate-fade-up delay-4 mt-16 grid grid-cols-3 gap-8 md:gap-16 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <Zap size={24} className="text-[#1e4aff]" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Fast Results</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <Target size={24} className="text-[#1e4aff]" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Data-Driven</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <BarChart3 size={24} className="text-[#1e4aff]" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Proven ROI</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};

export default Hero;
