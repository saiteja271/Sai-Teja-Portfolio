import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AbstractCanvas } from './AbstractCanvas';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const headlineLines = [
    PERSONAL_INFO.headlineLine1,
    PERSONAL_INFO.headlineLine2
  ];

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-bg">
      {/* 3D-inspired interactive procedural visual canvas */}
      <AbstractCanvas />

      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-35 pointer-events-none" />

      {/* Soft atmospheric gradient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />

      {/* Main asymmetric grid content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Expressive Typography & Architectural Statements (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7 text-left">
            
            {/* Identity & Origin Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                  {PERSONAL_INFO.fullName}
                </span>
              </div>
              <span className="text-secondary/40 text-xs">•</span>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-secondary">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="text-secondary/40 text-xs hidden sm:inline">•</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-mono text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Internships</span>
              </span>
            </motion.div>

            {/* Main Signature Headline with Line-by-Line Reveal */}
            <div className="space-y-1">
              {headlineLines.map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + index * 0.14,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`text-4xl sm:text-5xl lg:text-[4rem] font-display font-extrabold tracking-tight leading-[1.08] ${
                      index === 1 ? 'text-accent' : 'text-primary'
                    }`}
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Supporting Philosophy & Brief */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 max-w-xl"
            >
              <p className="text-base sm:text-lg font-medium text-primary/90 leading-relaxed font-body">
                {PERSONAL_INFO.supportingPhrase}
              </p>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                {PERSONAL_INFO.editorialIntro}
              </p>
            </motion.div>

            {/* CTAs & External Coordinates */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <button
                onClick={onExploreProjects}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white text-xs font-medium tracking-wide uppercase font-mono hover:bg-accent transition-all duration-200 shadow-subtle hover:shadow-accent"
              >
                <span>Explore Case Studies</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface border border-border text-primary text-xs font-medium tracking-wide uppercase font-mono hover:border-accent hover:bg-surface-secondary transition-all duration-200 shadow-subtle"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
              </button>

              {/* Social Channels Cluster */}
              <div className="flex items-center gap-1.5 pl-3 border-l border-border">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface border border-border text-secondary hover:text-primary hover:border-accent transition-colors shadow-subtle"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface border border-border text-secondary hover:text-primary hover:border-accent transition-colors shadow-subtle"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-surface border border-border text-secondary hover:text-primary hover:border-accent transition-colors shadow-subtle"
                  aria-label="Email Sai Teja"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Academic Credentials Footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.54 }}
              className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-border/80 max-w-lg text-xs"
            >
              <div>
                <p className="text-[10px] font-mono text-secondary uppercase tracking-wider">Institution</p>
                <p className="font-semibold text-primary font-display mt-0.5">Narasaraopeta Eng. College</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-secondary uppercase tracking-wider">Academic Grade</p>
                <p className="font-semibold text-primary font-mono mt-0.5">{PERSONAL_INFO.cgpa} CGPA • R23</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-[10px] font-mono text-secondary uppercase tracking-wider">Graduation</p>
                <p className="font-semibold text-primary font-mono mt-0.5">{PERSONAL_INFO.expectedGraduation}</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Art-Directed Composition (Portrait + 3D Depth + Floating Interface Cards) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Asymmetric offset geometric shadow */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-3 translate-y-3 -z-10 border border-border/60" />

              {/* Main Portrait Frame */}
              <div className="relative bg-surface border border-border rounded-2xl p-3.5 sm:p-4 shadow-card hover-lift overflow-hidden">
                
                {/* Visual Canvas Window */}
                <div className="relative aspect-[3.7/4.7] w-full rounded-xl overflow-hidden bg-surface-secondary border border-border/70 flex items-center justify-center">
                  
                  {/* Portrait image */}
                  {!imageError ? (
                    <img
                      src={PERSONAL_INFO.portraitPath}
                      alt={PERSONAL_INFO.fullName}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover object-top transition-opacity duration-500 filter contrast-[1.02] ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ) : null}

                  {/* High-Fidelity Editorial Fallback (if image removed or missing) */}
                  {(imageError || !imageLoaded) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-surface to-surface-secondary">
                      <div className="relative w-28 h-28 mb-4">
                        <div className="absolute inset-0 rounded-full border border-accent/30 animate-spin" style={{ animationDuration: '28s' }} />
                        <div className="absolute inset-2 rounded-full border border-dashed border-border" />
                        <div className="absolute inset-4 rounded-full bg-accent/10 flex items-center justify-center text-accent font-display font-bold text-2xl shadow-subtle">
                          ST
                        </div>
                      </div>
                      <p className="font-display font-bold text-primary text-base">{PERSONAL_INFO.displayName}</p>
                      <p className="font-mono text-xs text-secondary mt-1">{PERSONAL_INFO.fullName}</p>
                      <span className="mt-3 px-2.5 py-1 rounded-md bg-accent/10 text-accent text-[11px] font-mono">
                        Developer & Creative Technologist
                      </span>
                    </div>
                  )}

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-60" />

                  {/* Subtle technical tag inside viewport */}
                  <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-primary border border-border/80 flex items-center gap-1.5 shadow-subtle">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>DIGITAL IDENTITY</span>
                  </div>

                  {/* Bottom watermark */}
                  <div className="absolute bottom-3 left-3 bg-primary/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-white/95 border border-white/10 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>Creative Technologist</span>
                  </div>
                </div>

                {/* Editorial Metadata Footer within card */}
                <div className="mt-3.5 pt-3 border-t border-border flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-sm text-primary">
                      {PERSONAL_INFO.displayName}
                    </h3>
                    <p className="text-[11px] text-secondary font-mono mt-0.5">
                      B.Tech IT • Class of 2027
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold block">
                      Regulation
                    </span>
                    <span className="text-xs font-mono font-medium text-primary">
                      {PERSONAL_INFO.regulation}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Technical Annotation 1: Location & Base */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 bg-surface/95 backdrop-blur-md border border-border px-3.5 py-2.5 rounded-xl shadow-card flex items-center gap-3 z-20"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                <div className="text-left">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-secondary">Base Location</p>
                  <p className="text-xs font-bold text-primary font-display">{PERSONAL_INFO.city}, AP</p>
                </div>
              </motion.div>

              {/* Floating Technical Annotation 2: Flagship Ecosystem */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-5 bg-surface/95 backdrop-blur-md border border-border px-3.5 py-2 rounded-xl shadow-card text-right z-20"
              >
                <div className="flex items-center gap-1.5 justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-mono uppercase text-secondary">Flagship</span>
                </div>
                <p className="text-xs font-bold text-primary font-display">CREZORA / KalaaVerse</p>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator with gentle prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 flex flex-col items-center justify-center pt-8 text-secondary/70 hover:text-primary transition-colors cursor-pointer"
        onClick={onExploreProjects}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase mb-1.5">
          Scroll to explore
        </span>
        <div className="w-4 h-7 rounded-full border border-border flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
};
