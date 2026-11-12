# Portfolio & Technical Blog Architecture

**Project:** Pratham Solanki Personal Portfolio & Technical Blog  
**Role:** Software Developer specializing in DevOps, AI/ML, and Cloud Engineering  
**Stack:** Vite, React, TypeScript, Tailwind CSS, Framer Motion, React Router v7, React Helmet Async

---

## 1. Architectural Overview

The application is structured as a high-performance, single-page application (SPA) optimized for search crawlers, answer engines (Perplexity, ChatGPT Search, Google SGE), and human readers.

```
portfolio/
├── public/
│   ├── _redirects         # Cloudflare Pages SPA rewrite rule (/* -> /index.html 200)
│   ├── 404.html           # GitHub Pages SPA fallback
│   ├── robots.txt         # Crawler indexing directives
│   ├── sitemap.xml        # Canonical XML sitemap for route discovery
│   └── llms.txt           # Machine-readable context card for AI/LLM search engines
├── src/
│   ├── components/
│   │   ├── BentoCard.tsx   # Framer Motion bento box container with border glow
│   │   ├── Footer.tsx      # Semantic Schema.org Person microdata footer
│   │   ├── Icons.tsx       # Standard SVG brand icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx      # Fixed glassmorphic navigation header
│   │   ├── ScrollToTop.tsx # Route change scroll reset handler
│   │   └── SEOHead.tsx     # Dynamic meta, canonical & JSON-LD structured data injector
│   ├── data/
│   │   ├── blogs.ts        # Strongly typed blog posts array (DevOps, Systems, AI/ML, Cloud)
│   │   └── portfolio.ts    # Work experience, featured projects, and skill categories
│   ├── lib/
│   │   └── utils.ts        # Class merging utility (clsx + tailwind-merge)
│   ├── pages/
│   │   ├── Home.tsx        # Hero, Bento Experience, Bento Projects, Bento Skills
│   │   ├── BlogList.tsx    # Filterable grid layout with search, category tabs & reading time
│   │   └── BlogPostPage.tsx # Typography-rendered article reader with dynamic Schema.org
│   ├── App.tsx             # Root layout with BrowserRouter and HelmetProvider
│   ├── index.css           # Tailwind layers, glassmorphism utilities & ambient glow tokens
│   └── main.tsx            # React 19 root bootstrap
├── tailwind.config.js       # Custom obsidian color scale, glow shadows & typography plugin
└── package.json            # Managed strictly with pnpm
```

---

## 2. Design System & UI Architecture

- **Dark Mode Minimalist:** Base obsidian `#050507` background with surface glass levels (`rgba(18, 19, 26, 0.7)`).
- **Glassmorphic Accents:** Backdrop blur filters (`backdrop-blur-xl`), inset top edge highlights (`inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`), and subtle radial hover glows.
- **Bento Grid Layout:**
  - **Work Experience:** Features the Android/NanoHTTPD internship at Netsol IT Solutions and scalable freelance e-commerce deployments (such as `bestfurniture.store`).
  - **Featured Projects:** Showcases FrameRead AI, OpenSeal, and Conlatus AI with tech stacks, impact metrics, and repository links.
  - **Skills:** Four-quadrant grouping across Systems/Linux, Cloud/Deployment, Backend, and AI/ML.

---

## 3. SEO, AEO & GEO Optimization

1. **Semantic HTML5:** Strict document outline utilizing `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, and `<aside>`.
2. **Entity Density:** Explicit, unambiguous statements defining the primary entity (*"Pratham Solanki is a Software Developer specializing in DevOps, AI/ML, and Cloud Engineering"*).
3. **Structured Data (Schema.org JSON-LD):**
   - `Person`: Identifies Pratham Solanki, sameAs social identities, and knowledges.
   - `WebSite`: Provides site-wide indexing hierarchy.
   - `Blog` / `BlogPosting`: Injected per-article with `headline`, `datePublished`, `author`, and `keywords`.
4. **Machine-Readable AI Context (`/llms.txt`):** Structured summary file for automated entity extraction by Perplexity, ChatGPT Search, and Gemini.

---

## 4. Deployment & Hosting Ready

- **Cloudflare Pages:** Configured via `public/_redirects`.
- **GitHub Pages:** Configured via `public/404.html` SPA redirect script.
- **Build Output:** Verified with `pnpm build` generating gzip-optimized assets in `dist/`.

