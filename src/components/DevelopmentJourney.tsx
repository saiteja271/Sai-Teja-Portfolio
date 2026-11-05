import React from 'react';
import { ArrowRight } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const DevelopmentJourney: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <p className="font-mono text-xs uppercase tracking-widest text-secondary font-semibold">
                Chronological Growth
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Development Journey
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            From foundational sciences to collegiate hackathons, leadership, and software craft.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-border/80 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {JOURNEY_MILESTONES.map((milestone, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-accent group-hover:scale-125 group-hover:bg-accent transition-all duration-200 shadow-subtle flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-white" />
              </div>

              {/* Milestone Card */}
              <div className="bg-surface border border-border rounded-2xl p-6 sm:p-7 shadow-subtle hover-lift">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-surface-secondary border border-border text-primary font-medium">
                    {milestone.period}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
                    {milestone.type}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-primary mb-1">
                  {milestone.title}
                </h3>
                <p className="text-xs font-medium text-secondary font-mono mb-4">
                  {milestone.organization}
                </p>

                <p className="text-sm text-secondary leading-relaxed mb-5">
                  {milestone.description}
                </p>

                {/* Key Outcomes */}
                <div className="pt-4 border-t border-border/70">
                  <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-2.5">
                    Milestone Milestones & Learnings:
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
