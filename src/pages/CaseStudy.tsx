import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react';
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
        <Link to="/portfolio" className="btn btn-primary cursor-target">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="container mb-16">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-12 font-medium cursor-target">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
        
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-muted font-medium">Client: <span className="text-[#0f1b33]">{project.client}</span></span>
            <span className="text-muted font-medium">Timeline: <span className="text-[#0f1b33]">{project.timeline}</span></span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>
      </div>

      {/* Main Cover Image */}
      <div className="container mb-20">
        <div className="w-full h-[60vh] min-h-[500px] rounded-3xl overflow-hidden border border-[rgba(15,27,51,0.08)] shadow-2xl">
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
          
          {/* Left Column: Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold mb-6 gradient-text-alt">The Challenge</h2>
              <p className="text-muted leading-relaxed mb-12 text-lg">
                {project.challenge}
              </p>

              {/* First Content Image */}
              <div className="rounded-2xl overflow-hidden mb-12 border border-[rgba(15,27,51,0.08)] shadow-2xl">
                <img 
                  src={project.contentImages[0]} 
                  alt="Project Detail 1" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 gradient-text-alt">Our Solution</h2>
              <p className="text-muted leading-relaxed mb-12 text-lg">
                {project.solution}
              </p>

              {/* Second Content Image */}
              <div className="rounded-2xl overflow-hidden mb-12 border border-[rgba(15,27,51,0.08)] shadow-2xl">
                <img 
                  src={project.contentImages[1]} 
                  alt="Project Detail 2" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 gradient-text-alt">The Impact</h2>
              <p className="text-muted leading-relaxed text-lg">
                {project.impact}
              </p>
              
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 flex flex-col gap-8">
              
              {/* Metrics Card */}
              <div className="card glass p-8">
                <h3 className="text-xl font-bold mb-6 border-b border-[rgba(15,27,51,0.1)] pb-4">Key Results</h3>
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
              <div className="card glass p-8">
                <h3 className="text-xl font-bold mb-6 border-b border-[rgba(15,27,51,0.1)] pb-4">Services Provided</h3>
                <ul className="flex flex-col gap-4">
                  {project.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                      <span className="text-[#0f1b33] font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-4">
                <p className="text-muted mb-4 font-medium">Ready to achieve similar results?</p>
                <Link to="/contact" className="btn btn-primary w-full cursor-target">
                  Start Your Project
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Other Projects Section */}
      <div className="container mt-24 pt-16 border-t border-[rgba(15,27,51,0.08)]">
        <h2 className="text-3xl font-bold mb-10 text-center">More Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProjects.map((p, idx) => (
            <Link to={`/portfolio/${p.slug}`} key={idx} className="card animate-fade-up block p-0 overflow-hidden flex flex-col group cursor-target hover:border-primary/50" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <p className="text-primary mb-2 font-semibold text-xs uppercase tracking-wider">
                  {p.category}
                </p>
                <h3 className="mb-3 text-xl">{p.title}</h3>
                <div className="flex items-center gap-2 text-secondary font-medium group-hover:text-primary transition-colors mt-auto text-sm">
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
