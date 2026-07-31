import React from 'react';
import { Sparkles } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="relative overflow-hidden" style={{ paddingTop: '140px', paddingBottom: '4rem', background: 'linear-gradient(180deg, rgba(212,120,44,0.06) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none" style={{ background: 'rgba(212,120,44,0.04)' }} />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full blur-[60px] pointer-events-none" style={{ background: 'rgba(61,122,108,0.03)' }} />

      <div className="container text-center relative z-10">
        <span className="inline-flex items-center gap-2 badge badge-primary mb-5 animate-fade-up">
          <Sparkles size={12} />
          <span>{title.split(' ')[0]}</span>
        </span>
        <h1 className="animate-fade-up delay-1">{title}</h1>
        <p className="text-muted animate-fade-up delay-2 max-w-xl mx-auto text-lg text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;