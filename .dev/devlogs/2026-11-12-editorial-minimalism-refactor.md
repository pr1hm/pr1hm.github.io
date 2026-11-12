# Devlog: The Great Declutter — Pure Monochrome & Editorial Zen 🧘‍♂️🖤

**Date:** 2026-11-12  
**Author:** Senior UI/UX Engineer  
**Mood:** Calm, focused, and deeply satisfied with pure monochrome aesthetics ☕✨  

---

Hey team! Today was all about subtraction—because as every good architect knows, true luxury isn't adding more stuff until there's nothing left to fit, it's removing things until nothing more can be taken away without breaking the essence.

We took a hard look at the site and ruthlessly purged the textual noise, fixed the layout flow, and dialed in the Mohammad Shehadeh editorial minimalism down to the exact pixel.

---

### 🎨 The Purge of the Cyan Accent
Goodbye electric cyan and glowing blues! We unified the entire theme under a pure, timeless monochrome palette:
- `#f4f4f5` (off-white) for clean, high-contrast headings and hero typography.
- `#a1a1aa` (muted zinc) for italic serif accents, timestamps, and subtle subtitles.
- Our custom gradients were swapped from techy blues to silvery moonlight monochromes (`linear-gradient(90deg, rgba(255,255,255,0.15) ...)`).

---

### ✂️ Bento Projects: Stripped Down to Clean Visual Containers
Inside the project bento cards, we ripped out the noisy category pills, dark bottom containers, multi-line paragraph descriptions, and tech stack chips. 

Now? The cards are pure visual art:
- `rounded-2xl` with a whisper-light `border-white/10`.
- Smooth 700ms image scaling on hover.
- A delicate top-right external arrow icon.
- A minimal bottom-left overlay showing strictly the project title (**FrameRead AI**, **OpenSeal**, **Conlatus AI**, **BestFurniture**) alongside a 2-word category tag (*Vision Intelligence*, *Cloud Security*, etc.). Zero noise, 100% elegance.

---

### 📐 Fixing the Gap & The 3-Line Experience Row
The awkward empty black void below the projects section was cleanly resolved by ditching the oversized cards and replacing them with:
1. **The 3-Line Experience Row:** Role, Organization, Year. That's it!
   - *Android & Systems Intern* &bull; Netsol IT Solutions &bull; `2024`
   - *Freelance Software Developer* &bull; Independent Deployments &bull; `2023 — Present`
   - *Diploma in Information Technology* &bull; 9.15 CGPA &bull; `2024`
2. **Compact Recent Thoughts:** Clean rounded pill rows linking seamlessly into `/blog/:slug`.

---

### 📊 Real Stats & A Breathing Marquee
We eliminated the broken decimal math and replaced the stats row with authentic numbers:
- **9.15** (Diploma in IT CGPA)
- **3K+** (Monthly Client Traffic)
- **10+** (Deployed Systems)

And the marquee was shortened to `BUILDING RESILIENT SYSTEMS • CLOUD & AI • ` so it glides across the screen without feeling crowded.

---

### 🌐 Official Home: `prthm.xyz` & `ahoy@prthm.xyz`
Every single canonical link, OpenGraph tag, Twitter card, Schema.org JSON-LD microdata, sitemap, and `llms.txt` now points officially to **https://prthm.xyz**, with all mailto buttons directly contacting **ahoy@prthm.xyz**.

The production build clocked in at a blazing **2.54 seconds**. Pristine, fast, and drop-dead gorgeous. 🚀✨

