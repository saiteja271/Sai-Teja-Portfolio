import React from 'react';
import { GraduationCap, MapPin, Building2, Languages, UserCheck, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const identityRoles = [
    "Frontend Developer",
    "Creative Technologist",
    "Product Builder",
    "B.Tech IT Student",
    "Independent Creator"
  ];

  return (
    <section id="about" className="py-28 bg-surface border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              01 // Background & Identity
            </span>
          </div>
          <span className="font-mono text-xs text-secondary hidden sm:inline">
            Narasaraopeta Engineering College • Andhra Pradesh
          </span>
        </div>

        {/* Editorial Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight leading-[1.15]">
                "Curiosity is where everything begins."
              </h2>
              <div className="h-1 w-16 bg-accent mt-4" />
            </div>

            <div className="space-y-5 text-secondary text-base leading-relaxed">
              <p className="text-lg text-primary font-medium leading-relaxed font-body">
                I am <strong className="font-semibold text-primary">{PERSONAL_INFO.fullName}</strong>, an Information Technology undergraduate at Narasaraopeta Engineering College, building software with intentional aesthetics and engineering rigor.
              </p>

              <p>
                My path into technology did not begin with copy-pasting tutorials. It started from an obsession with deconstructing how systems communicate. Whether modeling computational logic in Python and Java or exploring how typographical whitespace influences human cognition, I treat software engineering as an expressive digital craft.
              </p>

              <p>
                Across competitive hackathons and campus initiatives, I have conceptualized and engineered platforms such as <strong className="text-primary font-medium">CREZORA / KalaaVerse</strong> (an operating system connecting 64+ creative disciplines) and <strong className="text-primary font-medium">PYQUEST</strong> (a gamified computer science learning experience).
              </p>

              <p>
                Beyond code, I have held leadership roles across college cultural and media initiatives—directing event trailers with CapCut, capturing architectural photography, and translating technical architectures into compelling seminar demonstrations. This dual background lets me move effortlessly between design systems, code reviews, and product strategy.
              </p>
            </div>

            {/* Identity Roles Strip */}
            <div className="pt-4 border-t border-border/80">
              <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-3">
                Core Identity Dimensions:
              </p>
              <div className="flex flex-wrap gap-2">
                {identityRoles.map(role => (
                  <span
                    key={role}
                    className="px-3 py-1 text-xs font-mono bg-bg border border-border text-primary rounded-md"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Structured Specification Sheet (5 cols - Minimalist Editorial Table) */}
          <div className="lg:col-span-5 bg-bg border border-border rounded-xl p-6 sm:p-7 shadow-subtle space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <span className="font-display font-bold text-sm text-primary uppercase tracking-wider">
                Academic & Dossier Data
              </span>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Active B.Tech
              </span>
            </div>

            {/* Spec Table */}
            <div className="space-y-4 text-xs font-mono divide-y divide-border/60">
              <div className="pt-3 first:pt-0 flex items-start justify-between gap-4">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <Building2 className="w-3.5 h-3.5 text-accent" />
                  <span>College</span>
                </span>
                <span className="text-right text-primary font-medium">
                  {PERSONAL_INFO.college}
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <GraduationCap className="w-3.5 h-3.5 text-accent" />
                  <span>Degree & Major</span>
                </span>
                <span className="text-right text-primary font-medium">
                  B.Tech — Information Technology
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <span className="w-3.5 text-center text-accent font-bold">#</span>
                  <span>Academic Grade</span>
                </span>
                <span className="text-right text-accent font-bold">
                  {PERSONAL_INFO.cgpa} CGPA ({PERSONAL_INFO.regulation})
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Base Location</span>
                </span>
                <span className="text-right text-primary font-medium">
                  {PERSONAL_INFO.city}, {PERSONAL_INFO.state}, India
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <Languages className="w-3.5 h-3.5 text-accent" />
                  <span>Languages</span>
                </span>
                <span className="text-right text-primary font-medium">
                  Telugu (Native), English, Hindi
                </span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <span className="text-secondary flex items-center gap-1.5 flex-shrink-0">
                  <UserCheck className="w-3.5 h-3.5 text-accent" />
                  <span>Availability</span>
                </span>
                <span className="text-right text-emerald-600 font-semibold">
                  Open for Collaborations & Internships
                </span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-surface border border-border text-xs font-mono font-medium text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>Examine Verified Resume</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
