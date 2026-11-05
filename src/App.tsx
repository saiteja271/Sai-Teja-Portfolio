import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectGallery } from './components/ProjectGallery';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
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
    <div className="min-h-screen bg-bg text-primary relative selection:bg-accent/15 selection:text-accent">
      {/* Viewport Reading Depth Progress Bar */}
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

      {/* Navigation Header */}
      <Navbar
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Narrative Structure */}
      <main>
        {/* 1. Hero: Art-Directed Composition */}
        <Hero
          onExploreProjects={scrollToCaseStudies}
          onContactClick={scrollToContact}
        />

        {/* 2. About: Personal Storytelling Narrative */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. Curated Case Studies (CREZORA / KalaaVerse Flagship + PYQUEST & Sahayak AI Spotlight) */}
        <FeaturedProjects onSelectProject={setSelectedProject} />

        {/* 4. Complete Project Directory & Specialized Systems */}
        <ProjectGallery onSelectProject={setSelectedProject} />

        {/* 5. Technical Identity & Capability Tiers */}
        <TechnicalSkills />

        {/* 6. Education & Academic Standing */}
        <Education />

        {/* 7. Trajectory & Growth Milestones */}
        <DevelopmentJourney />

        {/* 8. The Creative Dimension (Editorial Design, Motion Pacing, Photography) */}
        <CreativeInterests />

        {/* 9. Direct Contact & Communication Channels */}
        <Contact />
      </main>

      {/* 10. Colophon & Footer */}
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
