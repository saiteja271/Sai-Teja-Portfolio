import React, { useState } from 'react';
import { BackgroundAtmosphere } from './components/BackgroundAtmosphere';
import { Navbar, ScrollProgress, CustomCursor } from './components/Navigation';
import {
  Hero,
  About,
  FeaturedProjects,
  TechnicalSkills,
  Education,
  Contact,
  Footer
} from './components/Sections';
import { ProjectModal, ResumeModal } from './components/Modals';
import { Project } from './data';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg text-primary relative selection:bg-accent/15 selection:text-accent overflow-x-hidden">
      {/* Full-Page Atmospheric Visual System & Depth Wells */}
      <BackgroundAtmosphere />

      {/* Top Viewport Reading Progress Bar */}
      <ScrollProgress />

      {/* Custom Desktop Cursor Enhancement (hidden on touch/mobile) */}
      <CustomCursor />

      {/* Minimal & Elegant Sticky Navigation Header with Mobile Drawer */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Narrative Flow */}
      <main className="relative z-10">
        <Hero
          onExploreProjects={scrollToProjects}
          onContactClick={scrollToContact}
        />

        <About onOpenResume={() => setIsResumeOpen(true)} />

        <FeaturedProjects onSelectProject={setSelectedProject} />

        <TechnicalSkills />

        <Education />

        <Contact />
      </main>

      {/* Colophon & Footer */}
      <Footer />

      {/* Text-Based Deep-Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Official Verified Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
