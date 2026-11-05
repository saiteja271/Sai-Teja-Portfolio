import React from 'react';
import { ArrowUpRight, Github, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const kalaaverse = PROJECTS.find(p => p.id === 'crezora-kalaaverse')!;
  const pyquest = PROJECTS.find(p => p.id === 'pyquest')!;
  const sahayak = PROJECTS.find(p => p.id === 'sahayak-ai')!;

  return (
    <section id="case-studies" className="py-28 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
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

        {/* ============================================================== */}
        {/* FEATURE 01: CREZORA / KALAVERSE (FULL-WIDTH FLAGSHIP SPREAD) */}
        {/* ============================================================== */}
        <article className="bg-surface border border-border rounded-2xl p-6 sm:p-10 lg:p-12 shadow-card mb-20 relative overflow-hidden">
          
          {/* Subtle accent light indicator */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top metadata strip */}
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

          {/* Grid Layout: Editorial text (7 cols) + Architectural mockup (5 cols) */}
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

              {/* Problem & Solution Side-by-Side Breakdown */}
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

              {/* Contribution Highlight */}
              <div className="p-4 rounded-xl bg-surface-secondary border border-border">
                <p className="text-[11px] font-mono text-secondary uppercase tracking-wider mb-1">
                  My Contribution:
                </p>
                <p className="text-xs text-primary font-medium">
                  {kalaaverse.caseStudy.myContribution}
                </p>
              </div>

              {/* Tech Stack Chips */}
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

              {/* Actions */}
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

            {/* Right Architectural Preview Wireframe / Visualization (5 cols) */}
            <div className="lg:col-span-5 bg-bg border border-border rounded-xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono text-secondary">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="font-semibold text-primary">CREZORA Ecosystem Loop</span>
                </div>
                <span>64+ Disciplines</span>
              </div>

              {/* Visual Diagram Box */}
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

        {/* ============================================================== */}
        {/* SPOTLIGHT DUO: PYQUEST & SAHAYAK AI (ASYMMETRIC 2-COLUMN GRID) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Spotlight A: PYQUEST */}
          <article className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between hover-lift">
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

              {/* Architectural Highlights */}
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

          {/* Spotlight B: SAHAYAK AI */}
          <article className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between hover-lift">
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

              {/* Architectural Highlights */}
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
