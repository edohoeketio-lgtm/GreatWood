# Build Log: Frontend Foundation

*Owner: Frontend Development Team*
*Start Date: 2026-03-10*

## Phase 5A: Foundation

### Actions Taken
- **Global CSS Tokens**: Overwrote `src/app/globals.css` with exact variables mapped from `docs/02_brand/art-direction-guidelines.md`.
- **Typography**: Included `Cormorant Garamond` (serif) and `Inter` (sans) via Google Fonts as proxies for premium architectural fonts like Monument Extended / Roobert.
- **Base Layout**: Refactored `layout.tsx` to strip unnecessary boilerplate and use the global CSS variables.
- **Dependencies Installed**: `lucide-react` (for 1px stroke icons) and `framer-motion` (for calm 400ms transitions).

### Deviations & Decisions
- *Font Substitution*: Since proprietary fonts like Monument Extended are not natively available in the codebase without local `.woff2` assets, `Cormorant Garamond` was chosen as the closest, highly editorial serif currently available via standard Google imports. It provides the necessary architectural tension when paired with Inter.
- *Vanilla CSS Enforcement*: As directed, Tailwind CSS has been fully removed. Future components will use `.module.css` to scope styles strictly while composing global variables.

### Primitives Built
- `Container` & `Grid`: Layout wrappers.
- `Button`: Solid/Ghost variants with exact token colors.
- `Badge`: Status identifiers (In Stock, Custom Order).
- `Input`: Minimalist bottom-border style.
- `ImageFrame`: LQIP container with aspect-ratio locking to prevent CLS.
- `Accordion`: `framer-motion` implementation for Product Docs and Delivery sections.
- `Tooltip`: Hoverable/tappable context primitive used for Delivery Method explanations.

## Phase 5B: Core Shared Components

### Actions Taken
- **UI State Context**: Created `UIContext.tsx` to globally manage the CartDrawer and SearchOverlay states without prop-drilling.
- **Header & Footer**: Built responsive global nav and footer following the strict 4-column architectural layout.
- **Drawers & Overlays**: Integrated `CartDrawer` and `SearchOverlay` using `framer-motion` for calm, precise ease-out transitions. Both lock the body scroll.
- **Taxonomy Primitives**: Constructed `ProductTile`, `PriceBlock`, and `SwatchSelector`.
- **Engagement Primitives**: Created `TrustSignals` (for the Homepage/PDP), `SectionHeader` (for cleanly dividing layouts), and `FilterBar` (with a horizontally scrolling category track for mobile).
- **Graceful Degradation**: Created the semantic `EmptyState` component for empty cart, missing search results, or API failures.

### Deviations & Decisions
- *Global Provider Elevation*: Instead of nesting `UIProvider` inside individual page components, I elected to wrap the Next.js `RootLayout` in it. This ensures that the global Header, Footer, and Drawer states persist without unmounting during client-side navigation between the Homepage and PLP.

## Phase 5C: Page Shells

### Actions Taken
- **Homepage (`src/app/page.tsx`)**: Assembled the core brand narrative using `Container`, `Grid`, `TrustSignals`, and an editorial Hero overlay.
- **PLP (`src/app/shop/page.tsx`)**: Assembled the collection view using `FilterBar` and `ProductTile` inside an augmented `Grid` (with increased vertical rhythm for an image-heavy catalog). Added initial mock JSON data representing the schema.

### Checkpoint Reached
The foundation layers (5A, 5B, 5C) are fully scaffolded per strict design directives.

## Phase 6: Core Scaffolding

### Phase 6A: PDP Shell
- **PDPGallery**: Created `PDPGallery.tsx` enforcing the 5-shot minimum, rendering as a stacked editorial feed on desktop and scroll-snap on mobile.
- **BuyBox**: Built sticky right-column layout with swatch integration mapped to Next.js state.
- **DimensionsModule**: Assembled the blueprint schema paired with dimension definitions.
- **PairsWellWith**: Integrated native CSS scroll-snapping for the cross-sell carousel to avoid heavy slider JS.

### Phase 6B: Checkout Shell
- **Enclosed Layout**: Created `src/app/checkout/layout.tsx` to strip away global navigation/footer links, ensuring a conversion-optimized flow.
- **Flow Shell**: Created multi-step accordion (Guest Info -> Delivery Preview -> Payment) next to an Order Summary column.
- **Success State**: Drafted `success/page.tsx` confirming the order and visually directing the user into radical transparency tracking.

### Phase 6C: Post-Purchase / Account Shells
- **Order Tracker (Purgatory Fix)**: Created a 6-stage component (`OrderTracker.tsx`) mapping the journey from "Received" to "Delivered".
- **OrderStatus Hub**: Created `src/app/account/orders/[id]/page.tsx` mapping specific line items and shipping details alongside the tracker.
- **Account Dashboard**: Implemented `src/app/account/page.tsx` acting as an order history and management hub.

### Checkpoint Reached
All Phase 6 architectural shells are built using the mocked schema. Ready for final review before Phase 7 (Integrations).

## Phase 7: Integration Mapping (Pre-Wiring)

### Actions Taken
- **Integration Map**: Established strict boundaries—Shopify owns transactions, Sanity owns the 5-shot aesthetic and rich media, and Zustand owns the user session cart.
- **Zustand Spec**: Defined `cartStore` (persisted) and `commerceStore` (ephemeral) architectures, strictly decoupling UI visibility state (Context) from logic state.
- **Shopify & Sanity Contracts**: Documented the data payloads expected from both head-ends, emphasizing the unified SKU/Handle approach to merging data server-side before it reaches the UI.
- **Order Tracker Model**: Defined the logic mapping Shopify tags/metafields to the 6-stage "Purgatory Fix" UI.
- **Fail-States**: Defined graceful degradation rules (e.g., 5-shot violations, Shopify timeouts, swatch desyncs).

## Phase 8: Live Integration (Pass 1)

### Actions Taken
- Installed `zustand` and created `src/lib/store/cartStore.ts` (persisted) and `src/lib/store/commerceStore.ts`.
- Wired the `Header` to read the global `cartCount` from `useCartStore`.
- Refactored `CartDrawer` to render real line items from Zustand, map them to UI logic, and calculate the dynamic subtotal.
- **Delivery Engine**: Built `src/lib/utils/delivery.ts` to programmatically resolve timelines and costs based on `DeliveryZone` (e.g. LAGOS vs ABUJA) and `ProductDeliveryConfig` (e.g. `requiresWhiteGlove`, `isCustomMaterial`).
- **Dynamic Delivery Messaging**: Wired the delivery engine into `CartDrawer` (footer message), `Checkout` (Step 2 zone selector & live subtotal recalculation), and the `PDP` (Delivery Accordion preview).
- **CMS Content Pre-Wiring**: Created `src/lib/cms/sanityMock.ts` and `src/lib/cms/shopifyMock.ts` to simulate the strict data separation documented in the Integration Map. 
- **Presentational Decoupling**: Refactored the `Home`, `ShopIndex`, and `ProductPage` components. Replaced inline mock variables with server-side async fetches (`getShopifyProducts()` and `getSanityProduct()`), merging and passing the standardized shapes into the lower-level UI primitives (`ProductTile`, `PDPGallery`, `DimensionsModule`).
