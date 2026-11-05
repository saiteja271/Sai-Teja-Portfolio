import React from 'react';
import { Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const TechnicalSkills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <p className="font-mono text-xs uppercase tracking-widest text-secondary font-semibold">
                Competencies & Stack
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Technical Capabilities
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Systematic software development combined with design intuition and media production.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-card hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-border flex items-center justify-center text-accent">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent font-medium">
                    {category.badge}
                  </span>
                </div>

                {/* Skills list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-bg border border-border/80 hover:border-accent/40 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <h4 className="text-xs font-semibold text-primary font-display">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-secondary mt-1 leading-snug pl-3.5">
                        {skill.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-secondary">
                <span>Continuously updated</span>
                <span className="text-primary font-medium">{category.skills.length} core proficiencies</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle">
          <div className="space-y-1">
            <h4 className="text-sm font-display font-bold text-primary">
              Approach to Technology Adoption
            </h4>
            <p className="text-xs text-secondary max-w-2xl">
              "I prioritize strong foundational programming in Python, Java, and JavaScript before adopting higher-level frameworks. Modern tools like React and Vite are leveraged to craft fast, responsive, and maintainable user experiences."
            </p>
          </div>
          <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1.5 rounded-full whitespace-nowrap self-start sm:self-center">
            Zero Guesswork
          </span>
        </div>

      </div>
    </section>
  );
};
