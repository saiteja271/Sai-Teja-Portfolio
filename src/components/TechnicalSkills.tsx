import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { SKILL_GROUPS, SkillProficiency } from '../data/portfolioData';

export const TechnicalSkills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | SkillProficiency>('All');

  const proficiencyLegend: { label: SkillProficiency; color: string; desc: string }[] = [
    {
      label: "Hands-on Experience",
      color: "bg-accent text-white border-accent",
      desc: "Daily implementation in personal apps, prototypes & hackathon builds."
    },
    {
      label: "Comfortable",
      color: "bg-surface-secondary text-primary border-border",
      desc: "Strong academic foundations & practical coursework projects."
    },
    {
      label: "Currently Exploring",
      color: "bg-bg text-secondary border-dashed border-border",
      desc: "Actively studying in self-directed research & modern architectures."
    }
  ];

  return (
    <section id="capabilities" className="py-28 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                04 // Technical Identity
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Engineering Capabilities
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Honest proficiency tiers reflecting hands-on builds, collegiate foundations, and active research.
          </p>
        </div>

        {/* Editorial Legend Bar */}
        <div className="p-4 sm:p-5 rounded-xl bg-surface border border-border mb-12 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Proficiency Index:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                activeFilter === 'All'
                  ? 'bg-primary text-white font-semibold'
                  : 'bg-surface-secondary text-secondary hover:text-primary'
              }`}
            >
              All Tiers
            </button>
            {proficiencyLegend.map(item => (
              <button
                key={item.label}
                onClick={() => setActiveFilter(item.label)}
                className={`px-3 py-1 rounded text-xs font-mono border transition-all ${
                  activeFilter === item.label
                    ? 'ring-2 ring-accent font-semibold shadow-subtle'
                    : ''
                } ${item.color}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stacked Typographic Category Sections (No repetitive generic card blocks!) */}
        <div className="space-y-12">
          {SKILL_GROUPS.map((group, groupIdx) => {
            const filteredSkills = group.skills.filter(s => {
              if (activeFilter === 'All') return true;
              return s.proficiency === activeFilter;
            });

            if (filteredSkills.length === 0) return null;

            return (
              <div
                key={group.category}
                className="bg-surface border border-border rounded-xl p-6 sm:p-8 shadow-card"
              >
                {/* Category Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 mb-6 border-b border-border gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-accent font-bold">
                      0{groupIdx + 1}
                    </span>
                    <h3 className="text-xl font-display font-bold text-primary">
                      {group.category}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-secondary">
                    {group.tagline}
                  </p>
                </div>

                {/* Skills Grid for this Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredSkills.map(skill => {
                    const isHandsOn = skill.proficiency === 'Hands-on Experience';
                    const isComfortable = skill.proficiency === 'Comfortable';

                    return (
                      <div
                        key={skill.name}
                        className={`p-3.5 rounded-lg border transition-all hover-lift ${
                          isHandsOn
                            ? 'bg-bg border-accent/30 shadow-subtle'
                            : isComfortable
                            ? 'bg-bg border-border'
                            : 'bg-bg border-dashed border-border/80'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="text-xs font-bold text-primary font-display flex items-center gap-1.5">
                            {isHandsOn && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                            {isComfortable && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                            {!isHandsOn && !isComfortable && <span className="w-1.5 h-1.5 rounded-full bg-secondary/50" />}
                            <span>{skill.name}</span>
                          </h4>

                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            isHandsOn
                              ? 'bg-accent/10 text-accent font-semibold'
                              : isComfortable
                              ? 'bg-surface-secondary text-secondary'
                              : 'bg-surface text-secondary/70 border border-border/60'
                          }`}>
                            {skill.proficiency}
                          </span>
                        </div>

                        <p className="text-[11px] text-secondary leading-snug font-body">
                          {skill.context}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Footnote */}
        <div className="mt-12 p-6 rounded-xl bg-surface border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle">
          <div className="space-y-1">
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              The Engineering Creed
            </h4>
            <p className="text-xs text-secondary max-w-2xl leading-relaxed">
              "Languages and frameworks change every cycle. Deep appreciation for data structures, asynchronous event loops, clean component contracts, and UX empathy remain permanent."
            </p>
          </div>
          <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1.5 rounded whitespace-nowrap">
            Principled Craft
          </span>
        </div>

      </div>
    </section>
  );
};
