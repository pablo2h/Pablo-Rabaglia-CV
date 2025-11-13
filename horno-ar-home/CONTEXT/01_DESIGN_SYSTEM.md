# DESIGN SYSTEM (horno.ar)

## 1. CORE PHILOSOPHY
**TONE:** Modern, clean, modular, mobile-first.

**PRIMARY_GOAL:** Readability and clear call-to-actions.

**STYLE_METHOD:** Tailwind CSS (via @apply in app.css).

## 2. COLOR PALETTE
**SOURCE:** CONTEXT/03_CONFIG/palette.json (This file will define the hex codes).

**KEYS:**
- **horno-violeta:** Primary Brand Color, Main CTAs
- **horno-amarillo:** Secondary Brand Color, Accents
- **horno-negro:** Text, Dark BGs
- **horno-blanco:** Light BGs
- **horno-gris:** Default BG for alternating banners

## 3. TYPOGRAPHY
**SOURCE:** CONTEXT/03_CONFIG/typography.js (This file will define font objects).

**RULES:**
- **Display:** (e.g., Druk Wide) For titles.
- **Body:** (e.g., Neue Haas) For all readable text.

## 4. COMPONENT STANDARD: .banner-card
**DESCRIPTION:** This is the primary component class for all content blocks in the scrolling <main> area.

**GLOBAL_CLASS:** .banner-card (Defined in app.css).

**BASE_STYLE:**
- w-full
- rounded-2xl
- p-6
- overflow-hidden

**COLOR_MODIFIERS:**
- .banner-card--gris (for odd banners)
- .banner-card--blanco (for even banners)
- .banner-card--[color] (for special accents)

**RESPONSIVENESS_RULE (CRITICAL):**
- **KEY:** .banner-card img
- **VALUE:** max-w-full, h-auto, object-contain, mx-auto
- **REASON:** Prevents images from overflowing their container.