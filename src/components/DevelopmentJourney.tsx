import React from 'react';
import { ArrowRight } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const DevelopmentJourney: React.FC = () => {
  return (
    <section id="journey" className="py-28 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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

        {/* Editorial Vertical Sequence */}
        <div className="relative border-l-2 border-border ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {JOURNEY_MILESTONES.map((milestone, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Bullet */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-accent group-hover:scale-125 group-hover:bg-accent transition-all duration-200 shadow-subtle flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-white" />
              </div>

              {/* Milestone Card */}
              <div className="bg-surface border border-border rounded-xl p-6 sm:p-7 shadow-subtle hover-lift">
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

                {/* Key Outcomes */}
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
