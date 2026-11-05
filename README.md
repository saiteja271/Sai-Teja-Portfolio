# Venkata Sai Teja Sampati — Premium Personal Digital Experience (v2.0)

An art-directed, custom-designed interactive portfolio for **Venkata Sai Teja Sampati** — B.Tech Information Technology student, developer, and creative technologist at Narasaraopeta Engineering College.

Engineered with a **PREMIUM HYBRID** design aesthetic that marries Swiss editorial typography, Apple-inspired clarity, procedural 3D-perspective canvas visuals, and a light color architecture.

---

## 🎨 Visual Identity & Design System

| Token | Value | Function |
| :--- | :--- | :--- |
| **Background** | `#F8F8F6` | Warm architectural neutral |
| **Surface** | `#FFFFFF` | Crisp elevated canvas & case study wells |
| **Secondary Surface** | `#EFEFEB` | Subtle specification panels |
| **Primary Text** | `#171717` | High contrast charcoal typography |
| **Secondary Text** | `#686868` | Editorial secondary hierarchy |
| **Accent** | `#315CF5` | Royal cobalt interactive focus & indicator states |
| **Border** | `#E5E5E0` | Restrained hairline dividers |

### Typography Discipline
- **Display Headings:** `Sora` (400, 600, 700, 800)
- **Body & Prose:** `Inter` (300, 400, 500, 600)
- **Technical & Annotations:** `JetBrains Mono` (400, 500)

---

## 🚀 Key Improvements in Transformation 2.0

1. **Art-Directed Asymmetric Hero:**
   - Signature headline: *"I don't just build interfaces. I build experiences."* with staggered line reveals.
   - Procedural pseudo-3D perspective canvas running 50+ rotating nodes with depth-of-field and cursor gravitational parallax.
   - Dual-status chips, academic annotations, and subtle scroll depth indicator.
2. **Refined Architectural Navigation:**
   - Eliminated repetitive pill buttons in favor of clean minimal containers with hairline borders.
   - Integrated active section tracker, real-time India (IST) clock, and dedicated **Resume Viewer** modal.
3. **Editorial Storytelling ("Curiosity is where everything begins"):**
   - Replaced generic cards with a magazine spread featuring narrative prose, identity dimensions, and an academic specification table.
4. **Varied Project Case Study Layouts:**
   - **Flagship Feature:** *CREZORA / KalaaVerse* (Full-width editorial case study with problem/solution matrix, 64+ disciplines capability graph, and hackathon results).
   - **Spotlight Duo:** *PYQUEST* (Gamified Python platform) & *Sahayak AI* (Contextual teaching companion).
   - **Archive Directory:** *PlaceMate AI*, *LUMINA Studio*, *CityMind*, *Chitti AI*, *BhashaVerse*, and *QueueLess* with real screenshots and working category filters.
5. **Technical Identity Matrix:**
   - Replaced arbitrary percentages with honest proficiency tiers: *Hands-on Experience*, *Comfortable*, and *Currently Exploring*.
6. **The Creative Dimension (Magazine Spread):**
   - High-fidelity showcase of original graphic design (*From Passion to King — Virat Kohli*), alongside insights on cinematography, photography, and creative writing.
7. **Verified Resume Viewer Modal:**
   - Dedicated in-app CV viewer featuring academic coursework, CGPA (7.25 / R23), contact links, and one-click print/PDF functionality.

---

## 📁 Repository Structure

```
birthday/
├── index.html                 # Semantic HTML entry with fonts & meta
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Design system tokens and extensions
├── tsconfig.json              # Strict TypeScript configuration
├── tsconfig.node.json         # Vite tooling configuration
├── vercel.json                # Vercel SPA rewrites & output directory
├── .env.example               # Environment documentation
├── .gitignore                 # Excluded directories
├── public/
│   ├── favicon.svg            # Custom SVG monogram favicon
│   └── assets/
│       ├── profile/
│       │   ├── portrait.png   # Official resume portrait
│       │   └── README.md      # Portrait replacement guide
│       ├── projects/
│       │   ├── placemate.png  # Authentic PlaceMate AI UI showcase
│       │   ├── lumina.png     # Authentic LUMINA Studio canvas export
│       │   └── mobile-interface.png
│       └── creative/
│           └── editorial-poster.png # Authentic Virat Kohli editorial tribute poster
└── src/
    ├── main.tsx               # Root mounting
    ├── App.tsx                # Master portfolio layout & orchestrator
    ├── index.css              # Custom base, scrollbar, and typography styles
    ├── data.ts                # Consolidated, type-safe data & TypeScript interfaces
    ├── hooks.ts               # Consolidated hooks (useScrollProgress, useReducedMotion)
    └── components/
        ├── BackgroundAtmosphere.tsx # Full-page subtle drifting atmosphere & ambient light wells
        ├── Navigation.tsx     # Header, section tracker, IST clock, progress bar & cursor
        ├── Sections.tsx       # Narrative sections (Hero, About, Projects, Skills, Education, Journey, Creative, Contact, Footer)
        └── Modals.tsx         # In-app modals (CommandMenu, ProjectModal, ResumeModal)
```

---

## 🛠️ Local Development & Testing

```powershell
# 1. Start development server (port 3000)
npm.cmd run dev

# 2. Strict TypeScript type check
npx.cmd tsc --noEmit

# 3. Production build
npm.cmd run build

# 4. Preview production build locally
npm.cmd run preview
```

---

## 🌐 Deployment to Vercel

```powershell
# Commit and push to your remote repository
git remote add origin https://github.com/saiteja271/portfolio.git
git push -u origin main
```
Import the repository on [vercel.com](https://vercel.com/new). Vercel will automatically detect the Vite preset and run `npm run build` with output directory `dist`.

---

## 👤 Author & Credits

**Venkata Sai Teja Sampati**  
- **Email:** [saitejasampati@gmail.com](mailto:saitejasampati@gmail.com)  
- **LinkedIn:** [linkedin.com/in/sai-teja-sampati](https://www.linkedin.com/in/sai-teja-sampati)  
- **GitHub:** [github.com/saiteja271](https://github.com/saiteja271)  
- **Location:** Narasaraopeta, Andhra Pradesh, India
