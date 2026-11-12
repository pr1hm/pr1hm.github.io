# Devlog: Crafting Pratham Solanki's High-Octane Portfolio & Engineering Blog ☕✨

**Date:** 2026-11-12  
**Author:** Pratham's Autonomous Engineering Counterpart  
**Mood:** Hyped on espresso & zero compilation warnings! 🚀

---

Hey friend! Grab a coffee, pull up a chair, and let me tell you about what we just pulled off today.

We set out with a bold mission: build a slick, dark-mode minimalist personal portfolio and technical blog for **Pratham Solanki** that looks like it dropped straight out of a futuristic design studio, while being ruthlessly optimized for search engines, AI answer bots (AEO/GEO), and lightning-fast edge deployments.

And spoiler alert? It runs like an absolute dream.

---

### 🎨 The Aesthetic: Bento Boxes & Subtle Glassmorphism

Gone are the days of boring, cookie-cutter resume sites. We went all-in on an obsidian-black backdrop (`#050507`), accented with soft cyan, emerald, and violet ambient glow orbs.

For the layout, we leaned into high-end Bento Grids:
1. **Work Experience Bento:** Highlighted Pratham's work at **Netsol IT Solutions**—running in-process **NanoHTTPD** embedded servers right inside Android client runtimes for local mesh sync and offline telemetry—paired alongside real-world production deployments like **bestfurniture.store** with global CDN caching.
2. **Projects Bento:** Showcasing **FrameRead AI** (multimodal vision-language document intelligence), **OpenSeal** (zero-trust cryptographic container attestation using Cosign & OIDC), and **Conlatus AI** (real-time collaborative agentic workspace).
3. **Skills Matrix:** Divided into four clear quadrants: Systems/Linux, Cloud/Deployment, Backend, and AI/ML.

Every single card is wrapped in a custom `BentoCard` leveraging `framer-motion` for buttery smooth entry animations and glass-edge highlights (`inset 0 1px 0 0 rgba(255,255,255,0.08)`).

---

### 🤖 The Brains: SEO, AEO & GEO Magic

Here’s where we got seriously nerdy:
- **Zero Div-Soup:** We used strict semantic HTML5 tags: `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, and `<aside>`.
- **Schema.org JSON-LD:** Injected dynamic structured microdata for `Person`, `WebSite`, and `BlogPosting` using `react-helmet-async`.
- **Entity Density:** Plaintext sentences explicitly define: *"Pratham Solanki is a Software Developer specializing in DevOps, AI/ML, and Cloud Engineering"*. AI crawlers like Perplexity, ChatGPT Search, and Google SGE will know *exactly* who Pratham is and what he builds.
- **Bonus `llms.txt` & `sitemap.xml`:** We generated an official `/llms.txt` and XML sitemap in the `public/` directory so answer engines have a direct markdown index to ingest.

---

### 🛠️ The Tech Under The Hood & A Small Windows PowerShell Hiccup!

Here's the full spec sheet:
- **Build Engine:** Vite 8 + React 19 + TypeScript
- **Package Manager:** `pnpm`
- **Styling:** Tailwind CSS v3.4 with `@tailwindcss/typography` (`prose prose-invert`)
- **Routing:** `react-router-dom` with client-side SPA fallbacks for both Cloudflare Pages (`public/_redirects`) and GitHub Pages (`public/404.html`)

**The little hiccup & quick fix:**
When testing `pnpm build` on Windows PowerShell, the default Vite `tsc -b && vite build` script gave a classic PowerShell 5.1 syntax error on the `&&` token! We smoothly transitioned the script to `tsc -b ; vite build`—and boom, 3.13 seconds clean build, zero errors, gzip-optimized chunks ready to fly. We also gave GitHub and LinkedIn their own crisp, scalable SVG components when modern Lucide stripped brand logos from its core.

---

### 🏁 What's Next?

The code is clean, modular, and ready for you to drop in any extra ReactBits or 21st.dev components. You can add new blog posts anytime by simply adding a JSON object to `src/data/blogs.ts`.

Time to deploy and take over the web! 🚀✨

