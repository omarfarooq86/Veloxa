import React, { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { LayoutTemplate, Code2, ShoppingCart, Zap, CheckCircle2 } from 'lucide-react';

const webServices = [
  {
    icon: <LayoutTemplate size={32} className="text-primary mb-4" />,
    title: 'UI/UX Design',
    description: 'We design intuitive, engaging interfaces that guide users smoothly toward conversion, ensuring a premium experience on every device.'
  },
  {
    icon: <Code2 size={32} className="text-secondary mb-4" />,
    title: 'Custom Development',
    description: 'From React and Next.js to robust CMS integrations, we build scalable, secure web applications tailored to your business needs.'
  },
  {
    icon: <ShoppingCart size={32} className="text-accent mb-4" />,
    title: 'E-commerce Solutions',
    description: 'High-converting online stores built on Shopify or WooCommerce, optimized for product discoverability and seamless checkout.'
  },
  {
    icon: <Zap size={32} className="text-primary mb-4" />,
    title: 'Performance Optimization',
    description: 'Blazing fast load times, core web vitals optimization, and technical SEO baked into the foundation of your site.'
  }
];

const WebDesign: React.FC = () => {
  useEffect(() => {
    document.title = 'Web Design | Veloxa';
  }, []);

  return (
    <div>
      <PageHeader 
        title="Web Design & Development" 
        description="Stunning, high-performance websites built for optimal user experience and maximum conversion." 
      />

      <section className="section container text-center">
        <div className="card glass max-w-4xl mx-auto px-8 py-16">
          <h2 className="mb-4">Your Website is Your <br/><span className="gradient-text">Digital Storefront</span></h2>
          <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto">
            In today's fast-paced digital world, a templated website won't cut it. You need a digital experience that captures attention, communicates your value proposition instantly, and turns visitors into loyal customers.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="animate-fade-up">Our <span className="gradient-text-alt">Web Solutions</span></h2>
            <p className="text-muted animate-fade-up delay-1 max-w-2xl mx-auto">
              We combine stunning aesthetics with bulletproof code to build websites that look great and perform even better.
            </p>
          </div>
          
          <div className="grid grid-2">
            {webServices.map((service, idx) => (
              <div key={idx} className="card animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                {service.icon}
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-muted text-sm">{service.description}</p>
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
              className="w-full rounded-3xl shadow-2xl" 
            />
          </div>
          <div className="animate-fade-up delay-1">
            <h2 className="mb-4">Designed for <span className="gradient-text">Humans</span>, Built for <span className="gradient-text-alt">Growth</span></h2>
            <p className="text-muted mb-6 text-lg leading-relaxed">
              We don't just build websites; we engineer digital experiences. Every pixel is thoughtfully placed, and every line of code is optimized to ensure your site is fast, accessible, and scalable.
            </p>
            <ul className="list-none p-0 mb-8">
              {['Mobile-First Responsive Design', 'Interactive Micro-Animations', 'Advanced CMS Integration', 'Conversion Rate Optimized (CRO)'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 mb-3 text-lg">
                  <CheckCircle2 className="text-secondary" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="/portfolio" className="btn btn-outline">View Our Work</a>
          </div>
        </div>
      </section>

      <section className="section glass mx-6 mb-16 rounded-3xl">
        <div className="container text-center">
          <h2 className="animate-fade-up mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-muted animate-fade-up delay-1 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you need a complete redesign or a brand new web application, our team is ready to bring your vision to life.
          </p>
          <a href="/contact" className="btn btn-primary animate-fade-up delay-2">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;
