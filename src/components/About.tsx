import React from 'react';
import { Code2, Compass, Layers, Sparkles, UserCheck, Languages, MapPin, Building2, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      description: "Developing robust, responsive interfaces with React, TypeScript, and modern CSS architectures. Committed to semantic HTML, clean state lifecycle, and snappy rendering."
    },
    {
      icon: Layers,
      title: "UI/UX & Design Systems",
      description: "Designing structured components, deliberate typography hierarchies, and intuitive layouts with Figma and Canva. Focusing on clarity over visual clutter."
    },
    {
      icon: Sparkles,
      title: "Creative Technology",
      description: "Exploring canvas interactions, procedural visual systems, and conversational AI prototypes (Sahayak AI, KalaaVerse) to bridge code and human engagement."
    },
    {
      icon: Compass,
      title: "Leadership & Presentation",
      description: "Active leadership in college cultural events, video productions, and hackathon project demos. Experienced in translating complex technical concepts into clear narratives."
    }
  ];

  return (
    <section id="about" className="py-24 bg-surface border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <p className="font-mono text-xs uppercase tracking-widest text-secondary font-semibold">
                Biography & Principles
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              About Sai Teja
            </h2>
          </div>
          <p className="font-mono text-xs text-secondary max-w-xs text-left sm:text-right">
            Student • Developer • Creative Technologist
          </p>
        </div>

        {/* Narrative & Profile Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Editorial Text (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-secondary text-base leading-relaxed">
            <p className="text-lg text-primary font-medium leading-relaxed">
              Hello! I'm <strong className="font-semibold text-primary">{PERSONAL_INFO.fullName}</strong>, an Information Technology undergraduate at Narasaraopeta Engineering College, Andhra Pradesh.
            </p>
            
            <p>
              My journey in computing is driven by a passion for creating applications that feel effortless, intuitive, and genuinely helpful. Rather than treating frontend engineering as purely functional code, I approach software as a digital craft where typographic rhythm, crisp feedback, and engineering rigor coexist.
            </p>

            <p>
              Across academic hackathons, personal experiments, and collegiate leadership roles, I have spearheaded the design and development of platforms like <strong className="text-primary font-medium">KalaaVerse</strong> (a unified digital creative ecosystem) and <strong className="text-primary font-medium">PyQuest</strong> (a gamified computer science learning experience).
            </p>

            <p>
              Outside of traditional code, I actively direct video edits, coordinate campus media coverage, and experiment with generative AI interaction models. This hybrid background allows me to communicate effectively with design teams, engineers, and stakeholders alike.
            </p>

            {/* Quick Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-bg border border-border">
                <div className="p-1 rounded-full bg-accent/10 text-accent flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-primary font-display">Clarity Above Clutter</h4>
                  <p className="text-[11px] text-secondary mt-0.5">Every element and interaction must serve an intentional purpose.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-bg border border-border">
                <div className="p-1 rounded-full bg-accent/10 text-accent flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-primary font-display">Responsive Discipline</h4>
                  <p className="text-[11px] text-secondary mt-0.5">Tested from 360px phones to ultra-wide desktop displays.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts Dossier (Right 5 cols) */}
          <div className="lg:col-span-5 bg-bg border border-border rounded-2xl p-6 sm:p-7 shadow-subtle space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <span className="font-display font-bold text-sm text-primary uppercase tracking-wider">
                Identity Snapshot
              </span>
              <span className="font-mono text-xs text-accent">Verified</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-mono text-secondary">Institution</p>
                  <p className="text-sm font-semibold text-primary">{PERSONAL_INFO.college}</p>
                  <p className="text-xs text-secondary mt-0.5">B.Tech in Information Technology • CGPA {PERSONAL_INFO.cgpa}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-mono text-secondary">Location & Relocation</p>
                  <p className="text-sm font-semibold text-primary">{PERSONAL_INFO.city}, {PERSONAL_INFO.state}</p>
                  <p className="text-xs text-secondary mt-0.5">Open to on-site internships & opportunities in Chennai / Bangalore / Hyderabad / Pan-India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Languages className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-mono text-secondary">Languages Spoken</p>
                  <p className="text-sm font-semibold text-primary">Telugu (Native) • English (Proficient) • Hindi (Working)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UserCheck className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-mono text-secondary">Status</p>
                  <p className="text-sm font-semibold text-emerald-600 font-mono">
                    {PERSONAL_INFO.availabilityStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-border">
              <a
                href="#contact"
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl bg-surface border border-border text-xs font-medium text-primary hover:border-accent hover:text-accent transition-colors shadow-subtle"
              >
                Request Official Resume PDF
              </a>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 pt-16 border-t border-border/80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-bg border border-border hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent mb-4 shadow-subtle">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-secondary">
                  <span>Pillar 0{i + 1}</span>
                  <span className="text-accent">Active</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
