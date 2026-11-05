import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Image as ImageIcon,
  ExternalLink,
  Terminal,
  Award,
  Building2,
  GraduationCap,
  Languages,
  UserCheck,
  FileText,
  Phone,
  Copy,
  Check,
  Send,
  Film,
  Camera,
  PenTool,
  Quote
} from 'lucide-react';
import {
  PERSONAL_INFO,
  PROJECTS,
  SKILL_GROUPS,
  SkillProficiency,
  EDUCATION_DATA,
  JOURNEY_MILESTONES,
  CREATIVE_WORKS,
  NAVIGATION_LINKS,
  Project
} from '../data';

// ============================================================================
// 1. HERO SECTION (Art-Directed Hybrid Composition)
// ============================================================================
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
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Expressive Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7 text-left">
            
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
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface/90 backdrop-blur-sm border border-border text-primary text-xs font-medium tracking-wide uppercase font-mono hover:border-accent hover:bg-surface transition-all duration-200 shadow-subtle"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
              </button>

              <div className="flex items-center gap-1.5 pl-3 border-l border-border">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface/80 border border-border text-secondary hover:text-primary hover:border-accent transition-colors shadow-subtle"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface/80 border border-border text-secondary hover:text-primary hover:border-accent transition-colors shadow-subtle"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-surface/80 border border-border text-secondary hover:text-primary hover:border-accent transition-colors shadow-subtle"
                  aria-label="Email Sai Teja"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

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

          {/* Right Column: Portrait & Depth Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-3 translate-y-3 -z-10 border border-border/60" />

              <div className="relative bg-surface/95 backdrop-blur-sm border border-border rounded-2xl p-3.5 sm:p-4 shadow-card hover-lift overflow-hidden">
                <div className="relative aspect-[3.7/4.7] w-full rounded-xl overflow-hidden bg-surface-secondary border border-border/70 flex items-center justify-center">
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

                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-primary border border-border/80 flex items-center gap-1.5 shadow-subtle">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>DIGITAL IDENTITY</span>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-primary/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-white/95 border border-white/10 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>Creative Technologist</span>
                  </div>
                </div>

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

// ============================================================================
// 2. ABOUT SECTION (Editorial Storytelling Narrative)
// ============================================================================
interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const identityRoles = [
    "Frontend Developer",
    "Creative Technologist",
    "Product Builder",
    "B.Tech IT Student",
    "Independent Creator"
  ];

  return (
    <section id="about" className="py-28 bg-surface/90 backdrop-blur-[2px] border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              01 // Background & Identity
            </span>
          </div>
          <span className="font-mono text-xs text-secondary hidden sm:inline">
            Narasaraopeta Engineering College • Andhra Pradesh
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight leading-[1.15]">
                "Curiosity is where everything begins."
              </h2>
              <div className="h-1 w-16 bg-accent mt-4" />
            </div>

            <div className="space-y-5 text-secondary text-base leading-relaxed">
              <p className="text-lg text-primary font-medium leading-relaxed font-body">
                I am <strong className="font-semibold text-primary">{PERSONAL_INFO.fullName}</strong>, an Information Technology undergraduate at Narasaraopeta Engineering College, building software with intentional aesthetics and engineering rigor.
              </p>

              <p>
                My path into technology did not begin with copy-pasting tutorials. It started from an obsession with deconstructing how systems communicate. Whether modeling computational logic in Python and Java or exploring how typographical whitespace influences human cognition, I treat software engineering as an expressive digital craft.
              </p>

              <p>
                Across competitive hackathons and campus initiatives, I have conceptualized and engineered platforms such as <strong className="text-primary font-medium">CREZORA / KalaaVerse</strong> (an operating system connecting 64+ creative disciplines) and <strong className="text-primary font-medium">PYQUEST</strong> (a gamified computer science learning experience).
              </p>

              <p>
                Beyond code, I have held leadership roles across college cultural and media initiatives—directing event trailers with CapCut, capturing architectural photography, and translating technical architectures into compelling seminar demonstrations. This dual background lets me move effortlessly between design systems, code reviews, and product strategy.
              </p>
            </div>

            <div className="pt-4 border-t border-border/80">
              <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-3">
                Core Identity Dimensions:
              </p>
              <div className="flex flex-wrap gap-2">
                {identityRoles.map(role => (
                  <span
                    key={role}
                    className="px-3 py-1 text-xs font-mono bg-bg border border-border text-primary rounded-md"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-bg/95 border border-border rounded-xl p-6 sm:p-7 shadow-subtle space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <span className="font-display font-bold text-sm text-primary uppercase tracking-wider">
                Academic & Dossier Data
              </span>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Active B.Tech
              </span>
            </div>

            <div className="space-y-4 text-xs font-mono divide-y divide-border/60">
              <div className="pt-3 first:pt-0 flex items-start justify-between gap-4">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <Building2 className="w-3.5 h-3.5 text-accent" />
                  <span>College</span>
                </span>
                <span className="text-right text-primary font-medium">
                  {PERSONAL_INFO.college}
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <GraduationCap className="w-3.5 h-3.5 text-accent" />
                  <span>Degree & Major</span>
                </span>
                <span className="text-right text-primary font-medium">
                  B.Tech — Information Technology
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <span className="w-3.5 text-center text-accent font-bold">#</span>
                  <span>Academic Grade</span>
                </span>
                <span className="text-right text-accent font-bold">
                  {PERSONAL_INFO.cgpa} CGPA ({PERSONAL_INFO.regulation})
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Base Location</span>
                </span>
                <span className="text-right text-primary font-medium">
                  {PERSONAL_INFO.city}, {PERSONAL_INFO.state}, India
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <Languages className="w-3.5 h-3.5 text-accent" />
                  <span>Languages</span>
                </span>
                <span className="text-right text-primary font-medium">
                  Telugu (Native), English, Hindi
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <UserCheck className="w-3.5 h-3.5 text-accent" />
                  <span>Availability</span>
                </span>
                <span className="text-right text-emerald-600 font-semibold">
                  Open for Collaborations & Internships
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-surface border border-border text-xs font-mono font-medium text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>Examine Verified Resume</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

// ============================================================================
// 3. FEATURED PROJECTS SECTION (Full-Width Flagship + Spotlight Duo)
// ============================================================================
interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const kalaaverse = PROJECTS.find(p => p.id === 'crezora-kalaaverse')!;
  const pyquest = PROJECTS.find(p => p.id === 'pyquest')!;
  const sahayak = PROJECTS.find(p => p.id === 'sahayak-ai')!;

  return (
    <section id="case-studies" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              02 // Curated Case Studies
            </span>
          </div>
          <span className="font-mono text-xs text-secondary hidden sm:inline">
            Deep-Dive Architectural Breakdowns
          </span>
        </div>

        {/* Feature 01: CREZORA / KalaaVerse Flagship */}
        <article className="bg-surface/95 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-10 lg:p-12 shadow-card mb-20 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded bg-primary text-white font-semibold">
                FEATURED 01
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded">
                Flagship Prototype
              </span>
              <span className="text-xs font-mono text-secondary">
                {kalaaverse.year}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-secondary">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Collegiate Hackathon Finalist</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-primary tracking-tight">
                  {kalaaverse.title}
                </h3>
                <p className="text-base font-medium text-accent mt-1.5 font-display">
                  {kalaaverse.displayTag}
                </p>
              </div>

              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                {kalaaverse.caseStudy.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-bg border border-border space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-secondary font-semibold">
                    The Problem
                  </span>
                  <p className="text-xs text-secondary leading-relaxed">
                    {kalaaverse.caseStudy.problem}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-bg border border-border space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold">
                    The Architecture
                  </span>
                  <p className="text-xs text-secondary leading-relaxed">
                    {kalaaverse.caseStudy.solution}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-secondary border border-border">
                <p className="text-[11px] font-mono text-secondary uppercase tracking-wider mb-1">
                  My Contribution:
                </p>
                <p className="text-xs text-primary font-medium">
                  {kalaaverse.caseStudy.myContribution}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {kalaaverse.stack.map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-bg border border-border rounded text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectProject(kalaaverse)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white text-xs font-mono uppercase tracking-wider hover:bg-accent transition-colors shadow-subtle"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Full Case Study</span>
                </button>

                {kalaaverse.githubUrl && (
                  <a
                    href={kalaaverse.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-bg border border-border text-primary text-xs font-mono hover:border-accent hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 bg-bg/95 border border-border rounded-xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono text-secondary">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="font-semibold text-primary">CREZORA Ecosystem Loop</span>
                </div>
                <span>64+ Disciplines</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-lg bg-surface border border-border/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-accent">
                    <span>DISCOVERY // CAPABILITY GRAPH</span>
                    <span className="text-emerald-600 font-semibold">96% Match</span>
                  </div>
                  <p className="text-[11px] text-secondary">
                    Explainable creator matching based on evidence and verified work, not popularity.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-surface border border-border/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-primary">
                    <span>STUDIO // WORKROOMS</span>
                    <span className="text-secondary">Consent Layer</span>
                  </div>
                  <p className="text-[11px] text-secondary">
                    Collaborative asset workspaces with ownership tracking and milestone approvals.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-surface border border-border/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-primary">
                    <span>CROSS-PRODUCT HOOKS</span>
                    <span className="text-accent">Ecosystem</span>
                  </div>
                  <p className="text-[11px] text-secondary">
                    Interconnected with BhashaVerse (translation) and Chitti AI (reflective thinking).
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-border flex items-center justify-between text-[11px] font-mono text-secondary">
                <span>Tested at SIH Hackathon</span>
                <span className="text-accent">Zero Backend Latency</span>
              </div>
            </div>
          </div>
        </article>

        {/* Spotlight Duo: PYQUEST & Sahayak AI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="bg-surface/95 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between hover-lift">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-accent/10 text-accent font-semibold">
                    FEATURED 02
                  </span>
                  <span className="text-xs font-mono text-secondary">{pyquest.year}</span>
                </div>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {pyquest.caseStudy.status}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-primary">
                  {pyquest.title}
                </h3>
                <p className="text-xs font-medium text-accent mt-1 font-mono">
                  {pyquest.displayTag}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                {pyquest.summary}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-secondary block">
                  Key Architectural Implementations:
                </span>
                <ul className="space-y-1.5 text-xs text-secondary">
                  {pyquest.caseStudy.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {pyquest.stack.map(s => (
                  <span key={s} className="px-2 py-0.5 text-[11px] font-mono bg-bg border border-border rounded text-primary">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
              <button
                onClick={() => onSelectProject(pyquest)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:text-accent transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>Examine Case Study</span>
              </button>
              {pyquest.githubUrl && (
                <a
                  href={pyquest.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-bg border border-border text-secondary hover:text-primary transition-colors"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </article>

          <article className="bg-surface/95 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between hover-lift">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-accent/10 text-accent font-semibold">
                    FEATURED 03
                  </span>
                  <span className="text-xs font-mono text-secondary">{sahayak.year}</span>
                </div>
                <span className="text-xs font-mono text-secondary bg-surface-secondary px-2 py-0.5 rounded border border-border">
                  {sahayak.caseStudy.status}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-primary">
                  {sahayak.title}
                </h3>
                <p className="text-xs font-medium text-accent mt-1 font-mono">
                  {sahayak.displayTag}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                {sahayak.summary}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-secondary block">
                  Key Architectural Implementations:
                </span>
                <ul className="space-y-1.5 text-xs text-secondary">
                  {sahayak.caseStudy.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {sahayak.stack.map(s => (
                  <span key={s} className="px-2 py-0.5 text-[11px] font-mono bg-bg border border-border rounded text-primary">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
              <button
                onClick={() => onSelectProject(sahayak)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:text-accent transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>Examine Case Study</span>
              </button>
              {sahayak.githubUrl && (
                <a
                  href={sahayak.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-bg border border-border text-secondary hover:text-primary transition-colors"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </article>
        </div>

      </div>
    </section>
  );
};

// ============================================================================
// 4. PROJECT GALLERY ARCHIVE (Working Category Tabs + Real Screenshots)
// ============================================================================
interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
}

type CategoryTab = 'All' | 'Full-Stack' | 'AI & Systems' | 'UI/UX & Creative';

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('All');
  const categories: CategoryTab[] = ['All', 'Full-Stack', 'AI & Systems', 'UI/UX & Creative'];

  const filteredProjects = PROJECTS.filter(project => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  return (
    <section id="archive" className="py-24 bg-surface/90 backdrop-blur-[2px] border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-border gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                03 // Complete Project Directory
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary tracking-tight">
              Project Archive & Specialized Systems
            </h2>
          </div>

          <div className="flex items-center gap-1 p-1 bg-bg border border-border rounded-lg overflow-x-auto max-w-full">
            {categories.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'bg-primary text-white font-semibold shadow-subtle'
                    : 'text-secondary hover:text-primary hover:bg-surface'
                }`}
              >
                {tab}
                <span className="ml-1.5 text-[10px] opacity-70">
                  ({tab === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === tab).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map(project => {
              const hasImage = Boolean(project.image);

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="bg-bg/95 border border-border rounded-xl p-5 sm:p-6 flex flex-col justify-between hover-lift transition-all"
                >
                  <div className="space-y-4">
                    {hasImage && (
                      <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-border/80 bg-surface-secondary mb-3 group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-40" />
                        <div className="absolute bottom-2 left-2 bg-surface/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono text-primary border border-border flex items-center gap-1">
                          <ImageIcon className="w-3 h-3 text-accent" />
                          <span>UI Showcase</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono text-secondary">
                        {project.year}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-primary hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-accent mt-0.5">
                        {project.displayTag}
                      </p>
                    </div>

                    <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="pt-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-secondary">
                        Status: {project.caseStudy.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.stack.slice(0, 4).map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono bg-surface border border-border rounded text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-secondary">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 mt-5 border-t border-border flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:text-accent transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-accent" />
                      <span>Case Study</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md bg-surface border border-border text-secondary hover:text-primary transition-colors"
                          title="View Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md bg-surface border border-border text-secondary hover:text-accent transition-colors"
                          title="Open Live Deployment"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center border-t border-border/80 pt-6">
          <p className="text-xs font-mono text-secondary">
            Verified academic and personal engineering builds from Narasaraopeta Engineering College (B.Tech IT). Zero fabricated metrics.
          </p>
        </div>

      </div>
    </section>
  );
};

// ============================================================================
// 5. TECHNICAL SKILLS SECTION (Categorized Capabilities & Proficiency Tiers)
// ============================================================================
export const TechnicalSkills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | SkillProficiency>('All');

  const proficiencyLegend: { label: SkillProficiency; color: string }[] = [
    { label: "Hands-on Experience", color: "bg-accent text-white border-accent" },
    { label: "Comfortable", color: "bg-surface-secondary text-primary border-border" },
    { label: "Currently Exploring", color: "bg-bg text-secondary border-dashed border-border" }
  ];

  return (
    <section id="capabilities" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                04 // Technical Identity
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Engineering Capabilities
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Honest proficiency tiers reflecting hands-on builds, collegiate foundations, and active research.
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-surface/90 backdrop-blur-sm border border-border mb-12 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Proficiency Index:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                activeFilter === 'All'
                  ? 'bg-primary text-white font-semibold'
                  : 'bg-surface-secondary text-secondary hover:text-primary'
              }`}
            >
              All Tiers
            </button>
            {proficiencyLegend.map(item => (
              <button
                key={item.label}
                onClick={() => setActiveFilter(item.label)}
                className={`px-3 py-1 rounded text-xs font-mono border transition-all ${
                  activeFilter === item.label
                    ? 'ring-2 ring-accent font-semibold shadow-subtle'
                    : ''
                } ${item.color}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {SKILL_GROUPS.map((group, groupIdx) => {
            const filteredSkills = group.skills.filter(s => {
              if (activeFilter === 'All') return true;
              return s.proficiency === activeFilter;
            });

            if (filteredSkills.length === 0) return null;

            return (
              <div
                key={group.category}
                className="bg-surface/95 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 shadow-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 mb-6 border-b border-border gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-accent font-bold">
                      0{groupIdx + 1}
                    </span>
                    <h3 className="text-xl font-display font-bold text-primary">
                      {group.category}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-secondary">
                    {group.tagline}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredSkills.map(skill => {
                    const isHandsOn = skill.proficiency === 'Hands-on Experience';
                    const isComfortable = skill.proficiency === 'Comfortable';

                    return (
                      <div
                        key={skill.name}
                        className={`p-3.5 rounded-lg border transition-all hover-lift ${
                          isHandsOn
                            ? 'bg-bg border-accent/30 shadow-subtle'
                            : isComfortable
                            ? 'bg-bg border-border'
                            : 'bg-bg border-dashed border-border/80'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="text-xs font-bold text-primary font-display flex items-center gap-1.5">
                            {isHandsOn && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                            {isComfortable && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                            {!isHandsOn && !isComfortable && <span className="w-1.5 h-1.5 rounded-full bg-secondary/50" />}
                            <span>{skill.name}</span>
                          </h4>

                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            isHandsOn
                              ? 'bg-accent/10 text-accent font-semibold'
                              : isComfortable
                              ? 'bg-surface-secondary text-secondary'
                              : 'bg-surface text-secondary/70 border border-border/60'
                          }`}>
                            {skill.proficiency}
                          </span>
                        </div>

                        <p className="text-[11px] text-secondary leading-snug font-body">
                          {skill.context}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-surface/90 backdrop-blur-sm border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle">
          <div className="space-y-1">
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              The Engineering Creed
            </h4>
            <p className="text-xs text-secondary max-w-2xl leading-relaxed">
              "Languages and frameworks change every cycle. Deep appreciation for data structures, asynchronous event loops, clean component contracts, and UX empathy remain permanent."
            </p>
          </div>
          <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1.5 rounded whitespace-nowrap">
            Principled Craft
          </span>
        </div>

      </div>
    </section>
  );
};

// ============================================================================
// 6. EDUCATION SECTION (Credentials & Coursework)
// ============================================================================
export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-surface/90 backdrop-blur-[2px] border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                05 // Academic Foundations
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Education & Institutional Credentials
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Rigorous undergraduate studies in Information Technology anchored by strong mathematical foundations.
          </p>
        </div>

        <div className="space-y-8">
          {EDUCATION_DATA.map((edu, index) => {
            const isPrimary = index === 0;

            return (
              <div
                key={edu.degree}
                className={`rounded-xl p-6 sm:p-8 border transition-all ${
                  isPrimary
                    ? 'bg-bg/95 border-accent/40 shadow-card ring-1 ring-accent/20'
                    : 'bg-bg/95 border-border shadow-subtle'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-primary text-white font-semibold">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {edu.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-xl text-primary">
                        {edu.institution}
                      </h3>
                      <p className="text-xs text-secondary font-mono mt-1 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-accent" />
                        <span>{edu.location}</span>
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-surface border border-border inline-block">
                      <span className="text-[10px] font-mono text-secondary uppercase tracking-wider block">
                        Academic Standing
                      </span>
                      <span className="text-lg font-bold text-accent font-display">
                        {edu.score}
                      </span>
                      {edu.regulation && (
                        <span className="text-[11px] font-mono text-secondary block mt-0.5">
                          {edu.regulation}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-6 lg:pl-6 lg:border-l lg:border-border">
                    <div>
                      <h4 className="font-display font-semibold text-lg text-primary">
                        {edu.degree}
                      </h4>
                    </div>

                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-2.5 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-accent" />
                        <span>Core Curriculum & Coursework:</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map(course => (
                          <span
                            key={course}
                            className="px-2.5 py-1 rounded bg-surface border border-border text-xs text-primary font-mono shadow-subtle"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-2 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-accent" />
                        <span>Collegiate Leadership & Demonstrations:</span>
                      </p>
                      <ul className="space-y-1.5">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-secondary leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// ============================================================================
// 7. DEVELOPMENT JOURNEY SECTION (Milestone Timeline)
// ============================================================================
export const DevelopmentJourney: React.FC = () => {
  return (
    <section id="journey" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-16 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                06 // Trajectory
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Development Journey & Milestones
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            From analytical mathematics to collegiate hackathons, media leadership, and software craft.
          </p>
        </div>

        <div className="relative border-l-2 border-border ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {JOURNEY_MILESTONES.map((milestone, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-accent group-hover:scale-125 group-hover:bg-accent transition-all duration-200 shadow-subtle flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-white" />
              </div>

              <div className="bg-surface/95 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-7 shadow-subtle hover-lift">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-surface-secondary border border-border text-primary font-medium">
                    {milestone.period}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">
                    {milestone.category}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-primary mb-1">
                  {milestone.title}
                </h3>
                <p className="text-xs font-mono text-secondary mb-4">
                  {milestone.organization}
                </p>

                <p className="text-sm text-secondary leading-relaxed mb-5">
                  {milestone.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-secondary mb-2.5">
                    Verified Outcomes & Learnings:
                  </p>
                  <ul className="space-y-1.5">
                    {milestone.keyOutcomes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-secondary">
                        <ArrowRight className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-primary/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ============================================================================
// 8. CREATIVE INTERESTS SECTION (Editorial Magazine Showcase)
// ============================================================================
export const CreativeInterests: React.FC = () => {
  const posterWork = CREATIVE_WORKS.find(w => w.id === 'editorial-poster')!;
  const otherWorks = CREATIVE_WORKS.filter(w => w.id !== 'editorial-poster');
  const icons = [Film, Camera, PenTool];

  return (
    <section id="creative" className="py-28 bg-surface/90 backdrop-blur-[2px] border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-16 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                07 // The Creative Dimension
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Design, Art Direction & Moving Image
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Visual storytelling, graphic design, and cinematic pacing shaping software sensibility.
          </p>
        </div>

        <div className="bg-bg/95 border border-border rounded-2xl p-6 sm:p-10 shadow-card mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-border/80 bg-surface shadow-subtle group">
              {posterWork.image ? (
                <img
                  src={posterWork.image}
                  alt={posterWork.title}
                  className="w-full h-auto object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              ) : (
                <div className="aspect-[4/3] flex items-center justify-center bg-surface-secondary">
                  <ImageIcon className="w-8 h-8 text-secondary" />
                </div>
              )}
              <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono text-primary border border-border flex items-center gap-1.5 shadow-subtle">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Original Editorial Composition</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded">
                  {posterWork.category}
                </span>
                <span className="text-xs font-mono text-secondary">
                  {posterWork.medium}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary">
                {posterWork.title}
              </h3>

              <p className="text-sm text-secondary leading-relaxed font-body">
                {posterWork.description}
              </p>

              <div className="p-4 rounded-xl bg-surface border border-border flex items-start gap-3 shadow-subtle">
                <Quote className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 rotate-180" />
                <p className="text-xs italic text-primary font-medium leading-relaxed">
                  "{posterWork.insight}"
                </p>
              </div>

              <div className="pt-2 text-xs font-mono text-secondary">
                Designed & composite crafted by Sai Teja using Canva & typography tools.
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherWorks.map((work, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={work.id}
                className="bg-bg/95 border border-border rounded-xl p-6 flex flex-col justify-between hover-lift"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-accent shadow-subtle">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-secondary">
                      Medium 0{index + 2}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-accent block mb-1">
                      {work.category}
                    </span>
                    <h4 className="text-lg font-display font-bold text-primary">
                      {work.title}
                    </h4>
                    <p className="text-xs font-mono text-secondary mt-0.5">
                      {work.medium}
                    </p>
                  </div>

                  <p className="text-xs text-secondary leading-relaxed font-body">
                    {work.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-[11px] italic text-primary font-medium">
                    "{work.insight}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// ============================================================================
// 9. CONTACT SECTION (One-Click Copy & Direct Message Composer)
// ============================================================================
export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-16 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                08 // Direct Communication
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Get in Touch
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Open for internships, technical project collaborations, and academic opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface/95 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 shadow-card space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-primary mb-2">
                  Let's create something meaningful.
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Whether you have an internship opportunity, a creative technology collaboration, or want to explore my project work, my inbox is always open.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bg border border-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-secondary">
                    Official Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:text-accent-hover transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm font-semibold text-primary font-mono select-all break-all">
                  {PERSONAL_INFO.email}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-bg border border-border text-xs text-primary hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-[10px] font-mono text-secondary uppercase">Telephone</p>
                      <p className="font-medium font-mono">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-bg border border-border text-xs text-primary">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-secondary uppercase">Location</p>
                    <p className="font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-secondary">Connect Online</span>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-bg border border-border text-secondary hover:text-primary hover:border-accent transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-bg border border-border text-secondary hover:text-primary hover:border-accent transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-surface/90 backdrop-blur-sm border border-border flex items-center gap-3 shadow-subtle">
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <p className="text-xs text-secondary leading-snug">
                <strong className="text-primary font-medium">Undergraduate Availability:</strong> Open to summer 2025/2026 internships, technical research, and select frontend development projects.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface/95 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 shadow-card">
            <h3 className="font-display font-bold text-xl text-primary mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-secondary mb-6 font-mono">
              Fill out the form below to initiate communication directly via your email client.
            </p>

            {formSubmitted ? (
              <div className="p-8 text-center bg-bg rounded-xl border border-border space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-primary">Message Prepared!</h4>
                <p className="text-xs text-secondary max-w-md mx-auto">
                  Your mail client has been opened with your message. If it didn't open automatically, you can write directly to <strong className="text-primary">{PERSONAL_INFO.email}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-mono text-accent hover:underline"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-secondary uppercase tracking-wider block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-bg border border-border rounded-lg text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-secondary uppercase tracking-wider block">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-bg border border-border rounded-lg text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-secondary uppercase tracking-wider block">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Frontend Internship Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-bg border border-border rounded-lg text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-secondary uppercase tracking-wider block">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, role, or ideas here..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-bg border border-border rounded-lg text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-primary text-white text-xs font-medium hover:bg-accent transition-colors shadow-subtle"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Sai Teja</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

// ============================================================================
// 10. FOOTER & COLOPHON
// ============================================================================
export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface/90 backdrop-blur-[2px] border-t border-border py-16 text-secondary text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-12 border-b border-border">
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

          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg border border-border text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle font-mono text-[11px]"
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
