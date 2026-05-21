import React, { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { Target, TrendingUp, Compass, CheckCircle2, ShieldCheck } from 'lucide-react';

const auditBenefits = [
  {
    title: 'Audit Your Current SEO',
    body: 'We perform a deep dive into your technical health, on-page performance, and backlink profile to pinpoint exactly what is holding you back from top rankings.',
    icon: <ShieldCheck className="text-primary mb-4" size={32} />
  },
  {
    title: 'Map a Growth Strategy',
    body: 'We analyze your current marketing efforts to ensure they bring in qualified leads, not just inflate vanity metrics, creating a scalable roadmap for growth.',
    icon: <TrendingUp className="text-secondary mb-4" size={32} />
  },
  {
    title: 'Align With Business Goals',
    body: 'As a strategic partner, we ensure your SEO services are perfectly aligned with your long-term business objectives to drive actual revenue.',
    icon: <Target className="text-accent mb-4" size={32} />
  }
];

const corePillars = [
  {
    title: 'Execution',
    subtitle: 'Solve your execution problems',
    body: 'Many businesses struggle because they operate without a clear roadmap. We start by fixing what\'s broken, optimizing for both search engines and users, and creating high-value content. We go beyond traffic—testing and refining to ensure your SEO drives real revenue.',
  },
  {
    title: 'Strategy',
    subtitle: 'Connect goals to sound marketing',
    body: 'SEO is more than a checklist of blogs and metadata. Without a strategy tied to actual growth, it\'s just busywork. We identify high-value opportunities and build a customized approach designed to increase your bottom line, focusing on what truly moves the needle.',
  },
  {
    title: 'Vision',
    subtitle: 'Establish a clear path forward',
    body: 'Without a clear vision, SEO becomes reactive. We help you zoom out and build strategies that set you up for long-term success. From positioning you as an industry authority to refining your conversion funnel, every effort works toward a measurable goal.',
  }
];

const serviceModels = [
  {
    title: 'Do It Yourself',
    price: 'Free Audit',
    body: 'Not sure why your website isn\'t ranking? Our comprehensive SEO audit takes out the guesswork. We uncover the barriers holding you back and provide a clear action plan.',
    button: 'Get Free Audit',
    variant: 'outline'
  },
  {
    title: 'Do It With Us',
    price: 'Guided Partnership',
    body: 'We provide proven frameworks, in-depth keyword research, and hands-on consulting to help your team optimize your site, refine content, and convert traffic into revenue.',
    button: 'Explore Consulting',
    variant: 'outline'
  },
  {
    title: 'Done For You',
    price: 'Full-Service SEO',
    body: 'SEO should generate leads, not headaches. We handle everything—from technical SEO and content to link building and CRO—so you can focus on running your business.',
    button: 'Let\'s Talk',
    variant: 'primary'
  }
];

const SEOServices: React.FC = () => {
  useEffect(() => {
    document.title = 'SEO Services | Veloxa';
  }, []);

  return (
    <div>
      <PageHeader 
        title="SEO Services" 
        description="You need an SEO agency you can trust. Get full transparency, real results, and a strategy that drives revenue." 
      />

      <section className="section container text-center">
        <div className="card glass max-w-4xl mx-auto px-8 py-16">
          <h2 className="mb-4">94% of clicks go to organic results. <br/><span className="gradient-text">Ranking at the top isn't optional.</span></h2>
          <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto">
            Most SEO services focus solely on vanity metrics like traffic and rankings. But what good is ranking if it doesn't convert? We go beyond the surface, tying organic search directly to your bottom line to help you turn search intent into sales.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="animate-fade-up">What Do You Get With <span className="gradient-text-alt">Our SEO Audit?</span></h2>
            <p className="text-muted animate-fade-up delay-1 max-w-2xl mx-auto">
              Our audit is a deep dive into your entire strategy. We pinpoint exactly where you're losing rankings and leaving revenue on the table.
            </p>
          </div>
          
          <div className="grid grid-3">
            {auditBenefits.map((benefit, idx) => (
              <div key={idx} className="card animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                {benefit.icon}
                <h4 className="mb-2">{benefit.title}</h4>
                <p className="text-muted text-sm">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="text-center mb-8">
          <h2 className="animate-fade-up">The <span className="gradient-text">Three Pillars</span> of Our Approach</h2>
          <p className="text-muted animate-fade-up delay-1 max-w-3xl mx-auto">
            We address the most common reasons businesses fail to see ROI from their SEO efforts.
          </p>
        </div>

        <div className="grid">
          {corePillars.map((pillar, idx) => (
            <div key={idx} className="card glass flex flex-col gap-4 animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-center gap-4">
                <Compass className="text-primary" size={28} />
                <h3 className="m-0">{pillar.title}: <span className="font-normal text-muted">{pillar.subtitle}</span></h3>
              </div>
              <p className="text-muted text-lg leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="animate-fade-up">How We Can <span className="gradient-text-alt">Work Together</span></h2>
            <p className="text-muted animate-fade-up delay-1 max-w-2xl mx-auto">
              Whether you need a one-time roadmap or a fully managed SEO team, we have a model that fits your needs.
            </p>
          </div>

          <div className="grid grid-3">
            {serviceModels.map((model, idx) => (
              <div key={idx} className="card flex flex-col animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h4 className="text-primary mb-1">{model.title}</h4>
                <h3 className="mb-4">{model.price}</h3>
                <p className="text-muted mb-8 grow">{model.body}</p>
                <a href="#contact" className={`btn btn-${model.variant} w-full`}>
                  {model.button}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container text-center">
        <div className="card glass max-w-3xl mx-auto p-12">
          <h2 className="mb-4">"It doesn't feel like you are working with an outside vendor, but rather an extension of your team."</h2>
          <p className="text-muted mb-6">— Nicole, Marketing Director</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-secondary" size={20} />
              <span>Full Transparency</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-secondary" size={20} />
              <span>Consistent Results</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-secondary" size={20} />
              <span>Revenue Focused</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section container text-center">
        <div className="card max-w-3xl mx-auto">
          <h3>Get Your Free SEO Audit Today</h3>
          <p className="text-muted text-lg my-8 mx-auto">
            Discover what's holding your website back and let us show you how we can help grow your business.
          </p>
          <a href="/contact" className="btn btn-primary">Claim Free Audit</a>
        </div>
      </section>
    </div>
  );
};

export default SEOServices;
