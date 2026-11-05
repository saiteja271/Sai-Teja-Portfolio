import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectGallery } from './components/ProjectGallery';
import { ProjectModal } from './components/ProjectModal';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Education } from './components/Education';
import { DevelopmentJourney } from './components/DevelopmentJourney';
import { CreativeInterests } from './components/CreativeInterests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandMenu } from './components/CommandMenu';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Project } from './types/portfolio';
import { PROJECTS } from './data/portfolioData';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);

  const handleSelectProjectId = (projectId: string) => {
    const found = PROJECTS.find(p => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg text-primary relative selection:bg-accent/15 selection:text-accent">
      {/* Scroll depth indicator bar */}
      <ScrollProgress />

      {/* Custom Desktop Cursor Enhancement */}
      <CustomCursor />

      {/* Global Command Menu (Cmd/Ctrl + K) */}
      <CommandMenu
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onSelectProject={handleSelectProjectId}
      />

      {/* Navigation Header */}
      <Navbar onOpenCommand={() => setIsCommandOpen(true)} />

      {/* Main Portfolio Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero
          onExploreProjects={scrollToProjects}
          onContactClick={scrollToContact}
        />

        {/* Section 2: About & Principles */}
        <About />

        {/* Section 3: Curated Featured Case Studies */}
        <FeaturedProjects onSelectProject={setSelectedProject} />

        {/* Section 4: Project Catalog & Filtering */}
        <ProjectGallery onSelectProject={setSelectedProject} />

        {/* Section 5: Technical Capabilities & Stack */}
        <TechnicalSkills />

        {/* Section 6: Education & Institutional Credentials */}
        <Education />

        {/* Section 7: Chronological Growth & Milestones */}
        <DevelopmentJourney />

        {/* Section 8: Creative Pursuits & Multiverse */}
        <CreativeInterests />

        {/* Section 9: Direct Contact & Availability */}
        <Contact />
      </main>

      {/* Section 10: Colophon & Footer */}
      <Footer />

      {/* Project Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
