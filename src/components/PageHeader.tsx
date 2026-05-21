import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="section" style={{ paddingTop: '120px', background: 'linear-gradient(to bottom, rgba(82, 39, 255, 0.1), var(--color-bg))' }}>
      <div className="container text-center">
        <h1 className="animate-fade-up">{title}</h1>
        <p className="text-muted animate-fade-up delay-1" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
