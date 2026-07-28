import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioProjects } from '@/data/portfolioProjects';

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = useMemo(() => portfolioProjects.find(p => p.slug === slug), [slug]);
  const otherProjects = useMemo(() => portfolioProjects.filter(p => p.slug !== slug).slice(0, 3), [slug]);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} Case Study | Veloxa`;
      window.scrollTo(0, 0);
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
    <div className="pt-24 pb-16">
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
