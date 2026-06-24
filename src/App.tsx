import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import SEOServices from './pages/SEOServices';
import WebDesign from './pages/WebDesign';
import Creative from './pages/Creative';
import Marketing from './pages/Marketing';
import Portfolio from './pages/Portfolio';
import CaseStudy from './pages/CaseStudy';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Lahore from './pages/Lahore';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lahore" element={<Lahore />} />
            <Route path="/seo-services" element={<SEOServices />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<CaseStudy />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <SpeedInsights />
      </div>
    </Router>
  );
};

export default App;
