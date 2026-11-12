# Hirael Editorial Design Transformation

**Feature:** Integration of the Hirael Dark Editorial Portfolio System  
**Reference:** `https://hirael.com/r/portfolio.json`  
**Target:** Pratham Solanki Personal Portfolio & Technical Blog  

---

## 1. Architectural Changes & Design System

The application was transformed into the cinematic, dark-editorial visual language inspired by the **Hirael** design system while preserving all user CV data, projects, and SEO/AEO/GEO structured microdata.

### Key Visual & Motion Components

1. **`LoadingScreen.tsx`:**
   - Counter screen progressing from 0 to 100% using `requestAnimationFrame`.
   - Cycling word animations (`Architect`, `Automate`, `Deploy`, `Scale`) driven by Framer Motion's `AnimatePresence`.
   - Graceful fade-out exit transition with callback unmounting.

2. **`Hero.tsx` & `FloatingNavbar`:**
   - Background video loop with cinematic dark overlay and bottom gradient bleed.
   - Floating glassmorphic pill navbar with `PS` monogram logo, smooth active section tracking via `IntersectionObserver`, and mobile drawer/responsive actions.
   - Editorial typography with `Instrument Serif` italic headlines (`font-display`).
   - Role cycler with GSAP entrance sequence (`name-reveal`, `lead-rise`, `blur-in`).
   - Animated vertical scroll-down indicator.

3. **`SelectedWorks.tsx`:**
   - Asymmetric Bento Grid (`md:col-span-7` and `md:col-span-5`).
   - Halftone radial dot pattern overlay (`radial-gradient(circle, rgba(0,0,0,0.85) 1px, transparent 1px)`).
   - Animated gradient pill badge on hover (`.pf-gradient-animated`).
   - Features *FrameRead AI*, *OpenSeal*, *Conlatus AI*, and *bestfurniture.store*.

4. **`ExperienceTimeline.tsx`:**
   - Editorial dark cards featuring the Netsol IT Solutions Android/NanoHTTPD internship and freelance cloud production releases.

5. **`SkillsGrid.tsx`:**
   - Four-quadrant technical architecture showcase covering Systems/Linux, Cloud/Deployment, Backend, and AI/ML.

6. **`Journal.tsx`:**
   - Rounded pill article items with circular thumbnails, reading times, tags, and direct routing to `/blog/:slug`.

7. **`Stats.tsx`:**
   - Count-up statistics powered by an eased `requestAnimationFrame` hook with tabular numerals in Instrument Serif italic.

8. **`Contact.tsx`:**
   - Inverted background video footer.
   - Infinite GSAP Marquee running: `BUILDING RESILIENT DISTRIBUTED SYSTEMS • AI ENGINEERING`.
   - Gradient-bordered mailto button (`contact@prathamsolanki.dev`) with hover scaling.
   - Active status indicator with ping animation.

---

## 2. Dependencies & Styling Tokens

- **Libraries Added:** `gsap` (3.15.1) for timelines and marquee tracking.
- **Typography:** `Instrument Serif` (Google Fonts) configured as `font-display` alongside `Inter` and `JetBrains Mono`.
- **Theme Variables:** HSL tokens (`--bg`, `--surface`, `--stroke`, `--text`, `--muted`) with custom CSS keyframes for gradient shifting and smooth scrolling.

