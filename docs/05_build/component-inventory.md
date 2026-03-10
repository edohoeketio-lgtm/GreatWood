# Component Inventory

*Owner: UX Architect*

This defines the React Server/Client component library required to build out the UI, mapping directly to the UX module specifications.

## 1. Atoms (Primitives)
*   **Typography:** `<Heading level="h1|h2|h3">`, `<BodyText size="lg|base|sm|micro">`
*   **Actionable:** `<Button variant="primary|secondary|ghost">`, `<TextLink>`
*   **Form Elements:** `<InputText>`, `<SelectDrawer>`, `<RadioCard>`
*   **Visual:** `<PremiumImage aspect="16:9|4:5|1:1">` (Wraps `next/image` with strict sizing and native shimmer loading), `<Icon name="...">`

## 2. Molecules (Assembled Locals)
*   **Product Card (`<ProductTile>`):** Uses `<PremiumImage aspect="4:5">` and `<BodyText>`. No shadows. Minimal metadata. Subtle 1.03 scale hover.
*   **Lookbook Tile (`<LookbookTile>`):** Pinterest-style wrapper with support for absolute-positioned `<InteractiveHotspot>`.
*   **Material Swatch (`<SwatchSelector>`):** Generates active focus ring. Handles hover tooltip text.
*   **Trust Badge (`<TrustBadge>`):** SVG Icon + tight label (e.g., "Craftsmanship Guarantee").
*   **Accordion Row (`<AccordionItem>`):** Handles state for Care & Delivery expansions using `+`/`-` technical icons.
*   **Cost Line Item (`<PriceBreakdownLine>`):** Flex layout separating label from value, handling strikethroughs for dynamic shipping savings.
*   **Status Pill (`<StatusBadge>`):** "In Stock", "Quick Ship", "Pre-Order".

## 3. Organisms (Section Blocks)
*   **Global Navigation (`<Header>`):** Transitions from transparent (over heroes) to solid `--bg-canvas` on scroll. Includes minimal Cart, Search icons.
*   **Full-Bleed Search (`<SearchOverlay>`):** Drop-down overlay with live visual results (grid of thumbnails).
*   **Cart Drawer (`<SlideOutCart>`):** Contains explicit swatch names, dimensions, estimated delivery timeline banner, and dynamic city-aware shipping calculator preview (Phase 5.5).
*   **PDP Immersive Gallery (`<GalleryFiveShot>`):** The engine of trust. Stacks vertically on desktop (`position: sticky`), horizontal snap-scroll on mobile.
*   **PDP Buy Box (`<BuyBoxConfigurator>`):** Houses price, specific material selectors, mobile-sticky "Add to Bag", and the "Custom Order / Deposit" logic injected from the commerce engine.
*   **Cross-Sell Carousel (`<PairsWellWith>`):** Horizontal scrolling list of `<ProductTile>`.
*   **Dimension Diagram Module (`<DimensionBlueprint>`):** Receives structured dimension JSON and renders it with architectural scale lines natively within content flow.
*   **Trust Value Props Block (`<TrustPropGroup>`):** 3-column layout typically used on Homepage (Material Truth, Delivery, Guarantee).
*   **Status Tracker (`<PostPurchaseTracker>`):** The 6-stage visual pipeline for the account page, showing active, completed, and pending operational stages.
*   **Waitlist Modal (`<WaitlistCapture>`):** Minimal modal capturing email for out-of-stock items.

## 4. Templates / Layouts / Sections
*   **Page Container (`<Container>`):** Confines width horizontally based on breakpoints (mobile full to 1280px max desktop), centering content.
*   **Editorial Grid (`<Grid variant="halves|asymmetric|plp">`):** Enforces spacing token rules strictly. Used for PLP grids (3-col) and Homepage "Shop by Room" (asymmetric 2-col).
*   **Checkout Layout (`<CheckoutContainer>`):** Hermetically sealed grid with sticky RHS Order Summary. 
