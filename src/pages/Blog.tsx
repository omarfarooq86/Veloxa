import React, { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { ArrowRight, Sparkles } from 'lucide-react';
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
        <div className="inline-flex items-center gap-2 badge badge-primary mb-6 animate-fade-up">
          <Sparkles size={12} />
          <span>Featured</span>
        </div>
        <Link to={`/blog/${featuredPost.slug}`} className="card animate-fade-up block p-0 overflow-hidden flex flex-col mb-16 transition-colors group hover:border-primary/40">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="min-h-[350px] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                width="800"
                height="600"
              />
            </div>
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <p className="text-secondary mb-3 font-semibold text-xs uppercase tracking-wider">
                {featuredPost.category}
              </p>
              <h2 className="mb-4 text-3xl md:text-4xl">{featuredPost.title}</h2>
              <p className="text-muted mb-6 text-lg leading-relaxed text-pretty">{featuredPost.excerpt}</p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-[rgba(15,27,51,0.06)]">
                <div className="text-muted text-sm">
                  {featuredPost.date} &middot; {featuredPost.readTime}
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Standard Posts Grid */}
        <div className="inline-flex items-center gap-2 badge badge-surface mb-6">
          <span>Latest Articles</span>
        </div>
        <div className="grid grid-3">
          {standardPosts.map((post, idx) => (
            <Link to={`/blog/${post.slug}`} key={idx} className="card animate-fade-up block p-0 overflow-hidden flex flex-col group hover:border-primary/40" style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
              <div className="h-[220px] w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="400"
                  height="220"
                />
              </div>
              <div className="p-8 grow flex flex-col">
                <p className="badge badge-primary mb-3 w-fit text-xs">{post.category}</p>
                <h4 className="mb-3 text-xl">{post.title}</h4>
                <p className="text-muted mb-6 text-sm grow leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between border-t border-[rgba(15,27,51,0.06)] pt-5">
                  <div className="text-muted text-xs">{post.date}</div>
                  <div className="flex items-center text-text group-hover:text-primary transition-colors">
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container text-center">
          <div className="glass-strong max-w-3xl mx-auto p-12 rounded-2xl">
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Sparkles size={12} />
              <span>Stay Updated</span>
            </div>
            <h2 className="mb-3">Never Miss an Update</h2>
            <p className="text-muted mb-6 text-lg text-pretty">
              Subscribe to our newsletter for exclusive marketing insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                className="grow px-5 py-3.5 rounded-xl border border-[rgba(15,27,51,0.14)] bg-surface text-text outline-none focus:border-primary transition-colors"
                required
              />
              <button type="submit" className="btn btn-primary px-6 py-3.5">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
