import React, { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

const Blog: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog | Veloxa';
  }, []);

  const featuredPost = blogPosts[0];
  const standardPosts = blogPosts.slice(1);

  return (
    <div>
      <PageHeader 
        title="Insights & Strategies" 
        description="The latest trends, guides, and strategic insights from the experts at Veloxa." 
      />

      <section className="section container">
        {/* Featured Post */}
        <Link to={`/blog/${featuredPost.slug}`} className="card animate-fade-up block p-0 overflow-hidden flex flex-col mb-16 hover:border-primary/50 transition-colors group">
          <div className="grid grid-2 gap-0">
            <div className="min-h-[350px] overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-12 flex flex-col justify-center">
              <p className="text-secondary mb-3 font-semibold text-sm uppercase tracking-wider">
                Featured • {featuredPost.category}
              </p>
              <h2 className="mb-4 text-4xl">{featuredPost.title}</h2>
              <p className="text-muted mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="text-muted text-sm">
                  {featuredPost.date} • {featuredPost.readTime}
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Read Article <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Standard Posts Grid */}
        <h3 className="mb-6">Latest Articles</h3>
        <div className="grid grid-3">
          {standardPosts.map((post, idx) => (
            <Link to={`/blog/${post.slug}`} key={idx} className="card animate-fade-up block p-0 overflow-hidden flex flex-col hover:border-primary/50 transition-colors group" style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
              <div className="h-[220px] w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 grow flex flex-col">
                <p className="text-primary mb-2 font-semibold text-xs uppercase tracking-wider">
                  {post.category}
                </p>
                <h4 className="mb-3 text-xl">{post.title}</h4>
                <p className="text-muted mb-6 text-sm grow">{post.excerpt}</p>
                
                <div className="flex items-center justify-between border-t border-white/5 pt-5">
                  <div className="text-muted text-xs">
                    {post.date}
                  </div>
                  <div className="flex items-center text-white group-hover:text-primary transition-colors">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container text-center">
          <div className="card glass max-w-3xl mx-auto p-12">
            <h2 className="mb-3">Never Miss an Update</h2>
            <p className="text-muted mb-6 text-lg">
              Subscribe to our newsletter for exclusive marketing insights delivered straight to your inbox.
            </p>
            <form className="flex gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="grow px-5 py-3 rounded-xl border border-white/10 bg-black/20 text-white outline-none focus:border-primary" 
              />
              <button type="button" className="btn btn-primary px-6 py-3">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
