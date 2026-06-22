import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { HomeExtendedSections } from '@/components/home/HomeExtendedSections';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Link } from 'react-router-dom';
import { Search, Monitor, Palette, TrendingUp } from 'lucide-react';

const Lahore: React.FC = () => {
  useEffect(() => {
    // Title tag
    document.title = 'Digital Marketing Agency in Lahore | Veloxa';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Premier digital marketing agency in Lahore, Pakistan. Specializing in SEO, web design, and marketing campaigns that drive local business growth.';
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
    const canonicalUrl = 'https://veloxa.com/lahore';
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
    
    updateOG('og:title', 'Digital Marketing Agency in Lahore | Veloxa');
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
    updateTwitter('twitter:title', 'Digital Marketing Agency in Lahore | Veloxa');
    updateTwitter('twitter:description', description);
    
    // LocalBusiness schema for Lahore
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Veloxa - Digital Marketing Agency Lahore',
      description: description,
      url: 'https://veloxa.com/lahore',
      telephone: '+92-XXX-XXXXXXX',
      email: 'contact@veloxa.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        streetAddress: 'Lahore, Pakistan'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.5204,
        longitude: 74.3587
      },
      areaServed: {
        '@type': 'City',
        name: 'Lahore'
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

  const services = [
    {
      icon: <Search size={28} />,
      title: 'SEO Services',
      description: 'Dominate Lahore search rankings with our data-driven SEO strategies that drive targeted organic traffic.',
      link: '/seo-services',
    },
    {
      icon: <Monitor size={28} />,
      title: 'Web Design',
      description: 'Stunning, high-performance websites built for Lahore businesses to maximize conversions.',
      link: '/web-design',
    },
    {
      icon: <Palette size={28} />,
      title: 'Creative',
      description: 'Captivating branding and creative assets that make your Lahore business stand out.',
      link: '/creative',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Marketing',
      description: 'Omnichannel marketing campaigns that generate high-quality leads for Lahore businesses.',
      link: '/marketing',
    }
  ];

  return (
    <div>
      <Hero />

      <section className="py-16 border-y border-[rgba(15,27,51,0.08)] bg-surface">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="animate-fade-up">Digital Marketing Agency in <span className="gradient-text-alt">Lahore</span></h2>
            <p className="text-muted animate-fade-up delay-1 max-w-2xl mx-auto text-lg">
              Pakistan's leading digital marketing agency serving Lahore businesses with proven results.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-up">
              <h3 className="text-5xl font-bold text-secondary mb-2">
                <AnimatedCounter value={250} suffix="%" />
              </h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Avg. ROI</p>
            </div>
            <div className="animate-fade-up delay-1">
              <h3 className="text-5xl font-bold mb-2">
                <AnimatedCounter value={150} suffix="+" />
              </h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Lahore Clients</p>
            </div>
            <div className="animate-fade-up delay-2">
              <h3 className="text-5xl font-bold mb-2">
                <AnimatedCounter value={8} suffix="+" />
              </h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Years in Lahore</p>
            </div>
            <div className="animate-fade-up delay-3">
              <h3 className="text-5xl font-bold mb-2">
                <AnimatedCounter value={98} suffix="%" />
              </h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Client Retention</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-background">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="animate-fade-up">Our <span className="gradient-text-alt">Expertise</span></h2>
            <p className="text-muted animate-fade-up delay-1 max-w-2xl mx-auto text-lg">
              We offer a comprehensive suite of digital marketing services designed to elevate Lahore businesses.
            </p>
          </div>
          
          <div className="grid grid-2">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} delay={(idx % 4) + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background border-t border-[rgba(15,27,51,0.08)]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Lahore Success Story</p>
              <h2 className="mb-6 tracking-tight">Local E-commerce: 300% Growth</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                We helped a Lahore-based e-commerce business scale from local to national, implementing targeted digital strategies that drove record-breaking engagement and lowered acquisition costs by 50%.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary">E-commerce</span>
                <span className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary">Local SEO</span>
                <span className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary">PPC</span>
              </div>
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-[#0f1b33] font-semibold hover:text-primary transition-colors border-b border-primary pb-1 cursor-target">
                View Case Study
              </Link>
            </div>
            <div className="card glass p-2 animate-fade-up delay-2">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                alt="E-commerce Dashboard" 
                className="rounded-xl w-full h-auto object-cover"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>

      <HomeExtendedSections />
      
      <section className="section cta-dark mx-6 my-16 rounded-3xl text-center">
        <div className="container">
          <h2 className="mb-4">Ready to Transform Your Digital Presence in Lahore?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto text-xl">
            Join Lahore businesses that trust Veloxa to drive their digital growth.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Lahore;
