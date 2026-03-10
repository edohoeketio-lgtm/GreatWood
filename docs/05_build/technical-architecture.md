# Technical Architecture

*Owner: Frontend Architect*

## 1. Recommended Frontend Architecture
To execute the "GreatWood" proposition, we must deliver a premium, fast, and highly visual experience. The architecture prioritizes performance, SEO, and visual fidelity.

*   **Framework:** Next.js (App Router). Selected for React Server Components (RSC), delivering less JavaScript to the client while enabling dynamic routing and excellent SEO.
*   **Styling:** Vanilla CSS & CSS Modules. We strictly avoid utility-class bloat to maintain architectural exactness. A robust CSS Variable system will enforce design tokens.
*   **Headless CMS:** Sanity.io or Contentful. Crucial for managing the demanding "5-Shot Minimum" image galleries, structured material data, and deep editorial content.
*   **Commerce Engine:** Shopify Headless (Storefront API). Manages cart, checkout, inventory, and dynamic rules (e.g., custom order deposits) transparently.
*   **State Management:**
    *   *Global UI State:* React Context (Theme, Cart Drawer, Modals).
    *   *Commerce State:* Zustand (predictable, lightweight cart/checkout state management).
*   **Hosting:** Vercel. Required for native Next.js image optimization and edge caching.

## 2. Progressive Enhancement Strategy
*   **Text and Core UI First:** Core text content, prices, and buttons must be immediately interactive before heavy JavaScript hydration.
*   **Image Loading:** Low-quality image placeholders (LQIP) or skeleton frames matching the exact aspect ratio to prevent Cumulative Layout Shift (CLS). High-resolution lifestyle imagery fades in smoothly.
*   **Motion Fallback:** Respect `prefers-reduced-motion`. If enabled, skip 300ms ease-outs and switch to instant or 100ms simple opacity cross-fades.

## 3. Accessibility & Performance Rules
*   **Performance (Core Web Vitals):**
    *   LCP (Largest Contentful Paint) < 1.5s.
    *   CLS (Cumulative Layout Shift) exactly 0.
    *   INP (Interaction to Next Paint) < 100ms.
*   **Accessibility (WCAG 2.1 AA):**
    *   Full screen-reader support via proper ARIA landmarks (`main`, `navigation`, `banner`).
    *   Complete keyboard navigability for the Cart Drawer, Checkout, and dynamic filters.
    *   Strict color contrast ratios for all body text (`--text-secondary` must remain legible against `--bg-canvas`).

## 4. MVP vs. Later-Phase Features
*   **Phase 1 (Foundation - MVP):** Next.js App Router setup, CSS Token system, static pages (Home, Lookbook, Support), PDP with static gallery, Cart UI scaffolding.
*   **Phase 2 (Commerce Integration):** Shopify Headless API integration, live inventory status, checkout flow link, real-time pricing.
*   **Phase 3 (Content & Polish):** Sanity CMS connection, Framer Motion transitions, dynamic Delivery/Returns rules.
*   **Phase 4 (Later):** 3D configurator for Custom Orders, User Accounts ("Purgatory Fix" order tracking dashboard), Wishlist.
