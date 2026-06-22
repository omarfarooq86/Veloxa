import React, { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { Mail, Clock, MapPin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm('mgoqkwok');

  useEffect(() => {
    // Title tag
    document.title = 'Contact Us | Veloxa';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Get in touch with Veloxa for a free consultation. We help businesses grow through digital marketing, SEO, web design, and creative branding services.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = 'https://veloxa.com/contact';
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }
    
    // Open Graph tags
    const updateOG = (property: string, content: string) => {
      const og = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (og) {
        og.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };
    
    updateOG('og:title', 'Contact Us | Veloxa');
    updateOG('og:description', description);
    updateOG('og:url', canonicalUrl);
    updateOG('og:type', 'website');
    
    // Twitter Card
    const updateTwitter = (name: string, content: string) => {
      const twitter = document.querySelector(`meta[name="${name}"]`);
      if (twitter) {
        twitter.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };
    
    updateTwitter('twitter:card', 'summary_large_image');
    updateTwitter('twitter:title', 'Contact Us | Veloxa');
    updateTwitter('twitter:description', description);
    
    // LocalBusiness schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Veloxa',
      description: description,
      url: 'https://veloxa.com',
      telephone: '+92-XXX-XXXXXXX',
      email: 'contact@veloxa.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.5204,
        longitude: 74.3587
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      priceRange: '$$'
    };
    
    // Remove existing schema
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());
    
    // Add new schema
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
        <div className="grid grid-2">
          <div className="card">
            <h3 className="mb-4">Contact Information</h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="card-icon w-12 h-12 mb-0 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <p className="text-muted">Use the form and we'll reply to your inbox.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="card-icon w-12 h-12 mb-0 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="mb-1">Response Time</h4>
                  <p className="text-muted">We reply within 24 hours on business days.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="card-icon w-12 h-12 mb-0 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="mb-1">Location</h4>
                  <p className="text-muted">Remote-first agency<br/>Serving clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="mb-4">Send a Message</h3>
            {state.succeeded ? (
              <div className="text-center py-8">
                <p className="text-secondary text-xl font-semibold mb-2">Message Sent Successfully!</p>
                <p className="text-muted">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="text-muted mb-1 block">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full p-3 rounded-lg border border-[rgba(15,27,51,0.14)] bg-surface text-[#0f1b33] outline-none focus:border-primary"
                    required
                  />
                  <ValidationError field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="text-muted mb-1 block">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full p-3 rounded-lg border border-[rgba(15,27,51,0.14)] bg-surface text-[#0f1b33] outline-none focus:border-primary"
                    required
                  />
                  <ValidationError field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="text-muted mb-1 block">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    name="message"
                    className="w-full p-3 rounded-lg border border-[rgba(15,27,51,0.14)] bg-surface text-[#0f1b33] outline-none focus:border-primary"
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
