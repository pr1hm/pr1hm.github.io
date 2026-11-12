# Pratham Solanki — Portfolio & Engineering Blog

> **Live Website:** [https://prthm.xyz](https://prthm.xyz)  
> **Contact:** [ahoy@prthm.xyz](mailto:ahoy@prthm.xyz)  
> **GitHub:** [https://github.com/pr1hm](https://github.com/pr1hm)  
> **LinkedIn:** [https://linkedin.com/in/pr1hm/](https://linkedin.com/in/pr1hm/)  
> **Instagram:** [https://instagram.com/prthm.xyz](https://instagram.com/prthm.xyz)  

---

A high-performance, dark-mode minimalist personal portfolio and technical blog built with **Vite (React + TypeScript)**, **Tailwind CSS**, **Framer Motion**, and **GSAP**, optimized for AEO/GEO indexing and Cloudflare Pages deployment.

---

## 🚀 Tech Stack

- **Framework & Runtime:** React 19, TypeScript, Vite 8
- **Package Manager:** `pnpm`
- **Styling Architecture:** Tailwind CSS v3.4, `@tailwindcss/typography`, custom glassmorphism & obsidian palette
- **Motion & Animations:** Framer Motion, GSAP (timelines, marquees, count-up numbers)
- **Routing:** React Router v7 with SPA redirection (`_redirects` for Cloudflare, `404.html` for GitHub Pages)
- **SEO & AEO/GEO:** `react-helmet-async`, Schema.org JSON-LD (`Person`, `WebSite`, `BlogPosting`), `llms.txt`, XML sitemap

---

## 🛠️ Local Development

```powershell
# 1. Install dependencies
pnpm install

# 2. Run local dev server
pnpm dev

# 3. Build for production
pnpm build

# 4. Preview production build
pnpm preview
```

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── _redirects         # Cloudflare Pages SPA rewrite rule
│   ├── 404.html           # GitHub Pages SPA fallback
│   ├── favicon.svg        # Terminal [P] monospace SVG icon
│   ├── llms.txt           # Machine-readable AI scraper knowledge index
│   ├── robots.txt         # Search crawler directives
│   └── sitemap.xml        # Canonical XML sitemap
├── src/
│   ├── components/
│   │   ├── hirael/        # Dark editorial components (Hero, SelectedWorks, ExperienceStack, Journal, Stats, Contact)
│   │   ├── Icons.tsx      # Scalable SVG brand icons
│   │   ├── Navbar.tsx     # Floating glassmorphic header
│   │   └── SEOHead.tsx    # Dynamic OpenGraph, Twitter & Schema.org injector
│   ├── data/
│   │   ├── blogs.ts       # Technical case studies (FrameRead, OpenSeal, Conlatus, NanoHTTPD)
│   │   └── portfolio.ts   # Experience, projects, and skills
│   ├── pages/
│   │   ├── Home.tsx       # Main editorial landing page
│   │   ├── BlogList.tsx   # Filterable technical writing index
│   │   └── BlogPostPage.tsx # Long-form article reader with typography styles
│   ├── App.tsx            # Application router & providers
│   └── index.css          # Tailwind layers, font variables, and keyframe animations
├── docs/                  # Technical architecture documentation
├── READMEs/               # Feature tracking
└── .dev/devlogs/          # Development logs
```

---

## ☁️ Deployment

Optimized for **Cloudflare Pages**:
- **Build Command:** `pnpm build`
- **Build Output Directory:** `dist`
- **Node.js Version:** `20` or higher
