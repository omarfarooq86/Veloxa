import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Camera, Briefcase, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="section footer-dark" style={{ background: 'var(--color-secondary)', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid grid-3 mb-4">
          <div>
            <Link to="/" className="logo text-primary mb-2" style={{ display: 'block' }}>
              Veloxa<span style={{ color: 'var(--color-accent)' }}>.</span>
            </Link>
            <p className="text-muted mb-2">
              We build super impressive digital experiences that drive growth, engagement, and results for modern brands.
            </p>
            <div className="display-flex" style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <a href="#" aria-label="X (Twitter)" title="X (Twitter)" className="flex items-center justify-center rounded-lg transition-all duration-300" style={{ width: '38px', height: '38px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.65)' }}><Send size={18} /></a>
              <a href="#" aria-label="Instagram" title="Instagram" className="flex items-center justify-center rounded-lg transition-all duration-300" style={{ width: '38px', height: '38px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.65)' }}><Camera size={18} /></a>
              <a href="#" aria-label="LinkedIn" title="LinkedIn" className="flex items-center justify-center rounded-lg transition-all duration-300" style={{ width: '38px', height: '38px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.65)' }}><Briefcase size={18} /></a>
              <a href="#" aria-label="Facebook" title="Facebook" className="flex items-center justify-center rounded-lg transition-all duration-300" style={{ width: '38px', height: '38px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.65)' }}><Users size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-2">Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/seo-services" className="text-muted" style={{ transition: 'color 0.3s' }}>SEO Services</Link></li>
              <li><Link to="/web-design" className="text-muted" style={{ transition: 'color 0.3s' }}>Web Design</Link></li>
              <li><Link to="/creative" className="text-muted" style={{ transition: 'color 0.3s' }}>Creative</Link></li>
              <li><Link to="/marketing" className="text-muted" style={{ transition: 'color 0.3s' }}>Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-2">Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/portfolio" className="text-muted" style={{ transition: 'color 0.3s' }}>Portfolio</Link></li>
              <li><Link to="/pricing" className="text-muted" style={{ transition: 'color 0.3s' }}>Pricing</Link></li>
              <li><Link to="/blog" className="text-muted" style={{ transition: 'color 0.3s' }}>Blog</Link></li>
              <li><Link to="/contact" className="text-muted" style={{ transition: 'color 0.3s' }}>Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem', textAlign: 'center' }}>
          <p className="text-muted">&copy; {new Date().getFullYear()} Veloxa Digital Marketing Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;