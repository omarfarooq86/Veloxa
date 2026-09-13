import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioProjects } from '@/data/portfolioProjects';

import { MetaRobots } from '@/components/MetaRobots';

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = useMemo(() => portfolioProjects.find(p => p.slug === slug), [slug]);
  const otherProjects = useMemo(() => portfolioProjects.filter(p => p.slug !== slug).slice(0, 3), [slug]);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} Case Study | Veloxa`;
      window.scrollTo(0, 0);
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute('content', project.description);
      else { const meta = document.createElement('meta'); meta.name = 'description'; meta.content = project.description; document.head.appendChild(meta); }
      const canonical = document.querySelector('link[rel="canonical"]');
      const canonicalUrl = `https://veloxa.com/portfolio/${project.slug}`;
      if (canonical) canonical.setAttribute('href', canonicalUrl);
      else { const link = document.createElement('link'); link.rel = 'canonical'; link.href = canonicalUrl; document.head.appendChild(link); }
      // Social scrapers require absolute image URLs; local assets ship as root-relative paths.
      const absoluteImage = project.image.startsWith('http') ? project.image : `https://veloxa.com${project.image}`;
      const updateOG = (p: string, c: string) => {
        const og = document.querySelector(`meta[property="${p}"]`) || document.querySelector(`meta[name="${p}"]`);
        if (og) og.setAttribute('content', c);
        else { const m = document.createElement('meta'); m.setAttribute('property', p); m.content = c; document.head.appendChild(m); }
      };
      updateOG('og:title', project.title); updateOG('og:description', project.description); updateOG('og:image', absoluteImage);
      updateOG('og:url', canonicalUrl); updateOG('og:type', 'article');
      const updateTwitter = (n: string, c: string) => {
        const t = document.querySelector(`meta[name="${n}"]`);
        if (t) t.setAttribute('content', c);
        else { const m = document.createElement('meta'); m.name = n; m.content = c; document.head.appendChild(m); }
      };
      updateTwitter('twitter:card', 'summary_large_image');
      updateTwitter('twitter:title', project.title); updateTwitter('twitter:description', project.description); updateTwitter('twitter:image', absoluteImage);
      const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: project.title, description: project.description, image: absoluteImage, author: { '@type': 'Organization', name: 'Veloxa', url: 'https://veloxa.com' }, publisher: { '@type': 'Organization', name: 'Veloxa', logo: { '@type': 'ImageObject', url: 'https://veloxa.com/logo.png' } }, mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl } };
      const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://veloxa.com' }, { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://veloxa.com/portfolio' }, { '@type': 'ListItem', position: 3, name: project.title, item: canonicalUrl }] };
      const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
      existingSchemas.forEach(schema => schema.remove());
      [articleSchema, breadcrumbSchema].forEach(schemaData => { const s = document.createElement('script'); s.type = 'application/ld+json'; s.text = JSON.stringify(schemaData); document.head.appendChild(s); });
    } else {
      document.title = 'Project Not Found | Veloxa';
    }
  }, [project]);

  if (!project) {
    return (
      <div className="section container min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted text-lg mb-8">The case study you're looking for doesn't exist.</p>
        <Link to="/portfolio" className="btn btn-primary cursor-target">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16"><MetaRobots />
      {/* Hero Section */}
      <div className="container mb-16">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-12 font-medium cursor-target group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
        </Link>

        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="badge badge-primary">{project.category}</span>
            <span className="text-muted text-sm font-medium">Client: <span className="text-text">{project.client}</span></span>
            <span className="text-muted text-sm font-medium">Timeline: <span className="text-text">{project.timeline}</span></span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl text-pretty">
            {project.description}
          </p>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary cursor-target inline-flex items-center gap-2 mt-8"
            >
              Visit Live Website <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Main Cover Image */}
      <div className="container mb-20">
        <div className="w-full h-[60vh] min-h-[500px] rounded-2xl overflow-hidden border border-[rgba(15,27,51,0.08)] shadow-elevated">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
            width="1200"
            height="800"
          />
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">

              <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
                <span>Challenge</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 gradient-text-alt">The Challenge</h2>
              <p className="text-muted leading-relaxed mb-12 text-lg">
                {project.challenge}
              </p>

              <div className="rounded-xl overflow-hidden mb-12 border border-[rgba(15,27,51,0.08)] shadow-card">
                <img
                  src={project.contentImages[0]}
                  alt="Project Detail 1"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>

              <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
                <span>Solution</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 gradient-text-alt">Our Solution</h2>
              <p className="text-muted leading-relaxed mb-12 text-lg">
                {project.solution}
              </p>

              <div className="rounded-xl overflow-hidden mb-12 border border-[rgba(15,27,51,0.08)] shadow-card">
                <img
                  src={project.contentImages[1]}
                  alt="Project Detail 2"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>

              <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
                <span>Results</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 gradient-text-alt">The Impact</h2>
              <p className="text-muted leading-relaxed text-lg">
                {project.impact}
              </p>

            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 flex flex-col gap-8">

              {/* Metrics Card */}
              <div className="glass-strong p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-[rgba(15,27,51,0.08)]">Key Results</h3>
                <div className="flex flex-col gap-6">
                  {project.results.map((result, idx) => (
                    <div key={idx}>
                      <div className="text-4xl font-black text-secondary tracking-tighter mb-1">{result.metric}</div>
                      <div className="text-sm font-semibold text-muted uppercase tracking-wider">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Card */}
              <div className="glass-strong p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-[rgba(15,27,51,0.08)]">Services Provided</h3>
                <ul className="flex flex-col gap-4">
                  {project.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                      <span className="text-text font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-6 rounded-2xl bg-surface border border-[rgba(15,27,51,0.06)]">
                <p className="text-muted mb-4 font-medium">Ready to achieve similar results?</p>
                <Link to="/contact" className="btn btn-primary w-full cursor-target">
                  Start Your Project <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Key Takeaways */}
          <section className="section container mt-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text-alt">Key Takeaways</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li>Clear ROI metrics were defined early, driving measurable results.</li>
              <li>Strategic design and development aligned with business goals.</li>
              <li>Data‑driven optimisation ensured sustained growth.</li>
            </ul>
          </section>

          {/* Other Projects */}
      <div className="container mt-24 pt-16 border-t border-[rgba(15,27,51,0.08)]">
        <div className="inline-flex items-center gap-2 badge badge-surface mb-6">
          <span>More Success Stories</span>
        </div>
        <h2 className="text-3xl font-bold mb-10">More Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProjects.map((p, idx) => (
            <Link to={`/portfolio/${p.slug}`} key={idx} className="card animate-fade-up block p-0 overflow-hidden flex flex-col group cursor-target" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="h-48 w-full relative overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col grow">
                <p className="badge badge-primary mb-3 w-fit text-xs">{p.category}</p>
                <h3 className="mb-3 text-xl">{p.title}</h3>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:text-primary-dark transition-colors mt-auto text-sm">
                  <span>Read Case Study</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
