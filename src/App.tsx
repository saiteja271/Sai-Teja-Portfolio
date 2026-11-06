import React, { useState } from 'react';
import { BackgroundAtmosphere } from './components/BackgroundAtmosphere';
import { Navbar, ScrollProgress, CustomCursor } from './components/Navigation';
import {
  Hero,
  About,
  FeaturedProjects,
  VideoGallery,
  TechnicalSkills,
  Education,
  Contact,
  Footer
} from './components/Sections';
import { ProjectModal, ResumeModal, VideoModal } from './components/Modals';
import { Project } from './data';
import { VIDEO_DEMOS, VideoDemo } from './videoData';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoDemo | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchProjectDemo = (project: Project) => {
    const matchingDemo =
      VIDEO_DEMOS.find(v => v.projectName.toLowerCase().includes(project.title.toLowerCase())) ||
      VIDEO_DEMOS[0];
    setSelectedVideo(matchingDemo);
  };

  return (
    <div className="min-h-screen bg-bg text-primary relative selection:bg-accent/15 selection:text-accent overflow-x-hidden">
      {/* Full-Page Atmospheric Visual System & Depth Wells */}
      <BackgroundAtmosphere />

      {/* Top Viewport Reading Progress Bar */}
      <ScrollProgress />

      {/* Custom Desktop Cursor Enhancement */}
      <CustomCursor />

      {/* Minimal & Elegant Sticky Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Narrative Sections Flowing Over Atmospheric Layer */}
      <main className="relative z-10">
        <Hero
          onExploreProjects={scrollToProjects}
          onContactClick={scrollToContact}
        />

        <About onOpenResume={() => setIsResumeOpen(true)} />

        <FeaturedProjects
          onSelectProject={setSelectedProject}
          onWatchDemo={handleWatchProjectDemo}
        />

        <VideoGallery onWatchVideo={setSelectedVideo} />

        <TechnicalSkills />

        <Education />

        <Contact />
      </main>

      {/* Colophon & Footer */}
      <Footer />

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onWatchDemo={handleWatchProjectDemo}
      />

      {/* Interactive Video Demonstration Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
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
