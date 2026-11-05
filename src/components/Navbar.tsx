import React, { useState, useEffect } from 'react';
import { Menu, X, Command, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, NAVIGATION_LINKS } from '../data/portfolioData';
import { IndiaClock } from './IndiaClock';

interface NavbarProps {
  onOpenCommand: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommand }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = NAVIGATION_LINKS.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
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
          ? 'bg-bg/85 backdrop-blur-md border-b border-border shadow-subtle py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-display font-bold text-sm tracking-tight shadow-subtle group-hover:bg-accent transition-colors">
              ST
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-primary group-hover:text-accent transition-colors">
                {PERSONAL_INFO.displayName}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-secondary leading-none hidden sm:block">
                Digital Identity
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface/80 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full shadow-subtle">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-subtle'
                      : 'text-secondary hover:text-primary hover:bg-surface-secondary'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Real-time IST Clock */}
            <div className="hidden md:block">
              <IndiaClock />
            </div>

            {/* Command Menu Trigger Button */}
            <button
              onClick={onOpenCommand}
              aria-label="Open Command Menu"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-surface border border-border text-xs text-secondary hover:text-primary hover:border-accent/40 transition-colors shadow-subtle"
            >
              <Command className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline font-mono text-[11px]">Cmd+K</span>
            </button>

            {/* Direct Connect CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-white text-xs font-medium hover:bg-accent transition-colors shadow-subtle"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-secondary hover:text-primary hover:bg-surface-secondary border border-border transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-surface/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 shadow-card animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <IndiaClock />
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available</span>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-1.5 pt-1">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-primary text-white font-semibold'
                    : 'text-primary hover:bg-surface-secondary'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
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
              <span>Open Quick Command Menu</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
