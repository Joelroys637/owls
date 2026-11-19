# Owls On Board — Complete Homepage Redesign

> **The Modern Tabletop Atelier** — Daylight Editorial meets Tactile 3D Craftsmanship  
> A production-grade homepage redesign for India's premier imported and independent board game destination, built for the **DAIMLINC Frontend Practical Assignment**.

[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0.9-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-0.475-F05032)](https://lucide.dev/)

---

## 📖 Table of Contents
1. [Project Overview](#-project-overview)
2. [Live Experience Highlights](#-live-experience-highlights)
3. [Design System & Visual Language](#-design-system--visual-language)
4. [Proposed Homepage Architecture](#-proposed-homepage-architecture)
5. [Key Innovative Features](#-key-innovative-features)
6. [UX Thinking & Problem Solving](#-ux-thinking--problem-solving)
7. [Project Structure](#-project-structure)
8. [Getting Started & Local Setup](#-getting-started--local-setup)
9. [Performance & Engineering Highlights](#-performance--engineering-highlights)

---

## 🎯 Project Overview

**Owls On Board** is an authentic Indian board game retailer based in Bengaluru, importing 100% publisher-sealed international titles (from *Wingspan* and *Terraforming Mars* to *Cascadia*, *Harmonies*, and *Creature Comforts*).

While the original storefront had exceptional products, it suffered from:
- **Choice paralysis** for first-time shoppers who think in player counts and playtimes rather than specific board game titles.
- **Hidden photography**: The store hosts 2–8 multi-angle component photos per game on S3, but only showed a single static image.
- **High-ticket hesitation**: Games costing ₹3,500–₹5,600 were difficult to evaluate without side-by-side spec comparison.
- **Underleveraged ₹5,000 Free-Shipping threshold**: The incentive was passive text instead of an interactive cart engine.

This redesign transforms the storefront into **The Modern Tabletop Atelier** — pairing a sunlit gallery aesthetic with physical 3D tabletop tactile cues, instant natural-language game matching, and friction-free comparison.

---

## ✨ Live Experience Highlights

- **Cinematic 3D Video Hero:** Edge-to-edge looping showcase video with an interactive 6-face physical 3D board game box, quick-match filter dock, and audio/video controls.
- **Dynamic Scrolling Announcement Ribbon:** Continuous hardware-accelerated ticker highlighting Free Pan-India Shipping, Publisher-Sealed Authenticity, and Bengaluru 24–48 Hr Dispatch.
- **Owl Concierge AI Chatbot:** Floating intelligent assistant with an authentic Owls emblem badge, rolling 3D die for serendipitous picks, and live homepage shelf injection.
- **Thematic Tabletop Atelier Background:** Subtle dot-matrix drafting grid, architectural hex coordinates, and wireframe D20/D6 tabletop motifs.
- **Interactive Game Comparison Workbench:** Select any 2–3 games to compare player counts, playtimes, visual complexity meters, ages, and MRP savings side-by-side.
- **Curated Indian Game Night Bundles:** Pre-assembled table sets with fanned 3D box art, combined savings, and 1-click add-to-bag.
- **Multi-Angle Component Quick-View:** Inspect all authentic publisher photos, card components, and rules summaries without leaving the page.
- **Slide-Over Game Bag Drawer:** Real-time ₹5,000 free-shipping progress tracker with smart sub-₹1,200 filler recommendations.

---

## 🎨 Design System & Visual Language

### Brand-New Color Palette

Departing from the original warm beige (`#F5F0E8`) and sage green (`#355138`), the new palette introduces an architectural gallery aesthetic that lets vibrant box art take center stage:

| Role | Name | HEX Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Canvas** | Alabaster Chalk | `#FAFAF9` | Page background & airy studio breathing space |
| **Elevated Surface** | Porcelain White | `#FFFFFF` | Cards, flyout panels, inspection modals |
| **Subtle Panel Tint** | Mineral Stone | `#F1F0EC` | Spotlight bands, hover fills, secondary surfaces |
| **Primary Ink** | Obsidian Charcoal | `#111318` | Headings, primary dark buttons, narrative section |
| **Secondary Ink** | Graphite Muted | `#525866` | Body descriptions, metadata labels, specs |
| **Primary Accent** | Burnished Cinnabar | `#C84B31` | Primary CTAs, savings tags, active indicators (Hover: `#A93B24`) |
| **Secondary Accent** | Deep Cobalt Indigo | `#1E3A5F` | Strategy badges, complexity gauges, free-shipping pills |
| **Highlight Accent** | Warm Tabletop Brass | `#B8862D` | Curator spotlight badges, occasion highlights |
| **Hairline Border** | Warm Limestone | `#E4E2DC` | Structural 1px dividers, tactile card outlines |

### Typography System

- **Unified Typeface:** `Space Grotesk` (weights `300–700`) — architectural, geometric, and modern.
  - **Display Headings:** `Space Grotesk` (`600–700`, tracking `-0.03em`) for bold hierarchy.
  - **Body Copy & Controls:** `Space Grotesk` (`400–600`) for high-contrast mobile & desktop legibility.
  - **Tabletop Specs & Prices:** `Space Grotesk` with `tabular-nums` (`font-variant-numeric: tabular-nums`) so player counts (`1–5P`), playtimes (`40–70 min`), complexity ratings (`2.5/5`), and INR prices (`₹5,320`) align with precision.

### Tactile 3D Physical Geometry
- **Physical 6-Face Game Box:** True CSS 3D box in the hero with lid sheen and gentle floating levitation.
- **Rolling 3D Six-Sided Die:** Interactive tumbling die inside the chatbot with authentic pip layouts.
- **Tactile Card Tilts:** Subtle hardware-accelerated perspective elevation on card hover.

---

## 🏛 Proposed Homepage Architecture

1. **Utility Bar & Sticky Header (`Header.tsx`):**
   - Free shipping live countdown over ₹5,000.
   - Original Owls On Board wordmark preserved unmodified.
   - Real-time instant search popover with image previews.
   - Live wishlist, compare drawer count, and bag counter.

2. **Continuous Scrolling Announcement Ribbon (`ScrollingMarquee.tsx`):**
   - Smooth 60fps infinite marquee highlighting store guarantees, shipping speeds, and VIP perks.

3. **Full-Bleed 3D Video Hero (`Hero3DStage.tsx`):**
   - Edge-to-edge looping 3D video (`headervideo.mp4`).
   - Physical 3D game box levitating in perspective space.
   - "Quick-Match Tonight's Table" glassmorphic filter dock.
   - Discrete play/pause and mute controls.

4. **Trust Architecture Strip (`TrustArchitecture.tsx`):**
   - 4 core value pillars: 100% Original Publisher Stock, 24–48 Hr Bengaluru Dispatch, Free Shipping over ₹5,000, and Razorpay/UPI Best Price Guarantee.

5. **Personalized Recommendations Band (`PersonalizedMatchesBand.tsx`):**
   - Dynamic homepage shelf automatically populated by selections from the Owl Concierge Chatbot or Category Bento.

6. **Asymmetric Editorial Category Bento (`CategoryBento.tsx`):**
   - 12-column editorial discovery grid across Strategy, Party, Family, and Gateway titles.

7. **Curator's Spotlight: Inside the Box (`EditorsSpotlight.tsx`):**
   - Deep-dive component inspection for flagship titles (*Wingspan*, *Terraforming Mars*, *Creature Comforts*) with multi-angle photography and BGG complexity gauges.

8. **Fresh Drops — New Arrivals (`NewArrivalsSection.tsx`):**
   - All 8 authentic new titles with filter pills (`Under ₹1,200`, `Big Groups 6+P`, `10–15 Min Fillers`), hover photo peek, and low-stock indicators.

9. **Ranked Bestsellers (`BestSellersSection.tsx`):**
   - Ranked `#1–#5` Indian tabletop favorites with MRP discount calculations and quick action triggers.

10. **Side-by-Side Comparison Workbench (`CompareSection.tsx`):**
    - Multi-game matrix comparing Players, Playtime, Complexity bar, Age, Occasion, Price, and BGG reference.

11. **Ready-to-Host Game Night Bundles (`GameNightBundles.tsx`):**
    - Curated bundles (House Party Pack, Euro Strategy Vault, Family Game Night) with combined savings and 1-click bag add.

12. **Bengaluru Brand Story & WhatsApp Community (`BrandStory.tsx`):**
    - Obsidian editorial band with authentic community imagery, verified table metrics, and WhatsApp Club access.

13. **Conversion CTA (`ConversionCTA.tsx`):**
    - First-order welcome incentive and new drop notification signup.

14. **Editorial Footer (`Footer.tsx`):**
    - Structured directory, official customer care contacts, verified payment badges, and Bengaluru provenance.

15. **Persistent Overlays:**
    - **Owl Concierge Chatbot (`OwlChatbot.tsx`)**
    - **Slide-Over Game Bag Drawer (`CartDrawer.tsx`)**
    - **Multi-Angle Quick-View Modal (`QuickViewModal.tsx`)**

---

## 💡 Key Innovative Features

### 1. Owl Game Concierge AI Chatbot
- **Location:** Anchored to the bottom-right corner of the viewport (`position: fixed; bottom: 24px; right: 24px; z-index: 99999`) on desktop, with balanced 16px margins on mobile.
- **Emblem:** Official Owls On Board circular badge with a green online pulse ring and mini chat indicator (clean icon-only design).
- **Interactive Flow:**
  - Guides shoppers through 4 conversational questions (Group size, Playtime, Complexity, Budget).
  - Accepts natural-language free text queries (e.g., *"party game for 6 under 1500"*).
  - Features an interactive **3D Rolling Die** for randomized recommendations.
  - Automatically pins matched games directly into a dedicated **"Picked For You"** shelf on the homepage with smooth scroll jumping.

### 2. Side-by-Side Game Comparison Workbench
- Compare up to 3 games simultaneously across 6 standardized dimensions:
  - Player Count Range
  - Playtime
  - BoardGameGeek (BGG) Visual Complexity Gauge
  - Recommended Age
  - Best Occasion / Setting
  - Authentic INR Pricing & MRP Savings
- Includes 1-click preset face-offs (*Gateway Showdown*, *Heavy Strategy Clash*, *Cozy Family Faceoff*).

### 3. Curated Indian Game Night Bundles
- Solves the question: *"What should I get for a complete game night?"*
- Pre-curated packages pairing marquee games with quick filler titles.
- Highlights cumulative MRP savings, instant Free-Shipping threshold qualification, and a single 1-click bundle purchase button.

### 4. Component-First Inspection (Quick-View Modal)
- Reveals 2–8 real high-resolution S3 component and tabletop photos for each title.
- Enables tabletop collectors to inspect card quality, miniatures, dice, and board layout before purchasing.

---

## 🧠 UX Thinking & Problem Solving

| Problem on Existing Site | Solution Implemented in Redesign |
| :--- | :--- |
| **Choice Paralysis:** Browsing 50+ unfamiliar game boxes overwhelms casual buyers. | **Owl Concierge Chatbot + Hero Filter Dock:** Matches users in 30 seconds by group size, duration, and budget. |
| **Single Static Image:** Customers couldn't see board components or miniatures. | **Hover-to-Peek + Multi-Photo Quick-View Modal:** Exposes all 2–8 real S3 component photos. |
| **High-Ticket Hesitation:** Spending ₹4,000+ requires spec validation. | **Side-by-Side Comparison Workbench:** Direct visual comparison across BGG weight, duration, and player count. |
| **Passive Free-Shipping Banner:** ₹5,000 threshold was easy to miss. | **Live Free-Shipping Progress Bar:** Dynamically calculates remaining amount with smart sub-₹1,200 filler suggestions. |
| **Lack of Physical Tabletop Feel:** Standard flat e-commerce templates feel sterile. | **Physical 3D Box & Rolling Die:** Hardware-accelerated CSS 3D elements celebrating tabletop tactile play. |

---

## 📁 Project Structure

```text
owls/
├── public/
│   ├── favicon.ico                 # Multi-resolution favicon (16, 32, 48px)
│   ├── favicon-16x16.png           # Standard 16x16 PNG favicon
│   ├── favicon-32x32.png           # High-DPI 32x32 PNG favicon
│   ├── apple-touch-icon.png        # 180x180 iOS home screen icon
│   ├── icon-256.png                # 256x256 PWA icon
│   └── site.webmanifest            # Web app manifest for PWA installation
├── src/
│   ├── asset/
│   │   ├── headervideo.mp4         # Authentic 3D looping video for hero stage
│   │   └── owlLogoDataUri.ts       # Embedded base64 authentic owl emblem
│   ├── components/
│   │   ├── BestSellersSection.tsx  # Ranked #1–#5 Indian bestseller showcase
│   │   ├── BrandStory.tsx          # Bengaluru brand narrative & WhatsApp club
│   │   ├── CartDrawer.tsx          # Slide-over game bag with free-shipping meter
│   │   ├── CategoryBento.tsx       # 12-column editorial category bento grid
│   │   ├── CompareSection.tsx      # Side-by-side game comparison workbench
│   │   ├── ConversionCTA.tsx       # First-order welcome incentive card
│   │   ├── EditorsSpotlight.tsx    # Curator's component spotlight deep-dive
│   │   ├── Footer.tsx              # Architectural editorial footer
│   │   ├── GameNightBundles.tsx    # Curated Indian game night table sets
│   │   ├── Header.tsx              # Sticky header with live search & counters
│   │   ├── Hero3DStage.tsx         # Full-bleed 3D video hero & 3D game box
│   │   ├── NewArrivalsSection.tsx  # All 8 authentic new drop titles
│   │   ├── OwlChatbot.tsx          # Portal-rendered AI concierge with 3D die
│   │   ├── PersonalizedMatchesBand.tsx # Dynamic homepage recommended shelf
│   │   ├── ProductCard3D.tsx       # Tactile 3D product card with hover peek
│   │   ├── QuickViewModal.tsx      # Multi-photo component inspector
│   │   ├── Reveal3D.tsx            # Scroll-triggered 3D reveal wrapper
│   │   ├── ScrollingMarquee.tsx    # Continuous announcement ribbon
│   │   ├── TabletopBackground.tsx  # Tactile drafting grid & hex topography
│   │   └── TrustArchitecture.tsx   # 4 core store guarantee pillars
│   ├── data/
│   │   └── catalog.ts              # Authentic catalog dataset, links & assets
│   ├── utils/
│   │   └── format.ts               # INR currency, playtime, and player formatters
│   ├── App.tsx                     # Top-level application orchestrator
│   ├── index.css                   # Tailwind v4, 3D animations, custom classes
│   ├── main.tsx                    # React 19 application entry point
│   └── vite-env.d.ts               # Vite environment type declarations
├── index.html                      # HTML5 template with Space Grotesk & SEO
├── package.json                    # Dependencies, scripts, and project metadata
├── tsconfig.json                   # TypeScript project configuration
├── vercel.json                     # Vercel deployment configuration
└── vite.config.ts                  # Vite build configuration with Tailwind plugin
```

---

## 🚀 Getting Started & Local Setup

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### Installation
1. Clone or navigate to the project directory:
   ```bash
   cd e:/internship/daimlinc/owls
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the Vite development server with hot module replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
Verify TypeScript compilation and bundle optimized production assets:
```bash
npm run build
```
The output will be placed in the `dist/` directory.

### Previewing the Production Build
Preview the generated production build locally:
```bash
npm run preview
```

---

## ⚡ Performance & Engineering Highlights

- **React 19 Native Architecture:** Uses modern React 19 primitives, hooks, and clean state lifting.
- **Tailwind CSS v4 Engine:** Utilizes the new `@tailwindcss/vite` compiler for sub-second build times.
- **Zero CSS Framework Bloat:** Custom-crafted 3D transforms (`perspective`, `transform-style: preserve-3d`, `translate3d`) without heavy 3D rendering engines (Three.js/WebGL), ensuring buttery 60fps performance across mobile and desktop.
- **Portal-Rendered Modals:** Both the Owl Chatbot, Quick-View Modal, and Cart Drawer render via React `createPortal(..., document.body)` to avoid parent transform, perspective, or stacking context clipping bugs.
- **Inlined Base64 Brand Emblem:** The authentic Owls On Board logo badge is embedded as a high-density data URI (`owlLogoDataUri.ts`) to eliminate 404 network delays or missing image flashes.
- **Responsive Viewport Constraints:** Responsive positioning ensures the chatbot modal provides at least 16px of clear margin on mobile devices while locking firmly to the bottom-right corner on desktop screens.
- **Accessibility & Motion Safety:** Includes `@media (prefers-reduced-motion: reduce)` rules that automatically disable levitation and continuous marquee transforms for users with motion sensitivities.

---

### 📦 Submission Provenance
- **Project:** Owls On Board Homepage Redesign
- **Candidate:** LEO JOEL ROYS
- **Evaluation:** DAIMLINC Frontend Practical Assignment
- **License:** Private / Assessment Submission
