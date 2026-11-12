# Marquee Topic Diversity & Motion Enhancement

**Feature:** Dynamic Multi-Topic Marquee Stream  
**Component:** `src/components/hirael/Contact.tsx`  
**Status:** Local changes applied & verified (unpushed)  

---

## 1. Overview

Replaced the repetitive single phrase in the footer marquee with an 8-topic dynamic stream showcasing Pratham Solanki's full engineering breadth:

1. `BUILDING RESILIENT SYSTEMS`
2. `OFFLINE VIDEO INTELLIGENCE`
3. `HIGH-AVAILABILITY KUBERNETES`
4. `EMBEDDED EDGE RUNTIMES`
5. `AUTONOMOUS AI AGENTS`
6. `OPEN-SOURCE TOOLING`
7. `ZERO-TRUST ARCHITECTURE`
8. `SCALABLE CLOUD INFRASTRUCTURE`

### 2. Motion Architecture
- Driven by a seamless GSAP linear tween on track offset (`xPercent: -50`) with infinite looping.
- Dual-cluster wrapping ensures gapless, flicker-free continuity on ultrawide monitors and mobile viewports.
- Individual topics are separated by centered bullet markers (`•`) in muted zinc with comfortable horizontal padding (`px-6`).

