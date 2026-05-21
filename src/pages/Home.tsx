import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { HomeExtendedSections } from '@/components/home/HomeExtendedSections';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Link } from 'react-router-dom';
import { Search, Monitor, Palette, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Veloxa | Modern Digital Marketing Agency';
  }, []);

  const services = [
    {
      icon: <Search size={28} />,
      title: 'SEO Services',
      description: 'Dominate search rankings with our data-driven SEO strategies that drive targeted organic traffic.',
      link: '/seo-services',
    },
    {
      icon: <Monitor size={28} />,
      title: 'Web Design',
      description: 'Stunning, high-performance websites built for optimal user experience and maximum conversion.',
      link: '/web-design',
    },
    {
      icon: <Palette size={28} />,
      title: 'Creative',
      description: 'Captivating branding and creative assets that make your business stand out in a crowded market.',
      link: '/creative',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Marketing',
      description: 'Omnichannel marketing campaigns that generate high-quality leads and explosive growth.',
      link: '/marketing',
    }
  ];

  return (
    <div>
      <Hero />

      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-up">
              <h3 className="text-5xl font-bold text-secondary mb-2">
                <AnimatedCounter value={250} suffix="%" />
              </h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Avg. ROI</p>
            </div>
            <div className="animate-fade-up delay-1">
              <h3 className="text-5xl font-bold mb-2">
                <AnimatedCounter value={500} suffix="+" />
              </h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Brands Scaled</p>
            </div>
            <div className="animate-fade-up delay-2">
              <h3 className="text-5xl font-bold mb-2">
                <AnimatedCounter value={1.2} prefix="$" suffix="B" decimals={1} />
              </h3>
              <p className="text-xs tracking-widest font-bold uppercase text-muted">Ad Spend Managed</p>
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
              We offer a comprehensive suite of digital marketing services designed to elevate your brand.
            </p>
          </div>
          
          <div className="grid grid-2">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} delay={(idx % 4) + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background border-t border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Featured Project</p>
              <h2 className="mb-6 tracking-tight">Lumina Tech: 400% Lead Growth</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                We rebuilt Lumina's digital funnel from the ground up, implementing an omnichannel approach that drove record-breaking engagement and lowered acquisition costs by 60%.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-white">B2B SaaS</span>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-white">Lead Gen</span>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-white">SEO</span>
              </div>
              <Link to="/portfolio/omnichannel-saas-campaign" className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors border-b border-primary pb-1 cursor-target">
                View Case Study
              </Link>
            </div>
            <div className="card glass p-2 animate-fade-up delay-2">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Lumina Tech Dashboard" className="rounded-xl w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <HomeExtendedSections />
      
      <section className="section glass mx-6 my-16 rounded-3xl text-center">
        <div className="container">
          <h2 className="mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto text-xl">
            Join hundreds of forward-thinking brands that trust Veloxa to drive their digital growth.
          </p>
          <a href="/contact" className="btn btn-primary">
            Get a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
