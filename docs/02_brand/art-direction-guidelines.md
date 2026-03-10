# Brand World & Art Direction Guidelines: Execution Framework

*Owner: Visual Storyteller*

## 1. Visual Identity & Brand Concept
**Concept:** "The GreatWood"
We bring operational rigor and world-class taste to the Nigerian furniture market. Our visual language must exude "warm, restrained luxury." 

We rely on **Visual Evidence Over Empty Claims.** Every visual asset must prove quality, not just assert it.

## 2. Exact Color Tokens & Semantic Usage
*Concept: Wabi-Sabi & Nigerian Earth. No stark whites, no pure blacks. No bright Ankara prints as crutches.*

*   **Backgrounds / Surfaces**
    *   `--bg-canvas`: `#F7F5F0` (Warm Alabaster) - Primary page background for a gallery-like, soft feel.
    *   `--bg-surface`: `#FCFCFA` (Warm Off-White) - Used sparingly, only for elevated cards or floating elements demanding high contrast, avoiding pure clinical white.
    *   `--bg-elevated`: `#EFECE5` (Soft Oatmeal) - Secondary sections, footers, subtle containment blocks.
    *   `--bg-dark`: `#1A1A1A` (Deep Charcoal) - Dark mode or high-contrast editorial sections.
*   **Text / Typography**
    *   `--text-primary`: `#1A1A1A` (Deep Charcoal) - almost black for ultimate, uncompromised legibility.
    *   `--text-secondary`: `#666666` (Muted Slate) - for secondary descriptions, metadata, and fine print.
    *   `--text-inverse`: `#F7F5F0` (Warm Alabaster) - text on dark backgrounds.
*   **Accents / Interactive**
    *   `--accent-primary`: `#8B4513` (Deep Terracotta / Mahogany) - primary buttons, active states, key interactive links.
    *   `--accent-secondary`: `#CDBA96` (Muted Ochre) - subtle highlights, focus rings, secondary interactive states.
    *   `--accent-success`: `#4A5D4E` (Forest Green) - subtle success states, delivery confirmations, "In Stock" indicators.
    *   `--border-subtle`: `#E0DCD3` - delicate dividers and architectural borders.

## 3. Typography Scale & Usage Rules
*Concept: Architectural precision meets editorial elegance.*

*   **Primary Headings (e.g., Monument Extended, Ogg, or PP Editorial New)**
    *   `--text-h1`: 3.5rem (56px) / Mobile 2.5rem, Line Height 1.1, Tracking -2% - Hero banners, main category titles.
    *   `--text-h2`: 2.5rem (40px) / Mobile 2rem, Line Height 1.2, Tracking -1% - Section titles, major content dividers.
    *   `--text-h3`: 1.5rem (24px) / Mobile 1.25rem, Line Height 1.3, Tracking 0 - Module headers, Lookbook titles.
*   **Body Copy (e.g., Inter or Roobert) - The "Operational" Font**
    *   `--text-body-lg`: 1.125rem (18px), Line Height 1.6 - Introductions, leading editorial blocks.
    *   `--text-body`: 1rem (16px), Line Height 1.6 - Standard descriptions, policy text. *Never shrink below 16px on mobile.*
    *   `--text-sm`: 0.875rem (14px), Line Height 1.5 - Metadata, captions, secondary navigation.
    *   `--text-micro`: 0.75rem (12px), Line Height 1.4, Tracking 4% (Uppercase) - Material tags, dimensional labels, overlines.
*   **Formatting Rules:**
    *   Enforce dramatic contrast between serif headings and sans-serif body copy.
    *   Never center align body text longer than 3 lines. Left-align for rigorous readability and calm structuring.

## 4. Component Visual Rules
*   **Buttons:** Sharp architectural corners (0px to 2px border radius).
    *   *Primary:* Solid `--accent-primary` fill, `--text-inverse` text. 
    *   *Secondary:* Transparent background, 1px `--text-primary` border. High-contrast hover states (invert colors).
*   **Cards & Product Tiles:** Extremely pristine. Minimum padding and maximum image focus (Image takes a target range of 75–82% height depending on breakpoint). Subtle 1px `--border-subtle` on hover. Minimal text underneath (Name, Price, 1 short badge if necessary). No decorative drop shadows; only minimal functional elevation where needed (e.g., sticky navigation or floating modals).
*   **Swatches:** Generously sized circles (24px minimum) or squares. Must have a clear, high-contrast active ring when selected. Tooltip on hover showing the exact material name.
*   **Forms/Inputs:** Bottom-border only (no full box enclosure) for a refined look, or a very light `--bg-elevated` fill with no border. Focus state must be a sharp, clear outline using `--accent-primary`. Label remains visible (no disappearing placeholders).
*   **Nav/Header:** Transparent over hero images, transitioning to solid `--bg-canvas` immediately on scroll. Minimalist, uncluttered utility icons (Cart, Search, Account) with 1px to 1.5px stroke weight.
*   **Drawers/Accordions:** Used heavily to hide complex specs and dense policy text without cluttering the main flow. Smooth vertical expansion. Plus/Minus (+) (-) icons preferred over arrows/chevrons for a technical, exact feel.
*   **Footer:** Architecturally structured, strict multi-column grid. Generous internal padding. Dark theme (`--bg-dark` with `--text-inverse`) heavily preferred to visually anchor the bottom of the page.

## 5. Motion Language & Interaction Principles
*   **Core Principle:** Premium = Calm. No bouncing, no frantic sliding, no jiggle animations.
*   **Speed & Easing:** Deliberate and smooth. Duration: 300-500ms. Easing: `cubic-bezier(0.25, 1, 0.5, 1)` or similar subtle ease-out.
*   **Hover States:** Gentle scale-up (1.0 to 1.03) on product tile images or a slow, cross-fade pan to a secondary context shot. Avoid aggressive color shifts.
*   **Page Transitions:** Soft, immediate fade-in/fade-out. Prevent jarring white flashes between page loads.
*   **Overlays (Cart/Menus):** Slide in elegantly from the right (Cart) or fade in gently from the bottom with a 50% opacity scrim (Modals).

## 6. Photography Integration
*Note: For comprehensive photography execution, refer to `photography-direction.md` as the ultimate source of truth.*
*   **Integration Rule:** Photography must dominate the layout. Containers must dynamically scale to allow the 5-Shot Minimum to be displayed at maximum feasible resolution.
*   **Performance:** Photography must be aggressively optimized (WebP/AVIF) by the technical team; the Art Direction mandate is that we do not sacrifice visual fidelity for speed—we must engineer a solution that achieves both.

## 7. Page-Specific Layout Rhythm
*   **Homepage:** Expansive, editorial hero -> Curated "Spaces" (Shop by Room visual links) -> Material/Craftsmanship story block -> Featured Category carousel. Relies on alternating single full-bleed images and asymmetrical 2-column grids (e.g., 60/40 text/image splits).
*   **PLP (Product Listing Page):** Strict, rhythmic grid (3-column desktop, 2-column tablet, 1 or 2-column mobile depending on detail required). Generous vertical rhythm between rows. Filters housed in a clean, sticky sidebar or a discreet top drawer to keep the grid pristine.
*   **PDP (Product Detail Page):** Architectural 50/50 split on desktop. Sweeping, scrollable image gallery on the left (sticky as you scroll). Critical buy-box and Reassurance Architecture on the right.
*   **Lookbook:** Highly visual, Pinterest-style masonry or staggered editorial layouts. Must include subtle "Shop the Look" hotspots layered over the images.
*   **Checkout:** Hermetically sealed environment. Strip away main navigation and footer. Pure, centered, form-driven focus to reinforce the "contractual" seriousness of the purchase.
