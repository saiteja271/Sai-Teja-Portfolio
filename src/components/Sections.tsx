import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  ExternalLink,
  Terminal,
  Building2,
  GraduationCap,
  Languages,
  UserCheck,
  FileText,
  Phone,
  Copy,
  Check,
  Send,
  Layers,
  Palette,
  Code2,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import {
  PERSONAL_INFO,
  ABOUT_DATA,
  CORE_TOOLKIT,
  PROJECTS,
  EDUCATION_DATA,
  JOURNEY_MILESTONES,
  NAVIGATION_LINKS,
  Project
} from '../data';

// ============================================================================
// 1. HERO SECTION (Personal Identity First — Venkata Sai Teja Sampati)
// ============================================================================
interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Expressive Typography & Personal Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7 text-left">
            
            {/* Metadata Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2 sm:gap-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                  {PERSONAL_INFO.displayName}
                </span>
              </div>
              <span className="text-secondary/40 text-xs">•</span>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-secondary">
                <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span className="truncate">{PERSONAL_INFO.location}</span>
              </span>
              <span className="text-secondary/40 text-xs hidden min-[400px]:inline">•</span>
              <span className="hidden min-[400px]:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-mono text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span>Available for Opportunities</span>
              </span>
            </motion.div>

            {/* Fluid Editorial Headline */}
            <div className="space-y-1">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl min-[360px]:text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.2rem] font-display font-extrabold tracking-tight leading-[1.08] text-primary break-words"
                >
                  {PERSONAL_INFO.heroHeadingLine1}
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl min-[360px]:text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.2rem] font-display font-extrabold tracking-tight leading-[1.08] text-accent break-words"
                >
                  {PERSONAL_INFO.heroHeadingLine2}
                </motion.h1>
              </div>
            </div>

            {/* Supporting Headline & Narrative Intro */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 max-w-2xl"
            >
              <p className="text-base sm:text-lg font-medium text-primary/95 leading-relaxed font-body">
                {PERSONAL_INFO.supportingHeadline}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-secondary leading-relaxed">
                {PERSONAL_INFO.professionalIntroduction}
              </p>
            </motion.div>

            {/* Action Buttons & Social Links (Comfortable touch targets) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col min-[480px]:flex-row min-[480px]:items-center gap-3 pt-1"
            >
              <button
                onClick={onExploreProjects}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white text-xs font-medium tracking-wide uppercase font-mono hover:bg-accent transition-all duration-200 shadow-subtle hover:shadow-accent min-h-[44px]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-surface/90 backdrop-blur-sm border border-border text-primary text-xs font-medium tracking-wide uppercase font-mono hover:border-accent hover:bg-surface transition-all duration-200 shadow-subtle min-h-[44px]"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
              </button>

              <div className="flex items-center gap-2 pt-2 min-[480px]:pt-0 min-[480px]:pl-3 min-[480px]:border-l min-[480px]:border-border justify-start">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface/80 border border-border text-secondary hover:text-primary hover:border-accent transition-colors shadow-subtle min-w-[40px] min-h-[40px] flex items-center justify-center"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface/80 border border-border text-secondary hover:text-primary hover:border-accent transition-colors shadow-subtle min-w-[40px] min-h-[40px] flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-surface/80 border border-border text-secondary hover:text-primary hover:border-accent transition-colors shadow-subtle min-w-[40px] min-h-[40px] flex items-center justify-center"
                  aria-label="Email Sai Teja"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Academic & Geographic Metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.54 }}
              className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-border/80 max-w-xl text-xs"
            >
              <div>
                <p className="text-[10px] font-mono text-secondary uppercase tracking-wider">Institution</p>
                <p className="font-semibold text-primary font-display mt-0.5 truncate">{PERSONAL_INFO.college}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-secondary uppercase tracking-wider">Education</p>
                <p className="font-semibold text-primary font-mono mt-0.5 truncate">{PERSONAL_INFO.educationDegree}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-[10px] font-mono text-secondary uppercase tracking-wider">Graduation</p>
                <p className="font-semibold text-primary font-mono mt-0.5">{PERSONAL_INFO.expectedGraduation}</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Personal Portrait Card (Mobile Safe & Bounded) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
            >
              <div className="relative bg-surface/95 backdrop-blur-sm border border-border rounded-2xl p-3.5 sm:p-4 shadow-card overflow-hidden">
                <div className="relative aspect-[3.7/4.6] w-full rounded-xl overflow-hidden bg-surface-secondary border border-border/70 flex items-center justify-center">
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
                      <div className="relative w-24 h-24 mb-3">
                        <div className="absolute inset-0 rounded-full border border-accent/30 animate-spin" style={{ animationDuration: '28s' }} />
                        <div className="absolute inset-2 rounded-full border border-dashed border-border" />
                        <div className="absolute inset-4 rounded-full bg-accent/10 flex items-center justify-center text-accent font-display font-bold text-xl shadow-subtle">
                          ST
                        </div>
                      </div>
                      <p className="font-display font-bold text-primary text-base">{PERSONAL_INFO.displayName}</p>
                      <p className="font-mono text-xs text-secondary mt-1">{PERSONAL_INFO.fullName}</p>
                      <span className="mt-2.5 px-2.5 py-1 rounded-md bg-accent/10 text-accent text-[11px] font-mono">
                        Developer & Creative Technologist
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-2.5 right-2.5 bg-surface/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-primary border border-border/80 flex items-center gap-1.5 shadow-subtle">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>DIGITAL IDENTITY</span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 bg-primary/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-white/95 border border-white/10 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>Creative Technologist</span>
                  </div>
                </div>

                {/* Card Sub-bar */}
                <div className="mt-3.5 pt-3 border-t border-border flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-sm text-primary truncate">
                      {PERSONAL_INFO.displayName}
                    </h3>
                    <p className="text-[11px] text-secondary font-mono mt-0.5 truncate">
                      B.Tech IT • {PERSONAL_INFO.expectedGraduation}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold block">
                      Status
                    </span>
                    <span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Active Student
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 flex flex-col items-center justify-center pt-6 text-secondary/70 hover:text-primary transition-colors cursor-pointer"
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
// 2. ABOUT SECTION ("More than just code." + Interests)
// ============================================================================
interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-surface/90 backdrop-blur-[2px] border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between pb-6 mb-10 sm:mb-12 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              01 // Personal Identity & Philosophy
            </span>
          </div>
          <span className="font-mono text-xs text-secondary hidden sm:inline">
            Narasaraopeta Engineering College • Andhra Pradesh
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight leading-[1.15]">
                "{ABOUT_DATA.heading}"
              </h2>
              <div className="h-1 w-16 bg-accent mt-4" />
            </div>

            <div className="space-y-4 text-secondary text-sm sm:text-base leading-relaxed">
              <p className="text-base sm:text-lg text-primary font-medium leading-relaxed font-body">
                {ABOUT_DATA.approach}
              </p>

              <p>
                I am <strong className="font-semibold text-primary">{PERSONAL_INFO.fullName}</strong>, an Information Technology undergraduate student at <strong className="text-primary font-medium">{PERSONAL_INFO.college}</strong>. I view software engineering not simply as code execution, but as an intentional craft where engineering rigor and thoughtful aesthetics converge.
              </p>

              <p>
                From building interactive web applications like <strong className="text-primary font-medium">CREZORA</strong> to developing gamified platforms such as <strong className="text-primary font-medium">PYQUEST</strong>, I enjoy taking projects from raw conceptual thinking to functional, deployed products that create real value for users.
              </p>

              <p>
                Beyond code, I cultivate a disciplined creative sensibility through visual storytelling, photography, and creative writing. This multidisciplinary perspective enables me to bridge frontend architecture with intuitive UI/UX design.
              </p>
            </div>

            <div className="pt-4 border-t border-border/80">
              <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-3">
                Key Interests & Focus Areas:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ABOUT_DATA.interests.map((interest) => (
                  <div
                    key={interest.title}
                    className="p-3.5 rounded-xl bg-bg border border-border space-y-1 hover-lift transition-all"
                  >
                    <h4 className="text-xs font-bold text-primary font-display flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{interest.title}</span>
                    </h4>
                    <p className="text-[11px] text-secondary leading-snug">
                      {interest.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic & Profile Summary Card */}
          <div className="lg:col-span-5 bg-bg/95 border border-border rounded-2xl p-5 sm:p-7 shadow-subtle space-y-5 sm:space-y-6 w-full">
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-border">
              <span className="font-display font-bold text-xs sm:text-sm text-primary uppercase tracking-wider">
                Academic & Profile Summary
              </span>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {EDUCATION_DATA.status}
              </span>
            </div>

            <div className="space-y-3.5 text-xs font-mono divide-y divide-border/60">
              <div className="pt-2.5 first:pt-0 flex items-start justify-between gap-3">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <Building2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>College</span>
                </span>
                <span className="text-right text-primary font-medium">
                  {PERSONAL_INFO.college}
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-3">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <GraduationCap className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Degree & Major</span>
                </span>
                <span className="text-right text-primary font-medium">
                  {PERSONAL_INFO.educationDegree}
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-3">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <span className="w-3.5 text-center text-accent font-bold">#</span>
                  <span>Graduation</span>
                </span>
                <span className="text-right text-accent font-bold">
                  {PERSONAL_INFO.expectedGraduation}
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-3">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Location</span>
                </span>
                <span className="text-right text-primary font-medium">
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-3">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <Languages className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Languages</span>
                </span>
                <span className="text-right text-primary font-medium">
                  Telugu (Native), English, Hindi
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-3">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <UserCheck className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Availability</span>
                </span>
                <span className="text-right text-emerald-600 font-semibold">
                  Open for Collaborations & Roles
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-surface border border-border text-xs font-mono font-medium text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle min-h-[44px]"
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
// 3. FEATURED PROJECTS SECTION (Pure Text-Based Project Presentation)
// ============================================================================
interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

type ProjectCategoryTab = 'All' | 'Full-Stack' | 'AI & Systems' | 'UI/UX & Creative';

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const crezora = PROJECTS.find(p => p.id === 'crezora')!;
  const kalaaverse = PROJECTS.find(p => p.id === 'kalaaverse')!;
  const pyquest = PROJECTS.find(p => p.id === 'pyquest')!;
  
  const [activeTab, setActiveTab] = useState<ProjectCategoryTab>('All');
  const categories: ProjectCategoryTab[] = ['All', 'Full-Stack', 'AI & Systems', 'UI/UX & Creative'];

  const filteredProjects = PROJECTS.filter(project => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 sm:mb-16 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                02 // Projects & Digital Products
              </span>
            </div>
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Curated Work & Engineering
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Text-focused architectural breakdowns, verified applications, and code repositories.
          </p>
        </div>

        {/* ================================================================== */}
        {/* FLAGSHIP PROJECT CARD: CREZORA (Pure Text & Architecture)           */}
        {/* ================================================================== */}
        <article className="bg-surface/95 backdrop-blur-sm border-2 border-accent/40 rounded-2xl p-6 sm:p-10 shadow-card mb-12 sm:mb-16 relative overflow-hidden">
          
          {/* Card Top Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-border mb-6">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-mono px-3 py-1 rounded bg-accent text-white font-semibold">
                FLAGSHIP ECOSYSTEM
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded">
                Live Production
              </span>
              <span className="text-xs font-mono text-secondary">
                {crezora.year}
              </span>
            </div>
            <a
              href="https://crezora-co.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span>crezora-co.vercel.app</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Project Title & Narrative */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-primary tracking-tight">
                {crezora.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-accent font-display">
                {crezora.displayTag}
              </p>
              <p className="text-sm sm:text-base text-primary/90 leading-relaxed font-body max-w-3xl pt-1">
                {crezora.summary}
              </p>
            </div>

            {/* Problem & Architectural Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-xl bg-bg border border-border space-y-2">
                <div className="flex items-center gap-2 text-primary font-display font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
                  <h4>Problem & Motivation</h4>
                </div>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  {crezora.caseStudy.problem}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-bg border border-border space-y-2">
                <div className="flex items-center gap-2 text-primary font-display font-semibold text-sm">
                  <Cpu className="w-4 h-4 text-accent flex-shrink-0" />
                  <h4>Architecture & Solution</h4>
                </div>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  {crezora.caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Sai Teja's Contribution */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-secondary border border-border space-y-1.5">
              <p className="text-[11px] font-mono text-secondary uppercase tracking-wider font-semibold">
                Sai Teja's Role & Contribution:
              </p>
              <p className="text-xs sm:text-sm text-primary font-medium leading-relaxed">
                {crezora.caseStudy.myContribution}
              </p>
            </div>

            {/* Verified Highlights */}
            <div className="space-y-2 pt-1">
              <p className="text-xs font-mono uppercase tracking-wider text-secondary">
                Verified Highlights & Capabilities:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-secondary">
                {crezora.caseStudy.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-primary/90">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Tags */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-1.5">
                {crezora.stack.map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-bg border border-border rounded text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons (100% Touch-Friendly) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 border-t border-border/80">
              <a
                href={crezora.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white text-xs font-mono uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-subtle font-semibold min-h-[44px]"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => onSelectProject(crezora)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-bg border border-border text-primary text-xs font-mono uppercase tracking-wider hover:border-accent hover:text-accent transition-colors min-h-[44px]"
              >
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>Examine Case Study</span>
              </button>

              {crezora.githubUrl && (
                <a
                  href={crezora.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-bg border border-border text-secondary hover:text-primary transition-colors min-h-[44px]"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-mono sm:hidden">GitHub</span>
                </a>
              )}
            </div>
          </div>
        </article>

        {/* ================================================================== */}
        {/* SPOTLIGHT DUO: KalaaVerse & PYQUEST (Text-Based Cards)              */}
        {/* ================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* KalaaVerse */}
          <article className="bg-surface/95 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between hover-lift">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-border flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-accent/10 text-accent font-semibold">
                    SPOTLIGHT 01
                  </span>
                  <span className="text-xs font-mono text-secondary">{kalaaverse.year}</span>
                </div>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {kalaaverse.caseStudy.status}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-primary">
                  {kalaaverse.title}
                </h3>
                <p className="text-xs font-medium text-accent mt-1 font-mono">
                  {kalaaverse.displayTag}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                {kalaaverse.summary}
              </p>

              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-secondary block">
                  Key Implementations:
                </span>
                <ul className="space-y-1.5 text-xs text-secondary">
                  {kalaaverse.caseStudy.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {kalaaverse.stack.map(s => (
                  <span key={s} className="px-2 py-0.5 text-[11px] font-mono bg-bg border border-border rounded text-primary">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-border flex items-center justify-between">
              <button
                onClick={() => onSelectProject(kalaaverse)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:text-accent transition-colors min-h-[36px]"
              >
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>Examine Case Study</span>
              </button>
              {kalaaverse.githubUrl && (
                <a
                  href={kalaaverse.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-bg border border-border text-secondary hover:text-primary transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </article>

          {/* PYQUEST */}
          <article className="bg-surface/95 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between hover-lift">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-border flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-accent/10 text-accent font-semibold">
                    SPOTLIGHT 02
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

              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-secondary block">
                  Key Implementations:
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

            <div className="pt-5 mt-5 border-t border-border flex items-center justify-between">
              <button
                onClick={() => onSelectProject(pyquest)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:text-accent transition-colors min-h-[36px]"
              >
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>Examine Case Study</span>
              </button>
              {pyquest.githubUrl && (
                <a
                  href={pyquest.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-bg border border-border text-secondary hover:text-primary transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </article>
        </div>

        {/* ================================================================== */}
        {/* PROJECT DIRECTORY (Pure Text-Based Project Cards)                   */}
        {/* ================================================================== */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-border gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-primary">
                Project Directory & Specialized Systems
              </h3>
              <p className="text-xs font-mono text-secondary mt-1">
                Explore specialized prototypes, AI systems, and responsive web platforms.
              </p>
            </div>

            {/* Filter Tabs (Flex-wrapped & Touch-Friendly) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-bg border border-border rounded-xl">
              {categories.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all min-h-[32px] ${
                    activeTab === tab
                      ? 'bg-primary text-white font-semibold shadow-subtle'
                      : 'text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredProjects.map(project => (
              <article
                key={project.id}
                className="bg-bg/95 border border-border rounded-xl p-5 sm:p-6 flex flex-col justify-between hover-lift transition-all"
              >
                <div className="space-y-4">
                  
                  {/* Top Status & Year */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-secondary">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <div>
                    <h4 className="text-lg font-display font-bold text-primary hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs font-mono text-accent mt-0.5">
                      {project.displayTag}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Status Indicator */}
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-secondary bg-surface px-2.5 py-1 rounded border border-border">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{project.caseStudy.status}</span>
                    </span>
                  </div>

                  {/* Technology Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
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

                {/* Card Bottom Actions */}
                <div className="pt-4 mt-5 border-t border-border flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:text-accent transition-colors min-h-[36px]"
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
                        className="p-1.5 rounded-lg bg-surface border border-border text-secondary hover:text-primary transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center"
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
                        className="p-1.5 rounded-lg bg-surface border border-border text-secondary hover:text-accent transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center"
                        title="Open Live Application"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// ============================================================================
// 4. TECHNICAL SKILLS SECTION (Strictly 6 Capabilities — "My Core Toolkit")
// ============================================================================
export const TechnicalSkills: React.FC = () => {
  const capabilityIcons: Record<string, React.FC<{ className?: string }>> = {
    'HTML': Code2,
    'CSS': Palette,
    'JavaScript': Terminal,
    'React': Layers,
    'Python': Terminal,
    'UI/UX Architecture': Sparkles
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-surface/90 backdrop-blur-[2px] border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 sm:mb-16 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                03 // Professional Capabilities
              </span>
            </div>
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              My Core Toolkit
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-md text-left sm:text-right">
            The technologies and design disciplines I currently focus on to create functional, intuitive, and meaningful digital experiences.
          </p>
        </div>

        {/* Strictly 6 capability cards without percentage bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CORE_TOOLKIT.map((cap) => {
            const Icon = capabilityIcons[cap.name] || Terminal;

            return (
              <div
                key={cap.name}
                className="bg-bg/95 border border-border rounded-xl p-5 sm:p-6 shadow-card hover-lift flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent shadow-subtle">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded font-semibold">
                      {cap.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-bold text-primary">
                      {cap.name}
                    </h3>
                    <p className="text-xs font-mono text-secondary mt-1">
                      Focus: <strong className="text-primary font-medium">{cap.focus}</strong>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-secondary leading-relaxed font-body">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/80 flex items-center justify-between text-[11px] font-mono text-secondary">
                  <span>Disciplined Practice</span>
                  <span className="text-accent flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Applied in Projects</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-xl bg-surface/90 backdrop-blur-sm border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle">
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
// 5. EDUCATION & TIMELINE SECTION (B.Tech IT Expected June 2027)
// ============================================================================
export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 sm:mb-12 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                04 // Academic Foundations & Journey
              </span>
            </div>
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Education & Institutional Credentials
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Rigorous undergraduate studies in Information Technology anchored by strong mathematical foundations.
          </p>
        </div>

        {/* Primary Education Card */}
        <div className="rounded-2xl p-6 sm:p-8 border bg-bg/95 border-accent/40 shadow-card ring-1 ring-accent/20 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-primary text-white font-semibold">
                  {EDUCATION_DATA.period}
                </span>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {EDUCATION_DATA.status}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-primary">
                  {EDUCATION_DATA.institution}
                </h3>
                <p className="text-xs text-secondary font-mono mt-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>{EDUCATION_DATA.location}</span>
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-surface border border-border inline-block">
                <span className="text-[10px] font-mono text-secondary uppercase tracking-wider block">
                  Expected Graduation
                </span>
                <span className="text-lg font-bold text-accent font-display">
                  {EDUCATION_DATA.expectedGraduation}
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5 lg:pl-6 lg:border-l lg:border-border">
              <div>
                <h4 className="font-display font-semibold text-lg text-primary">
                  {EDUCATION_DATA.degree}
                </h4>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Core Curriculum & Coursework:</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION_DATA.coursework.map(course => (
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
                  <Sparkles className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Collegiate Leadership & Activities:</span>
                </p>
                <ul className="space-y-1.5">
                  {EDUCATION_DATA.highlights.map((h, i) => (
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

        {/* Development Journey Milestones */}
        <div className="space-y-6 sm:space-y-8">
          <div className="pb-3 border-b border-border">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-primary">
              Development Milestones & Trajectory
            </h3>
            <p className="text-xs font-mono text-secondary mt-1">
              From analytical mathematics to collegiate hackathons, media leadership, and software craft.
            </p>
          </div>

          <div className="relative border-l-2 border-border ml-2 sm:ml-4 space-y-8 sm:space-y-10 pl-5 sm:pl-8">
            {JOURNEY_MILESTONES.map((milestone, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-surface border-2 border-accent group-hover:scale-125 group-hover:bg-accent transition-all duration-200 shadow-subtle flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-white" />
                </div>

                <div className="bg-surface/95 backdrop-blur-sm border border-border rounded-xl p-5 sm:p-7 shadow-subtle hover-lift">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-surface-secondary border border-border text-primary font-medium">
                      {milestone.period}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">
                      {milestone.category}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-display font-bold text-primary mb-2">
                    {milestone.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  <div className="pt-3 border-t border-border">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-secondary mb-2">
                      Key Outcomes & Learnings:
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

      </div>
    </section>
  );
};

// ============================================================================
// 6. CONTACT SECTION ("Let's create something meaningful.")
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
    <section id="contact" className="py-20 sm:py-28 bg-surface/90 backdrop-blur-[2px] border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 sm:mb-16 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                05 // Direct Communication
              </span>
            </div>
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Let's create something meaningful.
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Open for internships, technical project collaborations, and academic opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-surface/95 backdrop-blur-sm border border-border rounded-2xl p-5 sm:p-8 shadow-card space-y-5">
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-primary mb-2">
                  Get in Touch
                </h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  Whether you have an internship opportunity, a project collaboration, or want to discuss creative technology, my inbox is always open.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bg border border-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-secondary">
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
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-primary font-mono select-all break-all">
                  {PERSONAL_INFO.email}
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-bg border border-border text-xs text-primary hover:border-accent/40 transition-colors min-h-[44px]"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-mono text-secondary uppercase">Telephone</p>
                      <p className="font-medium font-mono">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-bg border border-border text-xs text-primary min-h-[44px]">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-secondary uppercase">Location</p>
                    <p className="font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-secondary">Connect Online</span>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-bg border border-border text-secondary hover:text-primary hover:border-accent transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-bg border border-border text-secondary hover:text-primary hover:border-accent transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface/90 backdrop-blur-sm border border-border flex items-center gap-3 shadow-subtle">
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <p className="text-xs text-secondary leading-snug">
                <strong className="text-primary font-medium">Undergraduate Opportunities:</strong> Open to frontend development, software engineering internships, and collaborative builds.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface/95 backdrop-blur-sm border border-border rounded-2xl p-5 sm:p-8 shadow-card">
            <h3 className="font-display font-bold text-lg sm:text-xl text-primary mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-secondary mb-5 sm:mb-6 font-mono">
              Fill out the form below to reach me directly via email.
            </p>

            {formSubmitted ? (
              <div className="p-6 sm:p-8 text-center bg-bg rounded-xl border border-border space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-primary">Message Prepared!</h4>
                <p className="text-xs text-secondary max-w-md mx-auto">
                  Your mail client has been opened with your message. If it didn't open automatically, you can write directly to <strong className="text-primary">{PERSONAL_INFO.email}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-mono text-accent hover:underline min-h-[36px]"
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
                      className="w-full px-3.5 py-3 text-base sm:text-sm bg-bg border border-border rounded-xl text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors min-h-[44px]"
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
                      className="w-full px-3.5 py-3 text-base sm:text-sm bg-bg border border-border rounded-xl text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors min-h-[44px]"
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
                    className="w-full px-3.5 py-3 text-base sm:text-sm bg-bg border border-border rounded-xl text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors min-h-[44px]"
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
                    className="w-full px-3.5 py-3 text-base sm:text-sm bg-bg border border-border rounded-xl text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-primary text-white text-xs font-medium hover:bg-accent transition-colors shadow-subtle min-h-[44px]"
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
// 7. FOOTER & COLOPHON
// ============================================================================
export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface/90 backdrop-blur-[2px] border-t border-border py-12 sm:py-16 text-secondary text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-10 sm:pb-12 border-b border-border">
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
              B.Tech Information Technology student at Narasaraopeta Engineering College. Building refined digital products, intuitive interfaces, and web applications.
            </p>
            <p className="font-mono text-[11px] text-accent">
              Andhra Pradesh, India • Expected Graduation: {PERSONAL_INFO.expectedGraduation}
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
                  className="hover:text-primary hover:underline transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-bg border border-border text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle font-mono text-[11px] min-h-[36px]"
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
                className="p-2 rounded-lg bg-bg border border-border text-secondary hover:text-primary transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-bg border border-border text-secondary hover:text-primary transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-bg border border-border text-secondary hover:text-primary transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-secondary flex-wrap justify-center">
            <span>React + TypeScript + Tailwind CSS</span>
            <span>•</span>
            <span className="text-accent font-medium">Vercel Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
