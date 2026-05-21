import React from 'react';
import { Sparkles } from 'lucide-react';
// @ts-expect-error No type definitions for JSX file
import Ballpit from '@/components/Ballpit';
import { WebGLErrorBoundary } from '@/components/WebGLErrorBoundary';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-stretch justify-start overflow-hidden pt-[clamp(6.5rem,14vh,10rem)]">
      {/* Background: inset:0 so the layer has real height (100% fails when parent only has min-height). */}
      <div className="absolute inset-0 z-0 opacity-80">
        <WebGLErrorBoundary>
          <Ballpit
            count={100}
            gravity={0.5}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={true}
            colors={["#5227FF","#7cff67","#ff6b6b"]}
          />
        </WebGLErrorBoundary>
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
