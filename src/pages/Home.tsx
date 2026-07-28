import React, { useEffect, lazy, Suspense } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Link } from 'react-router-dom';
import { Search, Monitor, Palette, TrendingUp, ArrowRight, Star } from 'lucide-react';

const HomeExtendedSections = lazy(() => import('@/components/home/HomeExtendedSections').then(m => ({ default: m.HomeExtendedSections })));

const Home: React.FC = () => {
  useEffect(() => {
    // Title tag
    document.title = 'Veloxa | Modern Digital Marketing Agency';

    // Meta description
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

    // Canonical URL
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

    updateOG('og:title', 'Veloxa | Modern Digital Marketing Agency');
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
    updateTwitter('twitter:title', 'Veloxa | Modern Digital Marketing Agency');
    updateTwitter('twitter:description', description);

    // Organization schema
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

    // Remove existing schema
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    // Add new schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);
  }, []);

  const services = [
    {
      icon: <Search size={26} />,
      title: 'SEO Services',
      description: 'Dominate search rankings with our data-driven SEO strategies that drive targeted organic traffic and sustainable growth.',
      link: '/seo-services',
    },
    {
      icon: <Monitor size={26} />,
      title: 'Web Design',
      description: 'Stunning, high-performance websites built for optimal user experience and maximum conversion from day one.',
      link: '/web-design',
    },
    {
      icon: <Palette size={26} />,
      title: 'Creative',
      description: 'Captivating branding and creative assets that make your business stand out in a crowded marketplace.',
      link: '/creative',
    },
    {
      icon: <TrendingUp size={26} />,
      title: 'Marketing',
      description: 'Omnichannel marketing campaigns that generate high-quality leads and drive explosive business growth.',
      link: '/marketing',
    }
  ];

  return (
    <div>
      <Hero />

      {/* ── Stats / Impact Section ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-surface) 100%)' }}>
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Star size={12} className="fill-primary" />
              <span>By the Numbers</span>
            </div>
            <h2 className="animate-fade-up">
              Our <span className="gradient-text-alt">Impact</span>
            </h2>
            <p className="text-muted animate-fade-up delay-1 max-w-xl mx-auto text-lg text-pretty">
              Real results from real campaigns — the metrics that define our track record.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="card-stat animate-fade-up">
              <h3 className="text-5xl font-bold gradient-text mb-1">
                <AnimatedCounter value={250} suffix="%" />
              </h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Avg. ROI</p>
            </div>
            <div className="card-stat animate-fade-up delay-1">
              <h3 className="text-5xl font-bold text-secondary mb-1">
                <AnimatedCounter value={500} suffix="+" />
              </h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Brands Scaled</p>
            </div>
            <div className="card-stat animate-fade-up delay-2">
              <h3 className="text-5xl font-bold gradient-text-accent mb-1">
                <AnimatedCounter value={1.2} prefix="$" suffix="B" decimals={1} />
              </h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Ad Spend Managed</p>
            </div>
            <div className="card-stat animate-fade-up delay-3">
              <h3 className="text-5xl font-bold text-accent mb-1">
                <AnimatedCounter value={98} suffix="%" />
              </h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services / Expertise Section ── */}
      <section className="section bg-background">
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 badge badge-surface mb-4">
              <span>What We Do</span>
            </div>
            <h2 className="animate-fade-up">
              Our <span className="gradient-text-alt">Expertise</span>
            </h2>
            <p className="text-muted animate-fade-up delay-1 max-w-2xl mx-auto text-lg text-pretty">
              We offer a comprehensive suite of digital marketing services designed to elevate your brand and drive measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} delay={(idx % 4) + 1} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 animate-fade-up delay-4">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Discuss Your Project <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Project Section ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'var(--color-surface)' }}>
        {/* Decorative element */}
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
                <span className="badge badge-primary">B2B SaaS</span>
                <span className="badge badge-primary">Lead Gen</span>
                <span className="badge badge-primary">SEO</span>
              </div>
              <h2 className="mb-4 tracking-tight text-3xl md:text-4xl">Lumina Tech: 400% Lead Growth</h2>
              <p className="text-muted text-lg leading-relaxed mb-8 text-pretty">
                We rebuilt Lumina's digital funnel from the ground up, implementing an omnichannel approach that drove record-breaking engagement and lowered customer acquisition costs by 60%.
              </p>

              {/* Result highlights */}
              <div className="grid grid-cols-3 gap-4 mb-8 py-5 border-y border-[rgba(15,27,51,0.06)]">
                <div>
                  <p className="text-2xl font-bold gradient-text-alt">400%</p>
                  <p className="text-xs text-muted font-medium">Lead Growth</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary">60%</p>
                  <p className="text-xs text-muted font-medium">Lower CAC</p>
                </div>
                <div>
                  <p className="text-2xl font-bold gradient-text-accent">3.2x</p>
                  <p className="text-xs text-muted font-medium">ROAS</p>
                </div>
              </div>

              <Link
                to="/portfolio/omnichannel-saas-campaign"
                className="group inline-flex items-center gap-2.5 font-semibold text-primary hover:text-primary-dark transition-colors cursor-target"
              >
                Read Full Case Study
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="card p-2 animate-fade-up delay-2 order-1 md:order-2 group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Lumina Tech Dashboard"
                  className="rounded-xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" /></div>}>
        <HomeExtendedSections />
      </Suspense>

      {/* ── CTA Section ── */}
      <section className="section cta-dark mx-6 my-16 rounded-3xl text-center relative overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#1e4aff]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#059669]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="inline-flex items-center gap-2 badge bg-white/10 text-white border-white/10 mb-6">
            <span>Get Started</span>
          </div>
          <h2 className="mb-4 text-balance">Ready to Transform Your Digital Presence?</h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto text-xl text-pretty">
            Join hundreds of forward-thinking brands that trust Veloxa to drive their digital growth.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[#0a1226] font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 shadow-lg">
            Get a Free Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
