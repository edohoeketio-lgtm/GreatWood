# App Route & Module Map

*Owner: UX Architect*

This document defines the Next.js app router structure, page-by-page module composition, trust and reassurance placement, and phased rollout expectations.

## 1. Next.js App Router Structure
The route architecture maps directly to the defined site taxonomy.

```text
app/
├── (shop)/                       # Shop layout group (includes global precise Header & Footer)
│   ├── page.tsx                  # Homepage / Manifesto
│   ├── collections/
│   │   ├── page.tsx              # Index of all collections
│   │   └── [slug]/page.tsx       # PLP: Collection/Room specific listing
│   ├── products/
│   │   └── [slug]/page.tsx       # PDP: Core Product Details Page
│   ├── lookbook/
│   │   └── page.tsx              # Shop-the-look masonry / spaces
│   ├── the-craft/
│   │   └── page.tsx              # Brand storytelling, material provenance
│   └── (support)/
│       ├── design-consultation/page.tsx
│       ├── delivery-installation/page.tsx
│       ├── warranty-returns/page.tsx
│       └── contact/page.tsx
├── (checkout)/                   # Hermetically sealed route group (No standard Header/Footer)
│   ├── cart/page.tsx             # Full cart review (if standalone needed)
│   └── checkout/
│       ├── details/page.tsx
│       ├── delivery/page.tsx
│       └── payment/page.tsx
├── account/                      # Post-Purchase Purgatory Fix Hub
│   ├── page.tsx                  # User dash / recent orders
│   └── orders/
│       └── [id]/page.tsx         # The 6-Stage Operational Tracker view
└── layout.tsx                    # Root layout (Metadata, Font Loading, Providers)
```

## 2. Page-By-Page Module Structure & Trust Placement

### Homepage (`/`)
* **Global Header** (MVP)
* **Hero Section** (MVP): 16:9 expansive editorial hero. *Trust Placement: "Beautifully Certain" manifesto.*
* **Trust Block** (MVP): 3-column value props (Material Truth, White-Glove Delivery, Craftsmanship Guarantee).
* **Shop by Room / Spaces** (MVP): Asymmetrical 2-column grid linking to lookbooks.
* **Material/Craftsmanship Story** (MVP): Single full-bleed image block with copy.
* **Featured Category Carousel** (MVP): Highlighting primary launch categories.
* **Global Footer** (MVP)

### Product Listing Page (PLP) (`/collections/[slug]`)
* **Category Hero** (MVP): 4:5 image or short banner with H1.
* **Filter & Sort Bar** (MVP): Clean horizontal bar or sticky left sidebar on desktop.
* **Product Grid** (MVP): 3-column desktop layout. *Trust Placement: "In Stock" or "Quick Ship" badges on applicable cards.*
* **Recently Viewed Block** (MVP): Injected seamlessly above the footer.
* **Compare Tool** (Phase 5.5): Visual side-by-side comparison.

### Product Detail Page (PDP) (`/products/[slug]`)
* **Immersive Gallery** (MVP): Sticky left on desktop, 5-shot minimum (Establishing, Lifestyle, Macro, Structural, Scale).
* **Buy Box** (MVP): Right side. Price, dispatch badge, swatch selector, "Add to Bag". *Trust Placement: Explicit dispatch time.*
* **The Promise Badges** (MVP): Below CTA. Icons for Delivery, Guarantee, Secure Checkout.
* **Product Story & Dimension Diagram** (MVP): Editorial description and visual blueprint. *Trust Placement: Architectural dimension accuracy.*
* **Material Breakdown** (MVP): Hard specs of materials.
* **Delivery & Installation Accordion** (MVP).
* **Care Guide Accordion** (MVP).
* **Need Help? CTA** (MVP): WhatsApp consultation link.
* **Cross-Sell / Pairs Well With** (MVP): Curated accessories.

### Lookbook / Spaces (`/lookbook`)
* **Editorial Masonry Grid** (MVP): Pinterest-style staggered layout.
* **Interactive Hotspots** (Phase 5.5): "Shop the Look" pop-out mini-PDP cards on hover/tap. 

### Custom Order Flow (Integrated Modal or `/custom-order`)
* **Customization Configurator Modal** (MVP): Step-by-step material swaps.
* **Lead Time Banner** (MVP): Stark, clear disclaimer on extended delivery times. *Trust Placement.*
* **Request Consultation Checkpoint** (MVP): Required before deposit on complex items.

### Consultation Page (`/design-consultation`)
* **Hero & Proposition** (MVP): Introduction to the design team.
* **Booking Integration** (MVP): Calendly embed or WhatsApp deep link.
* **Space Photo Upload Form** (Phase 5.5): Let users upload their current room for advice.

### Cart Drawer (Global Overlay)
* **Drawer Body** (MVP): Slides from right. Thumbnails, swatch names, dim summary.
* **Delivery Timeline Preview** (MVP): Estimated dispatch *before* checkout. *Trust Placement.*
* **Bundling Prompts** (Phase 5.5): E.g., "Add matching side table..."
* **City-Aware Shipping Calculator** (Phase 5.5): Dynamic preview of costs based on location.

### Checkout Flow (`/checkout/*`)
* **Enclosed Header/Footer** (MVP): No main nav distraction.
* **Order Summary Sidebar** (MVP): Sticky right column. Includes guaranteed delivery window.
* **Guest Checkout Path** (MVP): Details -> Shipping -> Payment -> Review.
* **Trust Badges** (MVP): Placed directly adjacent to "Place Secure Order."

### Account / Order Status Hub (`/account`)
* **Login/Registration** (MVP).
* **Order Status Hub (The "Purgatory Fix")** (MVP): Dynamic realistic timeline tracking.
* **Order History & Care Guides** (MVP).
* **Save for Later / Wishlist** (Phase 5.5).

## 3. Technical Route Considerations
*   **PDP Dynamic Loading:** `generateStaticParams` coupled with ISR (Incremental Static Regeneration) ensures incredibly fast loads while staying synced with inventory states.
*   **Checkout Isolation:** The `(checkout)` group uses an entirely different `layout.tsx` to strip away navigation and enforce the "contractual" focus required by the UX Architecture.
