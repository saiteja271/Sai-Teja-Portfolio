import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO, NAVIGATION_LINKS } from '../data';
import { useScrollProgress, useReducedMotion } from '../hooks';

// ============================================================================
// 1. SCROLL PROGRESS BAR (Hairline Viewport Reading Indicator)
// ============================================================================
export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-accent transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// ============================================================================
// 2. CUSTOM DESKTOP CURSOR ENHANCEMENT (Hidden on Touch/Mobile Viewports)
// ============================================================================
export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer || reducedMotion) return;

    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[data-cursor-hover]') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    const follow = () => {
      setTrailing((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        };
      });
      animId = requestAnimationFrame(follow);
    };

    animId = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible, position.x, position.y, reducedMotion]);

  if (reducedMotion || !isVisible) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 0 : 1})`,
          width: '5px',
          height: '5px',
          backgroundColor: '#315CF5',
        }}
      />
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out hidden md:block"
        style={{
          transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0) scale(${isHovered ? 1.5 : 1})`,
          width: '28px',
          height: '28px',
          border: isHovered ? '1.5px solid rgba(49, 92, 245, 0.7)' : '1px solid rgba(23, 23, 23, 0.22)',
          backgroundColor: isHovered ? 'rgba(49, 92, 245, 0.08)' : 'transparent',
        }}
      />
    </>
  );
};

// ============================================================================
// 3. MINIMAL & ELEGANT NAVBAR (Clean, Responsive, Mobile Optimized)
// ============================================================================
interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sectionIds = NAVIGATION_LINKS.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-bg/95 backdrop-blur-md border-b border-border py-3 shadow-subtle'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Identity Brand Mark */}
            <a
              href="#hero"
              className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none flex-shrink-0"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-display font-bold text-xs tracking-tight shadow-subtle group-hover:bg-accent transition-colors">
                ST
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-display font-bold text-xs sm:text-sm tracking-tight text-primary group-hover:text-accent transition-colors truncate">
                  {PERSONAL_INFO.displayName}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-secondary leading-none hidden min-[360px]:block">
                  Digital Identity
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Clean 6 sections) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6 px-5 py-2 rounded-xl bg-surface/80 backdrop-blur-sm border border-border shadow-subtle">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-xs font-mono tracking-tight transition-colors relative py-1 ${
                      isActive
                        ? 'text-primary font-semibold'
                        : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Cluster */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Resume Action */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-surface/90 backdrop-blur-sm border border-border text-xs font-mono text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle min-h-[36px]"
                aria-label="View Curriculum Vitae"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>Resume</span>
              </button>

              {/* Direct Contact Action (Desktop) */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="hidden lg:inline-flex items-center gap-1 px-3.5 py-2 rounded-lg bg-primary text-white text-xs font-mono uppercase tracking-wider hover:bg-accent transition-colors shadow-subtle min-h-[36px]"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile/Tablet Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-secondary hover:text-primary hover:bg-surface border border-border transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Smooth Mobile/Tablet Drawer Overlay & Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-primary/40 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-up Drawer */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative w-full bg-surface border-t border-border rounded-t-2xl shadow-modal px-5 pt-5 pb-8 space-y-5 z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Drawer Handle & Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-primary text-white flex items-center justify-center font-display font-bold text-[10px]">
                    ST
                  </div>
                  <span className="font-display font-bold text-xs text-primary">
                    Navigation Menu
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-secondary border border-border transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                  aria-label="Close navigation menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Grid (Touch-friendly 44px+ height targets) */}
              <nav className="grid grid-cols-2 gap-2.5">
                {NAVIGATION_LINKS.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-mono transition-colors min-h-[44px] ${
                        isActive
                          ? 'bg-primary text-white font-semibold shadow-subtle'
                          : 'bg-bg text-primary hover:bg-surface-secondary border border-border/70'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 ${isActive ? 'text-white/80' : 'text-secondary'}`} />
                    </a>
                  );
                })}
              </nav>

              {/* Action Buttons Inside Mobile Drawer */}
              <div className="pt-2 border-t border-border/80 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-bg border border-border text-xs font-mono font-medium text-primary hover:border-accent hover:text-accent transition-colors min-h-[44px]"
                >
                  <FileText className="w-4 h-4 text-accent" />
                  <span>Examine Verified Resume</span>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-accent transition-colors shadow-subtle min-h-[44px]"
                >
                  <span>Get in Touch (Contact)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
