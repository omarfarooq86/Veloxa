import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

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

export const AppShell: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <Analytics />
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {/* Keyed by path so each navigation plays an entrance. Navbar/ChatWidget
            stay outside this transformed wrapper to preserve fixed positioning. */}
        <div key={pathname} className="route-transition">
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
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppShell />
    </Router>
  );
};

export default App;
