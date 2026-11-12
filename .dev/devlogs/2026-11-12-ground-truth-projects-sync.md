# Devlog: Aligning the Portfolio with Ground-Truth Reality 🔍✨

**Date:** 2026-11-12  
**Author:** Lead Technical Architect  
**Mood:** Grounded, energized & proud of real engineering work ☕⚡  

---

Nothing beats real, working software.

Earlier, we had placeholder conceptual copy for Pratham's projects. Today, we inspected the actual GitHub repositories (`pr1hm/FrameRead`, `pr1hm/openseal`, `conlatus/conlatus`) and live URLs (`openseal.prthm.xyz`, `bestfurniture.store`, `jeetfurniture.com`) to extract their true architectures.

And what we found was awesome.

---

### 🎥 The Real Deal on the Projects:
1. **FrameRead:**
   It turns out FrameRead isn't just an OCR tool—it's a full-blown **offline AI video analysis pipeline**! It grabs audio with Whisper, detects scene-change keyframes, runs local Hugging Face vision inference with **Qwen2-VL**, and synthesizes an exhaustive multi-page written brief with evidence-backed Q&A without a single cloud call.
2. **OpenSeal:**
   A genuinely cool, open-source DocuSign alternative built completely with **FastAPI (Python)** and Vanilla JS. You upload a PDF, drag a signature box to record coordinates, get an instant dynamic URL copied to your clipboard, and sign it on desktop or mobile canvas. Plus, it's live right now at [openseal.prthm.xyz](https://openseal.prthm.xyz)!
3. **Conlatus AI:**
   An enterprise-grade autonomous screening platform equipped with **Safe Exam Browser (SEB)** lockdown gates and real-time computer vision proctoring for gaze and face presence.
4. **Best Furniture & Jeet Furniture (Bardoli, Gujarat):**
   Real production e-commerce and digital showroom deployments serving custom furniture businesses in Bardoli with sub-second page loads and catalog caching.

---

### ✍️ Brand-New In-Depth Technical Blogs:
We took all of these real architectures and rewrote `src/data/blogs.ts`:
- *FrameRead: Building a 100% Offline AI Video Analysis Pipeline with Whisper and Qwen2-VL*
- *OpenSeal: Architecting an Open-Source DocuSign Alternative with FastAPI and Canvas Signing*
- *Conlatus AI: Autonomous Multi-Agent Technical Screening & Computer Vision Proctoring*
- *Building In-Process Android Embedded Webservers with NanoHTTPD at Netsol IT Solutions*

---

### 🔗 Social Handles All Synced:
Every single link across the footer, navbar, Schema.org Person microdata, and `llms.txt` now points directly to **https://github.com/pr1hm** and **https://linkedin.com/in/pr1hm/**.

Build time clocked in at **1.37 seconds**. Rock solid, authenticated, and ready to impress! 🚀✨

