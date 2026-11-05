import React from 'react';
import { Film, Camera, PenTool, Sparkles, Quote, Image as ImageIcon } from 'lucide-react';
import { CREATIVE_WORKS } from '../data/portfolioData';

export const CreativeInterests: React.FC = () => {
  const posterWork = CREATIVE_WORKS.find(w => w.id === 'editorial-poster')!;
  const otherWorks = CREATIVE_WORKS.filter(w => w.id !== 'editorial-poster');

  const icons = [Film, Camera, PenTool];

  return (
    <section id="creative" className="py-28 bg-surface border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-16 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                07 // The Creative Dimension
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Design, Art Direction & Moving Image
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Visual storytelling, graphic design, and cinematic pacing shaping software sensibility.
          </p>
        </div>

        {/* Magazine-Style Feature Spread: Editorial Design & Digital Art */}
        <div className="bg-bg border border-border rounded-2xl p-6 sm:p-10 shadow-card mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Artwork Showcase (6 cols) */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-border/80 bg-surface shadow-subtle group">
              {posterWork.image ? (
                <img
                  src={posterWork.image}
                  alt={posterWork.title}
                  className="w-full h-auto object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              ) : (
                <div className="aspect-[4/3] flex items-center justify-center bg-surface-secondary">
                  <ImageIcon className="w-8 h-8 text-secondary" />
                </div>
              )}
              <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono text-primary border border-border flex items-center gap-1.5 shadow-subtle">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Original Editorial Composition</span>
              </div>
            </div>

            {/* Editorial Essay & Insight (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded">
                  {posterWork.category}
                </span>
                <span className="text-xs font-mono text-secondary">
                  {posterWork.medium}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary">
                {posterWork.title}
              </h3>

              <p className="text-sm text-secondary leading-relaxed font-body">
                {posterWork.description}
              </p>

              <div className="p-4 rounded-xl bg-surface border border-border flex items-start gap-3 shadow-subtle">
                <Quote className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 rotate-180" />
                <p className="text-xs italic text-primary font-medium leading-relaxed">
                  "{posterWork.insight}"
                </p>
              </div>

              <div className="pt-2 text-xs font-mono text-secondary">
                Designed & composite crafted by Sai Teja using Canva & typography tools.
              </div>
            </div>

          </div>
        </div>

        {/* 3 Secondary Editorial Columns: Videography, Photography, Writing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherWorks.map((work, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={work.id}
                className="bg-bg border border-border rounded-xl p-6 flex flex-col justify-between hover-lift"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-accent shadow-subtle">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-secondary">
                      Medium 0{index + 2}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-accent block mb-1">
                      {work.category}
                    </span>
                    <h4 className="text-lg font-display font-bold text-primary">
                      {work.title}
                    </h4>
                    <p className="text-xs font-mono text-secondary mt-0.5">
                      {work.medium}
                    </p>
                  </div>

                  <p className="text-xs text-secondary leading-relaxed font-body">
                    {work.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-[11px] italic text-primary font-medium">
                    "{work.insight}"
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
