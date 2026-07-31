import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import { LayoutTemplate, Code2, ShoppingCart, Zap, CheckCircle2, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const webServices = [
  {
    icon: <LayoutTemplate size={26} />,
    title: 'UI/UX Design',
    description: 'We design intuitive, engaging interfaces that guide users smoothly toward conversion, ensuring a premium experience on every device.'
  },
  {
    icon: <Code2 size={26} />,
    title: 'Custom Development',
    description: 'From React and Next.js to robust CMS integrations, we build scalable, secure web applications tailored to your business needs.'
  },
  {
    icon: <ShoppingCart size={26} />,
    title: 'E-commerce Solutions',
    description: 'High-converting online stores built on Shopify or WooCommerce, optimized for product discoverability and seamless checkout.'
  },
  {
    icon: <Zap size={26} />,
    title: 'Performance Optimization',
    description: 'Blazing fast load times, core web vitals optimization, and technical SEO baked into the foundation of your site.'
  }
];

const WebDesign: React.FC = () => {
  useEffect(() => {
    document.title = 'Web Design & Development | Veloxa';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Professional web design and development services. Stunning, high-performance websites built for optimal user experience and maximum conversion.';
    if (metaDescription) metaDescription.setAttribute('content', description);
    else { const meta = document.createElement('meta'); meta.name = 'description'; meta.content = description; document.head.appendChild(meta); }
    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = 'https://veloxa.com/web-design';
    if (canonical) canonical.setAttribute('href', canonicalUrl);
    else { const link = document.createElement('link'); link.rel = 'canonical'; link.href = canonicalUrl; document.head.appendChild(link); }
    const updateOG = (p: string, c: string) => {
      const og = document.querySelector(`meta[property="${p}"]`) || document.querySelector(`meta[name="${p}"]`);
      if (og) og.setAttribute('content', c);
      else { const m = document.createElement('meta'); m.setAttribute('property', p); m.content = c; document.head.appendChild(m); }
    };
    updateOG('og:title', 'Web Design & Development | Veloxa');
    updateOG('og:description', description); updateOG('og:url', canonicalUrl); updateOG('og:type', 'website');
    const updateTwitter = (n: string, c: string) => {
      const t = document.querySelector(`meta[name="${n}"]`);
      if (t) t.setAttribute('content', c);
      else { const m = document.createElement('meta'); m.name = n; m.content = c; document.head.appendChild(m); }
    };
    updateTwitter('twitter:card', 'summary_large_image');
    updateTwitter('twitter:title', 'Web Design & Development | Veloxa');
    updateTwitter('twitter:description', description);
    const schemas = [
      { '@context': 'https://schema.org', '@type': 'Service', name: 'Web Design & Development', description, provider: { '@type': 'Organization', name: 'Veloxa', url: 'https://veloxa.com' }, areaServed: 'Pakistan' },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://veloxa.com' }, { '@type': 'ListItem', position: 2, name: 'Web Design', item: canonicalUrl }] }
    ];
    const existing = document.querySelectorAll('script[type="application/ld+json"]');
    existing.forEach(s => s.remove());
    schemas.forEach(d => { const s = document.createElement('script'); s.type = 'application/ld+json'; s.text = JSON.stringify(d); document.head.appendChild(s); });
  }, []);

  return (
    <div>
      <nav className="container pt-24 pb-4 flex items-center gap-2 text-sm text-muted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={14} />
        <span className="text-text">Web Design</span>
      </nav>

      <PageHeader
        title="Web Design & Development"
        description="Stunning, high-performance websites built for optimal user experience and maximum conversion."
      />

      <section className="section container text-center">
        <div className="glass-strong max-w-4xl mx-auto px-8 py-16 rounded-2xl">
          <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
            <Sparkles size={12} />
            <span>Why It Matters</span>
          </div>
          <h2 className="mb-4">Your Website is Your <br/><span className="gradient-text">Digital Storefront</span></h2>
          <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto text-pretty">
            In today's fast-paced digital world, a templated website won't cut it. You need a digital experience that captures attention, communicates your value proposition instantly, and turns visitors into loyal customers.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 badge badge-surface mb-4">
              <span>Services</span>
            </div>
            <h2 className="animate-fade-up">Our <span className="gradient-text-alt">Web Solutions</span></h2>
            <p className="text-muted animate-fade-up delay-1 max-w-2xl mx-auto text-lg text-pretty">
              We combine stunning aesthetics with bulletproof code to build websites that look great and perform even better.
            </p>
          </div>

          <div className="grid grid-2">
            {webServices.map((service, idx) => (
              <div key={idx} className="card animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="card-icon">{service.icon}</div>
                <h3 className="mb-2 text-xl">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="grid grid-2 items-center gap-16">
          <div className="animate-fade-up">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop"
              alt="UI Design Wireframes"
              className="w-full rounded-2xl shadow-card"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
          <div className="animate-fade-up delay-1">
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Sparkles size={12} />
              <span>Features</span>
            </div>
            <h2 className="mb-4">Designed for <span className="gradient-text">Humans</span>, Built for <span className="gradient-text-alt">Growth</span></h2>
            <p className="text-muted mb-6 text-lg leading-relaxed text-pretty">
              We don't just build websites; we engineer digital experiences. Every pixel is thoughtfully placed, and every line of code is optimized to ensure your site is fast, accessible, and scalable.
            </p>
            <ul className="list-none p-0 mb-8">
              {['Mobile-First Responsive Design', 'Interactive Micro-Animations', 'Advanced CMS Integration', 'Conversion Rate Optimized (CRO)'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 mb-3 text-lg">
                  <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/portfolio" className="btn btn-outline">View Our Work <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section cta-dark mx-6 mb-16 rounded-3xl relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(212,120,44,0.06)' }} />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(61,122,108,0.05)' }} />
        <div className="container text-center relative z-10">
          <div className="inline-flex items-center gap-2 badge bg-white/10 text-white border-white/10 mb-6">
            <span>Get Started</span>
          </div>
          <h2 className="animate-fade-up mb-4 text-white">Ready to Build Something Amazing?</h2>
          <p className="text-white/60 animate-fade-up delay-1 mb-8 max-w-2xl mx-auto text-lg leading-relaxed text-pretty">
            Whether you need a complete redesign or a brand new web application, our team is ready to bring your vision to life.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-navy font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 shadow-lg animate-fade-up delay-2">
            Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;
