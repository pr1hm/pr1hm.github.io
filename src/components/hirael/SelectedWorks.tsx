import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { SectionHeader, ArrowUpRight } from './primitives';

interface ProjectDisplay {
  id: string;
  title: string;
  category: string;
  image: string;
  url: string;
  span: string;
}

const FEATURED_WORKS: ProjectDisplay[] = [
  {
    id: 'frameread',
    title: 'FrameRead',
    category: 'Video Intelligence',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    url: 'https://github.com/pr1hm/FrameRead',
    span: 'md:col-span-7',
  },
  {
    id: 'openseal',
    title: 'OpenSeal',
    category: 'Document Signing',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    url: 'https://openseal.prthm.xyz',
    span: 'md:col-span-5',
  },
  {
    id: 'conlatus-ai',
    title: 'Conlatus AI',
    category: 'AI Proctoring',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
    url: 'https://github.com/conlatus/conlatus',
    span: 'md:col-span-5',
  },
  {
    id: 'bestfurniture-store',
    title: 'Best Furniture & Jeet Furniture',
    category: 'Commercial Web',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    url: 'https://bestfurniture.store',
    span: 'md:col-span-7',
  },
];

const HALFTONE = {
  backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.8) 1px, transparent 1px)',
  backgroundSize: '4px 4px',
};

export const SelectedWorks: React.FC = () => {
  return (
    <section id="work" className="bg-[hsl(var(--bg))] pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Works"
          lead="Featured"
          accent="projects"
          subtext="A selection of machine learning architectures, document signing platforms, and production commercial deployments."
          viewAll={{ label: 'GitHub Profile', href: 'https://github.com/pr1hm' }}
          className="mb-8 md:mb-12"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6"
        >
          {FEATURED_WORKS.map((project) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className={cn(
                'group relative block h-[300px] md:h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[hsl(var(--surface))] transition-all duration-300 hover:border-white/25',
                project.span
              )}
            >
              {/* Clean Image Background */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-80 contrast-105"
              />

              {/* Halftone subtle texture */}
              <span aria-hidden="true" className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none" style={HALFTONE} />

              {/* Top-Right Minimal External Link Arrow */}
              <div className="absolute top-4 right-4 z-20">
                <span className="flex size-8 items-center justify-center rounded-full bg-black/40 border border-white/10 text-white/70 backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>

              {/* Minimal Bottom-Left Hover Overlay (Title + 2-word category) */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base sm:text-lg font-medium text-[#f4f4f5] tracking-tight">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-[#a1a1aa]">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
