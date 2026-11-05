import { Project, SkillCategory, EducationItem, JourneyMilestone, CreativeInterest } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: "Venkata Sai Teja Sampati",
  displayName: "Sai Teja",
  headline: "Engineering ideas.\nDesigning possibilities.",
  supportingDescription: "I'm a B.Tech Information Technology student, developer, and creative technologist passionate about building meaningful digital experiences and intelligent applications.",
  extendedBio: "Based in Andhra Pradesh, India, I specialize in building thoughtful web applications, responsive user interfaces, and human-centered digital products. My work bridges the gap between clean frontend engineering, visual design discipline, and practical emerging technology.",
  location: "Andhra Pradesh, India",
  city: "Narasaraopeta",
  state: "Andhra Pradesh",
  country: "India",
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "IST (UTC +5:30)",
  educationStatus: "B.Tech — Pursuing",
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
};

export const PROJECTS: Project[] = [
  {
    id: "kalaaverse",
    title: "KalaaVerse (Crezora)",
    displayTag: "Digital Creative Ecosystem",
    category: "UI/UX & Creative",
    summary: "A unified digital creative ecosystem connecting creators, multimedia design resources, AI-assisted workflows, and talent networks.",
    featured: true,
    year: "2025 – 2026",
    stack: ["JavaScript (ES6+)", "UI/UX Systems", "Modern CSS", "HTML5 Canvas", "Hackathon Finalist"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "KalaaVerse is an all-in-one digital creative platform conceptualized and developed to bridge independent creators, multimedia assets, and generative tooling in a singular, aesthetically refined interface.",
      problem: "Emerging creators, media students, and digital artists juggle scattered tools across inspiration boards, fragmented asset stores, and standalone AI prompts, fracturing their workflow.",
      approach: "Engineered an editorial-style hub combining asset discovery, dynamic portfolio showcases, collaborative project rooms, and streamlined AI prompts into one intuitive design system.",
      implementation: "Crafted modular UI components, fluid grid galleries, dynamic filtering algorithms, and interactive preview modals with ultra-low latency.",
      myContribution: "Led end-to-end product ideation, visual design architecture, core responsive frontend engineering, and presented the platform live during competitive college hackathons.",
      status: "Completed & Deployed",
      highlights: [
        "Honored in college-level hackathons & technical project showcases",
        "Unified multimedia asset discovery with zero layout shift",
        "Custom design tokens tailored for high visual fidelity"
      ]
    }
  },
  {
    id: "pyquest",
    title: "PyQuest",
    displayTag: "Gamified Python Learning Platform",
    category: "Full-Stack",
    summary: "An interactive, quest-driven computer science learning platform transforming Python language fundamentals into gamified milestones, challenges, and live progress dashboards.",
    featured: true,
    year: "2025",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Gamification Engine"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "PyQuest turns the initial steep learning curve of programming into an engaging, quest-based journey. Students unlock badges, solve interactive crucible quizzes, and visualize coding mastery.",
      problem: "Traditional curriculum materials and static code syntax tutorials frequently lead to high beginner burnout due to delayed feedback loops and sterile interfaces.",
      approach: "Built a dopamine-friendly yet distraction-free learning environment where every concept is accompanied by immediate feedback, progress heatmaps, and achievement badges.",
      implementation: "Engineered with React, TypeScript, and Vite. Implemented custom challenge bank generators, streak tracking logic, responsive dashboards, and interactive question evaluation states.",
      myContribution: "Architected component hierarchy, designed cohesive dashboard UI/UX, implemented TypeScript type system, and authored crucible challenge generation scripts.",
      status: "In Active Evolution",
      highlights: [
        "Strict TypeScript typing across quizzes, levels, and user state",
        "Responsive, high-density dashboard layouts optimized for mobile and desktop",
        "Instant client-side feedback and milestone celebration animations"
      ]
    }
  },
  {
    id: "sahayak-ai",
    title: "Sahayak AI",
    displayTag: "AI-Powered Academic Teaching Assistant",
    category: "AI & Systems",
    summary: "An empathetic conversational academic companion designed to assist university students and educators through contextual doubt clarification and multilingual concept breakdowns.",
    featured: true,
    year: "2025",
    stack: ["Python", "Generative AI", "Conversational UI", "REST APIs", "Educational Tech"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "Sahayak AI serves as a 24/7 personal academic tutor capable of explaining complex engineering concepts using relatable everyday analogies and vernacular assistance.",
      problem: "High student-to-faculty ratios in engineering institutions often leave students without personalized support when struggling with difficult theoretical concepts outside classroom hours.",
      approach: "Developed an interface that accepts technical syllabus queries and structures answers into intuitive tiers: short conceptual summaries, visual analogies, and practical code/mathematical steps.",
      implementation: "Designed the conversational dialogue flows, query categorization filters, topic distillation workflows, and clean responsive chat layouts.",
      myContribution: "Formulated educational user workflows, engineered frontend conversation interfaces, and evaluated prompt-engineering pipelines for educational clarity.",
      status: "Concept Prototype",
      highlights: [
        "Multilingual concept translation bridging English and regional technical comprehension",
        "Structured step-by-step breakdown reducing cognitive overload",
        "Academic domain-focused prompt strategies"
      ]
    }
  },
  {
    id: "queueless",
    title: "QueueLess",
    displayTag: "Smart Operational Queue Management",
    category: "Full-Stack",
    summary: "A streamlined queue orchestration and dispatch platform designed to reduce customer waiting times and improve staff counter efficiency.",
    featured: false,
    year: "2024 – 2025",
    stack: ["React", "JavaScript", "Tailwind CSS", "State Management", "UI/UX"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "QueueLess modernizes physical waiting rooms and service counters with intuitive digital token tracking, counter dispatch consoles, and real-time waiting time estimation.",
      problem: "Public utility centers, banks, and campus administrative offices often suffer from disorganized crowds, manual ticket paper waste, and frustrated visitors.",
      approach: "Engineered dual operational interfaces: a high-efficiency admin/staff dashboard for processing queues with keyboard shortcuts, and a clear public status board.",
      implementation: "Implemented state-driven ticket generation, live queue counter progress monitors, responsive forms, and operational log tables.",
      myContribution: "Designed staff and public interfaces, optimized UI typography for readability at distance, and structured queue state management.",
      status: "Completed & Deployed",
      highlights: [
        "Clear information hierarchy optimized for quick scanning by counter operators",
        "Real-time token status visualization",
        "Lightweight footprint operable on standard low-power office displays"
      ]
    }
  },
  {
    id: "lumina-neo",
    title: "LUMINA-NEO",
    displayTag: "Minimalist Interactive Canvas Studio",
    category: "UI/UX & Creative",
    summary: "A focused, responsive web-based visual workspace exploring geometric manipulation, interactive canvas rendering, and creative utility workflows.",
    featured: false,
    year: "2024",
    stack: ["TypeScript", "Vite", "HTML5 Canvas", "Unit Testing", "Modular CSS"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "An experimental visual engineering project examining canvas rendering performance, modular UI controls, and frictionless digital sketching.",
      problem: "Existing graphic design tools are overly bloated for rapid compositional layout tests and geometric wireframing.",
      approach: "Engineered a razor-sharp, zero-distraction canvas with instant startup, high frame rates, and keyboard-first controls.",
      implementation: "Developed with Vite and TypeScript. Included test suites for editor events and dynamic canvas coordinate transformations.",
      myContribution: "Engineered canvas coordinate math, built tool selection state, and configured automated test suites.",
      status: "Academic Submission",
      highlights: [
        "60fps smooth canvas rendering without external graphics dependencies",
        "Type-safe event dispatcher and editor test suite",
        "Minimalist aesthetic emphasizing creative flow"
      ]
    }
  },
  {
    id: "medicare-portal",
    title: "Medicare Portal",
    displayTag: "Patient Scheduling & Clinical Directory",
    category: "Full-Stack",
    summary: "A healthcare portal facilitating patient appointment bookings, clinician department directories, and operational medical inquiry routing.",
    featured: false,
    year: "2024",
    stack: ["Python", "JavaScript", "Docker", "Git Flow", "Responsive Web"],
    githubUrl: "https://github.com/saiteja271",
    caseStudy: {
      overview: "Medicare provides a dependable, accessible web gateway for patients seeking doctor appointments and clinical department information.",
      problem: "Complex booking forms with excessive input barriers lead to abandoned appointments by elderly or non-technical patients.",
      approach: "Constructed an accessible three-step scheduling funnel with immediate slot feedback, doctor bios, and hospital contact routing.",
      implementation: "Developed responsive web views, containerized application with Docker for consistent deployment, and maintained clean Git revision workflows.",
      myContribution: "Built appointment booking UI, styled responsive healthcare components, and authored Docker deployment configuration.",
      status: "Completed & Deployed",
      highlights: [
        "Containerized with Docker for turnkey reproducible deployment",
        "Accessible contrast-compliant healthcare design",
        "Structured multi-branch Git workflow and PR documentation"
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & Application",
    badge: "Core Engineering",
    skills: [
      { name: "React.js", focus: "Component architecture, hooks, state lifecycle" },
      { name: "TypeScript", focus: "Strict interfaces, generics, type safety" },
      { name: "JavaScript (ES6+)", focus: "Async patterns, modern DOM, functional logic" },
      { name: "Tailwind CSS", focus: "Custom design systems, responsive utilities" },
      { name: "HTML5 / CSS3", focus: "Semantic layouts, CSS variables, accessibility" },
      { name: "Vite", focus: "Modern build tooling, HMR, asset optimization" }
    ]
  },
  {
    title: "Programming & Backend",
    badge: "Systems & Data",
    skills: [
      { name: "Python", focus: "Scripting, algorithm design, data manipulation" },
      { name: "Java", focus: "OOP concepts, data structures, academic foundations" },
      { name: "Node.js", focus: "REST API concepts, runtime environment" },
      { name: "Firebase", focus: "Authentication, Firestore real-time databases" },
      { name: "MongoDB", focus: "NoSQL collections, document schema design" },
      { name: "REST APIs", focus: "Endpoint integration, JSON parsing, error handling" }
    ]
  },
  {
    title: "Creative Technology & Design",
    badge: "UI/UX & Media",
    skills: [
      { name: "UI/UX Design", focus: "Wireframing, visual hierarchy, user flows" },
      { name: "Figma & Canva", focus: "Interactive prototyping, component libraries" },
      { name: "Editorial Typography", focus: "Font pairing, micro-spacing, layout rhythm" },
      { name: "Video Production & CapCut", focus: "Cinematic pacing, narrative rhythm, sound design" },
      { name: "Photo Editing (Photopea)", focus: "Asset asset preparation, color grading" },
      { name: "Generative AI Workflows", focus: "Prompt design, conceptual prototyping" }
    ]
  },
  {
    title: "Dev Tools & Practices",
    badge: "Workflow & Quality",
    skills: [
      { name: "Git & GitHub", focus: "Version control, branching, PR collaboration" },
      { name: "VS Code", focus: "Customized productivity, debugging, linting" },
      { name: "Vercel / Cloud CDN", focus: "Production deployments, SPA routing" },
      { name: "Responsive Engineering", focus: "Mobile-first, cross-browser consistency" },
      { name: "Clean Architecture", focus: "Separation of concerns, modular components" },
      { name: "Technical Presentation", focus: "Seminar delivery, live project demonstrations" }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech.) in Information Technology",
    institution: "Narasaraopeta Engineering College",
    location: "Narasaraopeta, Andhra Pradesh, India",
    period: "2023 – 2027 (Expected)",
    status: "Pursuing (Active)",
    score: "CGPA: 7.25",
    regulation: "R23 Regulation",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/Python)",
      "Database Management Systems",
      "Web Technologies & Frontend Systems",
      "Operating Systems & Computer Networks",
      "Software Engineering & Project Management"
    ],
    highlights: [
      "Active participant in collegiate hackathons and technology initiatives",
      "Campus cultural, photography, and videography lead for major events",
      "Presented technical seminars on modern web architectures and AI assistants"
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
      "Higher Mathematics (Calculus, Coordinate Geometry)",
      "Physics (Mechanics, Wave Optics, Electricity)",
      "Chemistry (Physical & Organic Fundamentals)"
    ],
    highlights: [
      "Strong analytical and problem-solving foundation in mathematics",
      "Developed an early interest in digital computing and creative media"
    ]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Municipal Boys High School",
    location: "Narasaraopeta, Andhra Pradesh, India",
    period: "2020 – 2021",
    status: "Completed",
    score: "98% (High Distinction)",
    coursework: [
      "Mathematics & Natural Sciences",
      "English Language & Communication",
      "Social Sciences & Regional Languages"
    ],
    highlights: [
      "Graduated with top academic percentile (98%)",
      "Recognized for academic excellence and extracurricular participation"
    ]
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    period: "2025 – Present",
    title: "Creative Systems & Advanced Frontend Engineering",
    organization: "Independent & Academic Projects",
    type: "Development",
    description: "Deepening focus into modular design systems, TypeScript application architectures, and AI-assisted educational tooling.",
    keyOutcomes: [
      "Engineered KalaaVerse (Crezora) digital creative ecosystem prototype",
      "Built PyQuest gamified Python learning platform using React + TypeScript",
      "Formulated conversational educational concepts with Sahayak AI"
    ]
  },
  {
    period: "2024 – 2025",
    title: "Hackathon Competitions & Campus Leadership",
    organization: "Narasaraopeta Engineering College",
    type: "Leadership",
    description: "Collaborated in multi-member hackathons and held coordination responsibilities across campus creative and media productions.",
    keyOutcomes: [
      "Participated in Smart India Hackathon (SIH) collegiate innovation rounds",
      "Led video production, photography, and event visual media for college festivals",
      "Delivered academic seminars and technical poster demonstrations"
    ]
  },
  {
    period: "2023 – 2024",
    title: "Commenced B.Tech in Information Technology",
    organization: "Narasaraopeta Engineering College",
    type: "Education",
    description: "Transitioned into core computer science and information technology studies, establishing deep foundations in programming, web protocols, and UI design.",
    keyOutcomes: [
      "Mastered core OOP in Python and Java",
      "Developed initial web projects (Medicare portal, QueueLess)",
      "Maintained consistent 7.25 CGPA under R23 regulation"
    ]
  },
  {
    period: "2021 – 2023",
    title: "Intermediate Scientific Foundations",
    organization: "Vagdevi Junior College",
    type: "Education",
    description: "Intensive training in analytical mathematics, physical sciences, and logical problem solving.",
    keyOutcomes: [
      "Graduated with 75% in MPC stream",
      "Began exploring digital graphic design and video editing tools"
    ]
  },
  {
    period: "2021",
    title: "Secondary School Milestone (SSC)",
    organization: "Municipal Boys High School",
    type: "Education",
    description: "Concluded high school with exceptional distinction, sparking lifelong curiosity for technology.",
    keyOutcomes: [
      "Graduated with 98% score",
      "Earned school-level academic recognition"
    ]
  }
];

export const CREATIVE_INTERESTS: CreativeInterest[] = [
  {
    title: "Cinematography & Visual Editing",
    category: "Storytelling & Motion",
    description: "Passionate about rhythm, pace, color temperature, and emotional narrative structure in video. Experienced in video cutting, sound synchronization, and promotional teasers.",
    tools: ["CapCut", "Color Grading", "Beat Syncing", "Typography in Motion"],
    philosophy: "Every frame must convey purpose, atmosphere, and intentional rhythm."
  },
  {
    title: "UI/UX Design Systems & Editorial Aesthetics",
    category: "Digital Craft",
    description: "Exploring the delicate intersection of editorial typography, generous negative space, purposeful micro-interactions, and accessible information architecture.",
    tools: ["Figma", "Canva", "Design Tokens", "Typography Pairing"],
    philosophy: "True elegance in software is clarity, precision, and respect for the user's attention."
  },
  {
    title: "Creative Technology & Interactive Canvases",
    category: "Code as Medium",
    description: "Experimenting with lightweight procedural visuals, particle simulations, interactive mathematics, and canvas animations that respond organically to user gestures.",
    tools: ["HTML5 Canvas", "Procedural Math", "CSS Physics", "Framer Motion"],
    philosophy: "Websites can be dynamic living canvases without sacrificing speed or battery."
  },
  {
    title: "Campus Media & Event Direction",
    category: "Community & Leadership",
    description: "Organizing photography, event coverage, teaser promotional media, and visual materials for collegiate festivals, academic seminars, and student gatherings.",
    tools: ["Visual Direction", "Photography", "Live Event Coverage", "Poster Design"],
    philosophy: "Great leadership means inspiring collaboration and ensuring collective ideas shine."
  }
];

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Journey", href: "#journey" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];
