import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: 'cyan' | 'emerald' | 'violet' | 'none';
  onClick?: () => void;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className,
  glow = 'none',
  onClick,
}) => {
  const glowClasses = {
    cyan: 'hover:border-white/25',
    emerald: 'hover:border-white/25',
    violet: 'hover:border-white/25',
    none: 'hover:border-white/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      onClick={onClick}
      className={cn(
        'relative group rounded-2xl p-6 sm:p-7 bg-surface/50 backdrop-blur-xl border border-white/10 transition-all duration-300 overflow-hidden',
        glowClasses[glow],
        className
      )}
    >
      {/* Subtle top inner light stroke */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      {/* Subtle radial mouse hover effect background */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.04] transition-colors pointer-events-none" />

      {children}
    </motion.div>
  );
};

