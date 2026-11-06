import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  X,
  Printer,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  CheckCircle2,
  Cpu,
  Wrench,
  ShieldCheck
} from 'lucide-react';
import {
  PERSONAL_INFO,
  PROJECTS,
  EDUCATION_DATA,
  CORE_TOOLKIT,
  Project
} from '../data';

// ============================================================================
// 1. PROJECT CASE STUDY DETAIL MODAL (Text-Based Editorial Presentation)
// ============================================================================
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-primary/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-surface border border-border shadow-modal rounded-2xl max-h-[92vh] flex flex-col overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border bg-surface flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
              <span className="font-mono text-xs uppercase tracking-wider text-secondary truncate">
                Case Study
              </span>
              <span className="text-xs text-border">•</span>
              <span className="font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded truncate">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-secondary border border-transparent hover:border-border transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center flex-shrink-0"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body (Pure Editorial Architecture) */}
          <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-6">
            
            {/* Title & Metadata Header */}
            <div className="space-y-2 border-b border-border/70 pb-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary">
                  {project.title}
                </h2>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-surface-secondary border border-border text-secondary">
                  {project.year}
                </span>
              </div>
              <p className="text-sm sm:text-base font-medium text-accent font-display">
                {project.displayTag}
              </p>
              <p className="text-sm text-secondary leading-relaxed pt-1">
                {project.summary}
              </p>
            </div>

            {/* Status & Technology Stack */}
            <div className="p-4 rounded-xl bg-bg border border-border space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono text-secondary uppercase tracking-wider">Implementation Status:</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {caseStudy.status}
                </span>
              </div>
              
              <div className="pt-2 border-t border-border/60">
                <span className="text-xs font-mono text-secondary uppercase tracking-wider block mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-2.5 py-1 rounded bg-surface border border-border text-xs font-mono text-primary shadow-subtle">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="space-y-6 text-sm leading-relaxed text-secondary">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-display font-semibold text-base">
                  <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
                  <h3>Problem & Challenge</h3>
                </div>
                <p className="pl-6 border-l-2 border-accent/20">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-display font-semibold text-base">
                  <Cpu className="w-4 h-4 text-accent flex-shrink-0" />
                  <h3>Architecture & Solution</h3>
                </div>
                <p className="pl-6 border-l-2 border-accent/20">
                  {caseStudy.solution}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-display font-semibold text-base">
                  <Wrench className="w-4 h-4 text-accent flex-shrink-0" />
                  <h3>Sai Teja's Contribution</h3>
                </div>
                <p className="pl-6 border-l-2 border-accent/20 font-medium text-primary">
                  {caseStudy.myContribution}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-secondary">Verified Engineering Outcomes:</h4>
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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-5 sm:px-6 py-4 border-t border-border bg-surface-secondary gap-3 flex-shrink-0">
            <span className="text-xs font-mono text-secondary hidden sm:inline">
              Venkata Sai Teja Sampati — Technical Dossier
            </span>
            <div className="flex flex-wrap items-center gap-2.5 justify-end">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-border text-xs font-medium text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle min-h-[40px] flex-1 sm:flex-initial"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-white text-xs font-medium hover:bg-accent-hover transition-colors shadow-subtle min-h-[40px] flex-1 sm:flex-initial font-semibold"
                >
                  <span>Visit Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-surface border border-border text-xs font-medium text-secondary hover:text-primary transition-colors min-h-[40px]"
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

// ============================================================================
// 2. OFFICIAL RESUME VIEWER MODAL
// ============================================================================
interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-primary/70 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-surface border border-border shadow-modal rounded-2xl max-h-[92vh] flex flex-col overflow-hidden z-10"
        >
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border bg-surface flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                Official Curriculum Vitae (B.Tech IT)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg border border-border text-xs font-mono text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle min-h-[36px]"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-secondary transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="Close Resume"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-y-auto p-5 sm:p-10 font-body text-primary space-y-8 bg-surface">
            <div className="border-b border-border pb-6 text-center sm:text-left space-y-2">
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight text-primary">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                {EDUCATION_DATA.degree} • {EDUCATION_DATA.institution}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-xs font-mono text-secondary">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <span>{PERSONAL_INFO.phone}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  <span>{PERSONAL_INFO.email}</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <Linkedin className="w-3.5 h-3.5 text-accent" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <Github className="w-3.5 h-3.5 text-accent" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent font-bold border-b border-border/80 pb-1">
                Career Profile
              </h2>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                {PERSONAL_INFO.professionalIntroduction}
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent font-bold border-b border-border/80 pb-1">
                Education
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between text-xs gap-1">
                <div>
                  <h3 className="font-bold text-primary font-display">{EDUCATION_DATA.degree}</h3>
                  <p className="text-secondary">{EDUCATION_DATA.institution} — {EDUCATION_DATA.location}</p>
                </div>
                <div className="text-left sm:text-right font-mono text-secondary">
                  <span className="font-bold text-primary">{EDUCATION_DATA.status}</span>
                  <span className="block text-[11px]">{EDUCATION_DATA.period} • Expected {EDUCATION_DATA.expectedGraduation}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent font-bold border-b border-border/80 pb-1">
                Core Technical Toolkit
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {CORE_TOOLKIT.map(tool => (
                  <div key={tool.name} className="p-3 bg-bg border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-primary font-mono text-[11px] uppercase tracking-wider">
                        {tool.name}
                      </h3>
                      <span className="text-[10px] font-mono text-accent">{tool.focus}</span>
                    </div>
                    <p className="text-secondary leading-snug text-[11px]">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent font-bold border-b border-border/80 pb-1">
                Key Engineering Projects
              </h2>
              <div className="space-y-4 text-xs">
                {PROJECTS.slice(0, 4).map(p => (
                  <div key={p.id} className="space-y-1">
                    <div className="flex items-center justify-between font-mono flex-wrap gap-1">
                      <span className="font-bold text-primary font-display">{p.title} — {p.displayTag}</span>
                      <span className="text-secondary">{p.year}</span>
                    </div>
                    <p className="text-secondary leading-relaxed">
                      {p.summary}
                    </p>
                    <p className="text-accent font-mono text-[11px]">
                      Stack: {p.stack.join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent font-bold border-b border-border/80 pb-1">
                Collegiate Leadership & Activities
              </h2>
              <ul className="space-y-1.5 text-xs text-secondary list-disc pl-4">
                <li>Collaborated in multi-member engineering teams in college hackathons and Smart India Hackathon initiatives.</li>
                <li>Led cultural, photography, and videography coverage for major college events and student gatherings.</li>
                <li>Delivered technical seminars and project demonstrations on modern web architecture and conversational AI concepts.</li>
                <li>Prepared promotional trailers, video teasers, and poster visual assets using CapCut and Canva.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-t border-border bg-surface-secondary text-xs font-mono text-secondary flex-shrink-0">
            <span>Verified Record • Narasaraopeta, Andhra Pradesh</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-surface border border-border text-primary hover:border-accent transition-colors shadow-subtle min-h-[36px]"
            >
              Close Viewer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
