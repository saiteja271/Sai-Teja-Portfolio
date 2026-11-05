import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AbstractCanvas } from './AbstractCanvas';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-bg">
      {/* Background Abstract Interactive Canvas */}
      <AbstractCanvas />

      {/* Subtle Editorial Background Grid Texture */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      {/* Radial soft ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Contextual Meta Badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2.5"
            >
              {/* Location Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-secondary shadow-subtle">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{PERSONAL_INFO.location}</span>
              </span>

              {/* Education Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-secondary shadow-subtle">
                <GraduationCap className="w-3.5 h-3.5 text-accent" />
                <span>{PERSONAL_INFO.educationStatus}</span>
              </span>

              {/* Verified Availability Pill */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{PERSONAL_INFO.availabilityStatus}</span>
              </span>
            </motion.div>

            {/* Formal Identity Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <div className="flex items-center gap-3">
                <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                  Personal Digital Identity
                </p>
                <div className="h-px w-12 bg-accent/30" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-primary tracking-tight leading-[1.08]">
                Engineering ideas. <br />
                <span className="text-accent underline decoration-accent/20 decoration-wavy decoration-2">
                  Designing
                </span> possibilities.
              </h1>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-secondary max-w-2xl leading-relaxed"
            >
              {PERSONAL_INFO.supportingDescription}
            </motion.p>

            {/* Dual CTA Buttons & Social Link Cluster */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA */}
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-medium hover:bg-accent transition-all duration-200 shadow-subtle hover:shadow-accent"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-border text-primary text-sm font-medium hover:border-accent/50 hover:bg-surface-secondary transition-all duration-200 shadow-subtle"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4 text-secondary" />
              </button>

              {/* Social Icon Pills */}
              <div className="flex items-center gap-2 pl-2 border-l border-border/80">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-surface border border-border text-secondary hover:text-primary hover:border-accent/40 transition-colors shadow-subtle"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-surface border border-border text-secondary hover:text-primary hover:border-accent/40 transition-colors shadow-subtle"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-full bg-surface border border-border text-secondary hover:text-primary hover:border-accent/40 transition-colors shadow-subtle"
                  aria-label="Send Direct Email"
                  title="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Quick Micro-stats / Institutional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 grid grid-cols-3 gap-4 border-t border-border/80 max-w-lg"
            >
              <div>
                <p className="text-[11px] font-mono text-secondary uppercase tracking-wider">Institution</p>
                <p className="text-xs font-semibold text-primary truncate" title={PERSONAL_INFO.college}>
                  NEC, AP
                </p>
              </div>
              <div>
                <p className="text-[11px] font-mono text-secondary uppercase tracking-wider">Academic Grade</p>
                <p className="text-xs font-semibold text-primary">
                  {PERSONAL_INFO.cgpa} CGPA (R23)
                </p>
              </div>
              <div>
                <p className="text-[11px] font-mono text-secondary uppercase tracking-wider">Focus</p>
                <p className="text-xs font-semibold text-primary">
                  Full Stack & Creative
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Professional Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Decorative Geometric Frame Accents */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent/15 via-transparent to-accent/10 rounded-2xl transform rotate-1 filter blur-sm -z-10" />

              {/* Main Portrait Card */}
              <div className="relative bg-surface border border-border rounded-2xl p-3 sm:p-4 shadow-card hover-lift overflow-hidden">
                
                {/* Photo Display Frame */}
                <div className="relative aspect-[3.8/4.8] w-full rounded-xl overflow-hidden bg-surface-secondary border border-border/80 flex items-center justify-center">
                  
                  {/* Real Portrait Image (with graceful fallback) */}
                  {!imageError ? (
                    <img
                      src={PERSONAL_INFO.portraitPath}
                      alt={PERSONAL_INFO.fullName}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover object-top transition-opacity duration-500 filter contrast-[1.03] ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ) : null}

                  {/* Elegant Editorial Fallback Composition (if image missing or loading) */}
                  {(imageError || !imageLoaded) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-surface to-surface-secondary">
                      <div className="relative w-28 h-28 mb-4">
                        {/* Concentric rings */}
                        <div className="absolute inset-0 rounded-full border border-accent/30 animate-spin" style={{ animationDuration: '24s' }} />
                        <div className="absolute inset-2 rounded-full border border-dashed border-border" />
                        <div className="absolute inset-4 rounded-full bg-accent/10 flex items-center justify-center text-accent font-display font-bold text-2xl shadow-subtle">
                          ST
                        </div>
                      </div>
                      <p className="font-display font-bold text-primary text-base">{PERSONAL_INFO.displayName}</p>
                      <p className="font-mono text-xs text-secondary mt-1">{PERSONAL_INFO.fullName}</p>
                      <span className="mt-3 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-mono">
                        Developer & Creative Technologist
                      </span>
                    </div>
                  )}

                  {/* Subtle Corner Vignette */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-60" />

                  {/* Corner Accent Watermark */}
                  <div className="absolute bottom-3 left-3 bg-primary/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-white/90 border border-white/10 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>Digital Identity</span>
                  </div>
                </div>

                {/* Editorial Metadata Footer within card */}
                <div className="mt-3.5 pt-3 border-t border-border flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-sm text-primary">
                      {PERSONAL_INFO.fullName}
                    </h3>
                    <p className="text-xs text-secondary font-mono mt-0.5">
                      Information Technology • NEC
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold block">
                      Status
                    </span>
                    <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Active Student
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Architectural Badge: Andhra Pradesh, India */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-surface/95 backdrop-blur-md border border-border px-3.5 py-2 rounded-xl shadow-card flex items-center gap-2.5 z-20"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                <div className="text-left">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-secondary">Base</p>
                  <p className="text-xs font-semibold text-primary">{PERSONAL_INFO.location}</p>
                </div>
              </motion.div>

              {/* Floating Badge: CGPA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="absolute -top-3 -right-3 bg-surface/95 backdrop-blur-md border border-border px-3 py-1.5 rounded-lg shadow-card text-right z-20"
              >
                <span className="text-[10px] font-mono text-secondary block">Undergraduate</span>
                <span className="text-xs font-bold text-accent">CGPA {PERSONAL_INFO.cgpa}</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
