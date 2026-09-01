import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  delay?: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, featured = false, delay }) => {
  return (
    <Link tabIndex={0}
      to={link}
      className="group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: featured ? '1.5rem' : '1.25rem',
        padding: featured ? '2rem' : '1.5rem',
        borderRadius: 'var(--border-radius-lg)',
        background: featured
          ? 'linear-gradient(135deg, rgba(212,120,44,0.03), transparent)'
          : 'var(--color-bg)',
        border: `1px solid ${featured ? 'rgba(212,120,44,0.25)' : 'var(--color-border)'}`,
        transition: 'transform 0.35s var(--ease-out-expo), border-color 0.3s ease, box-shadow 0.3s ease',
    ...(delay !== undefined ? { transitionDelay: `${delay}ms` } : {}),
        ...(featured ? { gridColumn: '1 / -1' } : {}),
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-primary)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = featured ? 'rgba(212,120,44,0.25)' : 'var(--color-border)';
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{
          width: featured ? '56px' : '44px',
          height: featured ? '56px' : '44px',
          background: 'linear-gradient(135deg, rgba(212,120,44,0.08), rgba(212,120,44,0.03))',
          color: 'var(--color-primary)',
        }}
      >
        {icon}
      </div>

      {/* Text content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3
          className="font-bold mb-1 transition-colors duration-300"
          style={{
            fontSize: featured ? '1.35rem' : '1.1rem',
            color: 'var(--color-text)',
          }}
        >
          {title}
        </h3>
        <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>
          {description}
        </p>
        {featured && (
          <div className="inline-flex items-center gap-1.5 mt-2 font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>
            Learn More
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        )}
      </div>

      {!featured && (
        <div className="flex-shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ color: 'var(--color-primary)' }}>
          <ArrowRight size={16} />
        </div>
      )}
    </Link>
  );
};

export default ServiceCard;
