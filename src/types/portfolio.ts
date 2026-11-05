export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  approach: string;
  implementation: string;
  myContribution: string;
  status: 'In Active Evolution' | 'Completed & Deployed' | 'Academic Submission' | 'Concept Prototype';
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  displayTag: string;
  category: 'Full-Stack' | 'AI & Systems' | 'UI/UX & Creative';
  summary: string;
  featured: boolean;
  year: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: ProjectCaseStudy;
}

export interface SkillCategory {
  title: string;
  badge: string;
  skills: {
    name: string;
    focus: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  score: string;
  regulation?: string;
  coursework: string[];
  highlights: string[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  organization: string;
  type: 'Education' | 'Leadership' | 'Development' | 'Innovation';
  description: string;
  keyOutcomes: string[];
}

export interface CreativeInterest {
  title: string;
  category: string;
  description: string;
  tools: string[];
  philosophy: string;
}
