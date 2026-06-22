import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-stretch justify-start overflow-hidden pt-[clamp(6.5rem,14vh,10rem)] text-white"
      style={{ background: 'radial-gradient(120% 120% at 50% 0%, #11203f 0%, #0a1226 55%, #070d1c 100%)' }}
    >
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container relative z-10 pointer-events-none">
        <div className="max-w-3xl mx-auto text-center pointer-events-auto">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-sm font-semibold">The New Standard in Digital</span>
          </div>

          <h1 className="animate-fade-up delay-1 tracking-tighter">
            We Build <span className="gradient-text">Super Impressive</span> <br /> Digital Experiences
          </h1>
        </div>
      </div>

      {/* Bottom Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-background to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
