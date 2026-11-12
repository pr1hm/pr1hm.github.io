import React from 'react';
import { Mail, ArrowUpRight, Terminal, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer
      className="border-t border-white/5 bg-obsidian-300/40 mt-24 py-16 px-4 sm:px-6 lg:px-8 text-zinc-400 text-sm"
      itemScope
      itemType="https://schema.org/Person"
    >
      <meta itemProp="name" content="Pratham Solanki" />
      <meta itemProp="jobTitle" content="Software Developer specializing in DevOps, AI/ML, and Cloud Engineering" />
      <meta itemProp="url" content="https://prthm.xyz" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left Column: Entity & Bio */}
        <div className="max-w-md space-y-3">
          <div className="flex items-center gap-2 text-white font-semibold tracking-tight">
            <div className="w-6 h-6 rounded bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Terminal size={14} />
            </div>
            <span>Pratham Solanki</span>
          </div>
          <p className="text-zinc-400 text-xs leading-relaxed" itemProp="description">
            Pratham Solanki is a Software Developer specializing in DevOps, AI/ML, and Cloud Engineering. Building reliable distributed backends, hardened continuous delivery pipelines, and intelligent multimodal vision models.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
            <ShieldCheck size={13} className="text-emerald-400" />
            <span>Zero-Trust Infrastructure &bull; Open-Source Advocate</span>
          </div>
        </div>

        {/* Center / Right Column: Quick Links & Connect */}
        <div className="flex flex-wrap gap-8 sm:gap-14">
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-200 mb-3 font-semibold">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience & Deployments
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Technical Architecture Stack
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors text-sky-400">
                  Engineering Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-200 mb-3 font-semibold">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://github.com/pr1hm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                  aria-label="GitHub Profile of Pratham Solanki"
                >
                  <GithubIcon size={13} />
                  <span>GitHub</span>
                  <ArrowUpRight size={11} className="text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/pr1hm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile of Pratham Solanki"
                >
                  <LinkedinIcon size={13} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={11} className="text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/prthm.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                  aria-label="Instagram Profile of Pratham Solanki"
                >
                  <InstagramIcon size={13} />
                  <span>Instagram</span>
                  <ArrowUpRight size={11} className="text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:ahoy@prthm.xyz"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                  aria-label="Email Pratham Solanki"
                >
                  <Mail size={13} />
                  <span>ahoy@prthm.xyz</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Pratham Solanki. All rights reserved.</p>
        <p className="font-mono text-[11px] text-zinc-400">
          Designed with Vite, React, Tailwind CSS &amp; Glassmorphism
        </p>
      </div>
    </footer>
  );
};
