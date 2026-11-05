# Venkata Sai Teja Sampati — Personal Digital Identity & Portfolio

A production-grade, editorial portfolio for **Venkata Sai Teja Sampati** — B.Tech Information Technology student, frontend developer, and creative technologist.

Designed with a **HYBRID** visual aesthetic combining clean editorial typography, generous whitespace, interactive procedural canvas visuals, and a light color system.

---

## 🎨 Design System Specifications

| Token | Value | Description |
| :--- | :--- | :--- |
| **Background** | `#F8F8F6` | Warm architectural neutral |
| **Surface** | `#FFFFFF` | Crisp elevated canvas |
| **Secondary Surface** | `#EFEFEB` | Subtle nested panels |
| **Primary Text** | `#171717` | High contrast readable charcoal |
| **Secondary Text** | `#686868` | Editorial secondary hierarchy |
| **Accent** | `#315CF5` | Electric royal blue |
| **Border** | `#E4E4E0` | Restrained hairline dividers |

### Typography
- **Headings & Display:** `Sora` (400, 600, 700, 800)
- **Body & UI:** `Inter` (300, 400, 500, 600)
- **Technical & Timestamps:** `JetBrains Mono` (400, 500)

---

## ✨ Signature Features & Interactions

1. **Lightweight Interactive Canvas:** Procedural geometric orbital rings and constellation nodes in the Hero section responding smoothly to pointer coordinates with zero heavy WebGL dependencies.
2. **Global Command Menu (`Ctrl/Cmd + K`):** Rapid keyboard-driven interface to search projects, jump to sections, copy official email, or inspect codebases.
3. **Interactive Project Case Study Modals:** Comprehensive engineering breakdowns detailing *Overview, Problem, Architectural Approach, Implementation, Contribution, Stack*, and verified links.
4. **Dynamic Project Filtering:** Filter works effortlessly between *Full-Stack, AI & Systems*, and *UI/UX & Creative*.
5. **Real-Time India IST Clock:** Live ticking digital time clock for Andhra Pradesh, India (`Asia/Kolkata`, UTC+5:30).
6. **Custom Desktop Cursor:** Precision dot and trailing ring with magnetic hover states (automatically disabled on touch devices and for users requesting reduced motion).
7. **Scroll Depth Indicator:** Hairline accent progress bar fixed to the top viewport.
8. **One-Click Email Copy:** Instant clipboard interaction with visual confirmation toast.
9. **Accessible & Responsive:** Fully responsive from 360px mobile viewports to 1920px+ ultra-wide desktop monitors with complete reduced-motion compliance.

---

## 📁 Project Architecture

```
birthday/
├── index.html                 # Semantic HTML entry with fonts & meta
├── package.json               # Dependencies and build scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Design system tokens and extensions
├── tsconfig.json              # Strict TypeScript configuration
├── tsconfig.node.json         # Vite tooling TypeScript configuration
├── vercel.json                # Turnkey Vercel SPA routing & build rules
├── .env.example               # Environment variable documentation
├── .gitignore                 # Excluded directories and artifacts
├── public/
│   ├── favicon.svg            # Custom SVG monogram favicon
│   └── assets/profile/
│       ├── portrait.png       # Official resume portrait image
│       └── README.md          # Portrait replacement guide
└── src/
    ├── main.tsx               # React root mounting
    ├── App.tsx                # Master portfolio layout & orchestrator
    ├── index.css              # Tailwind base, utilities, and scrollbar
    ├── types/
    │   └── portfolio.ts       # Strict TypeScript interfaces
    ├── data/
    │   └── portfolioData.ts   # Centralized, authentic portfolio dataset
    ├── hooks/
    │   ├── useScrollProgress.ts
    │   └── useReducedMotion.ts
    └── components/
        ├── Navbar.tsx         # Header, active section tracker & mobile drawer
        ├── Hero.tsx           # Headline, portrait composition & CTAs
        ├── AbstractCanvas.tsx # Lightweight interactive canvas visuals
        ├── About.tsx          # Biographical narrative & 4 core pillars
        ├── FeaturedProjects.tsx # Deep-dive featured case study cards
        ├── ProjectGallery.tsx # Filterable full project archive
        ├── ProjectModal.tsx   # Detailed technical case study modal
        ├── TechnicalSkills.tsx# Categorized capabilities & engineering philosophy
        ├── Education.tsx      # NEC B.Tech IT, Intermediate & SSC credentials
        ├── DevelopmentJourney.tsx # Chronological milestone timeline
        ├── CreativeInterests.tsx # Cinematography, UI/UX & creative tech
        ├── Contact.tsx        # One-click copy email & message form
        ├── Footer.tsx         # Colophon, IST timestamp & back to top
        ├── CommandMenu.tsx    # Ctrl/Cmd+K quick search palette
        ├── CustomCursor.tsx   # Smooth pointer enhancement
        ├── IndiaClock.tsx     # Real-time IST clock component
        └── ScrollProgress.tsx # Top viewport reading bar
```

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm run dev

# Or with npm.cmd on Windows:
npm.cmd run dev

# 2. Start development server
npm.cmd run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🧪 Quality Assurance & Build Verification

```bash
# Validate TypeScript type check without emitting
npx.cmd tsc --noEmit

# Production build
npm.cmd run build

# Preview production build locally
npm.cmd run preview
```

---

## 🌐 Deploying to Vercel

### Option 1: Automatic Deployment via Git (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production portfolio for Venkata Sai Teja Sampati"
   ```
2. Push to your GitHub repository:
   ```bash
   git remote add origin https://github.com/saiteja271/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Import the repository in [vercel.com](https://vercel.com/new).
4. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

### Option 2: Deploy via Vercel CLI
```bash
npx.cmd vercel
```

---

## 👤 Author

**Venkata Sai Teja Sampati**  
- **Email:** [saitejasampati@gmail.com](mailto:saitejasampati@gmail.com)  
- **LinkedIn:** [linkedin.com/in/sai-teja-sampati](https://www.linkedin.com/in/sai-teja-sampati)  
- **GitHub:** [github.com/saiteja271](https://github.com/saiteja271)  
- **Location:** Andhra Pradesh, India
