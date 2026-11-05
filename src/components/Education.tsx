import React from 'react';
import { Award, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-surface border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <p className="font-mono text-xs uppercase tracking-widest text-secondary font-semibold">
                Academic Background
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Education & Credentials
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-sm text-left sm:text-right">
            Rigorous undergraduate studies in Information Technology complemented by strong mathematical foundations.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8">
          {EDUCATION_DATA.map((edu, index) => (
            <div
              key={edu.degree}
              className={`rounded-2xl p-6 sm:p-8 border transition-all ${
                index === 0
                  ? 'bg-bg border-accent/40 shadow-card ring-1 ring-accent/15'
                  : 'bg-bg border-border shadow-subtle'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Meta details (4 cols) */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-accent text-white font-semibold">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      {edu.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-primary">
                      {edu.institution}
                    </h3>
                    <p className="text-xs text-secondary font-mono flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      {edu.location}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-surface border border-border inline-block">
                    <span className="text-[11px] font-mono text-secondary uppercase tracking-wider block">
                      Academic Score
                    </span>
                    <span className="text-base font-bold text-accent font-display">
                      {edu.score}
                    </span>
                    {edu.regulation && (
                      <span className="text-[10px] font-mono text-secondary block mt-0.5">
                        {edu.regulation}
                      </span>
                    )}
                  </div>
                </div>

                {/* Coursework & Highlights (8 cols) */}
                <div className="lg:col-span-8 space-y-5 lg:pl-6 lg:border-l lg:border-border">
                  <div>
                    <h4 className="font-display font-semibold text-base text-primary mb-1">
                      {edu.degree}
                    </h4>
                  </div>

                  {/* Coursework */}
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-accent" />
                      <span>Key Curriculum & Modules</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map(course => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs text-primary font-mono shadow-subtle"
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
                      <span>Academic & Campus Contributions</span>
                    </p>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-secondary leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
