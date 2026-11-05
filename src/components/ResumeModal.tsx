import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, PROJECTS, SKILL_GROUPS } from '../data/portfolioData';

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
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-primary/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-surface border border-border shadow-modal rounded-xl max-h-[92vh] flex flex-col overflow-hidden z-10"
        >
          {/* Header Bar */}
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

          {/* Document Content */}
          <div className="overflow-y-auto p-6 sm:p-10 font-body text-primary space-y-8 bg-surface">
            
            {/* Resume Header */}
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

            {/* Profile Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent font-bold border-b border-border/80 pb-1">
                Career Profile
              </h2>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                B.Tech Information Technology student with hands-on experience in frontend engineering, UI/UX architecture, responsive web applications, and creative problem solving. Experienced in leading multi-module project concepts (KalaaVerse, PYQUEST), campus festival media coverage, and technical seminar presentations. Eager to contribute disciplined engineering, adaptability, and clear communication to frontend and software development teams.
              </p>
            </div>

            {/* Education */}
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

            {/* Technical Skills */}
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

            {/* Selected Projects */}
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

            {/* Campus Leadership & Activities */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent font-bold border-b border-border/80 pb-1">
                Campus Leadership & Achievements
              </h2>
              <ul className="space-y-1.5 text-xs text-secondary list-disc pl-4">
                <li>Collaborated in multi-member engineering teams in college hackathons and Smart India Hackathon initiatives.</li>
                <li>Led cultural, photography, and videography coverage for major college events and student gatherings.</li>
                <li>Delivered technical seminars and project demonstrations on modern web architecture and conversational AI concepts.</li>
                <li>Prepared promotional trailers, video teasers, and poster visual assets using CapCut and Canva.</li>
              </ul>
            </div>

          </div>

          {/* Footer Action */}
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
