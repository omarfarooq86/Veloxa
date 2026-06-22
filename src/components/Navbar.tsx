import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'SEO Services', path: '/seo-services' },
    { name: 'Web Design', path: '/web-design' },
    { name: 'Creative', path: '/creative' },
    { name: 'Marketing', path: '/marketing' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo group">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Zap className="text-primary size-8 group-hover:animate-pulse transition-all duration-300" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300" />
            </div>
            <span className="text-3xl font-extrabold tracking-tight">
              <span className="text-primary group-hover:text-primary/80 transition-colors duration-300">Veloxa</span>
              <span className="text-secondary group-hover:text-secondary/80 transition-colors duration-300">.</span>
            </span>
          </div>
        </Link>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
