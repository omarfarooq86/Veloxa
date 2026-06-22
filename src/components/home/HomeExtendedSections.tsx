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
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center mb-8">
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
                className={`card animate-fade-up delay-${(idx % 4) + 1}`}
                style={{ padding: 0, overflow: 'hidden', textAlign: 'center' }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={800}
                  height={520}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // swap to a lightweight inline SVG fallback when remote image fails
                    (e.currentTarget as HTMLImageElement).onerror = null;
                    (e.currentTarget as HTMLImageElement).src = fallbackImage;
                  }}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <div style={{ padding: '1.5rem 1.75rem 2rem' }}>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: 0 }}>{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="animate-fade-up">Client Testimonials</h2>
            <p className="text-muted animate-fade-up delay-1" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
              What some of our satisfied customers are saying
            </p>
          </div>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="animate-fade-up">Our Clients</h2>
            <p className="text-muted animate-fade-up delay-1" style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.65 }}>
              {ourClientsIntro}
            </p>
          </div>
          <div className="marquee-container animate-fade-up delay-2">
            <div className="marquee-content">
              {clientLogos.map((logo, idx) => (
                <div
                  key={`first-${idx}`}
                  className="glass"
                  style={{
                    borderRadius: 'var(--border-radius)',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(15,27,51,0.08)',
                    width: '180px',
                    height: '100px',
                    flexShrink: 0
                  }}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'brightness(0) opacity(0.55)' }} 
                  />
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {clientLogos.map((logo, idx) => (
                <div
                  key={`second-${idx}`}
                  className="glass"
                  style={{
                    borderRadius: 'var(--border-radius)',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(15,27,51,0.08)',
                    width: '180px',
                    height: '100px',
                    flexShrink: 0
                  }}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'brightness(0) opacity(0.55)' }} 
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
