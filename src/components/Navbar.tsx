import React, { useState, useEffect } from 'react';
import { Menu, X, Command, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO, NAVIGATION_LINKS } from '../data/portfolioData';
import { IndiaClock } from './IndiaClock';

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
          ? 'bg-bg/90 backdrop-blur-md border-b border-border py-3 shadow-subtle'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity Mark */}
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

          {/* Desktop Navigation Links (Clean architectural container, not an oversized pill) */}
          <nav className="hidden lg:flex items-center gap-6 px-5 py-2 rounded-xl bg-surface/70 backdrop-blur-sm border border-border shadow-subtle">
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
            {/* Real-time IST Clock */}
            <div className="hidden md:block">
              <IndiaClock />
            </div>

            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommand}
              aria-label="Open Command Menu"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface border border-border text-xs text-secondary hover:text-primary hover:border-accent transition-colors shadow-subtle"
            >
              <Command className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline font-mono text-[11px]">Cmd+K</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-mono text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Resume</span>
            </button>

            {/* Direct Connect Action */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-primary text-white text-xs font-mono uppercase tracking-wider hover:bg-accent transition-colors shadow-subtle"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
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

      {/* Responsive Mobile Drawer */}
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
