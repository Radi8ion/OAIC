# 🌐 1st Odisha AI Conference (OAIC 2026) Website

Welcome to the official repository for the **2026 1st Odisha AI Conference (OAIC)** website. This is a premium, modern, fully responsive, and frontend-only static website built using **Next.js (App Router)**, **React 19**, and **Tailwind CSS v4**.

The site's visual identity blends earthy tones (warm terracotta and deep forest greens) with glowing, cutting-edge AI accents (amber and teal) layered over sleek dark surfaces—evoking both Odisha's natural/cultural heritage and the luminous future of Artificial Intelligence.

---

## ✨ Features & Pages

The application is structured into key categories to provide attendees, authors, and sponsors with a seamless, highly interactive experience:

- **🏠 Home / Landing Page (`/`)**: Includes an animated Hero section with particle effects, a live countdown timer, scrolling key dates ticker, stats bar, speaker teasers, venue highlights, and patron grids.
- **📝 Authors Section**:
  - **Important Dates (`/authors/important-dates`)**: A dynamic timeline/table tracking submission and registration deadlines.
  - **Call for Papers (`/authors/call-for-papers`)**: Expandable card-based layouts categorizing research tracks and topics of interest.
  - **Call for Industry Workshop Proposals (`/authors/call-for-workshop-proposals`)**: Structure, format, and download links for workshop applications.
  - **Call for Poster Presentations (`/authors/call-for-posters`)**: Formats and guidelines for visual poster sessions.
  - **Submission Guidelines (`/authors/submission-guidelines`)**: Interactive tabbed guide detailing formatting templates (LaTeX, Word), page limits, and ethical submission policies.
- **👥 Committees Section**:
  - Grid-based layouts showcasing members, roles, and institutional affiliations for the **Organizing**, **Technical Program**, **Operations**, and **Industry Forums** Committees.
- **📅 Program Section**:
  - **At a Glance (`/program/at-a-glance`)**: Tabbed day-by-day interactive schedule grids detailing sessions, slots, and rooms.
  - **Workshops (`/program/workshops`)** & **Hackathons (`/program/hackathons`)**: Detailed outlines of co-located events, timelines, and prize tiers.
- **💳 Registration (`/registration/fees`)**:
  - Tabbed pricing matrices detailing rates for students, academia, industry, and international delegates across Early Bird, Regular, and On-site phases.
- **✈️ Travel & Tourism**:
  - **Visa Information (`/travel/visa`)**: Actionable steps, requirements, and links for obtaining an Indian Visa/e-Visa.
  - **Tourist Attractions (`/travel/attractions`)**: Responsive grid showcasing Konark Sun Temple, Puri Jagannath Temple, Chilika Lake, local cuisine, and distance matrices.
- **✉️ Contact & About**:
  - Dedicated pages highlighting organizers and a fully operational static contact form (submits via `mailto:` integration).

---

## 🛠️ Tech Stack & Architecture

- **Core**: Next.js 16 (App Router) & React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (configured with a custom earth/glow design system)
- **Animations**: Framer Motion (smooth page transitions, mobile menu drawers, and scroll reveals)
- **UI Components**: Radix UI Primitives (Accordion, Tabs, Dialogs, etc. for high accessibility)
- **Icons**: Lucide React
- **Static Target**: Pre-configured for static exports (`output: 'export'` in `next.config.ts`), making it deployable on GitHub Pages, Vercel, Netlify, or AWS S3.

---

## 📂 Project Structure

```text
oaic-2026/
├── public/                     # Static assets (images, logos, textures)
│   ├── images/
│   │   ├── sponsors/           # Sponsor and Patron logos
│   │   ├── speakers/           # Keynote speakers headshots
│   │   └── attractions/        # Tourism photos
│   └── textures/               # Noise overlays for design depth
├── src/
│   ├── app/                    # Next.js App Router folders and pages
│   │   ├── globals.css         # Tailwind directives and custom animation utilities
│   │   └── layout.tsx          # Sitewide wrapper (includes Navbar, Footer, and Fonts)
│   ├── components/
│   │   ├── layout/             # Sticky Navbar, Footer, PageLayout, PageHeader
│   │   ├── ui/                 # Accessible Radix primitives and styled components
│   │   └── sections/           # Interactive cards, timelines, grids, and tables
│   ├── data/                   # Centralized TS constants for easy content management
│   │   ├── dates.ts            # Important dates & deadlines
│   │   ├── callForPapers.ts    # Tracks, topics, & guidelines
│   │   ├── committees.ts       # Committee member databases
│   │   ├── program.ts          # Schedules, workshops, and hackathons
│   │   ├── registration.ts     # Pricing matrices & schedules
│   │   └── contact.ts          # Contact details
│   ├── lib/
│   │   └── cn.ts               # Classname utility for dynamic Tailwind classes
│   └── types/
│       └── index.ts            # Shared TypeScript interfaces
├── tailwind.config.ts          # Tailwind CSS custom extends (colors, fonts, shadow-glows)
├── next.config.ts              # Next.js configuration (static export output)
├── tsconfig.json               # TypeScript rules
└── package.json                # Project dependencies and build scripts
```

---

## ⚙️ Content Management (How to update info)

All conference text, dates, and lists are decoupled from presentation components. You can modify any page content by editing the files inside `src/data/`:

*   **Dates & Deadlines:** Modify `src/data/dates.ts`
*   **Call for Papers Topics:** Modify `src/data/callForPapers.ts` or `src/data/tracksData.ts`
*   **Committee Members:** Add/remove members in `src/data/committees.ts`
*   **Keynote Speakers:** Update list and bios in `src/data/speakers.ts`
*   **Program & Schedules:** Update `src/data/program.ts`
*   **Registration Costs:** Update `src/data/registration.ts`

---

## 🚀 Getting Started Locally

### 1. Clone & Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build and Export
To compile the site and perform a static export for production deployment:
```bash
npm run build
```
This generates an `out/` directory containing pure HTML, CSS, and JS files ready to be served from any static web host.

---

## 🌐 Deployment (GitHub Pages)

The repository has been configured to build and publish easily. For manual deployment to GitHub Pages:

1. Build the static site:
   ```bash
   npm run build
   ```
2. Deploy the contents of the generated `out/` folder to your target hosting environment.
