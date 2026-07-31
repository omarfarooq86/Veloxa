import React from 'react';
import {
  clientLogos,
  industryItems,
  industriesIntro,
  testimonials,
} from '@/data/homeMarketingContent';
import { TestimonialSlider } from '@/components/home/TestimonialSlider';

export const HomeExtendedSections: React.FC = () => {
  const fallbackImage =
    'data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 520%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23eeeeee%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23666%22 font-size=%2224%22%3EImage%20unavailable%3C/text%3E%3C/svg%3E';

  return (
    <>
      {/* ── Industries Section ── */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="mb-12" style={{ maxWidth: '720px' }}>
            <span className="badge badge-primary mb-4" style={{ display: 'inline-flex' }}>Industries</span>
            <h2 className="animate-fade-up">Where We <span className="gradient-text-alt">Deliver</span></h2>
            <p
              className="text-muted animate-fade-up delay-1"
              style={{ maxWidth: '580px', fontSize: '1.05rem', lineHeight: 1.65 }}
            >
              {industriesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ maxWidth: '1100px' }}>
            {/* Lead industry — spans full width */}
            {industryItems.length > 0 && (
              <div
                className="group animate-fade-up cursor-pointer overflow-hidden"
                style={{
                  gridColumn: '1 / -1',
                  display: 'flex',
                  borderRadius: 'var(--border-radius-lg)',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <div className="relative w-60 flex-shrink-0 overflow-hidden">
                  <img
                    src={industryItems[0].imageSrc}
                    alt={industryItems[0].imageAlt}
                    width={400}
                    height={260}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).onerror = null;
                      (e.currentTarget as HTMLImageElement).src = fallbackImage;
                    }}
                    className="block w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(22,24,31,0.06), transparent)' }} />
                </div>
                <div className="flex items-center p-6" style={{ flex: 1 }}>
                  <h3 className="text-xl font-bold">{industryItems[0].label}</h3>
                </div>
              </div>
            )}

            {/* Remaining industries */}
            {industryItems.slice(1).map((item, idx) => (
              <div
                key={item.label}
                className={`group animate-fade-up delay-${(idx % 3) + 1} cursor-pointer overflow-hidden`}
                style={{
                  display: 'flex',
                  borderRadius: 'var(--border-radius)',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <div className="relative w-36 flex-shrink-0 overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={400}
                    height={260}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).onerror = null;
                      (e.currentTarget as HTMLImageElement).src = fallbackImage;
                    }}
                    className="block w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center px-5 py-4" style={{ flex: 1 }}>
                  <h3 className="font-bold" style={{ fontSize: '0.95rem' }}>{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="mb-12" style={{ maxWidth: '640px' }}>
            <span className="badge badge-primary mb-4" style={{ display: 'inline-flex' }}>Testimonials</span>
            <h2 className="animate-fade-up">What Our <span className="gradient-text-alt">Clients</span> Say</h2>
          </div>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* ── Logo Marquee ── */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="mb-12">
            <span className="badge badge-primary mb-4" style={{ display: 'inline-flex' }}>Trusted By</span>
            <h2 className="animate-fade-up">Brands We've <span className="gradient-text-alt">Partnered With</span></h2>
          </div>
          <div className="marquee-container animate-fade-up delay-2">
            <div className="marquee-content">
              {clientLogos.map((logo, idx) => (
                <div
                  key={`first-${idx}`}
                  className="flex items-center justify-center"
                  style={{
                    borderRadius: 'var(--border-radius)',
                    padding: '1rem',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    width: '180px',
                    height: '100px',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'brightness(0) opacity(0.40)' }}
                  />
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {clientLogos.map((logo, idx) => (
                <div
                  key={`second-${idx}`}
                  className="flex items-center justify-center"
                  style={{
                    borderRadius: 'var(--border-radius)',
                    padding: '1rem',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    width: '180px',
                    height: '100px',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'brightness(0) opacity(0.40)' }}
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