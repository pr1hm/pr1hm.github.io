import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeader, ArrowRight } from './primitives';
import { BLOG_POSTS } from '../../data/blogs';

const ARTICLE_IMAGES: Record<string, string> = {
  'frameread-offline-ai-video-analysis-qwen2vl': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80',
  'openseal-fastapi-open-source-docusign-alternative': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=200&q=80',
  'conlatus-ai-proctored-technical-screening': 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=200&q=80',
  'netsol-android-embedded-nanohttpd-webserver': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&q=80',
};

export const Journal: React.FC = () => {
  return (
    <section id="journal" className="bg-[hsl(var(--bg))] py-12 md:py-16 border-t border-[hsl(var(--stroke))]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Journal"
          lead="Recent"
          accent="thoughts"
          subtext="Essays and technical notes on distributed systems, edge runtimes, and neural pipelines."
          viewAll={{ label: 'View all', href: '/blog' }}
          className="mb-8 md:mb-10"
        />

        <div className="flex flex-col gap-3">
          {BLOG_POSTS.slice(0, 4).map((entry, i) => (
            <motion.div
              key={entry.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link
                to={`/blog/${entry.slug}`}
                className="group flex items-center justify-between gap-4 rounded-full border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))]/40 px-4 py-3 sm:px-6 sm:py-3.5 transition-all duration-300 hover:border-white/20 hover:bg-[hsl(var(--surface))]"
              >
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <img
                    src={ARTICLE_IMAGES[entry.slug] || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=200&q=80'}
                    alt=""
                    loading="lazy"
                    className="size-9 sm:size-11 shrink-0 rounded-full object-cover filter brightness-90 grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="min-w-0">
                    <h3 className="truncate text-xs sm:text-sm font-medium text-[#f4f4f5] group-hover:text-white transition-colors">
                      {entry.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#a1a1aa] mt-0.5">
                      {entry.readTime} &bull; {entry.date}
                    </p>
                  </div>
                </div>

                <span className="flex size-7 sm:size-8 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--stroke))] text-[#a1a1aa] transition-all duration-300 group-hover:border-white/30 group-hover:text-white group-hover:bg-white/10 group-hover:translate-x-0.5">
                  <ArrowRight className="size-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
