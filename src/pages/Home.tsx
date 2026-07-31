import React, { useEffect, lazy, Suspense } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Link } from 'react-router-dom';
import { Search, Monitor, Palette, TrendingUp, ArrowRight } from 'lucide-react';

const HomeExtendedSections = lazy(() => import('@/components/home/HomeExtendedSections').then(m => ({ default: m.HomeExtendedSections })));

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Veloxa | Modern Digital Marketing Agency';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Veloxa is a modern digital marketing agency specializing in SEO, web design, creative branding, and omnichannel marketing campaigns that drive real business growth.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = 'https://veloxa.com';
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }

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

    updateOG('og:title', 'Veloxa | Modern Digital Marketing Agency');
    updateOG('og:description', description);
    updateOG('og:url', canonicalUrl);
    updateOG('og:type', 'website');

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
    updateTwitter('twitter:title', 'Veloxa | Modern Digital Marketing Agency');
    updateTwitter('twitter:description', description);

    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Veloxa',
      description: description,
      url: 'https://veloxa.com',
      logo: 'https://veloxa.com/logo.png',
      sameAs: [],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+92-XXX-XXXXXXX',
        contactType: 'sales',
        areaServed: 'PK'
      }
    };

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);
  }, []);

  const services = [
    {
      icon: <Search size={24} />,
      title: 'SEO Services',
      description: 'Dominate search rankings with data-driven strategies that drive targeted organic traffic and sustainable growth.',
      link: '/seo-services',
    },
    {
      icon: <Monitor size={24} />,
      title: 'Web Design',
      description: 'High-performance websites built for optimal UX and maximum conversion from day one.',
      link: '/web-design',
    },
    {
      icon: <Palette size={24} />,
      title: 'Creative',
      description: 'Branding and creative assets that make your business stand out in a crowded marketplace.',
      link: '/creative',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Marketing',
      description: 'Omnichannel campaigns that generate high-quality leads and drive explosive growth.',
      link: '/marketing',
    }
  ];

  return (
    <div>
      <Hero />

      {/* ── Services Section — asymmetric, hierarchical ── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          {/* Asymmetric intro — label left, heading leading */}
          <div className="mb-14" style={{ maxWidth: '860px' }}>
            <span className="badge badge-primary mb-4" style={{ display: 'inline-flex' }}>What We Do</span>
            <h2 className="animate-fade-up" style={{ marginBottom: '0.75rem' }}>
              Services built for <span className="gradient-text-alt">results</span>, not just reports.
            </h2>
            <p className="text-muted animate-fade-up delay-1 text-lg text-pretty" style={{ maxWidth: '580px' }}>
              Every engagement starts with measurement. We define the metric, then build the strategy backward from it.
            </p>
          </div>

          {/* Services grid — lead feature spans full width, rest as 2+1 */}
          <div className="grid grid-cols-1 gap-5" style={{ maxWidth: '1100px' }}>
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} delay={idx + 1} featured={idx === 0} />
            ))}
          </div>

          {/* Inline CTA */}
          <div className="mt-12 animate-fade-up delay-4" style={{ maxWidth: '580px' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Discuss Your Project <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Proof Section — replaces stat monuments with contextual outcomes ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'var(--color-surface)' }}>
        <div className="container relative z-10">
          <div className="mb-12" style={{ maxWidth: '720px' }}>
            <span className="badge badge-primary mb-4" style={{ display: 'inline-flex' }}>Track Record</span>
            <h2 className="animate-fade-up">
              We deliver <span className="gradient-text-alt">numbers</span> our clients measure.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column — contextual proof */}
            <div className="space-y-6 animate-fade-up">
              <div className="flex gap-5 items-start p-0" style={{ border: 'none', background: 'none' }}>
                <div className="flex-shrink-0 pt-1">
                  <div className="text-4xl font-bold gradient-text-alt leading-none">250%</div>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">Average client ROI across all campaigns</p>
                  <p className="text-muted text-sm leading-relaxed">Measured from first touch to closed revenue. Includes SEO, paid media, and conversion optimization programs across 40+ active accounts.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start p-0" style={{ border: 'none', background: 'none' }}>
                <div className="flex-shrink-0 pt-1">
                  <div className="text-4xl font-bold text-secondary leading-none" style={{ color: 'var(--color-secondary)' }}>500+</div>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">Brands scaled across B2B and DTC</p>
                  <p className="text-muted text-sm leading-relaxed">From seed-stage startups doing their first campaign to established companies optimizing $100K+ monthly ad spend.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start p-0" style={{ border: 'none', background: 'none' }}>
                <div className="flex-shrink-0 pt-1">
                  <div className="text-4xl font-bold gradient-text-accent leading-none">$1.2B</div>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">Ad spend managed across channels</p>
                  <p className="text-muted text-sm leading-relaxed">Transparent reporting on every dollar. We treat your budget like it's ours — because your results determine our retention.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start p-0" style={{ border: 'none', background: 'none' }}>
                <div className="flex-shrink-0 pt-1">
                  <div className="text-4xl font-bold leading-none" style={{ color: 'var(--color-accent)' }}>98%</div>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">Client retention rate over the last 3 years</p>
                  <p className="text-muted text-sm leading-relaxed">Clients stay because the numbers keep improving. We don't do lock-in contracts — we earn every renewal.</p>
                </div>
              </div>
            </div>

            {/* Right column — context statement */}
            <div className="animate-fade-up delay-2 flex flex-col justify-center">
              <div className="p-8 rounded-3xl" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <p className="text-xl font-semibold mb-4 leading-snug" style={{ color: 'var(--color-text)' }}>
                  "Veloxa replaced three agencies and doubled our qualified lead volume in six months. They measure everything. No fluff."
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: 'var(--color-secondary)' }}>SR</div>
                  <div>
                    <p className="font-semibold text-sm">Sarah Reeves</p>
                    <p className="text-xs text-muted">CMO, Lumina Tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Case Study ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'var(--color-bg)' }}>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up order-2 md:order-1">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="badge badge-primary">B2B SaaS</span>
                <span className="badge badge-primary">Lead Gen</span>
                <span className="badge badge-primary">SEO</span>
              </div>
              <h2 className="mb-4 tracking-tight text-3xl md:text-4xl">Lumina Tech: 400% Lead Growth</h2>
              <p className="text-muted text-lg leading-relaxed mb-8 text-pretty">
                We rebuilt Lumina's digital funnel from the ground up, implementing an omnichannel approach that drove record-breaking engagement and lowered customer acquisition costs by 60%.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 py-5" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div>
                  <p className="text-2xl font-bold gradient-text-alt">400%</p>
                  <p className="text-xs text-muted font-medium">Lead Growth</p>
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: 'var(--color-secondary)' }}>60%</p>
                  <p className="text-xs text-muted font-medium">Lower CAC</p>
                </div>
                <div>
                  <p className="text-2xl font-bold gradient-text-accent">3.2x</p>
                  <p className="text-xs text-muted font-medium">ROAS</p>
                </div>
              </div>

              <Link
                to="/portfolio/omnichannel-saas-campaign"
                className="group inline-flex items-center gap-2.5 font-semibold transition-colors cursor-target"
                style={{ color: 'var(--color-primary)' }}
              >
                Read Full Case Study
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="animate-fade-up delay-2 order-1 md:order-2 group">
              <div className="relative overflow-hidden rounded-2xl" style={{ border: '1px solid var(--color-border)' }}>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Lumina Tech Dashboard"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: 'var(--color-primary)', borderTopColor: 'transparent' }} /></div>}>
        <HomeExtendedSections />
      </Suspense>

      {/* ── CTA Section ── */}
      <section className="section mx-6 my-16 rounded-3xl text-center relative overflow-hidden" style={{ background: 'var(--color-secondary)' }}>
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(212,120,44,0.08)' }} />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(61,122,108,0.08)' }} />

        <div className="container relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm mb-6" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.08)' }}>Get Started</span>
          <h2 className="mb-4 text-white text-balance">Ready to Transform Your Digital Presence?</h2>
          <p className="mb-10 max-w-2xl mx-auto text-xl text-pretty" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Join hundreds of forward-thinking brands that trust Veloxa to drive their digital growth.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg" style={{ background: '#ffffff', color: 'var(--color-secondary)' }}>
            Get a Free Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;