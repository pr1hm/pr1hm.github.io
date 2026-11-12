import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Menu, X, ArrowUpRight, BookOpen, Layers } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (!isHome) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav
        aria-label="Main Navigation"
        className={`max-w-6xl mx-auto rounded-2xl px-5 py-3 transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? 'bg-obsidian-200/85 backdrop-blur-md border-white/10 shadow-2xl shadow-black/80'
            : 'bg-surface/50 backdrop-blur-md border-white/5'
        }`}
      >
        {/* Brand Logo / Entity Identity */}
        <Link
          to="/"
          className="flex items-center gap-2.5 text-white font-semibold tracking-tight hover:opacity-90 transition-opacity"
          aria-label="Pratham Solanki - Home"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
            <Terminal size={17} className="stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              Pratham Solanki
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              DevOps &bull; Cloud &bull; AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/5 text-xs font-medium text-zinc-300">
          {isHome ? (
            <>
              <button
                onClick={() => scrollToSection('experience')}
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all"
              >
                Skills
              </button>
            </>
          ) : (
            <Link
              to="/"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Layers size={13} />
              Portfolio
            </Link>
          )}

          <Link
            to="/blog"
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              location.pathname.startsWith('/blog')
                ? 'text-sky-300 bg-white/10 font-semibold'
                : 'hover:text-white hover:bg-white/5'
            }`}
          >
            <BookOpen size={13} />
            Articles & Notes
          </Link>
        </div>

        {/* Actions & Contact CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="mailto:ahoy@prthm.xyz"
            className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white text-zinc-950 hover:bg-zinc-200 transition-all font-mono inline-flex items-center gap-1.5 shadow-sm active:scale-95"
            aria-label="Send email to Pratham Solanki"
          >
            Get in touch
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden max-w-6xl mx-auto mt-2 p-4 rounded-2xl bg-obsidian-200/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-2">
          {isHome ? (
            <>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left py-2 px-3 rounded-lg text-sm text-zinc-300 hover:bg-white/5"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left py-2 px-3 rounded-lg text-sm text-zinc-300 hover:bg-white/5"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left py-2 px-3 rounded-lg text-sm text-zinc-300 hover:bg-white/5"
              >
                Skills
              </button>
            </>
          ) : (
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-sm text-zinc-300 hover:bg-white/5"
            >
              Back to Home
            </Link>
          )}
          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg text-sm text-sky-300 hover:bg-white/5 font-medium"
          >
            Blog & Technical Writings
          </Link>
          <div className="pt-2 border-t border-white/10 mt-1">
            <a
              href="mailto:ahoy@prthm.xyz"
              className="w-full justify-center py-2 px-4 rounded-xl text-xs font-medium bg-white text-zinc-950 font-mono inline-flex items-center gap-1.5"
            >
              Get in touch <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

