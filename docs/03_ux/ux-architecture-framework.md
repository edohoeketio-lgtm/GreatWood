# UX & Commerce Architecture Framework: Execution Framework

*Owner: UX Architect*

## 1. Core UX Philosophy: Reassurance First
Our primary UI conversion metric is **Trust**. Every interaction must reduce friction, prove quality, and eliminate purchase anxiety. Premium = Calm.

## 2. Full Site Map
*   **Home**
*   **Shop (PLP)**
    *   By Category (Sofas, Accent Chairs, Coffee Tables, Dining, Storage)
    *   By Room (Living Room, Dining Room, Bedroom, Workspace)
    *   By Collection 
    *   Bundles / Styled Sets
*   **The Product (PDP)**
*   **The Brand / The Craft** (Our Story, Material Provenance, Manufacturing Transparency)
*   **Lookbook / Spaces** (Editorial inspiration, Shop-the-look)
*   **Custom Orders / Bespoke**
*   **Support & Services**
    *   Contact / Design Consultation
    *   FAQ & Help Center
    *   Delivery & Assembly Guide
    *   Warranty & Returns Policy
*   **Account / Post-Purchase**
    *   Login / Register
    *   Order Status Hub (The "Purgatory Fix" Tracker)
    *   Order History & Care Guides
*   **Checkout Flow** (Bag -> Details -> Shipping -> Payment -> Confirmation)

## 3. Search, Filtering, and Sorting Logic
*   **Search Behavior:** Prominent but elegant search icon in the main nav. Trigger opens an expansive, full-bleed drop-down overlay. Must support typo-tolerance and robust synonym mapping (e.g., "couch" -> "sofa", "tv stand" -> "console"). Live visual results (product image + price) must load instantly as the user types.
*   **Filtering (PLP):** Non-intrusive. Can be a sticky left sidebar on desktop or a clean horizontal bar that opens a bottom-sheet drawer on mobile.
    *   *Core Filters:* Category, Material (e.g., Velvet, Leather, Teak), Color Family, Price, Dimensions (Width/Depth ranges).
    *   *Trust Filters:* "In Stock", "Quick Ship / Dispatches in 7 Days" (crucial for local buyers needing speed).
*   **Sorting:** Default state is "Curated / Recommended". Secondary options: Price (Low/High), Newest Arrivals, Dispatch Speed.

## 4. Exact PDP Module Structure
The PDP is a relentless engine of reassurance. It is structured from top to bottom as follows:
1.  **Immersive Gallery (Left - Sticky on Desktop / Carousel on Mobile):** The 5-Shot Minimum stacked vertically for immersive scrolling on desktop, or a smooth horizontal swipe carousel on mobile.
2.  **The Buy Box (Right - Top):** Breadcrumbs, H1 Title, Price, Klarna/Installment options (if applicable), Dispatch Time prominently badged, Swatch Selector (with rich tooltips), "Add to Bag" primary CTA.
3.  **The Promise (Right - Below CTA):** Value props with clean iconography: "White-glove delivery," "Comprehensive Craftsmanship Guarantee," "Secure Checkout."
4.  **Product Story & Specs (Scroll below fold):** 
    *   Editorial description paragraph.
    *   Dimension Diagram (Visual architectural blueprint graphic, not just text bullets).
    *   Material Breakdown (Detailed specs: "Kiln-dried Mahogany," "High-resilience 35kg foam").
5.  **Care, Delivery & Installation Accordions:** Expandable sections detailing exact daily care instructions and the step-by-step delivery and installation process flow, explicitly including city-aware parameters (e.g., "White-Glove Installation is available in Lagos and Abuja. Nationwide crated delivery available.").
6.  **Need Help? (Concierge CTA):** "Chat with our design team on WhatsApp" floating button or prominent text link.
7.  **Cross-Sell ("Pairs well with"):** Visually distinct carousel of curated accessories or complimentary pieces. Avoid algorithmic "You Might Also Like" randomness.

## 5. Custom Order / Bespoke Flow
For items requiring specific dimensions or premium material swaps not held in default inventory:
*   A dedicated "Customize This Piece" secondary CTA leading to an elegant step-by-step configurator modal.
*   Visual updates (even if basic texture maps) of the chosen material on the placeholder frame.
*   A stark, clear disclaimer banner stating exact revised lead times for custom orders.
*   A required "Request Consultation" checkpoint option before placing the deposit for high-complexity items.

## 6. Consultation Flow
*   Integrated into the main nav (Support) and directly on high-ticket PDPs.
*   A frictionless Calendly/Booking integration or direct high-priority WhatsApp link for high-net-worth buyers needing multi-room coordination.
*   Include an explicit option/prompt for users to upload photos of their current space for personalized layout advice.

## 7. Cart & Checkout Structure
*   **The Cart Drawer:** Slides from the right. Shows item thumbnail, explicit swatch name, dimension summary, subtotal, and an estimated delivery timeline *before* entering the formal checkout. Must include a city-aware shipping calculator preview to prevent unexpected costs at the final step.
*   **The Checkout (Focused & Reassuring):** 
    *(Note: "Contractual checkout" is an internal design principle driving clarity and seriousness, not literal customer-facing language.)*
    *   Enclosed environment (no header/footer navigation to distract).
    *   *Right column sticky:* Order summary prominently displaying the selected swatch name, dimensions, and the guaranteed delivery window.
    *   *Left column:* Guest checkout optimized. Clear progress indicators (Details -> Shipping -> Payment -> Review).
    *   Trust badges placed directly under or immediately adjacent to the "Pay Securely" button.

## 8. Delivery/Returns/Warranty Info Architecture
*   *Mandate:* Never hidden in dense legal jargon or a generic footer link. Must be presented visually.
*   **Delivery:** A graphical timeline or map showing exactly what happens from order placement to living room installation.
*   **Returns:** A clear, bulleted "No-Nonsense" return policy.
*   **Warranty:** Highlight the "Craftsmanship Guarantee" as a core brand pillar. Explain exactly what is covered (frame, fabric) simply.

## 9. Wishlist / Compare / Recently Viewed Roadmap
*   **Phase 1:** Focus entirely on a persistent "Recently Viewed" block injected seamlessly into the PLP footer and Bottom of the PDP to assist the non-linear shopping journey.
*   **Phase 2:** Simple "Save for Later" (Wishlist) functionality requiring account creation (serves as a primary data capture mechanism).
*   **Phase 3:** Visual "Compare" tool allowing side-by-side dimensional and material comparison of similar items.

## 10. Mobile Behavior Rules
*   **Sticky Elements:** The "Add to Bag" button must detach and remain sticky at the bottom of the viewport on the PDP once the user scrolls past the initial buy box.
*   **Gestures:** Full reliance on native-feeling horizontal swipes for product galleries. Avoid tiny arrows.
*   **Thumb Zone:** All critical interactive elements (filters, sort, chat, add to cart) must be reachable in the bottom 40% of the screen.
*   **Typography:** Do not shrink body copy below 16px. Readability on mobile is non-negotiable for trust.

## 11. Empty, Error, & Unavailable States
*   **Out of Stock:** Never present a dead end. Switch the main CTA to a distinct "Notify Me When Available" or "Pre-Order for [Month]" button.
*   **404 / Empty Search:** Apologetic but deeply helpful. "We couldn't find exactly that, but these pieces share a similar aesthetic..." followed by highly curated recommendations.
*   **Form Errors:** Inline validation only. Explain *why* the error occurred calmly (e.g., "Please check the postcode format") rather than generic "Invalid Input" alerts.

## 12. Post-Purchase Status Architecture (The "Purgatory Fix")
A realistic, engaging operational tracker replacing generic "Processing" statuses within the user account hub. The display dates must be dynamic/configurable based on the specific product's complexity and current operational load, while presenting fixed, dependable stages to the user.
*   **Stage 1: Order Confirmed.** "We have received your order."
*   **Stage 2: Materials Secured / Production Started.** "Wood is cut, fabric is prepped."
*   **Stage 3: Assembly & Upholstery.** "Our artisans are building your piece."
*   **Stage 4: Quality Assurance.** "Final structural and finish checks."
*   **Stage 5: Ready for Dispatch / En Route.** "Handed to our white-glove delivery team. They will call you to schedule a time." (Include city-specific expectations here).
*   **Stage 6: Delivered.** Followed by an automated, personalized email 48 hours later checking on the piece and requesting a review.
