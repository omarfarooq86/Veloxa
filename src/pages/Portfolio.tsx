import React, { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { ExternalLink } from 'lucide-react';

import { Link } from 'react-router-dom';
import { portfolioProjects } from '@/data/portfolioProjects';

const Portfolio: React.FC = () => {
  useEffect(() => {
    // Title tag
    document.title = 'Our Portfolio | Veloxa';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Explore our portfolio of successful digital marketing, SEO, web design, and branding projects. See how we help businesses grow and scale their revenue.';
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
    const canonicalUrl = 'https://veloxa.com/portfolio';
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
    
    updateOG('og:title', 'Our Portfolio | Veloxa');
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
    updateTwitter('twitter:title', 'Our Portfolio | Veloxa');
    updateTwitter('twitter:description', description);
    
    // Collection schema for portfolio
    const collectionSchema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Veloxa Portfolio',
      description: description,
      url: canonicalUrl,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: portfolioProjects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            image: project.image,
            url: `https://veloxa.com/portfolio/${project.slug}`
          }
        }))
      }
    };
    
    // Remove existing schema
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());
    
    // Add new schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(collectionSchema);
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <PageHeader 
        title="Our Work" 
        description="Discover how we've helped forward-thinking brands transform their digital presence and scale their revenue." 
      />

      <section className="section container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, idx) => (
            <Link to={`/portfolio/${project.slug}`} key={idx} className="card animate-fade-up block p-0 overflow-hidden flex flex-col group cursor-target hover:border-primary/50" style={{ animationDelay: `${(idx % 3) * 0.1}s` }}>
              <div className="h-60 w-full relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="240"
                />
              </div>
              <div className="p-8 flex flex-col grow">
                <p className="text-primary mb-2 font-semibold text-sm uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="mb-3 text-2xl">{project.title}</h3>
                <p className="text-muted mb-6 text-sm grow">{project.description}</p>
                <div className="flex items-center gap-2 text-secondary font-medium group-hover:text-primary transition-colors mt-auto">
                  <span>Read Case Study</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section cta-dark mx-6 my-8 mb-16 rounded-3xl">
        <div className="container text-center">
          <h2 className="animate-fade-up mb-4">Want Your Project Featured Here?</h2>
          <p className="text-muted animate-fade-up delay-1 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Partner with Veloxa to elevate your brand and achieve measurable digital growth.
          </p>
          <Link to="/contact" className="btn btn-primary animate-fade-up delay-2">
            Let's Discuss Your Vision
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
