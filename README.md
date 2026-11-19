# Owls On Board — Complete Homepage Redesign Submission

**Project:** Owls On Board (Buy Board Games Online India) — Homepage Redesign  
**Assessment:** DAIMLINC Frontend Practical Assignment  
**Brand Concept:** *The Modern Tabletop Atelier* — Daylight Editorial meets Tactile 3D Craftsmanship  

---

## 1. Design Guidelines

### Brand-New Color Palette (HEX Codes)
Completely departs from the existing site's warm beige (`#F5F0E8`) and sage/forest green (`#355138`) palette in favor of a sunlit architectural gallery aesthetic that lets authentic, colorful board game box art shine unmodified.

| Role | Name | HEX Code | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Canvas** | Alabaster Chalk | `#FAFAF9` | Page background & studio spacing |
| **Elevated Surface** | Porcelain White | `#FFFFFF` | Cards, filter panels, inspection modals |
| **Subtle Panel Tint** | Mineral Stone | `#F1F0EC` | Spotlight band, CTA surround, hover fills |
| **Primary Ink** | Obsidian Charcoal | `#111318` | Headings, primary buttons, top utility bar, story block |
| **Secondary Ink** | Graphite Muted | `#525866` | Body copy, metadata labels |
| **Primary Brand Accent** | Burnished Cinnabar | `#C84B31` | Primary CTAs, savings tags, active indicators (Hover: `#A93B24`) |
| **Secondary Accent** | Deep Cobalt Indigo | `#1E3A5F` | Strategy badges, complexity gauges, free-shipping pills |
| **Highlight Accent** | Warm Tabletop Brass | `#B8862D` | Curator spotlight badges, occasion highlights |
| **Hairline Border** | Warm Limestone | `#E4E2DC` | Structural 1px dividers & card outlines |

### Brand-New Typography System
Zero overlap with the existing site (`Playfair Display`, `Inter`, `Jost`, `Courier Prime`):
- **Unified Brand Typeface (Headings, UI, Body & Specs):** `Space Grotesk` (weights `300–700`) — minimal, architectural, stylish, and unmistakably modern for premium UI.
  - **Display Headings:** `Space Grotesk` (`600–700`, tight tracking `-0.03em`) for bold, sculptural hierarchy.
  - **Body & Controls:** `Space Grotesk` (`400–600`) for clean desktop & mobile legibility.
  - **Tabletop Specs & Prices:** `Space Grotesk` with `tabular-nums` (`font-variant-numeric: tabular-nums`) so player counts (`1–5P`), playtimes (`40–70 min`), BGG weights (`2.5/5`), and INR prices (`₹5,320`) align cleanly.

### Button & Control Styles
- **Primary Action:** Pill radius (`9999px`), `#C84B31` fill, crisp white `600` weight text, subtle shadow lift on hover (`#A93B24`).
- **Secondary / Utility Action:** Pill radius (`9999px`), `#111318` obsidian fill or porcelain `#FFFFFF` with `1px solid #D4D1C9` hairline border.
- **Filter Chips:** Soft rounded rectangle (`8px–12px` radius), `#F5F4F0` default transitioning to `#111318` active state.

### Icon Style
- **Lucide Icons** (`1.75px` stroke weight, clean geometric line icons) paired with custom physical CSS 3D geometry (the 6-sided rolling die & 6-face 3D board game box).

---

## 2. Proposed Homepage Structure (Section Order)

1. **Utility Bar & Sticky Navigation Header** — Live Free-Shipping countdown (`₹5,000+`), unmodified original Owls On Board wordmark, clean anchor links, instant live search popover, wishlist, compare counter, and bag trigger.
2. **Full-Bleed Cinematic 3D Video Hero** — Edge-to-edge looping 3D showcase video background (`headervideo.mp4`) with balanced editorial scrim, clear value proposition, primary & secondary CTAs, frosted-glass "Quick-Match Tonight's Table" dock, and discreet play/pause & mute controls.
3. **Architectural Brand Value Proposition Strip** — 4 structured pillars: 100% Original Imported Stock, 24–48 Hr Pan-India Bengaluru Dispatch, Free Shipping over ₹5,000, and Razorpay/UPI Best Price Guarantee.
4. **Owl Game Concierge Chatbot + Live Homepage Results Shelf *(New Feature #1)*** — Instead of cluttering the page with a heavy filter form, a floating conversational **Owl Game Concierge** (also launched from the Hero CTA and Header) guides shoppers through 4 quick conversational choices (or typed natural-language queries like *"party game for 6 under 1500"*) plus a built-in **3D Rolling Die**, and dynamically pins their matched games into a dedicated **"Picked For You"** shelf right on the homepage!
5. **Asymmetric Editorial Category Bento** — 12-column editorial grid using the real Strategy, Party, Family, and Gateway photography with play-style specs and instant jump-to-filter behavior.
6. **Curator's Spotlight: Inside the Box** — Switchable deep-dive showcase (`Wingspan`, `Terraforming Mars`, `Creature Comforts`) exposing the store's real multi-angle S3 component photography and visual BGG complexity gauge.
7. **Fresh Drops — New Arrivals** — All 8 real newly arrived titles with quick filter pills (`Under ₹1,200`, `Big Groups 6+P`, `10–15 Min Fillers`), tactile 3D tilt cards, hover-to-peek secondary photos, and real low-stock badges.
8. **Ranked Bestsellers — Most Played Across 1,000+ Indian Tables** — Ranked `#1–#5` showcase of India's favorite titles with clear MRP savings and one-click compare/inspect.
9. **Side-by-Side Game Comparison Workbench *(New Feature #2)*** — Compare any 2–3 real games across Players, Playtime, Visual Complexity Bar, Age, Best Occasion, Price, and BGG reference, plus 1-click preset matchups.
10. **Ready-to-Host Indian Game Night Table Sets *(New Feature #3)*** — Curated multi-game bundles (House Party, Strategy Collector, Multi-Generation Family) showing fanned real box art, combined MRP savings, Free-Shipping qualification, and 1-click "Add All to Bag".
11. **Bengaluru Brand Story & WhatsApp Community Hub** — High-contrast obsidian editorial band featuring real community photography (`spotlight-narrative.jpeg`), authentic brand quote, verified community metrics, and WhatsApp Club / Instagram links.
12. **Conversion-Focused First-Order Offer & Early Drop CTA** — Clean card capturing emails for exclusive first-order perks and limited cargo drop alerts.
13. **Redesigned Editorial Footer** — Spacious light footer displaying the original logo unmodified, curated destinations, support links, Razorpay/UPI trust badges, and Bengaluru 2025–2026 provenance.
14. **Persistent Interactive Overlays *(New Feature #4)*** — **Multi-Angle Quick-View Inspector** (view all 2–8 real S3 photos + authentic description per game) and **Slide-Over Game Bag Drawer** with a live `₹5,000` Free-Shipping progress meter and smart low-price filler suggestions.

---

## 3. UX Thinking & Customer Experience Improvements

### Why We Redesigned the Existing Homepage
1. **Eliminated the "Choice Paralysis" Barrier:** The original homepage assumed customers already knew titles like *Sagrada* or *Creature Comforts*. First-time buyers actually think in terms of *"I have 6 friends coming over tonight for 20 minutes"* or *"I want a 2-player game under ₹2,000."* The **Interactive Table Concierge** and **Hero Quick-Match Chips** solve this immediately above and just below the fold.
2. **Unlocked Hidden Real Product Photography:** Owls On Board already hosts 2–8 rich component and tabletop photos per product on S3, yet the original homepage only exposed 1 static image per card. Our **hover-to-peek cards**, **Curator's Spotlight**, and **Quick-View Inspector** let customers see what's actually *inside* the box before buying.
3. **Enabled Confident Product Comparison:** High-ticket strategy games (`₹3,500–₹5,610`) require buyer confidence. Our **Side-by-Side Comparison Workbench** removes tab-switching friction by letting visitors compare complexity, playtime, player range, and savings in one clear matrix.
4. **Turned the ₹5,000 Free-Shipping Threshold into a Conversion Engine:** Instead of passive header text, the **Live Free-Shipping Progress Bar** in the utility bar & Cart Drawer—combined with **Curated Game Night Table Sets** and smart sub-₹1,200 filler recommendations—actively nudges higher average order value while feeling genuinely helpful.
5. **Purposeful Tactile 3D Craftsmanship:** Board games are physical, tactile objects. Rather than using generic decorative gradients, our 3D animations serve the product directly: a **6-face physical 3D board game box** in the hero, subtle tactile tilt on cards, and a **real tumbling 3D die** to make discovery playful and memorable.
