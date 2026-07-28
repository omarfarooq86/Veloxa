import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import { Palette, PenTool, Image as ImageIcon, Video, CheckCircle2, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const creativeServices = [
  {
    icon: <Palette size={26} />,
    title: 'Brand Identity & Logo',
    description: 'We craft memorable logos, comprehensive brand guidelines, and distinctive visual identities that resonate with your target audience.'
  },
  {
    icon: <PenTool size={26} />,
    title: 'Marketing Collateral',
    description: 'From brochures and pitch decks to digital flyers, we design materials that communicate your message with clarity and style.'
  },
  {
    icon: <ImageIcon size={26} />,
    title: 'Digital & Social Graphics',
    description: 'Scroll-stopping graphics for social media, display ads, and email campaigns that boost engagement and drive clicks.'
  },
  {
    icon: <Video size={26} />,
    title: 'Motion & Video',
    description: 'Dynamic motion graphics, explainer videos, and short-form content that bring your brand story to life in a crowded feed.'
  }
];

const Creative: React.FC = () => {
  useEffect(() => {
    document.title = 'Creative & Branding Services | Veloxa';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Captivating branding and creative services that make your business stand out. Logo design, brand identity, marketing collateral, and digital graphics.';
    if (metaDescription) metaDescription.setAttribute('content', description);
    else { const meta = document.createElement('meta'); meta.name = 'description'; meta.content = description; document.head.appendChild(meta); }
    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = 'https://veloxa.com/creative';
    if (canonical) canonical.setAttribute('href', canonicalUrl);
    else { const link = document.createElement('link'); link.rel = 'canonical'; link.href = canonicalUrl; document.head.appendChild(link); }
    const updateOG = (p: string, c: string) => {
      const og = document.querySelector(`meta[property="${p}"]`) || document.querySelector(`meta[name="${p}"]`);
      if (og) og.setAttribute('content', c);
      else { const m = document.createElement('meta'); m.setAttribute('property', p); m.content = c; document.head.appendChild(m); }
    };
    updateOG('og:title', 'Creative & Branding Services | Veloxa');
    updateOG('og:description', description); updateOG('og:url', canonicalUrl); updateOG('og:type', 'website');
    const updateTwitter = (n: string, c: string) => {
      const t = document.querySelector(`meta[name="${n}"]`);
      if (t) t.setAttribute('content', c);
      else { const m = document.createElement('meta'); m.name = n; m.content = c; document.head.appendChild(m); }
    };
    updateTwitter('twitter:card', 'summary_large_image');
    updateTwitter('twitter:title', 'Creative & Branding Services | Veloxa');
    updateTwitter('twitter:description', description);
    const schemas = [
      { '@context': 'https://schema.org', '@type': 'Service', name: 'Creative & Branding Services', description, provider: { '@type': 'Organization', name: 'Veloxa', url: 'https://veloxa.com' }, areaServed: 'Pakistan' },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://veloxa.com' }, { '@type': 'ListItem', position: 2, name: 'Creative', item: canonicalUrl }] }
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
        <span className="text-text">Creative</span>
      </nav>

      <PageHeader
        title="Creative & Branding"
        description="Captivating branding and creative assets that make your business stand out in a crowded market."
      />

      <section className="section container text-center">
        <div className="glass-strong max-w-4xl mx-auto px-8 py-16 rounded-2xl">
          <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
            <Sparkles size={12} />
            <span>Brand Matters</span>
          </div>
          <h2 className="mb-4">First Impressions <br/><span className="gradient-text">Matter</span></h2>
          <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto text-pretty">
            In a world of endless scrolling, your brand has milliseconds to capture attention. We design visually stunning assets that not only look incredible but also align perfectly with your strategic business goals.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 badge badge-surface mb-4">
              <span>Services</span>
            </div>
            <h2 className="animate-fade-up">Our <span className="gradient-text-alt">Creative Arsenal</span></h2>
            <p className="text-muted animate-fade-up delay-1 max-w-2xl mx-auto text-lg text-pretty">
              Everything you need to build a cohesive, premium brand presence across all touchpoints.
            </p>
          </div>

          <div className="grid grid-2">
            {creativeServices.map((service, idx) => (
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
          <div className="animate-fade-up delay-1 order-last md:order-last">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format&fit=crop"
              alt="Creative Color Palettes"
              className="w-full rounded-2xl shadow-card"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
          <div className="animate-fade-up order-first md:order-first">
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Sparkles size={12} />
              <span>Our Process</span>
            </div>
            <h2 className="mb-4">Visual <span className="gradient-text">Storytelling</span></h2>
            <p className="text-muted mb-6 text-lg leading-relaxed text-pretty">
              Great design is more than just pretty pictures—it's communication. We dig deep into your brand's DNA to create visuals that speak directly to your customers' desires and pain points.
            </p>
            <ul className="list-none p-0 mb-8">
              {['Cohesive Brand Guidelines', 'Data-Driven Design Decisions', 'Fast Turnaround Times', 'Multi-Platform Consistency'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 mb-3 text-lg">
                  <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-outline">Consult With Our Designers <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creative;
