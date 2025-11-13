# PROJECT MISSION (horno.ar)
**PROJECT_ID:** horno-ar-home

**FUNCTION:** Centralized project hub and link aggregator.

**TYPE:** Modular, mobile-first Single Page Application (SPA).

**KEY_PRINCIPLE:** Modularity. The main page is a simple container for easily adding, removing, or reordering components (banners).

**TECH_STACK:**
- **Framework:** SvelteKit (Reason: Speed, lightness)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

**LAYOUT_ARCHITECTURE:**
- **Page_Model:** "Holy Grail" CSS Grid
- **Grid_Spec:** grid-rows-[auto_1fr_auto]
- **Zones:** Fixed Header/Footer, Scrolling Content (<main class="overflow-y-auto">)
- **Content_Constraint:** All banners MUST be constrained to max-w-md and centered (mx-auto) within the scrolling zone.