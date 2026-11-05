import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, BookOpen, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
}

type CategoryTab = 'All' | 'Full-Stack' | 'AI & Systems' | 'UI/UX & Creative';

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('All');

  const categories: CategoryTab[] = ['All', 'Full-Stack', 'AI & Systems', 'UI/UX & Creative'];

  // All secondary/archive projects or full list filtered
  const filteredProjects = PROJECTS.filter(project => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  return (
    <section id="archive" className="py-24 bg-surface border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Working Category Filter Tabs */}
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

          {/* Clean architectural filter tabs (No oversized pill shape) */}
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

        {/* Varied Asymmetric Cards Grid */}
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
                  className="bg-bg border border-border rounded-xl p-5 sm:p-6 flex flex-col justify-between hover-lift transition-all"
                >
                  <div className="space-y-4">
                    
                    {/* Optional Real Project Image Showcase */}
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

                    {/* Metadata Header */}
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

                    {/* Status Pill */}
                    <div className="pt-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-secondary">
                        Status: {project.caseStudy.status}
                      </span>
                    </div>

                    {/* Tech Stack Chips */}
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

                  {/* Card Action Row */}
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

        {/* Footnote */}
        <div className="mt-12 text-center border-t border-border/80 pt-6">
          <p className="text-xs font-mono text-secondary">
            Verified academic and personal engineering builds from Narasaraopeta Engineering College (B.Tech IT). Zero fabricated metrics.
          </p>
        </div>

      </div>
    </section>
  );
};
