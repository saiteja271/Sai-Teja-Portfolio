export type SkillProficiency = 'Hands-on Experience' | 'Comfortable' | 'Currently Exploring';

export interface SkillItem {
  name: string;
  proficiency: SkillProficiency;
  context: string;
}

export interface SkillGroup {
  category: string;
  tagline: string;
  skills: SkillItem[];
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  myContribution: string;
  status: 'Flagship Prototype' | 'In Active Evolution' | 'Completed & Deployed' | 'Academic Submission' | 'Concept Prototype';
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  displayTag: string;
  category: 'Full-Stack' | 'AI & Systems' | 'UI/UX & Creative';
  summary: string;
  featured: boolean;
  spotlight?: boolean;
  year: string;
  stack: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: ProjectCaseStudy;
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
  category: 'Education' | 'Leadership' | 'Development' | 'Innovation';
  description: string;
  keyOutcomes: string[];
}

export interface CreativeWork {
  id: string;
  title: string;
  category: string;
  medium: string;
  image?: string;
  description: string;
  insight: string;
}
