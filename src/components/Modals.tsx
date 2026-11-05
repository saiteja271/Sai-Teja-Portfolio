import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  FolderKanban,
  Navigation,
  Copy,
  ExternalLink,
  Check,
  X,
  CornerDownLeft,
  FileText,
  Printer,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  CheckCircle2,
  Cpu,
  Wrench,
  ShieldCheck,
  Image as ImageIcon
} from 'lucide-react';
import {
  PERSONAL_INFO,
  PROJECTS,
  NAVIGATION_LINKS,
  EDUCATION_DATA,
  SKILL_GROUPS,
  Project
} from '../data';

// ============================================================================
// 1. COMMAND MENU (CTRL/CMD + K)
// ============================================================================
interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
  onOpenResume: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onOpenResume
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const navigationItems = NAVIGATION_LINKS.map(link => ({
    type: 'nav',
    id: link.href,
    title: `Navigate to ${link.label}`,
    category: 'Navigation',
    action: () => {
      onClose();
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }));

  const projectItems = PROJECTS.map(p => ({
    type: 'project',
    id: p.id,
    title: p.title,
    subtitle: p.displayTag,
    category: 'Projects',
    action: () => {
      onClose();
      onSelectProject(p.id);
    }
  }));

  const actionItems = [
    {
      type: 'resume',
      id: 'open-resume',
      title: 'Examine Official Resume & Academic Record',
      category: 'Dossier',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      type: 'action',
      id: 'copy-email',
      title: copied ? 'Email Copied to Clipboard!' : `Copy Email (${PERSONAL_INFO.email})`,
      category: 'Actions',
      icon: copied ? Check : Copy,
      action: copyEmail
    },
    {
      type: 'external',
      id: 'github',
      title: 'Open GitHub Profile (@saiteja271)',
      category: 'External Links',
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      type: 'external',
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External Links',
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank', 'noopener,noreferrer');
        onClose();
      }
    }
  ];

  const allItems = [...actionItems, ...navigationItems, ...projectItems];

  const filteredItems = allItems.filter(item => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      (item as { subtitle?: string }).subtitle?.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    const handleListKeys = (e: KeyboardEvent) => {
      if (!isOpen || filteredItems.length === 0) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        filteredItems[selectedIndex]?.action();
      }
    };

    window.addEventListener('keydown', handleListKeys);
    return () => window.removeEventListener('keydown', handleListKeys);
  }, [isOpen, filteredItems, selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-surface border border-border shadow-modal rounded-xl overflow-hidden z-10"
          >
            <div className="flex items-center px-4 py-3.5 border-b border-border bg-surface">
              <Search className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search case studies, sections, resume, or actions..."
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent text-sm font-body text-primary placeholder-secondary/60 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-secondary hover:text-primary transition-colors mr-2"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] font-mono text-secondary bg-surface-secondary rounded border border-border">
                ESC
              </kbd>
            </div>

            <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-border/40">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-sm text-secondary">
                  No matching results for <span className="font-medium text-primary">"{query}"</span>
                </div>
              ) : (
                <div className="py-1 space-y-0.5">
                  {filteredItems.map((item, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                      <button
                        key={`${item.category}-${item.id}-${index}`}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left transition-all ${
                          isSelected
                            ? 'bg-accent text-white shadow-subtle'
                            : 'text-primary hover:bg-surface-secondary'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {item.type === 'resume' && (
                            <FileText className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-accent'}`} />
                          )}
                          {item.type === 'nav' && (
                            <Navigation className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-secondary'}`} />
                          )}
                          {item.type === 'project' && (
                            <FolderKanban className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-accent'}`} />
                          )}
                          {item.type === 'action' && (
                            <Copy className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
                          )}
                          {item.type === 'external' && (
                            <ExternalLink className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-secondary'}`} />
                          )}

                          <div className="min-w-0">
                            <p className="text-sm font-medium truncate">{item.title}</p>
                            {(item as { subtitle?: string }).subtitle && (
                              <p className={`text-xs truncate ${isSelected ? 'text-white/80' : 'text-secondary'}`}>
                                {(item as { subtitle?: string }).subtitle}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                          <span className={`text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-surface-secondary text-secondary border border-border/60'
                          }`}>
                            {item.category}
                          </span>
                          {isSelected && (
                            <CornerDownLeft className="w-3.5 h-3.5 text-white/90" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="px-4 py-2.5 bg-surface-secondary border-t border-border flex items-center justify-between text-[11px] text-secondary font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-surface rounded border border-border">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-surface rounded border border-border">↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-surface rounded border border-border">↵</kbd>
                  <span>Select</span>
                </span>
              </div>
              <span>Press <kbd className="px-1 py-0.5 bg-surface rounded border border-border">ESC</kbd> to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ============================================================================
// 2. PROJECT CASE STUDY DETAIL MODAL
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-primary/60 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-surface border border-border shadow-modal rounded-xl max-h-[92vh] flex flex-col overflow-hidden z-10"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="font-mono text-xs uppercase tracking-wider text-secondary">
                Technical Case Study
              </span>
              <span className="text-xs text-border">•</span>
              <span className="font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">
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

          <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-7">
            {project.image && (
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-border bg-surface-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-2 left-2 bg-surface/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-mono text-primary border border-border flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-accent" />
                  <span>UI Architecture Snapshot</span>
                </div>
              </div>
            )}

            <div className="space-y-2">
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
              <p className="text-sm text-secondary leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-bg border border-border space-y-3">
              <div className="flex items-center justify-between">
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

            <div className="space-y-6 text-sm leading-relaxed text-secondary">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-display font-semibold text-base">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <h3>Problem & Challenge</h3>
                </div>
                <p className="pl-6 border-l-2 border-accent/20">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-display font-semibold text-base">
                  <Cpu className="w-4 h-4 text-accent" />
                  <h3>Architecture & Solution</h3>
                </div>
                <p className="pl-6 border-l-2 border-accent/20">
                  {caseStudy.solution}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-display font-semibold text-base">
                  <Wrench className="w-4 h-4 text-accent" />
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

// ============================================================================
// 3. OFFICIAL RESUME VIEWER MODAL
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
          className="relative w-full max-w-4xl bg-surface border border-border shadow-modal rounded-xl max-h-[92vh] flex flex-col overflow-hidden z-10"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                Official Curriculum Vitae (B.Tech IT)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg border border-border text-xs font-mono text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-secondary transition-colors"
                aria-label="Close Resume"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-y-auto p-6 sm:p-10 font-body text-primary space-y-8 bg-surface">
            <div className="border-b border-border pb-6 text-center sm:text-left space-y-2">
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight text-primary">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                B.Tech. in Information Technology • Narasaraopeta Engineering College
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
                  <span>{PERSONAL_INFO.city}, {PERSONAL_INFO.state}</span>
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
                B.Tech Information Technology student with hands-on experience in frontend engineering, UI/UX architecture, responsive web applications, and creative problem solving. Experienced in leading multi-module project concepts (KalaaVerse, PYQUEST), campus festival media coverage, and technical seminar presentations. Eager to contribute disciplined engineering, adaptability, and clear communication to frontend and software development teams.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent font-bold border-b border-border/80 pb-1">
                Education
              </h2>
              <div className="space-y-4">
                {EDUCATION_DATA.map(edu => (
                  <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-start justify-between text-xs gap-1">
                    <div>
                      <h3 className="font-bold text-primary font-display">{edu.degree}</h3>
                      <p className="text-secondary">{edu.institution} — {edu.location}</p>
                    </div>
                    <div className="text-left sm:text-right font-mono text-secondary">
                      <span className="font-bold text-primary">{edu.score}</span>
                      <span className="block text-[11px]">{edu.period} • {edu.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent font-bold border-b border-border/80 pb-1">
                Technical Proficiencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {SKILL_GROUPS.map(group => (
                  <div key={group.category} className="p-3 bg-bg border border-border rounded-lg">
                    <h3 className="font-bold text-primary font-mono text-[11px] uppercase tracking-wider mb-1">
                      {group.category}
                    </h3>
                    <p className="text-secondary leading-snug">
                      {group.skills.map(s => s.name).join(', ')}
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
                    <div className="flex items-center justify-between font-mono">
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
                Campus Leadership & Activities
              </h2>
              <ul className="space-y-1.5 text-xs text-secondary list-disc pl-4">
                <li>Collaborated in multi-member engineering teams in college hackathons and Smart India Hackathon initiatives.</li>
                <li>Led cultural, photography, and videography coverage for major college events and student gatherings.</li>
                <li>Delivered technical seminars and project demonstrations on modern web architecture and conversational AI concepts.</li>
                <li>Prepared promotional trailers, video teasers, and poster visual assets using CapCut and Canva.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between px-6 py-3.5 border-t border-border bg-surface-secondary text-xs font-mono text-secondary">
            <span>Verified Record • Narasaraopeta, Andhra Pradesh</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-surface border border-border text-primary hover:border-accent transition-colors shadow-subtle"
            >
              Close Viewer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
