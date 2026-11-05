import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, BookOpen } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'All' | 'Full-Stack' | 'AI & Systems' | 'UI/UX & Creative';

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');

  const categories: FilterCategory[] = ['All', 'Full-Stack', 'AI & Systems', 'UI/UX & Creative'];

  const filteredProjects = PROJECTS.filter(project => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section className="py-20 bg-surface border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <p className="font-mono text-xs uppercase tracking-widest text-secondary font-semibold">
                Comprehensive Index
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight">
              Project Archive & Prototypes
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-bg border border-border overflow-x-auto max-w-full">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white font-semibold shadow-subtle'
                    : 'text-secondary hover:text-primary hover:bg-surface'
                }`}
              >
                {cat}
                <span className="ml-1.5 text-[10px] opacity-70">
                  ({cat === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="bg-bg border border-border rounded-xl p-6 flex flex-col justify-between hover-lift"
              >
                <div>
                  {/* Category & Status Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-secondary">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-display font-bold text-primary mb-1 hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-accent mb-3">
                    {project.displayTag}
                  </p>

                  {/* Summary */}
                  <p className="text-xs text-secondary leading-relaxed mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono bg-surface border border-border rounded text-primary"
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

                {/* Card Actions */}
                <div className="pt-4 border-t border-border flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-surface border border-border text-secondary hover:text-primary hover:border-accent transition-colors shadow-subtle"
                      title="Inspect GitHub Repository"
                      aria-label="Inspect GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Informational Subtext */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-secondary">
            All codebases, design files, and academic submissions are authentic representations of work completed during B.Tech studies.
          </p>
        </div>

      </div>
    </section>
  );
};
