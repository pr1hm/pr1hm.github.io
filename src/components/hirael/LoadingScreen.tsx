import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ['Architect', 'Automate', 'Deploy', 'Scale'];
const DURATION = 2400;
const WORD_INTERVAL = 600;
const EXIT_DELAY = 300;

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    let raf = 0;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }
      setExiting(true);
      exitTimer = setTimeout(() => onCompleteRef.current(), EXIT_DELAY);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), WORD_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[hsl(var(--bg))] p-6 sm:p-12 text-[hsl(var(--text))] select-none pointer-events-none"
    >
      <div className="flex items-center justify-between text-xs tracking-[0.2em] text-[hsl(var(--muted))] uppercase font-mono">
        <span>Pratham Solanki</span>
        <span>Portfolio &rsquo;26</span>
      </div>

      <div className="flex flex-col items-center justify-center my-auto">
        <div className="h-14 sm:h-20 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl italic tracking-tight text-white"
            >
              {WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <span className="text-xs text-[hsl(var(--muted))] font-mono">DevOps &bull; Cloud &bull; AI/ML</span>
        <span className="font-display text-6xl sm:text-8xl tabular-nums leading-none text-white italic">
          {count}%
        </span>
      </div>
    </motion.div>
  );
};

