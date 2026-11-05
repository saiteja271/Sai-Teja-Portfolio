import React from 'react';
import { Award, BookOpen, CheckCircle2, Building2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-surface border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                05 // Academic Foundations
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Education & Institutional Credentials
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Rigorous undergraduate studies in Information Technology anchored by strong mathematical foundations.
          </p>
        </div>

        {/* Education Timeline Matrix */}
        <div className="space-y-8">
          {EDUCATION_DATA.map((edu, index) => {
            const isPrimary = index === 0;

            return (
              <div
                key={edu.degree}
                className={`rounded-xl p-6 sm:p-8 border transition-all ${
                  isPrimary
                    ? 'bg-bg border-accent/40 shadow-card ring-1 ring-accent/20'
                    : 'bg-bg border-border shadow-subtle'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Institution & Scores (4 cols) */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-primary text-white font-semibold">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {edu.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-xl text-primary">
                        {edu.institution}
                      </h3>
                      <p className="text-xs text-secondary font-mono mt-1 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-accent" />
                        <span>{edu.location}</span>
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-surface border border-border inline-block">
                      <span className="text-[10px] font-mono text-secondary uppercase tracking-wider block">
                        Academic Standing
                      </span>
                      <span className="text-lg font-bold text-accent font-display">
                        {edu.score}
                      </span>
                      {edu.regulation && (
                        <span className="text-[11px] font-mono text-secondary block mt-0.5">
                          {edu.regulation}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Curriculum & Campus Leadership (8 cols) */}
                  <div className="lg:col-span-8 space-y-6 lg:pl-6 lg:border-l lg:border-border">
                    <div>
                      <h4 className="font-display font-semibold text-lg text-primary">
                        {edu.degree}
                      </h4>
                    </div>

                    {/* Coursework Modules */}
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-2.5 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-accent" />
                        <span>Core Curriculum & Coursework:</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map(course => (
                          <span
                            key={course}
                            className="px-2.5 py-1 rounded bg-surface border border-border text-xs text-primary font-mono shadow-subtle"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-2 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-accent" />
                        <span>Collegiate Leadership & Demonstrations:</span>
                      </p>
                      <ul className="space-y-1.5">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-secondary leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
