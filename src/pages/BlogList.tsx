import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, BookOpen, Search } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BentoCard } from '../components/BentoCard';
import { BLOG_POSTS } from '../data/blogs';

export const BlogList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'DevOps', 'Systems', 'AI/ML', 'Cloud'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://prthm.xyz/blog#blog',
    name: 'Pratham Solanki Technical Blog',
    description: 'Engineering articles covering DevOps, Kubernetes, Cloud Infrastructure, Android Embedded Systems, and AI/ML.',
    publisher: {
      '@type': 'Person',
      name: 'Pratham Solanki',
      url: 'https://prthm.xyz'
    },
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://prthm.xyz/blog/${post.slug}`,
      datePublished: post.date,
      description: post.excerpt,
      author: {
        '@type': 'Person',
        name: post.author
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Technical Blog | DevOps, Cloud & AI Systems - Pratham Solanki"
        description="Read in-depth engineering breakdowns on Kubernetes, Android embedded webservers (NanoHTTPD), Zero-Trust security, and multimodal AI by Pratham Solanki."
        canonicalUrl="https://prthm.xyz/blog"
        schemaData={blogSchema}
      />

      <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <header className="space-y-4 max-w-2xl border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-sky-400">
            <BookOpen size={14} />
            <span>Engineering Notes &amp; Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white font-display italic">
            Articles &amp; Architecture Writeups
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed">
            Written by <strong className="text-zinc-200">Pratham Solanki</strong>, a Software Developer specializing in DevOps, AI/ML, and Cloud Engineering. Practical deep dives into production systems, edge devices, and neural pipelines.
          </p>
        </header>

        {/* Filter & Search Bar */}
        <section aria-label="Article Filters" className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white/10 text-white border border-white/20 font-semibold'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search articles & tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-400 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all font-mono"
            />
          </div>
        </section>

        {/* Blog Post Grid */}
        <section aria-label="Articles Listing" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, idx) => (
              <article
                key={post.slug}
                className="flex flex-col h-full"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <BentoCard glow={idx % 2 === 0 ? 'cyan' : 'emerald'} className="h-full flex flex-col justify-between group">
                  <div className="space-y-4">
                    {/* Meta bar: Category & Read Time */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          <time itemProp="datePublished" dateTime={post.date}>
                            {post.date}
                          </time>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <Link to={`/blog/${post.slug}`} className="block group-hover:text-white transition-colors">
                      <h2 className="text-xl font-bold text-white tracking-tight leading-snug" itemProp="headline">
                        {post.title}
                      </h2>
                    </Link>

                    {/* 2-line Clamped Excerpt */}
                    <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed" itemProp="description">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer: Tags & Read Link */}
                  <div className="pt-6 mt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="badge-tag text-[10px]">
                          <Tag size={10} className="mr-1 text-zinc-400" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-mono font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      <span>Read article</span>
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </BentoCard>
              </article>
            ))
          ) : (
            <div className="col-span-full py-16 text-center space-y-3">
              <p className="text-sm font-mono text-zinc-400">No articles match your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-white hover:bg-white/10"
              >
                Reset filters
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
};
