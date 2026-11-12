import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const SECTION_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export const onAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (!href.startsWith('#') || href.length < 2) return;
  const target = document.getElementById(href.slice(1));
  if (!target) return;
  event.preventDefault();
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({
    behavior: reduce ? 'auto' : 'smooth',
    block: 'start',
  });
};

interface IconProps {
  className?: string;
}

export const ArrowUpRight: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cn('size-3.5', className)}
  >
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const ArrowRight: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cn('size-3.5 rtl:rotate-180', className)}
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

interface RingLinkProps {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
  target?: string;
  rel?: string;
  outerClassName?: string;
  innerClassName?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const RingLink: React.FC<RingLinkProps> = ({
  href,
  children,
  ariaLabel,
  target,
  rel,
  outerClassName,
  innerClassName,
  onClick,
}) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={rel ?? (target === '_blank' ? 'noreferrer' : undefined)}
      onClick={(e) => {
        if (onClick) onClick(e);
        onAnchorClick(e, href);
      }}
      className={cn('group relative inline-flex shrink-0 transition-transform duration-300', outerClassName)}
    >
      <span
        aria-hidden="true"
        className="pf-gradient pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        className={cn(
          'relative inline-flex items-center justify-center gap-1.5 rounded-full transition-colors duration-300',
          innerClassName
        )}
      >
        {children}
      </span>
    </a>
  );
};

interface ViewAllButtonProps {
  label: string;
  href: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const ViewAllButton: React.FC<ViewAllButtonProps> = ({ label, href, className, onClick }) => {
  return (
    <RingLink
      href={href}
      onClick={onClick}
      outerClassName={cn('hidden md:inline-flex', className)}
      innerClassName="bg-[hsl(var(--surface))] px-4 py-2 text-xs text-[hsl(var(--text))] backdrop-blur-md border border-[hsl(var(--stroke))]"
    >
      {label}
      <ArrowRight className="size-3 rtl:rotate-180" />
    </RingLink>
  );
};

interface SectionHeaderProps {
  eyebrow: string;
  lead: string;
  accent: string;
  trailing?: string;
  subtext: string;
  viewAll?: { label: string; href: string };
  className?: string;
  onViewAllClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  lead,
  accent,
  trailing = '',
  subtext,
  viewAll,
  className,
  onViewAllClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: SECTION_EASE }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[hsl(var(--stroke))]" />
        <span className="text-xs tracking-[0.3em] text-[hsl(var(--muted))] uppercase font-mono">{eyebrow}</span>
      </div>
      <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl leading-[1.05] font-medium tracking-tight sm:text-4xl lg:text-5xl text-[#f4f4f5]">
            {lead} <span className="font-display font-normal italic text-[#a1a1aa]">{accent}</span>
            {trailing}
          </h2>
          <p className="mt-4 max-w-md text-sm text-[hsl(var(--muted))] sm:text-base leading-relaxed">{subtext}</p>
        </div>
        {viewAll ? (
          <ViewAllButton label={viewAll.label} href={viewAll.href} onClick={onViewAllClick} />
        ) : null}
      </div>
    </motion.div>
  );
};

