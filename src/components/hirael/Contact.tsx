import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, RingLink } from './primitives';
import { BACKGROUND_VIDEO } from './Hero';
import { GithubIcon, LinkedinIcon } from '../Icons';

const EMAIL = 'ahoy@prthm.xyz';

const Marquee: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 30,
        ease: 'none',
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex overflow-hidden py-3 border-y border-[hsl(var(--stroke))]" aria-hidden="true">
      <div ref={trackRef} className="flex w-max shrink-0">
        {Array.from({ length: 2 }).map((_, group) => (
          <div key={group} className="flex shrink-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="font-display px-8 text-2xl sm:text-4xl tracking-tight whitespace-nowrap text-[#f4f4f5]/85 uppercase italic"
              >
                BUILDING RESILIENT SYSTEMS &bull; CLOUD &amp; AI &bull;&nbsp;
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[hsl(var(--bg))] pt-12 pb-10 md:pt-16 md:pb-12 border-t border-[hsl(var(--stroke))]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          src={BACKGROUND_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          tabIndex={-1}
          className="absolute top-1/2 left-1/2 size-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 -scale-y-100 object-cover opacity-35 filter brightness-70"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[hsl(var(--bg))] to-transparent" />
      </div>

      <Marquee />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center py-12 text-center md:py-16">
          <span className="mb-5 text-xs tracking-[0.3em] text-[#a1a1aa] uppercase font-mono">
            Have a project in mind?
          </span>

          <RingLink
            href={`mailto:${EMAIL}`}
            outerClassName="transition-transform duration-300 hover:scale-105"
            innerClassName="border border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/85 px-6 py-3.5 font-display text-2xl italic text-[#f4f4f5] backdrop-blur-md group-hover:border-white/30 sm:text-3xl md:text-4xl"
          >
            {EMAIL}
            <ArrowUpRight className="size-5" />
          </RingLink>
        </div>

        <div className="flex flex-col gap-5 border-t border-[hsl(var(--stroke))] pt-6 sm:flex-row sm:items-center sm:justify-between text-xs text-[#a1a1aa]">
          {/* Availability Ping */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-zinc-300 text-[11px]">Available for systems consulting &amp; engineering</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/pr1hm"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="flex size-8 items-center justify-center rounded-full border border-[hsl(var(--stroke))] text-zinc-300 transition-colors duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <GithubIcon size={14} />
            </a>
            <a
              href="https://linkedin.com/in/pr1hm/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="flex size-8 items-center justify-center rounded-full border border-[hsl(var(--stroke))] text-zinc-300 transition-colors duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <LinkedinIcon size={14} />
            </a>
          </div>

          <span className="font-mono text-[11px]">&copy; {new Date().getFullYear()} Pratham Solanki &bull; prthm.xyz</span>
        </div>
      </div>
    </footer>
  );
};
