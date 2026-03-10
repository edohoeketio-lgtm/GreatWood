# Implementation Roadmap

*Owner: Technical Project Manager / Frontend Lead*

## Phase 1: Foundation & Scaffold (Current)
*   **Goal:** Establish the monorepo, framework, and design token system.
*   **Tasks:**
    *   Initialize Next.js App Router project.
    *   Configure global CSS variables based on `art-direction-guidelines.md`.
    *   Set up absolute path aliases (`@/components`, `@/lib`).
    *   Configure ESLint, Prettier, and strict TypeScript rules.
    *   Build out atomic foundational components (Typography, Buttons, Swatches).

## Phase 2: Static Page Assembly & Layouts
*   **Goal:** Translate the UX Architecture into static, responsive views.
*   **Tasks:**
    *   Build Global Header and Footer.
    *   Assemble Homepage layout.
    *   Assemble PLP Grid layout and static Filter Sidebar.
    *   Assemble the flagship PDP structural layout (Buy Box, Accordions, Gallery).
    *   Build static Policy pages (Support, Delivery).

## Phase 3: Content Model Integration (CMS)
*   **Goal:** Connect the architecture to real data.
*   **Tasks:**
    *   Set up Sanity Studio (or equivalent Headless CMS).
    *   Define schemas as per `content-model.md`.
    *   Create data fetching utilities in Next.js (`getProducts`, `getProductBySlug`).
    *   Replace static mock data with CMS queries.

## Phase 4: Commerce State & Interactions
*   **Goal:** Enable the transactional capabilities.
*   **Tasks:**
    *   Integrate Zustand for Cart State.
    *   Build the Cart Sliding Drawer.
    *   Implement "Add to Bag" logic.
    *   Connect to Shopify Storefront API for live inventory checking.
    *   Build out the focused Checkout Route.

## Phase 5: Motion, Polish, & Accessibility Audit
*   **Goal:** Elevate from "Functional" to "Premium".
*   **Tasks:**
    *   Integrate Framer Motion for page transitions and drawer slides.
    *   Implement Lookbook interactive hotspots.
    *   Run comprehensive Lighthouse audits (target > 90 across all categories).
    *   Conduct manual keyboard navigation and VoiceOver testing.
    *   Deploy to Vercel production environment.
