import React, { useState, useEffect } from 'react';
import { Menu, X, Command, ArrowUpRight, FileText, Clock } from 'lucide-react';
import { PERSONAL_INFO, NAVIGATION_LINKS } from '../data';
import { useScrollProgress, useReducedMotion } from '../hooks';

// ============================================================================
// 1. SCROLL PROGRESS BAR (Hairline Viewport Reading Indicator)
// ============================================================================
export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
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
// 2. INDIA IST REAL-TIME CLOCK
// ============================================================================
export const IndiaClock: React.FC = () => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setTimeString(formatted);
      } catch {
        setTimeString('IST');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/85 backdrop-blur-sm border border-border text-xs font-mono text-secondary hover:text-primary transition-colors shadow-subtle"
      title="Current local time in Andhra Pradesh, India (IST)"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <Clock className="w-3.5 h-3.5 text-secondary opacity-70" />
      <span className="tracking-tight font-medium text-primary">{timeString || '00:00:00 IST'}</span>
      <span className="text-[10px] text-secondary/80 hidden sm:inline border-l border-border pl-2">IST</span>
    </div>
  );
};

// ============================================================================
// 3. CUSTOM DESKTOP CURSOR ENHANCEMENT
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
          width: '6px',
          height: '6px',
          backgroundColor: '#315CF5',
        }}
      />
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out hidden md:block"
        style={{
          transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0) scale(${isHovered ? 1.6 : 1})`,
          width: '32px',
          height: '32px',
          border: isHovered ? '1.5px solid rgba(49, 92, 245, 0.7)' : '1px solid rgba(23, 23, 23, 0.25)',
          backgroundColor: isHovered ? 'rgba(49, 92, 245, 0.08)' : 'transparent',
        }}
      />
    </>
  );
};

// ============================================================================
// 4. ARCHITECTURAL HEADER & NAVIGATION
// ============================================================================
interface NavbarProps {
  onOpenCommand: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommand, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-border py-3 shadow-subtle'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-display font-bold text-xs tracking-tight shadow-subtle group-hover:bg-accent transition-colors">
              ST
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-primary group-hover:text-accent transition-colors">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary leading-none hidden sm:block">
                Digital Identity
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 px-5 py-2 rounded-xl bg-surface/75 backdrop-blur-sm border border-border shadow-subtle">
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
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="hidden md:block">
              <IndiaClock />
            </div>

            <button
              onClick={onOpenCommand}
              aria-label="Open Command Menu"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface/85 backdrop-blur-sm border border-border text-xs text-secondary hover:text-primary hover:border-accent transition-colors shadow-subtle"
            >
              <Command className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline font-mono text-[11px]">Cmd+K</span>
            </button>

            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface/85 backdrop-blur-sm border border-border text-xs font-mono text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-primary text-white text-xs font-mono uppercase tracking-wider hover:bg-accent transition-colors shadow-subtle"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-secondary hover:text-primary hover:bg-surface-secondary border border-border transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-surface/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4 shadow-card">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <IndiaClock />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-mono text-primary"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Resume</span>
            </button>
          </div>

          <nav className="grid grid-cols-2 gap-2 pt-1">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-mono transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-primary text-white font-semibold'
                    : 'text-primary hover:bg-surface-secondary border border-border/40'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommand();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-surface-secondary text-primary text-xs font-mono border border-border hover:border-accent"
            >
              <Command className="w-4 h-4 text-accent" />
              <span>Search & Command Menu (Cmd+K)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
