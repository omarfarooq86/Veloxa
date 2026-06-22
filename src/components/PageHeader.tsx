import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="section" style={{ paddingTop: '140px', paddingBottom: '4rem', background: 'linear-gradient(180deg, #eaf1ff 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container text-center">
        <h1 className="animate-fade-up">{title}</h1>
        <p className="text-muted animate-fade-up delay-1" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.2rem' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
