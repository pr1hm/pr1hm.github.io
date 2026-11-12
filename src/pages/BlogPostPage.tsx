import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Tag, 
  Share2, 
  Check, 
  Terminal, 
  BookOpen 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BLOG_POSTS } from '../data/blogs';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = React.useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://prthm.xyz/blog/${post.slug}`
    },
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Pratham Solanki',
      jobTitle: 'Software Developer specializing in DevOps, AI/ML, and Cloud Engineering',
      url: 'https://prthm.xyz'
    },
    publisher: {
      '@type': 'Person',
      name: 'Pratham Solanki',
      url: 'https://prthm.xyz'
    },
    keywords: post.tags.join(', ')
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | Pratham Solanki`}
        description={post.excerpt}
        canonicalUrl={`https://prthm.xyz/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
        tags={post.tags}
        schemaData={articleSchema}
      />

      <article className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        {/* Navigation & Back Action */}
        <div className="flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors p-2 -ml-2 rounded-lg hover:bg-white/5"
            aria-label="Back to all articles"
          >
            <ArrowLeft size={14} />
            <span>Back to articles</span>
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
            aria-label="Copy article link"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Share2 size={13} />}
            <span>{copied ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>

        {/* Article Header */}
        <header className="space-y-5 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300 font-mono text-[11px]">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={13} />
              <time dateTime={post.date}>{post.date}</time>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight font-display italic">
            {post.title}
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Author Badge for Entity Recognition */}
          <div className="flex items-center gap-3 pt-4">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white font-mono font-medium text-xs">
              PS
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Pratham Solanki</p>
              <p className="text-xs font-mono text-zinc-400">
                Software Developer &bull; DevOps, AI/ML &amp; Cloud
              </p>
            </div>
          </div>
        </header>

        {/* Article Body Styled with @tailwindcss/typography */}
        <div className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white prose-a:text-white prose-a:underline hover:prose-a:text-zinc-300 prose-code:text-zinc-200 prose-code:font-mono prose-pre:bg-[hsl(var(--surface))] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl">
          {post.content.split('\n\n').map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl mt-8 mb-4">
                  {trimmed.replace('## ', '')}
                </h2>
              );
            }
            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl mt-6 mb-3">
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }
            if (trimmed.startsWith('```')) {
              const lines = trimmed.split('\n');
              const language = lines[0].replace('```', '') || 'text';
              const code = lines.slice(1, -1).join('\n');
              return (
                <div key={index} className="my-6 rounded-xl overflow-hidden border border-white/10 bg-obsidian-200/90">
                  <div className="px-4 py-2 border-b border-white/5 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Terminal size={12} className="text-sky-400" />
                      <span>{language}</span>
                    </span>
                  </div>
                  <pre className="p-4 text-xs font-mono overflow-x-auto text-zinc-200 m-0 bg-transparent">
                    <code>{code}</code>
                  </pre>
                </div>
              );
            }
            if (trimmed.startsWith('1. ') || trimmed.startsWith('- ')) {
              const items = trimmed.split('\n').filter((l) => l.trim().length > 0);
              return (
                <ul key={index} className="space-y-2 list-disc list-inside my-4 text-zinc-300 text-sm leading-relaxed">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item.replace(/^(\d+\.\s+|- )/, '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-zinc-300 text-sm sm:text-base leading-relaxed my-4">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Tags Footer */}
        <footer className="pt-8 mt-12 border-t border-white/10 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-400 mr-2">Filed under:</span>
            {post.tags.map((tag) => (
              <span key={tag} className="badge-tag text-xs">
                <Tag size={11} className="mr-1 text-zinc-400" />
                {tag}
              </span>
            ))}
          </div>

          {/* Author Callout Box */}
          <div className="p-6 rounded-2xl bg-surface/60 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">About the Author</h4>
              <p className="text-xs text-zinc-400 max-w-lg leading-relaxed">
                Pratham Solanki is a Software Developer specializing in DevOps, AI/ML, and Cloud Engineering. Feel free to explore related codebases or reach out for inquiries.
              </p>
            </div>
            <Link
              to="/blog"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-white transition-colors shrink-0 inline-flex items-center gap-1.5"
            >
              <BookOpen size={13} />
              <span>More Articles</span>
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
};

