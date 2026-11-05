import React from 'react';
import { Film, Palette, Sparkles, Camera, Quote } from 'lucide-react';
import { CREATIVE_INTERESTS } from '../data/portfolioData';

export const CreativeInterests: React.FC = () => {
  const icons = [Film, Palette, Sparkles, Camera];

  return (
    <section id="interests" className="py-24 bg-surface border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <p className="font-mono text-xs uppercase tracking-widest text-secondary font-semibold">
                Creative Multiverse
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Creative Pursuits & Mediums
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Visual storytelling, video cutting, and interactive aesthetics informing engineering decisions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CREATIVE_INTERESTS.map((interest, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={interest.title}
                className="bg-bg border border-border rounded-2xl p-6 sm:p-8 hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-border mb-5">
                    <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-accent shadow-subtle">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-secondary px-2.5 py-0.5 rounded-full bg-surface border border-border">
                      {interest.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-primary mb-2">
                    {interest.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-6">
                    {interest.description}
                  </p>

                  {/* Tools */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-secondary block mb-2">
                      Tools & Mediums
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {interest.tools.map(tool => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-surface border border-border text-primary shadow-subtle"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Guiding Philosophy */}
                <div className="pt-4 border-t border-border/80 flex items-start gap-2.5 bg-surface/40 p-3.5 rounded-xl border">
                  <Quote className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 rotate-180" />
                  <p className="text-xs italic text-primary font-medium">
                    "{interest.philosophy}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
