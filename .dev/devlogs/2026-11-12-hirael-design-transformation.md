# Devlog: Leveling Up to the Hirael Dark Editorial Aesthetic! 🖤🎬

**Date:** 2026-11-12  
**Author:** Lead Frontend & Motion Architect  
**Vibe:** Pure cinematic elegance, 60fps animations & fresh espresso ☕⚡  

---

What a transformation!

The user asked to bring the exact visual soul of **Hirael** (`https://hirael.com/r/portfolio.json`) right into Pratham Solanki's portfolio—and we delivered in full force!

---

### 🎥 The Glow-Up Under The Hood

We inspected the Hirael registry payload, broke down its anatomy, and ported every single high-end design pattern directly into our React + Vite + TypeScript build:

1. **The Counter Loading Screen:**
   Before anything loads, the user gets hit with a clean, editorial countdown from 0% to 100% with words morphing between *Architect*, *Automate*, *Deploy*, and *Scale*. Once it finishes, it gracefully dissolves and unlocks the page.

2. **The Ambient Video Hero & GSAP Text Orchestration:**
   We hooked up GSAP timelines that slide and blur-in the text (`Pratham Solanki` in stunning *Instrument Serif* italic), while an ambient video plays softly in the background beneath a subtle dark vignette. The floating pill navbar tracks active sections effortlessly with an `IntersectionObserver`.

3. **Bento Works with Halftone Textures:**
   Our projects (*FrameRead AI*, *OpenSeal*, *Conlatus AI*, and *bestfurniture.store*) are now encased in asymmetric bento cards featuring retro halftone dots and glowing gradient animated badges that slide into view when hovered.

4. **The Infinitely Scrolling Marquee Footer:**
   The bottom of the site features an inverted video backdrop and a buttery-smooth GSAP marquee declaring:
   *"BUILDING RESILIENT DISTRIBUTED SYSTEMS • AI ENGINEERING"*, paired with a big glowing contact button.

---

### 🚀 Zero Compromises on SEO or Performance

Even with all these buttery GSAP and Framer Motion effects, the entire production build took just **2.71 seconds** with `pnpm build`. Zero type errors, full JSON-LD structured data intact for search crawlers, and the blog routing works like butter.

This portfolio doesn't just look like a developer's site—it looks like an elite design agency showcase. Time to show it to the world! 🔥

