import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { HomeExtendedSections } from '@/components/home/HomeExtendedSections';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Link } from 'react-router-dom';
import { Search, Monitor, Palette, TrendingUp, ArrowRight, Star } from 'lucide-react';

const Lahore: React.FC = () => {
  useEffect(() => {
    document.title = 'Digital Marketing Agency in Lahore | Veloxa';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Premier digital marketing agency in Lahore, Pakistan. Specializing in SEO, web design, and marketing campaigns that drive local business growth.';
    if (metaDescription) metaDescription.setAttribute('content', description);
    else { const meta = document.createElement('meta'); meta.name = 'description'; meta.content = description; document.head.appendChild(meta); }
    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = 'https://veloxa.com/lahore';
    if (canonical) canonical.setAttribute('href', canonicalUrl);
    else { const link = document.createElement('link'); link.rel = 'canonical'; link.href = canonicalUrl; document.head.appendChild(link); }
    const updateOG = (p: string, c: string) => {
      const og = document.querySelector(`meta[property="${p}"]`) || document.querySelector(`meta[name="${p}"]`);
      if (og) og.setAttribute('content', c);
      else { const m = document.createElement('meta'); m.setAttribute('property', p); m.content = c; document.head.appendChild(m); }
    };
    updateOG('og:title', 'Digital Marketing Agency in Lahore | Veloxa');
    updateOG('og:description', description); updateOG('og:url', canonicalUrl); updateOG('og:type', 'website');
    const updateTwitter = (n: string, c: string) => {
      const t = document.querySelector(`meta[name="${n}"]`);
      if (t) t.setAttribute('content', c);
      else { const m = document.createElement('meta'); m.name = n; m.content = c; document.head.appendChild(m); }
    };
    updateTwitter('twitter:card', 'summary_large_image');
    updateTwitter('twitter:title', 'Digital Marketing Agency in Lahore | Veloxa');
    updateTwitter('twitter:description', description);
    const localBusinessSchema = {
      '@context': 'https://schema.org', '@type': 'ProfessionalService',
      name: 'Veloxa - Digital Marketing Agency Lahore', description,
      url: 'https://veloxa.com/lahore', telephone: '+92-XXX-XXXXXXX', email: 'contact@veloxa.com',
      address: { '@type': 'PostalAddress', addressCountry: 'PK', addressLocality: 'Lahore', addressRegion: 'Punjab' },
      geo: { '@type': 'GeoCoordinates', latitude: 31.5204, longitude: 74.3587 },
      areaServed: { '@type': 'City', name: 'Lahore' },
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

  const services = [
    { icon: <Search size={26} />, title: 'SEO Services', description: 'Dominate Lahore search rankings with our data-driven SEO strategies that drive targeted organic traffic.', link: '/seo-services' },
    { icon: <Monitor size={26} />, title: 'Web Design', description: 'Stunning, high-performance websites built for Lahore businesses to maximize conversions.', link: '/web-design' },
    { icon: <Palette size={26} />, title: 'Creative', description: 'Captivating branding and creative assets that make your Lahore business stand out.', link: '/creative' },
    { icon: <TrendingUp size={26} />, title: 'Marketing', description: 'Omnichannel marketing campaigns that generate high-quality leads for Lahore businesses.', link: '/marketing' }
  ];

  return (
    <div>
      <Hero />

      {/* Stats */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-surface) 100%)' }}>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Star size={12} className="fill-primary" />
              <span>By the Numbers</span>
            </div>
            <h2 className="animate-fade-up">Digital Marketing Agency in <span className="gradient-text-alt">Lahore</span></h2>
            <p className="text-muted animate-fade-up delay-1 max-w-2xl mx-auto text-lg text-pretty">
              Pakistan's leading digital marketing agency serving Lahore businesses with proven results.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="card-stat animate-fade-up">
              <h3 className="text-5xl font-bold text-secondary mb-1"><AnimatedCounter value={250} suffix="%" /></h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Avg. ROI</p>
            </div>
            <div className="card-stat animate-fade-up delay-1">
              <h3 className="text-5xl font-bold gradient-text-alt mb-1"><AnimatedCounter value={150} suffix="+" /></h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Lahore Clients</p>
            </div>
            <div className="card-stat animate-fade-up delay-2">
              <h3 className="text-5xl font-bold text-accent mb-1"><AnimatedCounter value={8} suffix="+" /></h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Years in Lahore</p>
            </div>
            <div className="card-stat animate-fade-up delay-3">
              <h3 className="text-5xl font-bold gradient-text-accent mb-1"><AnimatedCounter value={98} suffix="%" /></h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 badge badge-surface mb-4">
              <span>What We Do</span>
            </div>
            <h2 className="animate-fade-up">Our <span className="gradient-text-alt">Expertise</span></h2>
            <p className="text-muted animate-fade-up delay-1 max-w-2xl mx-auto text-lg text-pretty">
              We offer a comprehensive suite of digital marketing services designed to elevate Lahore businesses.
            </p>
          </div>
          <div className="grid grid-2 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} delay={(idx % 4) + 1} />
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-up delay-4">
            <Link to="/contact" className="btn btn-primary btn-lg">Discuss Your Project <ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'var(--color-surface)' }}>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/3 h-2/3 bg-gradient-to-l from-primary/[0.04] to-transparent rounded-l-full pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Star size={12} className="fill-primary" />
              <span>Case Study</span>
            </div>
            <h2 className="animate-fade-up">Featured <span className="gradient-text-alt">Project</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up order-2 md:order-1">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="badge badge-primary">E-commerce</span>
                <span className="badge badge-primary">Local SEO</span>
                <span className="badge badge-primary">PPC</span>
              </div>
              <h2 className="mb-4 tracking-tight text-3xl md:text-4xl">Local E-commerce: 300% Growth</h2>
              <p className="text-muted text-lg leading-relaxed mb-8 text-pretty">
                We helped a Lahore-based e-commerce business scale from local to national, implementing targeted digital strategies that drove record-breaking engagement and lowered acquisition costs by 50%.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8 py-5 border-y border-[rgba(15,27,51,0.06)]">
                <div><p className="text-2xl font-bold gradient-text-alt">300%</p><p className="text-xs text-muted font-medium">Revenue Growth</p></div>
                <div><p className="text-2xl font-bold text-secondary">50%</p><p className="text-xs text-muted font-medium">Lower CAC</p></div>
                <div><p className="text-2xl font-bold gradient-text-accent">2.5x</p><p className="text-xs text-muted font-medium">ROAS</p></div>
              </div>
              <Link to="/portfolio" className="group inline-flex items-center gap-2.5 font-semibold text-primary hover:text-primary-dark transition-colors cursor-target">
                View Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="card p-2 animate-fade-up delay-2 order-1 md:order-2 group">
              <div className="relative overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="E-commerce Dashboard" className="rounded-xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width="800" height="600" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeExtendedSections />

      {/* CTA */}
      <section className="section cta-dark mx-6 my-16 rounded-3xl text-center relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#1e4aff]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#059669]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="inline-flex items-center gap-2 badge bg-white/10 text-white border-white/10 mb-6">
            <span>Get Started</span>
          </div>
          <h2 className="mb-4 text-white text-balance">Ready to Transform Your Digital Presence in Lahore?</h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto text-xl text-pretty">
            Join Lahore businesses that trust Veloxa to drive their digital growth.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-navy font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 shadow-lg">
            Get a Free Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Lahore;
