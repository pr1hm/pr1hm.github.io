import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MetricItem {
  target: number;
  decimals?: number;
  suffix: string;
  label: string;
}

const STATS: MetricItem[] = [
  { target: 9.15, decimals: 2, suffix: '', label: 'Diploma in IT (CGPA)' },
  { target: 3, decimals: 0, suffix: 'K+', label: 'Monthly Client Traffic' },
  { target: 10, decimals: 0, suffix: '+', label: 'Production Systems Deployed' },
];

const StatCounter: React.FC<{
  target: number;
  decimals?: number;
  suffix: string;
  label: string;
  active: boolean;
}> = ({ target, decimals = 0, suffix, label, active }) => {
  const [displayValue, setDisplayValue] = useState<string>(
    decimals > 0 ? (0).toFixed(decimals) : '0'
  );

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const duration = 1200;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      setDisplayValue(decimals > 0 ? target.toFixed(decimals) : String(target));
      return;
    }

    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = eased * target;
      setDisplayValue(decimals > 0 ? current.toFixed(decimals) : String(Math.round(current)));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, decimals]);

  return (
    <div className="flex flex-col items-center border-t border-[hsl(var(--stroke))] pt-6 text-center sm:items-start sm:text-start">
      <span className="font-display text-5xl leading-none tabular-nums md:text-7xl text-[#f4f4f5] italic">
        {displayValue}
        {suffix}
      </span>
      <span className="mt-3 text-xs tracking-[0.2em] text-[#a1a1aa] uppercase font-mono">
        {label}
      </span>
    </div>
  );
};

export const Stats: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <section id="stats" className="bg-[hsl(var(--bg))] py-12 md:py-16 border-t border-[hsl(var(--stroke))]">
      <motion.div
        onViewportEnter={() => setActive(true)}
        viewport={{ once: true, margin: '-60px' }}
        className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 sm:grid-cols-3 md:px-10 lg:px-16"
      >
        {STATS.map((stat) => (
          <StatCounter key={stat.label} active={active} {...stat} />
        ))}
      </motion.div>
    </section>
  );
};
