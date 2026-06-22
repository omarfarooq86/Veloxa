import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <div className={`card animate-fade-up delay-${delay}`} style={{ height: '100%' }}>
      <div className="card-icon">
        {icon}
      </div>
      <h3 style={{ fontSize: '1.5rem' }} className="mb-2">{title}</h3>
      <p className="text-muted mb-4" style={{ flexGrow: 1 }}>{description}</p>
      <Link to={link} className="text-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, marginTop: 'auto' }}>
        Learn More about {title} <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default ServiceCard;
