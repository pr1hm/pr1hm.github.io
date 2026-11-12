import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { ArrowUpRight, onAnchorClick, RingLink } from './primitives';

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Work', href: '#work', id: 'work' },
];

const ROLES = ['DevOps Architect', 'Cloud Engineer', 'AI/ML Specialist', 'Systems Builder'];
const ROLE_INTERVAL = 2200;

export const BACKGROUND_VIDEO = 'https://hirael.com/media/templates/portfolio/background.mp4';

const Logo: React.FC = () => {
  return (
    <a
      href="#home"
      aria-label="Home"
      onClick={(e) => onAnchorClick(e, '#home')}
      className="group relative flex size-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
    >
      <span className="pf-gradient absolute inset-0 rounded-full" />
      <span className="absolute inset-[1.5px] rounded-full bg-[hsl(var(--bg))]" />
      <span className="font-display relative text-[13px] font-normal leading-none italic text-[#f4f4f5]">PS</span>
    </a>
  );
};

export const FloatingNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    for (const link of NAV_LINKS) {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
      <div
        className={cn(
          'pointer-events-auto inline-flex items-center rounded-full border border-white/10 bg-[hsl(var(--surface))]/85 px-2.5 py-1.5 backdrop-blur-xl transition-all duration-300',
          scrolled && 'shadow-2xl shadow-black/90 border-white/15 bg-[hsl(var(--surface))]/95'
        )}
      >
        <Logo />
        <span className="mx-2 hidden h-4 w-px bg-[hsl(var(--stroke))] sm:block" />
        <div className="flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (window.location.pathname !== '/') {
                    window.location.href = `/${link.href}`;
                    return;
                  }
                  onAnchorClick(e, link.href);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'rounded-full px-3 py-1.5 text-xs transition-colors duration-200 sm:px-3.5 sm:py-1.5 font-medium',
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-[hsl(var(--muted))] hover:bg-white/5 hover:text-white'
                )}
              >
                {link.label}
              </a>
            );
          })}
          <Link
            to="/blog"
            className="rounded-full px-3 py-1.5 text-xs sm:px-3.5 sm:py-1.5 font-medium text-[hsl(var(--muted))] hover:bg-white/5 hover:text-white transition-colors"
          >
            Blog
          </Link>
        </div>
        <span className="mx-2 hidden h-4 w-px bg-[hsl(var(--stroke))] sm:block" />
        <RingLink
          href="mailto:ahoy@prthm.xyz"
          innerClassName="bg-[hsl(var(--surface))] px-3.5 py-1.5 text-xs text-[#f4f4f5] backdrop-blur-md font-medium border border-white/10 hover:border-white/20"
        >
          Say hi
          <ArrowUpRight className="size-3" />
        </RingLink>
      </div>
    </nav>
  );
};

interface HeroProps {
  start?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ start = true }) => {
  const rootRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), ROLE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!start) return;
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        gsap.set(['.name-reveal', '.lead-rise', '.blur-in'], {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        });
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.name-reveal', { y: 40 }, { y: 0, duration: 1.1, delay: 0.1 })
        .fromTo('.lead-rise', { y: 20 }, { y: 0, duration: 0.9, stagger: 0.1 }, 0.25)
        .fromTo(
          '.blur-in',
          { opacity: 0, y: 15, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.1,
          },
          0.25
        );
    }, rootRef);

    return () => ctx.revert();
  }, [start]);

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <FloatingNavbar />

      {/* Video Background Layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          src={BACKGROUND_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          tabIndex={-1}
          className="absolute top-1/2 left-1/2 size-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-45 filter brightness-80 contrast-110"
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[hsl(var(--bg))] to-transparent" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-4xl">
        <span className="mb-6 text-xs tracking-[0.3em] text-[hsl(var(--muted))] uppercase opacity-0 blur-in font-mono">
          Pratham Solanki &bull; Portfolio &rsquo;26
        </span>

        <h1 className="name-reveal font-display mb-6 [transform:translateY(40px)] text-6xl leading-[0.9] tracking-tight italic motion-reduce:[transform:none] sm:text-7xl md:text-8xl lg:text-9xl text-[#f4f4f5]">
          Pratham Solanki
        </h1>

        <p className="lead-rise mb-4 [transform:translateY(20px)] text-lg text-zinc-300 motion-reduce:[transform:none] sm:text-xl">
          A{' '}
          <span
            key={roleIndex}
            className="animate-role-fade-in font-display inline-block text-[#a1a1aa] italic font-normal text-xl sm:text-2xl"
          >
            {ROLES[roleIndex]}
          </span>{' '}
          crafting production systems.
        </p>

        <p className="lead-rise mb-10 max-w-xl [transform:translateY(20px)] text-sm text-[hsl(var(--muted))] motion-reduce:[transform:none] md:text-base leading-relaxed">
          Specializing in DevOps, AI/ML, and Cloud Engineering. Building zero-trust CI/CD pipelines, high-availability Kubernetes clusters, embedded Android runtimes, and multimodal vision intelligence.
        </p>

        <div className="inline-flex flex-wrap items-center justify-center gap-4 opacity-0 blur-in">
          <RingLink
            href="#work"
            outerClassName="transition-transform duration-300 hover:scale-105"
            innerClassName="bg-[#f4f4f5] px-7 py-3.5 text-sm font-medium text-black group-hover:bg-[hsl(var(--bg))] group-hover:text-white"
          >
            See Works
          </RingLink>
          <RingLink
            href="mailto:ahoy@prthm.xyz"
            outerClassName="transition-transform duration-300 hover:scale-105"
            innerClassName="border border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/80 px-7 py-3.5 text-sm font-medium text-[#f4f4f5] group-hover:border-white/30 backdrop-blur-md"
          >
            Say hi
          </RingLink>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[11px] tracking-[0.2em] text-[hsl(var(--muted))] uppercase font-mono">Scroll</span>
        <span className="relative block h-9 w-px overflow-hidden bg-[hsl(var(--stroke))]">
          <span className="pf-gradient animate-scroll-down absolute inset-x-0 top-0 block h-1/2 w-full" />
        </span>
      </div>
    </section>
  );
};
