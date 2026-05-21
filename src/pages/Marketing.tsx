import React, { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { Target, Search, Megaphone, Mail, CheckCircle2 } from 'lucide-react';

const marketingServices = [
  {
    icon: <Search size={32} className="text-primary mb-4" />,
    title: 'PPC & Search Ads',
    description: 'High-ROI campaigns across Google, Bing, and YouTube that capture high-intent users actively searching for your solutions.'
  },
  {
    icon: <Megaphone size={32} className="text-secondary mb-4" />,
    title: 'Paid Social Media',
    description: 'Hyper-targeted ads on Facebook, Instagram, LinkedIn, and TikTok designed to build brand awareness and drive direct conversions.'
  },
  {
    icon: <Target size={32} className="text-accent mb-4" />,
    title: 'Content Marketing',
    description: 'Strategic content creation and distribution that positions your brand as an authority and nurtures prospects through the funnel.'
  },
  {
    icon: <Mail size={32} className="text-primary mb-4" />,
    title: 'Email & Lifecycle',
    description: 'Automated email sequences and newsletter campaigns that increase LTV, reduce churn, and turn one-time buyers into loyal advocates.'
  }
];

const Marketing: React.FC = () => {
  useEffect(() => {
    document.title = 'Digital Marketing | Veloxa';
  }, []);

  return (
    <div>
      <PageHeader 
        title="Digital Marketing" 
        description="Omnichannel marketing campaigns that generate high-quality leads and explosive growth." 
      />

      <section className="section container text-center">
        <div className="card glass max-w-4xl mx-auto px-8 py-16">
          <h2 className="mb-4">Stop Wasting Ad Spend. <br/><span className="gradient-text">Start Scaling.</span></h2>
          <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto">
            We don't believe in vanity metrics like clicks and impressions. Our marketing strategies are laser-focused on one thing: generating a measurable return on investment (ROI) that grows your bottom line.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="animate-fade-up">Our <span className="gradient-text-alt">Growth Engines</span></h2>
            <p className="text-muted animate-fade-up delay-1 max-w-2xl mx-auto">
              We leverage data-driven strategies across multiple channels to ensure your message reaches the right audience at the perfect time.
            </p>
          </div>
          
          <div className="grid grid-2">
            {marketingServices.map((service, idx) => (
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop" 
              alt="Marketing Data Analysis" 
              className="w-full rounded-3xl shadow-2xl" 
            />
          </div>
          <div className="animate-fade-up delay-1">
            <h2 className="mb-4">A Proven <span className="gradient-text">Methodology</span></h2>
            <p className="text-muted mb-6 text-lg leading-relaxed">
              Success in digital marketing requires more than just launching ads. It demands constant testing, learning, and iterating. We act as an extension of your team to ensure sustainable growth.
            </p>
            <ul className="list-none p-0 mb-8">
              {['Comprehensive Audience Research', 'A/B Testing & Optimization', 'Transparent ROI Reporting', 'Cross-Channel Attribution'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 mb-3 text-lg">
                  <CheckCircle2 className="text-secondary" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="/pricing" className="btn btn-primary">View Pricing Packages</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
