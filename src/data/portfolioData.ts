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

export const PERSONAL_INFO = {
  fullName: "Venkata Sai Teja Sampati",
  displayName: "Sai Teja",
  roleTitle: "Developer & Creative Technologist",
  headlineLine1: "I don't just build interfaces.",
  headlineLine2: "I build experiences.",
  supportingPhrase: "Engineering ideas into meaningful digital experiences.",
  editorialIntro: "I'm a B.Tech Information Technology student, frontend architect, and creative technologist based in Andhra Pradesh, India. I operate at the intersection of systematic code, editorial typography, and human-centered interaction design.",
  extendedBio: "Curiosity is where everything begins. From breaking down mathematical problems in high school to architecting multi-module creative ecosystems in hackathons, I view software as an expressive craft. Rather than settling for boilerplate templates, I care about spatial rhythm, micro-interactions, responsive discipline, and building tools that respect human attention.",
  location: "Andhra Pradesh, India",
  city: "Narasaraopeta",
  state: "Andhra Pradesh",
  country: "India",
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "IST (UTC +5:30)",
  educationStatus: "B.Tech — Pursuing (Class of 2027)",
  availabilityStatus: "Open for Select Collaborations & Internships",
  email: "saitejasampati@gmail.com",
  phone: "+91 8328692645",
  github: "https://github.com/saiteja271",
  githubUser: "saiteja271",
  linkedin: "https://www.linkedin.com/in/sai-teja-sampati",
  portraitPath: "/assets/profile/portrait.png",
  portraitFallback: "/assets/profile/portrait.jpg",
  cgpa: "7.25",
  college: "Narasaraopeta Engineering College",
  expectedGraduation: "May 2027",
  regulation: "R23 Regulation"
};

export const PROJECTS: Project[] = [
  {
    id: "crezora-kalaaverse",
    title: "CREZORA / KalaaVerse",
    displayTag: "Flagship Creative Operating System & Talent Ecosystem",
    category: "UI/UX & Creative",
    summary: "A unified digital creative operating system connecting 64+ artistic disciplines, verified talent portfolios, capability-matching algorithms, and collaborative workrooms.",
    featured: true,
    spotlight: true,
    year: "2025 – 2026",
    stack: ["JavaScript (ES6+)", "UI/UX Architecture", "Modern CSS", "HTML5 Canvas", "Hackathon Finalist"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "KalaaVerse is CREZORA's flagship Creative Operating System. Designed not merely as a conventional freelancer directory, but as an end-to-end talent and creation ecosystem spanning Discovery, Studio Practice, Collaboration Workrooms, Opportunity Matching, and Fair Monetization.",
      problem: "Independent creators, designers, and students struggle with fragmented workflows—hopping between isolated inspiration boards, scattered asset repositories, disjointed portfolio sites, and generic gig marketplaces that ignore true creative discipline depth.",
      solution: "Architected a cohesive editorial operating system covering 64+ disciplines. Features include an explainable capability graph for client matching, dual Creator/Client modes, consent and ownership tracking in collaboration workrooms, and built-in hooks to translation and thinking companions.",
      myContribution: "Led end-to-end product ideation, visual design direction, modular component engineering, and presented the working demonstration live during competitive collegiate hackathons.",
      status: "Flagship Prototype",
      highlights: [
        "Structured capability graph matching clients based on verified evidence rather than vanity metrics",
        "Dual-mode architecture (Creator Mode & Client Mode) in a single intuitive interface",
        "Ecosystem switcher interconnecting KalaaVerse with BhashaVerse and Chitti AI",
        "100% responsive fluid grid system tested across mobile and desktop displays"
      ]
    }
  },
  {
    id: "pyquest",
    title: "PYQUEST",
    displayTag: "Gamified Python Learning Platform",
    category: "Full-Stack",
    summary: "An interactive, quest-based learning platform transforming Python language fundamentals into gamified quests, interactive crucible challenges, streak systems, and live progress dashboards.",
    featured: true,
    spotlight: true,
    year: "2025",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Gamification Engine"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "PyQuest tackles beginner programming burnout by converting dry technical syntax into interactive milestones. Learners solve crucible code puzzles, earn unlockable skill badges, and track mastery through dynamic progress heatmaps.",
      problem: "Traditional computer science introductory courses suffer high attrition rates because students encounter delayed feedback loops and sterile console exercises detached from visible progress.",
      solution: "Engineered a dopamine-friendly yet distraction-free learning environment. Challenges evaluate client-side instantly with step-by-step diagnostic hints, daily streak trackers, and clear progress milestones.",
      myContribution: "Architected the TypeScript component hierarchy, authored automated crucible challenge generators, designed the high-density responsive dashboard UI, and implemented state persistence.",
      status: "In Active Evolution",
      highlights: [
        "Strict TypeScript typing across quizzes, levels, and user progression state",
        "Instant zero-latency client-side challenge evaluation and celebratory micro-interactions",
        "Responsive, high-density dashboard layouts optimized for mobile and desktop viewports"
      ]
    }
  },
  {
    id: "sahayak-ai",
    title: "Sahayak AI",
    displayTag: "AI-Powered Academic Teaching Assistant",
    category: "AI & Systems",
    summary: "An empathetic conversational academic companion designed for university students, translating dense engineering concepts into intuitive analogies, visual steps, and multilingual guidance.",
    featured: true,
    spotlight: true,
    year: "2025",
    stack: ["Python", "Generative AI", "Conversational UI", "REST APIs", "Educational Tech"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "Sahayak AI functions as a 24/7 personal academic tutor capable of explaining challenging theoretical engineering subjects with relatable daily metaphors, code snippets, and vernacular bridging.",
      problem: "Large student-to-faculty ratios in engineering institutions leave students hesitant to ask fundamental questions in lectures, resulting in compounding academic gaps.",
      solution: "Constructed an educational dialogue pipeline that decomposes complex queries into three cognitive tiers: simple 2-sentence summaries, visual analogies, and rigorous step-by-step problem breakdowns.",
      myContribution: "Formulated the academic doubt-resolution workflows, designed the conversational dialogue interface, and structured prompt engineering pipelines tailored for undergraduate engineering curriculums.",
      status: "Concept Prototype",
      highlights: [
        "Tiered explanation model reducing cognitive overload for difficult technical concepts",
        "Multilingual conceptual bridging between English and regional comprehension",
        "Distraction-free conversation UI with code syntax highlighting"
      ]
    }
  },
  {
    id: "placemate-ai",
    title: "PlaceMate AI",
    displayTag: "Campus Placement Readiness & Interview Intelligence",
    category: "AI & Systems",
    summary: "A comprehensive placement preparation platform featuring AI-driven mock interview simulations, resume scoring against job descriptions, and domain readiness analytics.",
    featured: false,
    image: "/assets/projects/placemate.png",
    year: "2024 – 2025",
    stack: ["React", "TypeScript", "Tailwind CSS", "Data Analytics", "UI Systems"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "PlaceMate AI bridges the gap between collegiate academic coursework and competitive corporate technical recruitment by giving students actionable, simulated interview readiness metrics.",
      problem: "Students frequently struggle to know whether their technical skills match specific job roles, often discovering resume deficiencies only after receiving rejection emails.",
      solution: "Designed an intuitive diagnostic interface displaying competency radar charts, mock technical Q&A flows, and specific suggestions to enhance resume ATS compatibility.",
      myContribution: "Built the complete frontend UI showcase, designed metric visualization cards, and structured the candidate evaluation dashboard.",
      status: "Completed & Deployed",
      highlights: [
        "Comprehensive diagnostic dashboard tracking aptitude, coding, and communication readiness",
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
    stack: ["TypeScript", "Vite", "HTML5 Canvas", "Unit Testing", "Modular CSS"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "An experimental visual engineering workspace designed to evaluate 60fps canvas manipulation, layout geometry algorithms, and distraction-free digital sketching.",
      problem: "Commercial graphic editing software has become overly heavy and complex for fast geometric layout experiments and compositional sketching.",
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
    stack: ["React", "JavaScript", "REST APIs", "Map Integration", "Tailwind CSS"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "CityMind conceptualizes a transparent civic bridge between municipal departments and residents. Citizens report road hazards, sanitation concerns, or water issues with geolocation tags.",
      problem: "Civic grievance redressal systems in tier-2 cities often lack transparency, leaving citizens uncertain if their municipal complaints are assigned or resolved.",
      solution: "Built a status-driven dashboard with clear timeline milestones (Reported → Inspected → In Progress → Resolved), photo verification, and departmental analytics.",
      myContribution: "Engineered citizen reporting forms, status timeline trackers, and municipal officer dispatch views.",
      status: "Concept Prototype",
      highlights: [
        "Milestone-based complaint status tracking with photo verification",
        "Intuitive category categorization for municipal departments",
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
    stack: ["Python", "Conversational UX", "Generative Models", "State Management"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "Part of the CREZORA ecosystem, Chitti AI is conceived as a reflective intellectual partner—not merely an answer generator, but a thought clarifier that prompts user self-reflection.",
      problem: "Most AI assistants rush to generate answers, often shutting down human creative curiosity instead of acting as a collaborative thinking sounding board.",
      solution: "Designed conversational flows centered around Socratic questioning, mental model breakdowns, and iterative ideation phases (Think ✦ Ideate ✦ Reflect).",
      myContribution: "Created the cognitive interface concept, user dialogue states, and integrated it into the CREZORA ecosystem switcher.",
      status: "Concept Prototype",
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
    stack: ["JavaScript", "NLP Concepts", "UI Systems", "Creative Tech"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "BhashaVerse bridges regional linguistic barriers for independent creators across India, enabling ideas conceptualized in Telugu, Hindi, or Tamil to be shared without cultural distortion.",
      problem: "Generic translation tools translate text literally, losing emotional nuances, regional slang, and creative metaphors critical to artistic briefs.",
      solution: "Engineered an idiom-aware localization interface that suggests contextual equivalents for creative expressions across regional languages.",
      myContribution: "Authored linguistic mapping concepts, interface wireframes, and cross-lingual translation preview flows.",
      status: "Concept Prototype",
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
    stack: ["React", "JavaScript", "Tailwind CSS", "State LifeCycle", "UI/UX"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "QueueLess replaces chaotic physical token slips with a synchronized digital dispatch system that provides real-time wait estimations and counter routing.",
      problem: "Institutional service desks and administrative offices waste substantial time and paper managing uncoordinated in-person queues.",
      solution: "Structured dual high-contrast views: a keyboard-friendly operator console for counter personnel and a clear public monitor visible across waiting areas.",
      myContribution: "Designed both counter staff and public display interfaces, managed queue state persistence, and refined typographical legibility.",
      status: "Completed & Deployed",
      highlights: [
        "Dual-perspective admin and public waiting hall monitors",
        "Keyboard shortcut support for rapid token dispatching by operators",
        "Ultra-lightweight footprint requiring minimal hardware resources"
      ]
    }
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend Engineering",
    tagline: "Building responsive, accessible, and high-performance user interfaces.",
    skills: [
      { name: "React.js", proficiency: "Hands-on Experience", context: "Component architecture, hooks, lifecycle, state orchestration" },
      { name: "TypeScript", proficiency: "Hands-on Experience", context: "Strict typing, generic interfaces, maintainable codebase contracts" },
      { name: "JavaScript (ES6+)", proficiency: "Hands-on Experience", context: "Modern DOM, asynchronous patterns, array algorithms" },
      { name: "Tailwind CSS", proficiency: "Hands-on Experience", context: "Design token configuration, bespoke layouts, fluid utilities" },
      { name: "HTML5 & Semantic Web", proficiency: "Hands-on Experience", context: "Accessible markup, SEO foundations, ARIA landmarks" },
      { name: "CSS Architecture & Variables", proficiency: "Hands-on Experience", context: "Design systems, layout rhythm, smooth transitions" },
      { name: "Next.js (App Router)", proficiency: "Currently Exploring", context: "Server components, hybrid rendering, routing conventions" }
    ]
  },
  {
    category: "Backend Development",
    tagline: "Foundational programming, logic design, and application endpoints.",
    skills: [
      { name: "Python", proficiency: "Hands-on Experience", context: "Core OOP, algorithm scripting, data structures, automation" },
      { name: "Java", proficiency: "Comfortable", context: "Object-oriented foundations, data structures, academic courses" },
      { name: "Node.js & Express", proficiency: "Comfortable", context: "RESTful API routes, middleware handling, HTTP protocols" },
      { name: "REST API Integration", proficiency: "Hands-on Experience", context: "Endpoint consumption, error boundary handling, JSON workflows" }
    ]
  },
  {
    category: "AI & Emerging Integrations",
    tagline: "Exploring modern conversational and generative model workflows.",
    skills: [
      { name: "Generative AI Fundamentals", proficiency: "Comfortable", context: "Contextual prompting, multi-turn dialogues (Sahayak AI, Chitti)" },
      { name: "Conversational UI Design", proficiency: "Hands-on Experience", context: "Streaming feedback, prompt scaffolding, cognitive load reduction" },
      { name: "Multimodal AI Concepts", proficiency: "Currently Exploring", context: "Vision-language models, embeddings, RAG architectures" }
    ]
  },
  {
    category: "Databases & Cloud Deployments",
    tagline: "Data modeling, authentication, and continuous deployment workflows.",
    skills: [
      { name: "Firebase (Firestore & Auth)", proficiency: "Comfortable", context: "Real-time document storage, rules, user authentication" },
      { name: "MongoDB", proficiency: "Currently Exploring", context: "NoSQL document modeling, basic aggregation queries" },
      { name: "Vercel & Modern Edge CDN", proficiency: "Hands-on Experience", context: "Production builds, SPA rewrites, deployment pipelines" },
      { name: "Docker Fundamentals", proficiency: "Comfortable", context: "Containerization concepts, basic Dockerfile configuration" }
    ]
  },
  {
    category: "Creative Tools & Craft",
    tagline: "Visual storytelling, interface prototyping, and cinematic media production.",
    skills: [
      { name: "Figma", proficiency: "Hands-on Experience", context: "Interface wireframing, component tokens, layout grids" },
      { name: "Canva & Visual Design", proficiency: "Hands-on Experience", context: "Editorial poster composition, promotional flyers, presentation decks" },
      { name: "CapCut & Video Production", proficiency: "Hands-on Experience", context: "Cinematic pacing, audio syncing, college festival trailers" },
      { name: "Photopea & Asset Prep", proficiency: "Comfortable", context: "Asset color grading, mask manipulation, graphic exports" },
      { name: "HTML5 Canvas", proficiency: "Hands-on Experience", context: "Procedural geometry, 60fps particle physics, coordinate math" },
      { name: "Git & GitHub Workflows", proficiency: "Hands-on Experience", context: "Branching, pull request reviews, commit discipline" }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech.) in Information Technology",
    institution: "Narasaraopeta Engineering College",
    location: "Narasaraopeta, Andhra Pradesh, India",
    period: "2023 – 2027 (Expected)",
    status: "Active Undergraduate Student",
    score: "CGPA: 7.25",
    regulation: "R23 Regulation",
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
      "Campus cultural, photography, and videography lead for collegiate events",
      "Presented academic seminars on modern web interfaces and AI educational assistants"
    ]
  },
  {
    degree: "Intermediate Education (MPC — Mathematics, Physics, Chemistry)",
    institution: "Vagdevi Junior College",
    location: "Andhra Pradesh, India",
    period: "2021 – 2023",
    status: "Completed",
    score: "75%",
    coursework: [
      "Higher Mathematics (Calculus, Coordinate Geometry, Matrices)",
      "Physics (Mechanics, Wave Optics, Electromagnetism)",
      "Physical and Inorganic Chemistry"
    ],
    highlights: [
      "Solid analytical discipline and mathematical foundation",
      "Early experimentation with graphic design and digital media tools"
    ]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Municipal Boys High School",
    location: "Narasaraopeta, Andhra Pradesh, India",
    period: "2020 – 2021",
    status: "Completed with High Distinction",
    score: "98%",
    coursework: [
      "Mathematics & Physical Sciences",
      "English Language & Technical Communication",
      "Social Sciences & Vernacular Language"
    ],
    highlights: [
      "Graduated in the top academic percentile with 98% score",
      "School-level recognition in mathematics and science exhibitions"
    ]
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    period: "2025 – Present",
    title: "Flagship Architectures & Creative Systems",
    organization: "Independent & Academic Initiatives",
    category: "Development",
    description: "Architecting multi-module platforms (CREZORA / KalaaVerse) and gamified educational ecosystems (PYQUEST). Deepening mastery in strict TypeScript, responsive layouts, and conversational AI patterns.",
    keyOutcomes: [
      "Engineered KalaaVerse Creative Operating System hackathon demonstration",
      "Built PYQUEST with full TypeScript type system and instant challenge evaluator",
      "Prototyped Sahayak AI & Chitti AI educational interaction companions"
    ]
  },
  {
    period: "2024 – 2025",
    title: "Hackathon Competitions & Campus Creative Leadership",
    organization: "Narasaraopeta Engineering College",
    category: "Leadership",
    description: "Collaborated in multi-member engineering teams for Smart India Hackathon initiatives while directing video coverage, photography, and media production for campus festivals.",
    keyOutcomes: [
      "Participated in collegiate hackathon rounds with live product demonstrations",
      "Directed event teasers, student spotlights, and festival promotional trailers using CapCut",
      "Delivered technical seminar presentations on frontend architectures"
    ]
  },
  {
    period: "2023 – 2024",
    title: "Entering Computer Science & Web Engineering",
    organization: "Narasaraopeta Engineering College",
    category: "Education",
    description: "Commenced undergraduate studies in Information Technology. Formed deep foundational understanding of algorithmic logic in Python and Java, translating ideas into working web prototypes.",
    keyOutcomes: [
      "Mastered OOP principles and relational database fundamentals",
      "Engineered initial web applications including QueueLess and LUMINA Studio",
      "Maintained consistent 7.25 CGPA under R23 academic guidelines"
    ]
  },
  {
    period: "2021 – 2023",
    title: "Analytical & Mathematical Foundations",
    organization: "Vagdevi Junior College",
    category: "Education",
    description: "Rigorous high-intensity study of calculus, analytical physics, and structural chemistry, establishing methodical problem-solving habits.",
    keyOutcomes: [
      "Graduated with 75% in MPC curriculum",
      "Began self-directed study of digital graphic composition and interface design"
    ]
  },
  {
    period: "2020 – 2021",
    title: "Academic Distinction & Curiosity Spark",
    organization: "Municipal Boys High School",
    category: "Education",
    description: "Completed secondary education with top honors (98%), igniting a lifelong passion for computing, technology systems, and creative visual expression.",
    keyOutcomes: [
      "Achieved 98% distinction mark",
      "Recognized for academic excellence and problem-solving curiosity"
    ]
  }
];

export const CREATIVE_WORKS: CreativeWork[] = [
  {
    id: "editorial-poster",
    title: "From Passion to King — Virat Kohli",
    category: "Digital Art & Editorial Design",
    medium: "Canva, Typography Pairing & Photo Compositing",
    image: "/assets/creative/editorial-poster.png",
    description: "An editorial tribute poster exploring dynamic visual tension, bold Swiss-inspired typography, high-contrast monochrome lighting, and emotional storytelling.",
    insight: "Graphic design teaches you that whitespace is not empty space—it is breathing room that commands focus."
  },
  {
    id: "cinematic-video",
    title: "Campus Cultural & Festival Cinematic Teasers",
    category: "Videography & Motion Pacing",
    medium: "CapCut, Beat Sync, Color Grading & Sound Design",
    description: "Directed, shot, and edited fast-paced promotional trailers for collegiate events, synchronizing cut frequencies with percussive audio beats to generate anticipation.",
    insight: "Motion design in web development shares the exact same soul as video editing: rhythm, anticipation, and emotional pacing."
  },
  {
    id: "visual-framing",
    title: "Architectural & Natural Photography",
    category: "Photography & Composition",
    medium: "Mobile Optics, Geometric Framing & Available Light",
    description: "Capturing organic symmetry, vanishing lines, and natural shadow geometry across Andhra Pradesh. Emphasizing authentic perspectives without heavy filters.",
    insight: "Looking through a lens forces you to see balance, perspective, and proportion before writing a single line of CSS."
  },
  {
    id: "creative-writing",
    title: "The Architecture of Thought & Product Visions",
    category: "Creative Writing & Philosophy",
    medium: "Digital Essays, Manifestos & Concept Notes",
    description: "Writing conceptual manifestos for product ecosystems like CREZORA and KalaaVerse, defining human-centered technology principles before software execution.",
    insight: "If you cannot explain why an application should exist in plain prose, no amount of flashy code will make it meaningful."
  }
];

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Archive", href: "#archive" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Education", href: "#education" },
  { label: "Journey", href: "#journey" },
  { label: "Creative", href: "#creative" },
  { label: "Contact", href: "#contact" }
];
