// ============================================================================
// CENTRALIZED VIDEO DEMONSTRATIONS DATA
// Edit this file to add, modify, or update video showcases and demo recordings.
// Supports: Direct MP4 video paths, YouTube embed URLs, or standard video links.
// ============================================================================

export interface VideoDemo {
  id: string;
  projectName: string;
  videoTitle: string;
  description: string;
  thumbnail: string;
  videoUrl: string; // Direct MP4 path (e.g., '/assets/videos/crezora-demo.mp4') or YouTube embed
  isDirectVideo: boolean; // true for MP4/WebM, false for YouTube embed iframe
  liveAppUrl?: string;
  featured?: boolean;
}

export const VIDEO_DEMOS: VideoDemo[] = [
  {
    id: "crezora-demo",
    projectName: "CREZORA",
    videoTitle: "CREZORA — Flagship Creative Technology Ecosystem Reveal",
    description: "A cinematic walkthrough demonstrating CREZORA's core vision, product modules, and multi-disciplinary creative workflows.",
    thumbnail: "/assets/projects/mobile-interface.png",
    videoUrl: "/assets/videos/crezora-demo.mp4",
    isDirectVideo: true,
    liveAppUrl: "https://crezora.co",
    featured: true
  },
  {
    id: "bhashaverse-demo",
    projectName: "BhashaVerse & AI Learning",
    videoTitle: "BhashaVerse — Global Translation & Vernacular Creative Exploration",
    description: "Demonstration of multilingual conceptual translation, bridging ideas and creative briefs across Indian regional languages.",
    thumbnail: "/assets/projects/placemate.png",
    videoUrl: "/assets/videos/bhashaverse-demo.mp4",
    isDirectVideo: true,
    liveAppUrl: "https://github.com/saiteja271",
    featured: false
  },
  {
    id: "pyquest-demo",
    projectName: "PYQUEST",
    videoTitle: "PYQUEST — Gamified Python Learning & Challenge Engine Walkthrough",
    description: "Interactive demonstration of quest progressions, real-time client-side crucible code puzzle evaluator, and student achievement badges.",
    thumbnail: "/assets/projects/lumina.png",
    videoUrl: "/assets/videos/crezora-demo.mp4", // Editable placeholder
    isDirectVideo: true,
    liveAppUrl: "https://github.com/saiteja271",
    featured: false
  },
  {
    id: "placemate-demo",
    projectName: "PlaceMate AI",
    videoTitle: "PlaceMate AI — Campus Placement & Interview Intelligence Simulation",
    description: "Detailed interface tour highlighting mock interview diagnostic dashboards, aptitude heatmaps, and resume ATS compatibility analysis.",
    thumbnail: "/assets/projects/placemate.png",
    videoUrl: "/assets/videos/crezora-demo.mp4", // Editable placeholder
    isDirectVideo: true,
    liveAppUrl: "https://github.com/saiteja271",
    featured: false
  }
];
