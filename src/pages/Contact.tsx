import React, { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { Mail, Clock, MapPin, Send, Sparkles } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm('mgoqkwok');

  useEffect(() => {
    document.title = 'Contact Us | Veloxa';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Get in touch with Veloxa for a free consultation. We help businesses grow through digital marketing, SEO, web design, and creative branding services.';
    if (metaDescription) metaDescription.setAttribute('content', description);
    else { const meta = document.createElement('meta'); meta.name = 'description'; meta.content = description; document.head.appendChild(meta); }
    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = 'https://veloxa.com/contact';
    if (canonical) canonical.setAttribute('href', canonicalUrl);
    else { const link = document.createElement('link'); link.rel = 'canonical'; link.href = canonicalUrl; document.head.appendChild(link); }
    const updateOG = (p: string, c: string) => {
      const og = document.querySelector(`meta[property="${p}"]`) || document.querySelector(`meta[name="${p}"]`);
      if (og) og.setAttribute('content', c);
      else { const m = document.createElement('meta'); m.setAttribute('property', p); m.content = c; document.head.appendChild(m); }
    };
    updateOG('og:title', 'Contact Us | Veloxa');
    updateOG('og:description', description); updateOG('og:url', canonicalUrl); updateOG('og:type', 'website');
    const updateTwitter = (n: string, c: string) => {
      const t = document.querySelector(`meta[name="${n}"]`);
      if (t) t.setAttribute('content', c);
      else { const m = document.createElement('meta'); m.name = n; m.content = c; document.head.appendChild(m); }
    };
    updateTwitter('twitter:card', 'summary_large_image');
    updateTwitter('twitter:title', 'Contact Us | Veloxa');
    updateTwitter('twitter:description', description);
    const localBusinessSchema = {
      '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'Veloxa',
      description, url: 'https://veloxa.com', telephone: '+92-XXX-XXXXXXX', email: 'contact@veloxa.com',
      address: { '@type': 'PostalAddress', addressCountry: 'PK', addressLocality: 'Lahore', addressRegion: 'Punjab' },
      geo: { '@type': 'GeoCoordinates', latitude: 31.5204, longitude: 74.3587 },
      openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
      priceRange: '$$'
    };
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <PageHeader
        title="Get in Touch"
        description="Ready to elevate your digital presence? We'd love to hear from you. Drop us a message below."
      />

      <section className="section container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="card">
            <div className="inline-flex items-center gap-2 badge badge-surface mb-5">
              <Sparkles size={12} />
              <span>Contact Info</span>
            </div>
            <h3 className="mb-6 text-2xl">Let's Start a Conversation</h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-[rgba(15,27,51,0.06)]">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="mb-0.5 text-sm font-semibold">Email</h4>
                  <p className="text-muted text-sm">Use the form and we'll reply to your inbox.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-[rgba(15,27,51,0.06)]">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="mb-0.5 text-sm font-semibold">Response Time</h4>
                  <p className="text-muted text-sm">We reply within 24 hours on business days.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-[rgba(15,27,51,0.06)]">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="mb-0.5 text-sm font-semibold">Location</h4>
                  <p className="text-muted text-sm">Remote-first agency<br/>Serving clients worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <div className="inline-flex items-center gap-2 badge badge-primary mb-5">
              <Sparkles size={12} />
              <span>Send Message</span>
            </div>
            <h3 className="mb-6 text-2xl">Drop Us a Line</h3>
            {state.succeeded ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-4">
                  <Send size={28} />
                </div>
                <p className="text-secondary text-xl font-semibold mb-2">Message Sent Successfully!</p>
                <p className="text-muted">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="text-muted mb-1.5 block text-sm font-medium">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full p-3.5 rounded-xl border border-[rgba(15,27,51,0.12)] bg-surface text-text outline-none focus:border-primary transition-colors"
                    required
                  />
                  <ValidationError field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="text-muted mb-1.5 block text-sm font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full p-3.5 rounded-xl border border-[rgba(15,27,51,0.12)] bg-surface text-text outline-none focus:border-primary transition-colors"
                    required
                  />
                  <ValidationError field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="text-muted mb-1.5 block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    name="message"
                    className="w-full p-3.5 rounded-xl border border-[rgba(15,27,51,0.12)] bg-surface text-text outline-none focus:border-primary transition-colors resize-none"
                    required
                  />
                  <ValidationError field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn btn-primary mt-2"
                  aria-busy={state.submitting}
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
