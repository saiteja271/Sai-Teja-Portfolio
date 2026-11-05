import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Wrench, ShieldCheck } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-primary/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-surface border border-border shadow-modal rounded-modal max-h-[90vh] flex flex-col overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="font-mono text-xs uppercase tracking-wider text-secondary">
                Technical Case Study
              </span>
              <span className="text-xs text-border">•</span>
              <span className="font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-secondary border border-transparent hover:border-border transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-8">
            
            {/* Title & Metadata */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary">
                  {project.title}
                </h2>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface-secondary border border-border text-secondary">
                  {project.year}
                </span>
              </div>
              <p className="text-sm sm:text-base font-medium text-accent">
                {project.displayTag}
              </p>
              <p className="text-sm text-secondary leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Quick Status and Stack Grid */}
            <div className="p-4 rounded-xl bg-bg border border-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-secondary uppercase tracking-wider">Project Status</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {caseStudy.status}
                </span>
              </div>
              
              <div className="pt-2 border-t border-border/60">
                <span className="text-xs font-mono text-secondary uppercase tracking-wider block mb-2">Technologies Used</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-mono text-primary shadow-subtle">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Deep Breakdown Sections */}
            <div className="space-y-6 text-sm leading-relaxed text-secondary">
              
              {/* Problem */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-display font-semibold text-base">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <h3>Problem & Challenge</h3>
                </div>
                <p className="pl-6 border-l-2 border-accent/20">
                  {caseStudy.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-display font-semibold text-base">
                  <Cpu className="w-4 h-4 text-accent" />
                  <h3>Architectural Approach</h3>
                </div>
                <p className="pl-6 border-l-2 border-accent/20">
                  {caseStudy.approach}
                </p>
              </div>

              {/* Implementation */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-display font-semibold text-base">
                  <Layers className="w-4 h-4 text-accent" />
                  <h3>Implementation Details</h3>
                </div>
                <p className="pl-6 border-l-2 border-accent/20">
                  {caseStudy.implementation}
                </p>
              </div>

              {/* Sai Teja's Contribution */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-display font-semibold text-base">
                  <Wrench className="w-4 h-4 text-accent" />
                  <h3>Sai Teja's Contribution</h3>
                </div>
                <p className="pl-6 border-l-2 border-accent/20 font-medium text-primary">
                  {caseStudy.myContribution}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-secondary">Verified Key Outcomes</h4>
                <ul className="space-y-2">
                  {caseStudy.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-surface-secondary">
            <span className="text-xs font-mono text-secondary hidden sm:inline">
              Venkata Sai Teja Sampati — Engineering Dossier
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border text-xs font-medium text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-xs font-medium hover:bg-accent-hover transition-colors shadow-subtle"
                >
                  <span>Launch Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-surface border border-border text-xs font-medium text-secondary hover:text-primary transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
