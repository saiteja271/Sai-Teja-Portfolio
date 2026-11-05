import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, NAVIGATION_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border py-16 text-secondary text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-12 border-b border-border">
          
          {/* Identity col (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center font-display font-bold text-xs tracking-tight">
                ST
              </div>
              <span className="font-display font-bold text-base text-primary">
                {PERSONAL_INFO.fullName}
              </span>
            </div>
            <p className="text-secondary text-xs leading-relaxed max-w-sm">
              B.Tech Information Technology student at Narasaraopeta Engineering College. Building refined digital products, creative interfaces, and web applications.
            </p>
            <p className="font-mono text-[11px] text-accent">
              Andhra Pradesh, India • {PERSONAL_INFO.timeZoneLabel}
            </p>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold">
              Index Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NAVIGATION_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-primary hover:underline transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg border border-border text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle font-mono text-[11px]"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-bg border border-border text-secondary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-bg border border-border text-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-bg border border-border text-secondary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Colophon & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-secondary">
            <span>Designed & Engineered with React + TypeScript</span>
            <span>•</span>
            <span className="text-accent font-medium">Vercel Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
