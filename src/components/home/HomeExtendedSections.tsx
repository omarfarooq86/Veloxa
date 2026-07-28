import React from 'react';
import {
  clientLogos,
  industryItems,
  industriesIntro,
  ourClientsIntro,
  testimonials,
} from '@/data/homeMarketingContent';
import { TestimonialSlider } from '@/components/home/TestimonialSlider';

export const HomeExtendedSections: React.FC = () => {
  const fallbackImage =
    'data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 520%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23eeeeee%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23666%22 font-size=%2224%22%3EImage%20unavailable%3C/text%3E%3C/svg%3E';

  return (
    <>
      {/* ── Industries Section ── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 badge badge-surface mb-4">
              <span>Verticals</span>
            </div>
            <h2 className="animate-fade-up">
              Industries <span className="gradient-text-alt">We Work With</span>
            </h2>
            <p
              className="text-muted animate-fade-up delay-1"
              style={{ maxWidth: '820px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}
            >
              {industriesIntro}
            </p>
          </div>
          <div className="grid grid-2">
            {industryItems.map((item, idx) => (
              <div
                key={item.label}
                className={`group card animate-fade-up delay-${(idx % 4) + 1}`}
                style={{ padding: 0, overflow: 'hidden', textAlign: 'center' }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={800}
                    height={520}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).onerror = null;
                      (e.currentTarget as HTMLImageElement).src = fallbackImage;
                    }}
                    className="block w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 pb-7 relative">
                  {/* Accent line */}
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <h3 className="text-xl font-bold mb-0 group-hover:text-primary transition-colors duration-300">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <span>Testimonials</span>
            </div>
            <h2 className="animate-fade-up">Client <span className="gradient-text-alt">Testimonials</span></h2>
            <p className="text-muted animate-fade-up delay-1" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
              What some of our satisfied customers are saying
            </p>
          </div>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* ── Our Clients / Logo Marquee ── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 badge badge-surface mb-4">
              <span>Trusted By</span>
            </div>
            <h2 className="animate-fade-up">Our <span className="gradient-text-alt">Clients</span></h2>
            <p className="text-muted animate-fade-up delay-1" style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.65 }}>
              {ourClientsIntro}
            </p>
          </div>
          <div className="marquee-container animate-fade-up delay-2">
            <div className="marquee-content">
              {clientLogos.map((logo, idx) => (
                <div
                  key={`first-${idx}`}
                  className="glass flex items-center justify-center"
                  style={{
                    borderRadius: 'var(--border-radius)',
                    padding: '1rem',
                    border: '1px solid var(--color-border)',
                    width: '180px',
                    height: '100px',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'brightness(0) opacity(0.50)' }}
                  />
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {clientLogos.map((logo, idx) => (
                <div
                  key={`second-${idx}`}
                  className="glass flex items-center justify-center"
                  style={{
                    borderRadius: 'var(--border-radius)',
                    padding: '1rem',
                    border: '1px solid var(--color-border)',
                    width: '180px',
                    height: '100px',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'brightness(0) opacity(0.50)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
