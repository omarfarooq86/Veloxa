import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import { Target, Search, Megaphone, Mail, CheckCircle2, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { MetaRobots } from '@/components/MetaRobots';

const marketingServices = [
  {
    icon: <Search size={26} />, title: 'PPC & Search Ads', description: 'High-ROI campaigns across Google, Bing, and YouTube that capture high-intent users actively searching for your solutions.'
  },
  {
    icon: <Megaphone size={26} />, title: 'Paid Social Media', description: 'Hyper-targeted ads on Facebook, Instagram, LinkedIn, and TikTok designed to build brand awareness and drive direct conversions.'
  },
  {
    icon: <Target size={26} />, title: 'Content Marketing', description: 'Strategic content creation and distribution that positions your brand as an authority and nurtures prospects through the funnel.'
  },
  {
    icon: <Mail size={26} />, title: 'Email & Lifecycle', description: 'Automated email sequences and newsletter campaigns that increase LTV, reduce churn, and turn one-time buyers into loyal advocates.'
  }
];

const Marketing: React.FC = () => {
  useEffect(() => {
    document.title = 'Digital Marketing Services | Veloxa';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Omnichannel digital marketing campaigns that generate high-quality leads and explosive growth. PPC, social media, content marketing, and email automation.';
    if (metaDescription) metaDescription.setAttribute('content', description);
    else { const meta = document.createElement('meta'); meta.name = 'description'; meta.content = description; document.head.appendChild(meta); }
    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = 'https://veloxa.com/marketing';
    if (canonical) canonical.setAttribute('href', canonicalUrl);
    else { const link = document.createElement('link'); link.rel = 'canonical'; link.href = canonicalUrl; document.head.appendChild(link); }
    const updateOG = (p: string, c: string) => {
      const og = document.querySelector(`meta[property="${p}"]`) || document.querySelector(`meta[name="${p}"]`);
      if (og) og.setAttribute('content', c);
      else { const m = document.createElement('meta'); m.setAttribute('property', p); m.content = c; document.head.appendChild(m); }
    };
    updateOG('og:title', 'Digital Marketing Services | Veloxa');
    updateOG('og:description', description); updateOG('og:url', canonicalUrl); updateOG('og:type', 'website');
    const updateTwitter = (n: string, c: string) => {
      const t = document.querySelector(`meta[name="${n}"]`);
      if (t) t.setAttribute('content', c);
      else { const m = document.createElement('meta'); m.name = n; m.content = c; document.head.appendChild(m); }
    };
    updateTwitter('twitter:card', 'summary_large_image');
    updateTwitter('twitter:title', 'Digital Marketing Services | Veloxa');
    updateTwitter('twitter:description', description);
    const schemas = [
      { '@context': 'https://schema.org', '@type': 'Service', name: 'Digital Marketing Services', description, provider: { '@type': 'Organization', name: 'Veloxa', url: 'https://veloxa.com' }, areaServed: 'Pakistan' },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://veloxa.com' }, { '@type': 'ListItem', position: 2, name: 'Marketing', item: canonicalUrl }] }
    ];
    const existing = document.querySelectorAll('script[type="application/ld+json"]');
    existing.forEach(s => s.remove());
    schemas.forEach(d => { const s = document.createElement('script'); s.type = 'application/ld+json'; s.text = JSON.stringify(d); document.head.appendChild(s); });
  }, []);

  return (
    <div>
      <MetaRobots />
      <nav className="container pt-24 pb-4 flex items-center gap-2 text-sm text-muted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={14} />
        <span className="text-text">Marketing</span>
      </nav>

      <PageHeader
        title="Digital Marketing"
        description="Omnichannel marketing campaigns that generate high-quality leads and explosive growth."
      />

      {/* Intro paragraph for thin‑content fix */}
      <section className="section container mt-8 mb-12">
        <p className="text-lg text-muted max-w-4xl mx-auto text-pretty">
          Our data‑driven digital marketing process starts with deep audience research, followed by rigorous A/B testing, transparent reporting, and continuous optimization to ensure sustainable ROI for Lahore‑based businesses.
        </p>
      </section>

      {/* Our Process paragraph */}
      <section className="section container mt-8 mb-12">
        <p className="text-lg text-muted max-w-4xl mx-auto text-pretty">
          Our proven methodology begins with comprehensive market and audience analysis to pinpoint high‑value opportunities. We then craft tailored multi‑channel strategies, execute precision‑targeted campaigns, and continuously test and refine based on real‑time data. Transparent reporting keeps stakeholders informed, while ongoing optimization ensures every dollar drives measurable growth and a strong return on investment.
        </p>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 badge badge-surface mb-4">
              <span>What We Do</span>
            </div>
            <h2 className="animate-fade-up">Our <span className="gradient-text-alt">Growth Engines</span></h2>
            <p className="text-muted animate-fade-up delay-1 max-w-2xl mx-auto text-lg text-pretty">
              We leverage data‑driven strategies across multiple channels to ensure your message reaches the right audience at the perfect time.
            </p>
          </div>

          <div className="grid grid-2">
            {marketingServices.map((service, idx) => (
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="Marketing Data Analysis"
              className="w-full rounded-2xl shadow-card"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
          <div className="animate-fade-up delay-1">
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Sparkles size={12} />
              <span>Methodology</span>
            </div>
            <h2 className="mb-4">A Proven <span className="gradient-text">Methodology</span></h2>
            <p className="text-muted mb-6 text-lg leading-relaxed text-pretty">
              Success in digital marketing requires more than just launching ads. It demands constant testing, learning, and iterating. We act as an extension of your team to ensure sustainable growth.
            </p>
            <ul className="list-none p-0 mb-8">
              {['Comprehensive Audience Research', 'A/B Testing & Optimization', 'Transparent ROI Reporting', 'Cross-Channel Attribution'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 mb-3 text-lg">
                  <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/pricing" className="btn btn-primary">View Pricing Packages <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
