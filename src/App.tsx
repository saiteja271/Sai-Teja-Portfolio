import React, { useState } from 'react';
import { BackgroundAtmosphere } from './components/BackgroundAtmosphere';
import { Navbar, ScrollProgress, CustomCursor } from './components/Navigation';
import {
  Hero,
  About,
  FeaturedProjects,
  ProjectGallery,
  TechnicalSkills,
  Education,
  DevelopmentJourney,
  CreativeInterests,
  Contact,
  Footer
} from './components/Sections';
import { CommandMenu, ProjectModal, ResumeModal } from './components/Modals';
import { Project, PROJECTS } from './data';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const handleSelectProjectId = (projectId: string) => {
    const found = PROJECTS.find(p => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const scrollToCaseStudies = () => {
    const el = document.getElementById('case-studies');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg text-primary relative selection:bg-accent/15 selection:text-accent overflow-x-hidden">
      {/* Full-Page Calm Atmospheric Visual System & Depth Wells */}
      <BackgroundAtmosphere />

      {/* Top Viewport Reading Progress Bar */}
      <ScrollProgress />

      {/* Custom Desktop Cursor Enhancement */}
      <CustomCursor />

      {/* Global Command Palette (Cmd/Ctrl + K) */}
      <CommandMenu
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onSelectProject={handleSelectProjectId}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Architectural Sticky Navigation Header */}
      <Navbar
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Narrative Sections Flowing Over Atmospheric Layer */}
      <main className="relative z-10">
        <Hero
          onExploreProjects={scrollToCaseStudies}
          onContactClick={scrollToContact}
        />

        <About onOpenResume={() => setIsResumeOpen(true)} />

        <FeaturedProjects onSelectProject={setSelectedProject} />

        <ProjectGallery onSelectProject={setSelectedProject} />

        <TechnicalSkills />

        <Education />

        <DevelopmentJourney />

        <CreativeInterests />

        <Contact />
      </main>

      {/* Colophon & Footer */}
      <Footer />

      {/* Deep-Dive Case Study Modal */}
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
