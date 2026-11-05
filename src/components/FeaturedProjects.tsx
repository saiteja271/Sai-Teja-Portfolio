import React from 'react';
import { ArrowUpRight, Github, BookOpen } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const featured = PROJECTS.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <p className="font-mono text-xs uppercase tracking-widest text-secondary font-semibold">
                Curated Works
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Featured Case Studies
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Deep technical investigations, user-centric prototypes, and production applications.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-10">
          {featured.map((project, index) => (
            <article
              key={project.id}
              className="bg-surface border border-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-card hover-lift transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Overview (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-accent/10 text-accent font-semibold">
                      0{index + 1} • {project.category}
                    </span>
                    <span className="text-xs font-mono text-secondary">
                      {project.year}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-secondary border border-border text-secondary">
                      {project.caseStudy.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-accent mt-1">
                      {project.displayTag}
                    </p>
                  </div>

                  <p className="text-secondary text-sm sm:text-base leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights preview */}
                  <div className="pt-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-2">Architecture Highlight:</p>
                    <p className="text-xs text-primary font-medium pl-3 border-l-2 border-accent">
                      {project.caseStudy.highlights[0]}
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-bg border border-border rounded-md text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action & Dossier Card (4 cols) */}
                <div className="lg:col-span-4 bg-bg border border-border rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <span className="text-xs font-mono text-secondary uppercase tracking-wider">Role</span>
                      <span className="text-xs font-semibold text-primary font-mono">Lead / Core Developer</span>
                    </div>
                    <div className="py-3 border-b border-border space-y-1">
                      <span className="text-[11px] font-mono text-secondary uppercase tracking-wider block">Contribution</span>
                      <p className="text-xs text-secondary line-clamp-3">
                        {project.caseStudy.myContribution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white text-xs font-medium hover:bg-accent transition-colors shadow-subtle"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Read Complete Case Study</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface border border-border text-xs font-medium text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle"
                      >
                        <Github className="w-4 h-4" />
                        <span>Inspect Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
