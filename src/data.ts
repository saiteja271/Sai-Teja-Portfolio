// ============================================================================
// CENTRALIZED PORTFOLIO DATA: Venkata Sai Teja Sampati (Refinement 3.0)
// ============================================================================

export interface CoreCapability {
  name: string;
  category: string;
  description: string;
  focus: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  myContribution: string;
  status: 'Live Application' | 'Working Prototype' | 'Academic Submission' | 'Concept Design';
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
  altLiveUrl?: string;
  githubUrl?: string;
  hasDemoVideo?: boolean;
  caseStudy: ProjectCaseStudy;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  expectedGraduation: string;
  coursework: string[];
  highlights: string[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  category: 'Academic Learning' | 'Personal Projects' | 'Collaborative Development' | 'Hackathon Experiences' | 'Creative Experimentation';
  description: string;
  keyOutcomes: string[];
}

export const PERSONAL_INFO = {
  fullName: "VENKATA SAI TEJA SAMPATI",
  displayName: "SAI TEJA",
  heroHeadingLine1: "VENKATA SAI TEJA",
  heroHeadingLine2: "SAMPATI.",
  supportingHeadline: "Building digital experiences. Exploring technology. Turning ideas into reality.",
  professionalIdentity: "Developer | Creative Technologist | UI/UX Enthusiast | Digital Product Builder",
  professionalIntroduction: "I'm Sai Teja, a B.Tech Information Technology student, developer, and creative technologist passionate about creating meaningful digital experiences. I enjoy combining engineering, design, and creativity to transform ideas into functional applications and digital products. From developing web applications and exploring AI-powered solutions to experimenting with UI/UX and building creative platforms, I believe technology becomes meaningful when it solves real problems and creates memorable experiences.",
  educationDegree: "B.Tech — Information Technology",
  college: "Narasaraopeta Engineering College",
  educationStatus: "Currently Pursuing",
  expectedGraduation: "June 2027",
  location: "Andhra Pradesh, India",
  email: "saitejasampati@gmail.com",
  phone: "+91 8328692645",
  linkedin: "https://www.linkedin.com/in/sai-teja-sampati",
  github: "https://github.com/saiteja271",
  portraitPath: "/assets/profile/portrait.png",
  portraitFallback: "/assets/profile/portrait.jpg"
};

export const ABOUT_DATA = {
  heading: "More than just code.",
  approach: "I enjoy understanding problems before building solutions. I believe a good application is not just about functionality; it should also be intuitive, visually appealing, accessible, and useful.",
  interests: [
    { title: "Software Development", description: "Architecting modular, maintainable web applications with reliable logic and state lifecycles." },
    { title: "Frontend Engineering", description: "Crafting responsive, high-performance interfaces with clean component hierarchies and semantic HTML." },
    { title: "UI/UX Design", description: "Structuring intuitive user flows, clear visual hierarchies, and accessible design system tokens." },
    { title: "Creative Technology", description: "Exploring procedural canvas systems, interactive micro-animations, and expressive digital media." },
    { title: "AI-Powered Applications", description: "Translating conversational AI capabilities and intelligent tooling into practical, daily workflows." },
    { title: "Digital Product Development", description: "Taking concepts from initial whiteboarding and user journey mapping to deployed reality." },
    { title: "Photography & Visual Storytelling", description: "Observing symmetry, light temperature, and compositional framing across natural landscapes." },
    { title: "Creative Writing & Content Creation", description: "Articulating product philosophies and drafting clear technical narratives for modern software." }
  ]
};

// EXACTLY 6 PROFESSIONAL CAPABILITIES
export const CORE_TOOLKIT: CoreCapability[] = [
  {
    name: "HTML",
    category: "Structure & Semantics",
    description: "Semantic document architecture, accessible ARIA landmarks, SEO best practices, and clean DOM hierarchy.",
    focus: "Accessibility & Semantic Structure"
  },
  {
    name: "CSS",
    category: "Styling & Responsive Systems",
    description: "Modern CSS grid, flexbox layouts, design tokens, fluid typography, micro-interactions, and responsive design across all viewports.",
    focus: "Modern Layouts & Design Tokens"
  },
  {
    name: "JavaScript",
    category: "Core Web Language",
    description: "Modern ES6+ syntax, asynchronous programming patterns, event-driven DOM manipulation, and robust client logic.",
    focus: "ES6+, Async Logic & DOM APIs"
  },
  {
    name: "React",
    category: "Application Framework",
    description: "Component-driven architecture, custom hooks, reactive state lifecycle, performance optimization, and modular UI engineering.",
    focus: "Component Lifecycles & State Design"
  },
  {
    name: "Python",
    category: "Programming & Intelligence",
    description: "Algorithmic problem solving, object-oriented programming, data structures, automation scripting, and backend API integration.",
    focus: "Algorithms, OOP & Automation"
  },
  {
    name: "UI/UX Architecture",
    category: "Design Systems & Product Craft",
    description: "Information architecture, design system formulation, wireframing, typography pairing, and human-centered design thinking.",
    focus: "Information Architecture & User Journeys"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "crezora",
    title: "CREZORA",
    displayTag: "Creative Technology Ecosystem & Digital Products",
    category: "UI/UX & Creative",
    summary: "CREZORA is a creative technology ecosystem focused on building meaningful digital experiences and innovative products.",
    featured: true,
    spotlight: true,
    year: "2025 – 2026",
    stack: ["React", "JavaScript", "Modern CSS", "HTML5 Canvas", "UI/UX Architecture"],
    image: "/assets/projects/mobile-interface.png",
    liveUrl: "https://crezora.co",
    altLiveUrl: "https://crezora-co.vercel.app",
    githubUrl: "https://github.com/saiteja271",
    hasDemoVideo: true,
    caseStudy: {
      overview: "CREZORA is an end-to-end creative technology ecosystem designed to bridge creators, multidisciplinary tools, and digital product experiences in a cohesive, aesthetically refined environment.",
      problem: "Creative professionals and independent builders frequently struggle with fragmented workflows across disconnected tools, portfolio platforms, and isolated creative communities.",
      solution: "Engineered a unified digital ecosystem featuring creator hubs, modular application workflows, and collaborative project rooms, deployed live at https://crezora.co.",
      myContribution: "Led product concept architecture, complete frontend interface development, brand identity formulation, and continuous deployment workflows.",
      status: "Live Application",
      highlights: [
        "Live and accessible worldwide on official domain: https://crezora.co",
        "Backup verified deployment maintained at https://crezora-co.vercel.app",
        "High-performance responsive design with zero layout shifts",
        "Demonstrated in collegiate hackathon competitions"
      ]
    }
  },
  {
    id: "kalaaverse",
    title: "KalaaVerse",
    displayTag: "Flagship Creator Operating System & Capability Network",
    category: "UI/UX & Creative",
    summary: "An ecosystem connecting 64+ creative disciplines, talent profiles, evidence-based capability matching, and collaborative workrooms.",
    featured: true,
    spotlight: true,
    year: "2025",
    stack: ["JavaScript (ES6+)", "UI Systems", "HTML5 Canvas", "Hackathon Finalist"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "KalaaVerse is an operating system for creators that focuses on verified creative evidence, dual Creator/Client modes, and transparent capability matching.",
      problem: "Traditional freelancing platforms evaluate artists solely on vanity metrics, ignoring deep craft disciplines and portfolio context.",
      solution: "Constructed an explainable capability graph linking creators based on workroom evidence, consent layers, and multi-disciplinary competencies.",
      myContribution: "Spearheaded product ideation, visual design tokens, modular UI screens, and presented the live prototype during campus hackathon finals.",
      status: "Working Prototype",
      highlights: [
        "64+ creative disciplines supported in one cohesive architecture",
        "Dual-mode architecture (Creator Mode and Client Mode)",
        "Zero-backend dependency client prototype for rapid demonstration"
      ]
    }
  },
  {
    id: "pyquest",
    title: "PYQUEST",
    displayTag: "Gamified Python Learning Platform",
    category: "Full-Stack",
    summary: "An interactive, quest-based learning platform transforming Python language fundamentals into gamified quests, interactive crucible code challenges, streak systems, and live dashboards.",
    featured: true,
    spotlight: true,
    year: "2025",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Gamification Engine"],
    githubUrl: "https://github.com/saiteja271",
    hasDemoVideo: true,
    caseStudy: {
      overview: "PyQuest eliminates beginner programmer burnout by transforming textbook coding lessons into interactive crucible challenges with immediate client-side feedback.",
      problem: "Standard educational coding materials delay feedback loops, causing high attrition among first-year engineering students.",
      solution: "Developed an engaging, distraction-free web platform featuring live puzzle evaluation, streak counters, unlockable badges, and interactive challenge banks.",
      myContribution: "Architected component hierarchy in React and TypeScript, authored challenge generation scripts, and designed the high-density responsive dashboard.",
      status: "Working Prototype",
      highlights: [
        "Strict TypeScript typing across quizzes, levels, and user progress",
        "Instant zero-latency client-side challenge evaluation",
        "Adaptive responsive layouts for mobile and desktop learners"
      ]
    }
  },
  {
    id: "sahayak-ai",
    title: "Sahayak AI",
    displayTag: "AI-Powered Academic Teaching Assistant",
    category: "AI & Systems",
    summary: "An empathetic conversational academic companion for university students, decomposing difficult theoretical engineering concepts into intuitive analogies, step-by-step notes, and multilingual guidance.",
    featured: false,
    year: "2025",
    stack: ["Python", "Conversational UI", "REST APIs", "Educational Tech"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "Sahayak AI acts as a 24/7 academic tutor designed to clarify complex undergraduate curriculum subjects with step-by-step analogies and bilingual support.",
      problem: "High student-faculty ratios leave students reluctant to ask foundational doubts during lectures, creating persistent academic knowledge gaps.",
      solution: "Engineered a tiered educational query pipeline: concise conceptual summaries, visual analogies, and rigorous formula/code breakdowns.",
      myContribution: "Formulated educational workflows, designed conversational dialogue components, and structured domain prompt engineering.",
      status: "Working Prototype",
      highlights: [
        "Tiered explanation model reducing cognitive overload",
        "Bilingual conceptual bridging between English and regional comprehension",
        "Distraction-free conversation UI with syntax formatting"
      ]
    }
  },
  {
    id: "placemate-ai",
    title: "PlaceMate AI",
    displayTag: "Campus Placement Readiness & Interview Intelligence",
    category: "AI & Systems",
    summary: "A placement preparation platform featuring AI-driven mock interview simulations, resume scoring against job descriptions, and domain readiness analytics.",
    featured: false,
    image: "/assets/projects/placemate.png",
    year: "2024 – 2025",
    stack: ["React", "TypeScript", "Tailwind CSS", "Data Analytics"],
    githubUrl: "https://github.com/saiteja271",
    hasDemoVideo: true,
    caseStudy: {
      overview: "PlaceMate AI bridges collegiate academic coursework and corporate recruitment expectations with simulated interview readiness diagnostics.",
      problem: "Students frequently struggle to know whether their technical skills match specific job roles before facing interview rejections.",
      solution: "Designed a clean diagnostic interface with competency radar charts, technical Q&A flows, and specific suggestions to improve resume ATS alignment.",
      myContribution: "Engineered the frontend showcase dashboard, metric visualization components, and candidate evaluation flows.",
      status: "Working Prototype",
      highlights: [
        "Comprehensive diagnostic dashboard tracking aptitude and technical readiness",
        "Visual competency radar charts and instant breakdown metrics",
        "Tailored for engineering campus placement cell workflows"
      ]
    }
  },
  {
    id: "lumina-studio",
    title: "LUMINA Studio",
    displayTag: "Minimalist Interactive Visual Canvas Studio",
    category: "UI/UX & Creative",
    summary: "A razor-sharp web creative workspace exploring procedural canvas rendering, geometric composition manipulation, and frictionless digital sketching.",
    featured: false,
    image: "/assets/projects/lumina.png",
    year: "2024",
    stack: ["TypeScript", "Vite", "HTML5 Canvas", "Unit Testing"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "An experimental visual engineering workspace designed to evaluate 60fps canvas manipulation, layout geometry algorithms, and distraction-free digital sketching.",
      problem: "Existing graphic design tools are overly bloated for fast geometric layout experiments and compositional sketching.",
      solution: "Engineered a lightweight canvas application focusing on instant startup, zero-lag coordinate math, and clean keyboard shortcuts.",
      myContribution: "Implemented the canvas rendering pipeline, tool state managers, coordinate transformation math, and automated unit tests.",
      status: "Academic Submission",
      highlights: [
        "60fps smooth rendering with pure HTML5 Canvas and zero heavy graphics dependencies",
        "Automated unit test coverage verifying editor coordinate transforms",
        "Clean monochrome UI putting creative content front and center"
      ]
    }
  },
  {
    id: "citymind",
    title: "CityMind",
    displayTag: "Civic Infrastructure & Urban Intelligence System",
    category: "AI & Systems",
    summary: "A smart civic reporting and municipal issue-tracking dashboard enabling citizens to report local infrastructure issues and track administrative resolution milestones.",
    featured: false,
    year: "2025",
    stack: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "CityMind conceptualizes a transparent civic bridge between municipal departments and residents. Citizens report road hazards, sanitation concerns, or water issues with geolocation tags.",
      problem: "Civic grievance redressal systems in tier-2 cities often lack transparency, leaving citizens uncertain if their municipal complaints are assigned or resolved.",
      solution: "Built a status-driven dashboard with clear timeline milestones (Reported → Inspected → In Progress → Resolved), photo verification, and departmental analytics.",
      myContribution: "Engineered citizen reporting forms, status timeline trackers, and municipal officer dispatch views.",
      status: "Concept Design",
      highlights: [
        "Milestone-based complaint status tracking with photo verification",
        "Intuitive categorization for municipal departments",
        "Responsive mobile-first layout for on-the-ground issue submissions"
      ]
    }
  },
  {
    id: "chitti-ai",
    title: "Chitti AI",
    displayTag: "Reflective Personal AI Thinking Companion",
    category: "AI & Systems",
    summary: "A contemplative personal intelligence companion focused on helping users think deeply, ideate across divergent perspectives, and synthesize unstructured notes.",
    featured: false,
    year: "2025",
    stack: ["Python", "Conversational UX", "Generative Models"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "Part of the CREZORA ecosystem, Chitti AI is conceived as a reflective intellectual partner—not merely an answer generator, but a thought clarifier that prompts user self-reflection.",
      problem: "Most AI assistants rush to generate answers, shutting down human creative curiosity instead of acting as a collaborative thinking sounding board.",
      solution: "Designed conversational flows centered around Socratic questioning, mental model breakdowns, and iterative ideation phases (Think ✦ Ideate ✦ Reflect).",
      myContribution: "Created the cognitive interface concept, user dialogue states, and integrated it into the CREZORA ecosystem switcher.",
      status: "Concept Design",
      highlights: [
        "Socratic dialogue design prioritizing exploratory reasoning over instant answers",
        "Deep integration with KalaaVerse creative workrooms",
        "Minimalist editorial chat aesthetic"
      ]
    }
  },
  {
    id: "bhashaverse",
    title: "BhashaVerse",
    displayTag: "Multilingual Creative Localization Engine",
    category: "UI/UX & Creative",
    summary: "A localization engine designed to translate and adapt creative concepts, cultural idioms, and artistic briefs seamlessly across Indian regional languages.",
    featured: false,
    year: "2025",
    stack: ["JavaScript", "NLP Concepts", "UI Systems"],
    githubUrl: "https://github.com/saiteja271",
    hasDemoVideo: true,
    caseStudy: {
      overview: "BhashaVerse bridges regional linguistic barriers for independent creators across India, enabling ideas conceptualized in Telugu, Hindi, or Tamil to be shared without cultural distortion.",
      problem: "Generic translation tools translate text literally, losing emotional nuances, regional slang, and creative metaphors critical to artistic briefs.",
      solution: "Engineered an idiom-aware localization interface that suggests contextual equivalents for creative expressions across regional languages.",
      myContribution: "Authored linguistic mapping concepts, interface wireframes, and cross-lingual translation preview flows.",
      status: "Concept Design",
      highlights: [
        "Contextual idiom-preserving localization for creative storyboards and scripts",
        "Side-by-side comparative preview interface",
        "Designed for indigenous Indian creative communities"
      ]
    }
  },
  {
    id: "queueless",
    title: "QueueLess",
    displayTag: "Smart Operational Queue Management Console",
    category: "Full-Stack",
    summary: "A streamlined queue orchestration and dispatch console designed to minimize waiting times and optimize staff counter workflows across institutional environments.",
    featured: false,
    year: "2024",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "QueueLess replaces chaotic physical token slips with a synchronized digital dispatch system that provides real-time wait estimations and counter routing.",
      problem: "Institutional service desks and administrative offices waste substantial time and paper managing uncoordinated in-person queues.",
      solution: "Structured dual high-contrast views: a keyboard-friendly operator console for counter personnel and a clear public monitor visible across waiting areas.",
      myContribution: "Designed both counter staff and public display interfaces, managed queue state persistence, and refined typographical legibility.",
      status: "Live Application",
      highlights: [
        "Dual-perspective admin and public waiting hall monitors",
        "Keyboard shortcut support for rapid token dispatching by operators",
        "Ultra-lightweight footprint requiring minimal hardware resources"
      ]
    }
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Technology (B.Tech.) — Information Technology",
  institution: "Narasaraopeta Engineering College",
  location: "Narasaraopeta, Andhra Pradesh, India",
  period: "2023 – 2027",
  status: "Currently Pursuing",
  expectedGraduation: "June 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java & Python)",
    "Database Management Systems",
    "Web Technologies & Frontend Architecture",
    "Computer Networks & Operating Systems",
    "Software Engineering Methodologies"
  ],
  highlights: [
    "Smart India Hackathon (SIH) initiative participant and collegiate innovation finalist",
    "Active contributor to college technical demonstrations and creative media initiatives",
    "Presented technical seminars on modern frontend engineering and creative technology"
  ]
};

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    period: "2025 – Present",
    title: "Flagship Architectures & Creative Technology Products",
    category: "Personal Projects",
    description: "Developing and deploying live digital products (CREZORA at https://crezora.co) and gamified learning platforms (PYQUEST). Deepening focus on React, clean component architecture, and practical AI tooling.",
    keyOutcomes: [
      "Launched CREZORA ecosystem live on official domain (https://crezora.co)",
      "Engineered PYQUEST gamified challenge engine with client-side puzzle evaluator",
      "Prototyped conversational educational concepts with Sahayak AI"
    ]
  },
  {
    period: "2024 – 2025",
    title: "Collegiate Hackathons & Collaborative Product Building",
    category: "Hackathon Experiences",
    description: "Collaborated in multi-member engineering teams for Smart India Hackathon initiatives, conceptualizing KalaaVerse and PlaceMate AI while leading event media coverage and video productions.",
    keyOutcomes: [
      "Demonstrated product prototypes in competitive collegiate hackathons",
      "Directed event video coverage and promotional trailers using CapCut",
      "Delivered technical seminars on modern web architecture"
    ]
  },
  {
    period: "2023 – 2024",
    title: "Commenced B.Tech in Information Technology",
    category: "Academic Learning",
    description: "Commenced formal undergraduate engineering studies at Narasaraopeta Engineering College. Established deep foundations in OOP (Python, Java), data structures, and semantic web technologies.",
    keyOutcomes: [
      "Mastered OOP principles, algorithms, and relational databases",
      "Engineered initial web applications including QueueLess and LUMINA Studio",
      "Maintained strong academic standing in Information Technology"
    ]
  },
  {
    period: "2021 – 2023",
    title: "Mathematical Foundations & Creative Curiosity",
    category: "Academic Learning",
    description: "Intensive training in analytical mathematics, physical sciences, and logical problem solving, igniting a passion for digital design and computer engineering.",
    keyOutcomes: [
      "Completed Intermediate (MPC) with strong mathematical discipline",
      "Began self-directed exploration of digital graphic design, typography, and video editing"
    ]
  }
];

export const NAVIGATION_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Videos", href: "#videos" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];
