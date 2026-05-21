import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = useMemo(() => blogPosts.find(p => p.slug === slug), [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Veloxa Blog`;
    } else {
      document.title = 'Post Not Found | Veloxa';
    }
  }, [post]);

  if (!post) {
    return (
      <div className="section container min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted text-lg mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="btn btn-primary">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Parse very simple markdown for rendering
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return null;
      
      if (trimmed.startsWith('### ')) {
        return <h3 key={idx} className="text-2xl font-bold mt-10 mb-4">{trimmed.replace('### ', '')}</h3>;
      }
      if (trimmed.startsWith('## ')) {
        return <h2 key={idx} className="text-3xl font-bold mt-12 mb-6 gradient-text-alt">{trimmed.replace('## ', '')}</h2>;
      }
      if (trimmed.startsWith('* ')) {
        // Parse bold text within the list item
        const text = trimmed.replace('* ', '');
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return (
          <li key={idx} className="text-muted text-lg leading-relaxed mb-3 ml-6 list-disc">
            {parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part))}
          </li>
        );
      }
      if (trimmed.match(/^\d+\.\s/)) {
        // Parse ordered list items and bold text
        const text = trimmed.replace(/^\d+\.\s/, '');
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return (
          <li key={idx} className="text-muted text-lg leading-relaxed mb-4 ml-6 list-decimal">
            {parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part))}
          </li>
        );
      }
      
      return <p key={idx} className="text-muted text-lg leading-relaxed mb-6">{trimmed}</p>;
    });
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end container pb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8 w-fit font-medium">
            <ArrowLeft size={18} /> Back to all articles
          </Link>
          <div className="max-w-4xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              {post.category} • {post.date} • {post.readTime}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article className="container mt-12">
        <div className="max-w-3xl mx-auto card glass p-8 md:p-12 lg:p-16">
          <div className="prose prose-invert prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                V
              </div>
              <div>
                <p className="font-semibold text-white">Veloxa Editorial Team</p>
                <p className="text-muted text-sm">Digital Marketing Experts</p>
              </div>
            </div>
            <Link to="/contact" className="btn btn-outline">
              Discuss this topic with us
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
