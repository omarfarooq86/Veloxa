import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUp, ChevronRight, Sparkles } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = useMemo(() => blogPosts.find(p => p.slug === slug), [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Veloxa Blog`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute('content', post.excerpt);
      else { const meta = document.createElement('meta'); meta.name = 'description'; meta.content = post.excerpt; document.head.appendChild(meta); }
      const canonical = document.querySelector('link[rel="canonical"]');
      const canonicalUrl = `https://veloxa.com/blog/${post.slug}`;
      if (canonical) canonical.setAttribute('href', canonicalUrl);
      else { const link = document.createElement('link'); link.rel = 'canonical'; link.href = canonicalUrl; document.head.appendChild(link); }
      const updateOG = (p: string, c: string) => {
        const og = document.querySelector(`meta[property="${p}"]`) || document.querySelector(`meta[name="${p}"]`);
        if (og) og.setAttribute('content', c);
        else { const m = document.createElement('meta'); m.setAttribute('property', p); m.content = c; document.head.appendChild(m); }
      };
      updateOG('og:title', post.title); updateOG('og:description', post.excerpt); updateOG('og:image', post.image);
      updateOG('og:url', canonicalUrl); updateOG('og:type', 'article');
      const updateTwitter = (n: string, c: string) => {
        const t = document.querySelector(`meta[name="${n}"]`);
        if (t) t.setAttribute('content', c);
        else { const m = document.createElement('meta'); m.name = n; m.content = c; document.head.appendChild(m); }
      };
      updateTwitter('twitter:card', 'summary_large_image');
      updateTwitter('twitter:title', post.title); updateTwitter('twitter:description', post.excerpt); updateTwitter('twitter:image', post.image);
    } else {
      document.title = 'Post Not Found | Veloxa';
    }
  }, [post]);

  if (!post) {
    return (
      <div className="section container min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted text-lg mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
      </div>
    );
  }

  const extractHeadings = (content: string) => {
    const lines = content.split('\n');
    return lines.filter(line => line.trim().startsWith('## ')).map(line => ({ text: line.replace('## ', '').trim(), id: line.replace('## ', '').trim().toLowerCase().replace(/\s+/g, '-') }));
  };

  const headings = useMemo(() => post ? extractHeadings(post.content) : [], [post]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return null;
      const imageMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imageMatch) {
        return <img key={idx} src={imageMatch[2]} alt={imageMatch[1]} loading="lazy" width="1200" height="630" className="w-full h-auto rounded-xl my-10 border border-[rgba(15,27,51,0.06)] shadow-card object-cover" />;
      }
      if (trimmed.startsWith('### ')) {
        const text = trimmed.replace('### ', '');
        return <h3 key={idx} className="text-2xl font-bold mt-10 mb-4" id={text.toLowerCase().replace(/\s+/g, '-')}>{text}</h3>;
      }
      if (trimmed.startsWith('## ')) {
        const text = trimmed.replace('## ', '');
        return <h2 key={idx} className="text-3xl font-bold mt-12 mb-6 gradient-text-alt" id={text.toLowerCase().replace(/\s+/g, '-')}>{text}</h2>;
      }
      if (trimmed.startsWith('* ')) {
        const text = trimmed.replace('* ', '');
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return <li key={idx} className="text-muted text-lg leading-relaxed mb-3 ml-6 list-disc">{parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="text-text">{part}</strong> : part))}</li>;
      }
      if (trimmed.match(/^\d+\.\s/)) {
        const text = trimmed.replace(/^\d+\.\s/, '');
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return <li key={idx} className="text-muted text-lg leading-relaxed mb-4 ml-6 list-decimal">{parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="text-text">{part}</strong> : part))}</li>;
      }
      return <p key={idx} className="text-muted text-lg leading-relaxed mb-6">{trimmed}</p>;
    });
  };

  // Schema generation
  useEffect(() => {
    if (!post) return;
    const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.excerpt, image: post.image, author: { '@type': 'Organization', name: 'Veloxa Editorial Team', url: 'https://veloxa.com' }, publisher: { '@type': 'Organization', name: 'Veloxa', logo: { '@type': 'ImageObject', url: 'https://veloxa.com/logo.png' } }, datePublished: post.date, dateModified: post.date, mainEntityOfPage: { '@type': 'WebPage', '@id': `https://veloxa.com/blog/${post.slug}` } };
    const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://veloxa.com' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://veloxa.com/blog' }, { '@type': 'ListItem', position: 3, name: post.title, item: `https://veloxa.com/blog/${post.slug}` }] };
    const schemas: any[] = [articleSchema, breadcrumbSchema];
    const faqSection = post.content.match(/## Frequently Asked Questions([\s\S]*?)(?=##|$)/);
    if (faqSection) {
      const faqItems = faqSection[1].match(/### ([^\n]+)\n([\s\S]*?)(?=###|$)/g);
      if (faqItems) {
        const questions = faqItems.map(item => { const m = item.match(/### ([^\n]+)\n([\s\S]*)/); return m ? { '@type': 'Question', name: m[1], acceptedAnswer: { '@type': 'Answer', text: m[2].trim() } } : null; }).filter(Boolean);
        schemas.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: questions });
      }
    }
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());
    schemas.forEach(schemaData => { const s = document.createElement('script'); s.type = 'application/ld+json'; s.text = JSON.stringify(schemaData); document.head.appendChild(s); });
  }, [post]);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" width="1200" height="630" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1226] via-[#0a1226]/70 to-transparent z-10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-end container pb-12">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">{post.title}</span>
          </nav>
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 w-fit font-medium group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to all articles
          </Link>
          <div className="max-w-4xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              {post.category} &middot; {post.date} &middot; {post.readTime}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              {post.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl leading-relaxed text-pretty">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article className="container mt-12">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-[1fr,280px] gap-8">
          {/* Main Content */}
          <div className="card p-8 md:p-12 lg:p-16">
            {headings.length > 3 && (
              <div className="mb-10 p-6 bg-surface rounded-xl border border-[rgba(15,27,51,0.06)]">
                <h3 className="text-lg font-bold mb-4 text-text">Table of Contents</h3>
                <ul className="space-y-2">
                  {headings.map((heading, idx) => (
                    <li key={idx}>
                      <button onClick={() => scrollToHeading(heading.id)} className="text-left text-muted hover:text-primary transition-colors text-sm flex items-center gap-2">
                        <ChevronRight size={14} /> {heading.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="prose prose-lg max-w-none">{renderContent(post.content)}</div>

            {/* Author Section */}
            <div className="mt-16 pt-8 border-t border-[rgba(15,27,51,0.08)]">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl flex-shrink-0">V</div>
                <div>
                  <p className="font-bold text-text text-lg">Veloxa Editorial Team</p>
                  <p className="text-muted text-sm mb-3">Digital Marketing Experts</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Our team of digital marketing specialists brings together decades of experience in SEO, PPC, content strategy, and web development. We're dedicated to helping businesses grow through data-driven marketing strategies that deliver measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block space-y-6">
            <div className="card p-6">
              <h3 className="font-bold text-text mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/seo-services" className="text-muted hover:text-primary transition-colors text-sm">SEO Services</Link></li>
                <li><Link to="/web-design" className="text-muted hover:text-primary transition-colors text-sm">Web Design</Link></li>
                <li><Link to="/marketing" className="text-muted hover:text-primary transition-colors text-sm">Marketing</Link></li>
                <li><Link to="/contact" className="text-muted hover:text-primary transition-colors text-sm">Get a Free Consultation</Link></li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-text mb-4">Published</h3>
              <p className="text-muted text-sm">{post.date}</p>
              <p className="text-muted text-sm mt-2">Last updated: {post.date}</p>
            </div>
          </aside>
        </div>
      </article>

      {/* Back to Top */}
      {showBackToTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-elevated flex items-center justify-center hover:bg-primary/90 transition-colors z-50" aria-label="Back to top">
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default BlogPost;
