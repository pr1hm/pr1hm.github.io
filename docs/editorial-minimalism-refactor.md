# Editorial Minimalism & Layout Refactor

**Feature:** Strict Editorial Minimalism, Monochrome Palette & Layout Gap Elimination  
**Canonical Domain:** `https://prthm.xyz`  
**Primary Contact:** `ahoy@prthm.xyz`  

---

## 1. Architectural Changes & Refinements

### A. Global Identity & Metadata Migration
- **Canonical Domain:** Migrated all OpenGraph tags, Twitter Cards, Sitemap URLs, and Schema.org JSON-LD scripts to `https://prthm.xyz`.
- **Contact Channel:** Replaced all previous email endpoints with `ahoy@prthm.xyz` across navbar buttons, footer CTA pills, and microdata.
- **LLM / GEO Manifests:** Refactored `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt` to index `https://prthm.xyz`.

### B. Pure Monochrome Aesthetic & Decluttered Navigation
- **Color Palette:** Completely eradicated electric cyan/blue/sky utility classes. Unified under pure monochrome: off-white (`#f4f4f5`) for primary text and headings, with muted zinc (`#a1a1aa` / `#71717a`) for italic serif accents, timestamps, and secondary text.
- **Floating Navbar:** Streamlined down to exactly 4 essential elements:
  1. `Home` (`#home`)
  2. `Work` (`#work`)
  3. `Blog` (`/blog`)
  4. `Say hi` button linking directly to `mailto:ahoy@prthm.xyz`.

### C. Clean Project Bento Grid (Zero Noise)
- Stripped all text overlays, dark bottom cards, multi-line descriptions, category pill badges, and tech tags from inside the project cards.
- Encased all 4 showcase projects (*FrameRead AI*, *OpenSeal*, *Conlatus AI*, and *BestFurniture*) in clean `rounded-2xl` containers with `border-white/10`, subtle halftone texture, and smooth hover zoom.
- Minimalist hover state: A subtle bottom-left overlay showing only the project title and a 2-word muted category (e.g., *Vision Intelligence*, *Cloud Security*, *Agentic Systems*, *Edge Commerce*), with a sleek top-right external link arrow.

### D. Gap Elimination & Ultra-Compact Sections
- Fixed the layout gap below the projects section.
- **`ExperienceStack.tsx`:** Directly below Projects, rendered 3 clean single-line horizontal rows:
  1. *Android & Systems Intern* &mdash; Netsol IT Solutions &mdash; `2024`
  2. *Freelance Software Developer* &mdash; Independent Deployments &mdash; `2023 — Present`
  3. *Diploma in Information Technology* &mdash; 9.15 CGPA &mdash; `2024`
  Followed by a compact single-line stack strip. No bullet points or paragraphs.
- **`Journal.tsx` (Recent Thoughts):** Directly below Experience, rendered a vertical list of compact rounded-full horizontal rows with grayscale circular thumbnails, article titles, reading times, and right arrow links to `/blog/:slug`.

### E. Accurate Metrics & Breathable Marquee
- **`Stats.tsx`:** Replaced percentage math with real, authentic metrics:
  - `9.15` (Diploma in IT CGPA)
  - `3K+` (Monthly Client Traffic)
  - `10+` (Production Systems Deployed)
- **`Contact.tsx`:** Shortened marquee animation to `BUILDING RESILIENT SYSTEMS • CLOUD & AI • ` with smooth, non-intrusive 30s loop timing.

