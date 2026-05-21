import React, { useEffect, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Check } from 'lucide-react';

type TabType = 'web-development' | 'seo-services' | 'digital-marketing' | 'social-media' | 'content-writing' | 'graphic-design' | 'app-development' | 'bundles';

const pricingData: Record<TabType, any[]> = {
  'bundles': [
    {
      name: 'Launch Pack - Website + Meta Ads',
      description: 'Perfect starter package with a professional website and initial advertising campaign.',
      price: '$150',
      interval: 'one-time',
      popular: false,
      features: [
        '5-Page Website',
        'Basic SEO Optimization',
        'Responsive Design',
        'Contact Form Integration',
        'Social Media Integration',
        '1-Month Meta Ads Campaign',
        'Google Analytics Setup'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Startup Launch Pack - E-commerce + SEO',
      description: 'Complete e-commerce solution with SEO to kickstart your online business.',
      price: '$339',
      interval: 'one-time',
      popular: true,
      features: [
        '10-Page E-commerce Website',
        'Advanced SEO Optimization',
        'Payment Gateway Integration',
        'Product Upload (up to 50)',
        '3-Month SEO Kickstart',
        'Google Analytics Setup',
        'Inventory Management'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Brand in 3 Days',
      description: 'Complete brand identity package delivered quickly for immediate market presence.',
      price: '$279',
      interval: 'one-time',
      popular: false,
      features: [
        'Professional Logo Design',
        'Brand Style Guide',
        'Social Media Kit',
        'Business Card Design',
        'Letterhead Design',
        '1-Page Website',
        'Brand Color Palette'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Growth Bundle - Website + Digital Marketing',
      description: 'Comprehensive growth solution with premium website and ongoing marketing support.',
      price: '$293',
      interval: '/mo',
      popular: true,
      features: [
        '15-Page Website',
        'Premium SEO Services',
        '6-Month Digital Marketing Campaign',
        'Advanced Analytics Dashboard',
        'Monthly Performance Reports',
        'Dedicated Account Manager',
        'Content Strategy',
        'Social Media Management'
      ],
      cta: 'Choose Growth',
      link: '/contact'
    }
  ],
  'web-development': [
    {
      name: 'Quick Refresh',
      description: 'Perfect for updating your existing website with modern design and functionality.',
      price: '$79',
      interval: 'one-time',
      popular: false,
      features: [
        'Responsive Design',
        'Up to 5 Pages',
        'Basic SEO Optimization',
        'Contact Form Integration',
        'Social Media Links',
        'Google Map Integration',
        '1-year Free Domain',
        '1-year Free Hosting',
        'Basic Security'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Complete Redesign',
      description: 'Comprehensive website overhaul with advanced features and optimization.',
      price: '$143',
      interval: 'one-time',
      popular: true,
      features: [
        'Customized Responsive Design',
        'Up to 10 Pages',
        'Advanced SEO Optimization',
        'CRM Integration',
        'Social Media Integration',
        'Google Analytics Integration',
        '1-year Free Domain',
        '1-year Free Hosting',
        'SSL Certificate',
        'Advanced Security',
        'Speed Optimization'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'E-Commerce Redesign',
      description: 'Full-featured online store with payment gateway and inventory management.',
      price: '$161',
      interval: 'one-time',
      popular: false,
      features: [
        'Custom E-commerce Design',
        'Unlimited Products',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Tracking System',
        'Advanced SEO for E-commerce',
        'Social Media Integration',
        'Google Analytics Integration',
        '1-year Free Domain',
        '1-year Free Hosting',
        'SSL Certificate',
        'Advanced Security',
        'Speed Optimization'
      ],
      cta: 'Get Started',
      link: '/contact'
    }
  ],
  'seo-services': [
    {
      name: 'SEO Health Check',
      description: 'A thorough analysis of your website\'s SEO health with actionable insights.',
      price: '$29',
      interval: 'one-time',
      popular: false,
      features: [
        'Website Audit',
        'Keyword Research (5 keywords)',
        'Competitor Analysis',
        'Basic On-Page SEO',
        'Backlink Analysis',
        'Technical SEO Check',
        'Monthly Report'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'SEO Kickstart',
      description: 'Boost your search engine rankings with essential SEO optimizations.',
      price: '$50',
      interval: 'one-time',
      popular: true,
      features: [
        'In-depth Website Audit',
        'Keyword Research (10 keywords)',
        'Competitor Analysis',
        'On-Page SEO Optimization',
        'Backlink Building (5 links)',
        'Technical SEO Fixes',
        'Monthly Performance Report',
        'Google Analytics Setup'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Local SEO Starter',
      description: 'Improve your local search visibility and attract more local customers.',
      price: '$114',
      interval: '/mo',
      popular: false,
      features: [
        'Local Keyword Research',
        'Google My Business Optimization',
        'Local Citation Building',
        'On-Page SEO for Local',
        'Monthly Local SEO Report',
        'Google Maps Optimization'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Business Growth SEO',
      description: 'Accelerate your business growth with a comprehensive SEO strategy.',
      price: '$179',
      interval: '/mo',
      popular: true,
      features: [
        'Comprehensive Keyword Research',
        'Advanced On-Page SEO',
        'High-Quality Backlink Building',
        'Content Optimization',
        'Technical SEO Audit & Fixes',
        'Monthly Performance Report',
        'Competitor Monitoring',
        'Google Analytics & Search Console Setup'
      ],
      cta: 'Choose Business',
      link: '/contact'
    },
    {
      name: 'Advanced SEO',
      description: 'Enterprise-level SEO solutions for maximum online visibility and growth.',
      price: '$268',
      interval: '/mo',
      popular: false,
      features: [
        'Extensive Keyword Research',
        'Advanced On-Page & Off-Page SEO',
        'Premium Backlink Acquisition',
        'In-depth Content Strategy',
        'Technical SEO Expertise',
        'Bi-weekly Performance Reports',
        'Conversion Rate Optimization',
        'Penalty Recovery',
        'Dedicated SEO Specialist'
      ],
      cta: 'Contact Sales',
      link: '/contact'
    }
  ],
  'digital-marketing': [
    {
      name: 'Starter Plan',
      description: 'Ideal for small businesses beginning their digital marketing journey.',
      price: '$89',
      interval: '/mo',
      popular: false,
      features: [
        '5 Target Keywords',
        '10 Quality Backlinks',
        '1 Blog Post per Month',
        'Monthly Performance Reports',
        'Email Support',
        'Basic Analytics Setup'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Business Plan',
      description: 'Comprehensive marketing solution for growing businesses seeking expansion.',
      price: '$179',
      interval: '/mo',
      popular: true,
      features: [
        '10 Target Keywords',
        '20 Quality Backlinks',
        '2 Blog Posts per Month',
        'Monthly Performance Reports',
        'Priority Email Support',
        'Competitor Analysis',
        'Advanced Analytics Dashboard'
      ],
      cta: 'Choose Business',
      link: '/contact'
    },
    {
      name: 'Enterprise Plan',
      description: 'Full-scale digital marketing strategy for established brands.',
      price: '$286',
      interval: '/mo',
      popular: false,
      features: [
        '20 Target Keywords',
        '40 Quality Backlinks',
        '4 Blog Posts per Month',
        'Weekly Performance Reports',
        '24/7 Priority Support',
        'Competitor Analysis',
        'Local SEO Optimization',
        'Custom Strategy Sessions'
      ],
      cta: 'Contact Sales',
      link: '/contact'
    }
  ],
  'social-media': [],
  'content-writing': [],
  'graphic-design': [],
  'app-development': [
    {
      name: 'Basic App',
      description: 'Essential mobile application with core functionality for startups.',
      price: '$179',
      interval: 'one-time',
      popular: false,
      features: [
        '5 App Screens',
        'Basic UI/UX Design',
        'Social Media Integration',
        'Push Notifications',
        'App Store Submission',
        'Basic Analytics'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Standard App',
      description: 'Feature-rich application with advanced integrations for growing businesses.',
      price: '$357',
      interval: 'one-time',
      popular: true,
      features: [
        '10 App Screens',
        'Custom UI/UX Design',
        'API Integration',
        'Payment Gateway Integration',
        'Advanced Analytics',
        'User Authentication',
        'App Store Optimization'
      ],
      cta: 'Choose Standard',
      link: '/contact'
    },
    {
      name: 'Advanced App',
      description: 'Enterprise-grade mobile solution with complex features and scalability.',
      price: '$714',
      interval: 'one-time',
      popular: false,
      features: [
        '20+ App Screens',
        'Advanced UI/UX Design',
        'Custom Backend Development',
        'Real-time Features',
        'Third-party Integrations',
        'Advanced Security',
        'Scalable Architecture',
        'Dedicated Support'
      ],
      cta: 'Contact Sales',
      link: '/contact'
    }
  ]
};

const tabs: { id: TabType; label: string }[] = [
  { id: 'bundles', label: 'Bundles (Most Popular)' },
  { id: 'web-development', label: 'Web Development' },
  { id: 'seo-services', label: 'SEO Services' },
  { id: 'digital-marketing', label: 'Digital Marketing' },
  { id: 'social-media', label: 'Social Media' },
  { id: 'content-writing', label: 'Content Writing' },
  { id: 'graphic-design', label: 'Graphic Designing' },
  { id: 'app-development', label: 'App Development' }
];

const addOns = [
  { name: 'Extra Page', price: '$5' },
  { name: 'Content Writing (per page)', price: '$7' },
  { name: 'Logo Design', price: '$18' },
  { name: 'Social Media Integration', price: '$9' },
  { name: 'Live Chat Integration', price: '$14' },
  { name: 'Google Analytics Integration', price: '$9' },
  { name: 'Payment Gateway Setup', price: '$18' },
  { name: 'Basic SEO Package', price: '$36' },
  { name: 'Speed Optimization', price: '$18' }
];

const termsAndPolicies = [
  {
    category: 'Payment',
    content: 'We require a 50% advance payment to initiate the project, with the remaining 50% due upon completion and before final delivery.'
  },
  {
    category: 'Revisions',
    content: 'Each package includes up to 3 revision rounds per page. Additional revisions beyond this limit are available at extra cost.'
  },
  {
    category: 'Support',
    content: 'Standard email support is included for 30 days after project completion. Extended support packages are available for purchase.'
  },
  {
    category: 'Ownership',
    content: 'Upon full payment, you retain complete ownership of all deliverables, including source code, designs, and content.'
  }
];

const faqs = [
  {
    q: 'What is included in the free domain and hosting?',
    a: 'We provide a free domain name (.com, .net, or .org) and 1 year of reliable hosting with all our web development packages. After the first year, you can renew at standard rates.'
  },
  {
    q: 'How long does the website development process take?',
    a: 'Quick Refresh typically takes 1-2 weeks, Complete Redesign takes 2-4 weeks, and E-Commerce Redesign takes 4-6 weeks, depending on the complexity and your content readiness.'
  },
  {
    q: 'Can I add more pages later?',
    a: 'Yes, additional pages can be added at any time. Extra pages are available as add-ons at competitive rates.'
  },
  {
    q: 'Do you provide content for the website?',
    a: 'Content is not included in the packages. You are responsible for providing the text, images, and other content. However, we offer content writing services as an add-on.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept various payment methods including bank transfers, credit cards, and digital payment platforms. The specific options will be discussed during the initial consultation.'
  },
  {
    q: 'Is maintenance included in the pricing?',
    a: 'Routine maintenance is not included in the base packages. However, we offer affordable maintenance plans to keep your website, app, or marketing campaigns running smoothly.'
  },
  {
    q: 'Can I upgrade my package later?',
    a: 'Absolutely. You can upgrade to a higher tier package at any time. The upgrade cost will be calculated based on the difference between packages and work completed.'
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes, we work with clients globally. Our pricing is in USD, and we can accommodate different time zones for communication and project management.'
  }
];

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('bundles');

  useEffect(() => {
    document.title = 'Pricing | Veloxa';
  }, []);

  const currentPlans = pricingData[activeTab];

  return (
    <div>
      <PageHeader 
        title="Transparent Pricing" 
        description="Value-driven packages tailored for businesses of all sizes. No hidden fees, just results." 
      />

      <section className="section container">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pricing Plans */}
        {currentPlans.length > 0 ? (
          <>
            <div className="grid grid-3 items-start">
              {currentPlans.map((plan, idx) => (
                <div 
                  key={idx} 
                  className={`card animate-fade-up relative ${plan.popular ? 'glass border-primary scale-105 z-10' : 'border-white/5 z-0'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wider">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <h3 className="mb-2">{plan.name}</h3>
                  <p className="text-muted mb-6 text-sm min-h-[45px]">{plan.description}</p>
                  
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-muted text-base">{plan.interval === 'one-time' ? '' : plan.interval}</span>
                  </div>
                  
                  <a href={plan.link} className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} mb-8 w-full`}>
                    {plan.cta}
                  </a>
                  
                  <div className="flex flex-col gap-4">
                    <p className="font-semibold text-sm uppercase text-muted">What's Included</p>
                    {plan.features.map((feature: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-secondary shrink-0 mt-1" />
                        <span className="text-sm text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Available Add-ons */}
            <div className="mt-16 animate-fade-up">
              <h3 className="text-2xl font-bold mb-8 text-center">Available Add-ons</h3>
              <div className="grid grid-3 gap-4">
                {addOns.map((addon, idx) => (
                  <div key={idx} className="card p-4 flex justify-between items-center">
                    <span className="text-white">{addon.name}</span>
                    <span className="text-secondary font-semibold">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms & Policies */}
            <div className="mt-16 animate-fade-up">
              <h3 className="text-2xl font-bold mb-8 text-center">Terms & Policies</h3>
              <div className="grid grid-2 gap-6">
                {termsAndPolicies.map((term, idx) => (
                  <div key={idx} className="card p-6">
                    <h4 className="text-lg font-semibold mb-3 text-secondary">{term.category}</h4>
                    <p className="text-muted text-sm leading-relaxed">{term.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted text-lg">Pricing information for this category will be available soon.</p>
          </div>
        )}
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="animate-fade-up">Frequently Asked <span className="gradient-text-alt">Questions</span></h2>
          </div>
          
          <div className="grid grid-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="card animate-fade-up p-8" style={{ animationDelay: `${(idx % 4) * 0.1}s` }}>
                <h4 className="mb-3 text-xl">{faq.q}</h4>
                <p className="text-muted text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
