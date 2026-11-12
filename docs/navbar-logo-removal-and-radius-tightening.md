# Navbar Logo Removal & Radius Refinement

**Feature:** Logo Removal & Local Navbar Radius Tightening  
**Scope:** Floating Navbar only (`src/components/hirael/Hero.tsx`)  
**Status:** Local changes applied & verified (unpushed)  

---

## 1. Modifications

1. **Logo Removal:**
   - Deleted the circular `PS` monogram `<Logo />` and the preceding vertical separator line.
   - The floating navbar now begins directly with the navigation links (`Home`, `Work`, `Blog`) followed by a slim divider and the `Say hi` CTA button.
   - This significantly reduces the overall horizontal width of the navbar, resulting in a cleaner, more compact floating pill.

2. **Corner Radius Tightening (Navbar Only):**
   - Container wrapper reduced from bubble-pill `rounded-full` to a refined `rounded-2xl` (16px) with compact padding `px-2 py-1.5`.
   - Navigation links and CTA button updated to `rounded-xl` (12px).
   - Component-level corner radiuses in the rest of the site (cards, containers, etc.) remain intact.

3. **Git Status:**
   - Kept local and uncommitted/unpushed as requested.

