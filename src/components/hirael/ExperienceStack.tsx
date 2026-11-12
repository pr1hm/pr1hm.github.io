import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './primitives';

interface ExperienceRow {
  role: string;
  organization: string;
  year: string;
}

const EXPERIENCES: ExperienceRow[] = [
  {
    role: 'Android & Systems Intern',
    organization: 'Netsol IT Solutions',
    year: '2024',
  },
  {
    role: 'Freelance Software Developer',
    organization: 'Commercial Deployments (Best & Jeet Furniture, Bardoli)',
    year: '2023 — Present',
  },
  {
    role: 'Diploma in Information Technology',
    organization: '9.15 CGPA',
    year: '2024',
  },
];

const STACK_TAGS = ['Linux', 'Python', 'FastAPI', 'Whisper', 'Qwen2-VL', 'Docker', 'Cloudflare Pages', 'TypeScript', 'NanoHTTPD'];

export const ExperienceStack: React.FC = () => {
  return (
    <section id="experience" className="bg-[hsl(var(--bg))] py-12 md:py-16 border-t border-[hsl(var(--stroke))]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Background"
          lead="Experience &"
          accent="stack"
          subtext="Engineering roles, commercial web deployments in Bardoli, and academic distinction."
          className="mb-8 md:mb-10"
        />

        {/* 3 Clean Single-Line Rows */}
        <div className="flex flex-col border-t border-[hsl(var(--stroke))]">
          {EXPERIENCES.map((item, idx) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-4 sm:py-5 border-b border-[hsl(var(--stroke))] hover:border-white/20 transition-colors gap-1 sm:gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                <span className="text-sm sm:text-base font-medium text-[#f4f4f5]">
                  {item.role}
                </span>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-10 text-xs sm:text-sm font-mono text-[#a1a1aa]">
                <span>{item.organization}</span>
                <span className="text-zinc-500">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Stack Tags Row */}
        <div className="mt-8 pt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-[#a1a1aa]">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider mr-2">Toolkit:</span>
          {STACK_TAGS.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] text-zinc-300 hover:text-white hover:border-white/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
