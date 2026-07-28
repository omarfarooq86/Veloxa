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
    <Link
      to={link}
      className={`group relative card animate-fade-up delay-${delay} overflow-hidden cursor-pointer`}
      style={{ height: '100%' }}
    >
      {/* Hover gradient accent */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Subtle top border accent */}
      <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div className="card-icon relative z-10">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 relative z-10 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted mb-6 relative z-10" style={{ flexGrow: 1, lineHeight: 1.65 }}>{description}</p>
      <div className="relative z-10 inline-flex items-center gap-2 text-primary font-semibold text-sm group/link">
        Learn More
        <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform duration-300" />
      </div>
    </Link>
  );
};

export default ServiceCard;
