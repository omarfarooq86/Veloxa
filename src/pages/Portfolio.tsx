import React, { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { ExternalLink } from 'lucide-react';

import { Link } from 'react-router-dom';
import { portfolioProjects } from '@/data/portfolioProjects';

const Portfolio: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Portfolio | Veloxa';
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

      <section className="section glass mx-6 my-8 mb-16 rounded-3xl">
        <div className="container text-center">
          <h2 className="animate-fade-up mb-4">Want Your Project Featured Here?</h2>
          <p className="text-muted animate-fade-up delay-1 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Partner with Veloxa to elevate your brand and achieve measurable digital growth.
          </p>
          <a href="/contact" className="btn btn-primary animate-fade-up delay-2">
            Let's Discuss Your Vision
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
