import React, { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioProjects } from '@/data/portfolioProjects';

const Portfolio: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Portfolio | Veloxa';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Explore our portfolio of successful digital marketing, SEO, web design, and branding projects. See how we help businesses grow and scale their revenue.';
    if (metaDescription) metaDescription.setAttribute('content', description);
    else { const meta = document.createElement('meta'); meta.name = 'description'; meta.content = description; document.head.appendChild(meta); }
    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = 'https://veloxa.com/portfolio';
    if (canonical) canonical.setAttribute('href', canonicalUrl);
    else { const link = document.createElement('link'); link.rel = 'canonical'; link.href = canonicalUrl; document.head.appendChild(link); }
    const updateOG = (p: string, c: string) => {
      const og = document.querySelector(`meta[property="${p}"]`) || document.querySelector(`meta[name="${p}"]`);
      if (og) og.setAttribute('content', c);
      else { const m = document.createElement('meta'); m.setAttribute('property', p); m.content = c; document.head.appendChild(m); }
    };
    updateOG('og:title', 'Our Portfolio | Veloxa');
    updateOG('og:description', description); updateOG('og:url', canonicalUrl); updateOG('og:type', 'website');
    const updateTwitter = (n: string, c: string) => {
      const t = document.querySelector(`meta[name="${n}"]`);
      if (t) t.setAttribute('content', c);
      else { const m = document.createElement('meta'); m.name = n; m.content = c; document.head.appendChild(m); }
    };
    updateTwitter('twitter:card', 'summary_large_image');
    updateTwitter('twitter:title', 'Our Portfolio | Veloxa');
    updateTwitter('twitter:description', description);
    const collectionSchema = {
      '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Veloxa Portfolio', description, url: canonicalUrl,
      mainEntity: { '@type': 'ItemList', itemListElement: portfolioProjects.map((project, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'CreativeWork', name: project.title, description: project.description, image: project.image, url: `https://veloxa.com/portfolio/${project.slug}` } })) }
    };
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());
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
            <Link to={`/portfolio/${project.slug}`} key={idx} className="card animate-fade-up block p-0 overflow-hidden flex flex-col group cursor-target" style={{ animationDelay: `${(idx % 3) * 0.1}s` }}>
              <div className="h-60 w-full relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="240"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 flex flex-col grow">
                <p className="badge badge-primary mb-3 w-fit text-xs">
                  {project.category}
                </p>
                <h3 className="mb-3 text-2xl">{project.title}</h3>
                <p className="text-muted mb-6 text-sm grow leading-relaxed">{project.description}</p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:text-primary-dark transition-colors mt-auto text-sm">
                  <span>Read Case Study</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section cta-dark mx-6 my-8 mb-16 rounded-3xl relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#1e4aff]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#059669]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container text-center relative z-10">
          <div className="inline-flex items-center gap-2 badge bg-white/10 text-white border-white/10 mb-6">
            <span>Partner With Us</span>
          </div>
          <h2 className="animate-fade-up mb-4 text-white">Want Your Project Featured Here?</h2>
          <p className="text-white/60 animate-fade-up delay-1 mb-8 max-w-2xl mx-auto text-lg leading-relaxed text-pretty">
            Partner with Veloxa to elevate your brand and achieve measurable digital growth.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-navy font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 shadow-lg animate-fade-up delay-2">
            Let's Discuss Your Vision <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
