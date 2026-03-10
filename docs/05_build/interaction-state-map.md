# Interaction & State Map

*Owner: UX Architect*

This document defines the interaction logic, responsive behavior, and states for the premium Nigerian furniture e-commerce experience.

## Principle: Premium = Calm
Animations should be imperceptible but deeply satisfying. Easing must be smooth and unhurried. 
*   **Standard Easing:** `cubic-bezier(0.25, 1, 0.5, 1)` (A soft, elegant ease-out).
*   **Standard Duration:** `300ms` - `500ms`.

## 1. Responsive Behavior Rules (by Breakpoint)
*   **Mobile (base - 320px to 767px):** Full-width containers, 16px padding minimum. 1-to-2 column grids. Typography must never shrink below 16px for body copy.
*   **Tablet (768px to 1023px):** 768px max-width centered. 2-column grids (PLP).
*   **Desktop (1024px to 1279px):** 1024px max-width centered. 3-column grids (PLP). 50/50 split for PDP.
*   **Large Desktop (1280px+):** 1280px max-width centered. Expanded margins and gallery breathing room.

## 2. Sticky Behavior Rules
*   **Global Header:** Transparent over hero images, transitions to solid background (`--bg-canvas`) immediately on scroll.
*   **PDP Immersive Gallery:** Left column (images) becomes `position: sticky` on Desktop as the right side (buy box/details) scrolls.
*   **PDP "Add to Bag" (Mobile):** Once the user scrolls past the initial buy box on mobile, the primary "Add to Bag" button detaches and becomes a sticky bar at the bottom of the viewport.
*   **Checkout Order Summary:** Right column is `position: sticky` on Desktop throughout the checkout flow.
*   **PLP Filters (Desktop):** Sticky left sidebar allowing users to scroll the grid while keeping filters in view.

## 3. Empty, Error, Unavailable, Loading, and Success States
*   **Empty Cart:** "Your space is a blank canvas. Find the pieces that anchor it." with a CTA to return to Shop.
*   **Empty Search / 404:** "We couldn't find exactly that, but these pieces share a similar aesthetic..." followed by highly curated recommendations. No dead ends.
*   **Out of Stock:** Never hide out-of-stock items. Replace primary CTA with a distinct "Join Waitlist" or "Pre-Order for [Month]".
*   **Form Errors:** Inline validation only. Use calm, explanatory text (e.g., "Please check the postcode format") and muted rust borders instead of blaring red alarm-boxes. 
*   **Loading States (Skeleton & CLS Defense):** We do not use generic spinning wheels. The UI calculates space needed to prevent Cumulative Layout Shift (CLS) and displays a `--bg-elevated` block with a slow shimmer (`2s` duration). Content fades in over `300ms` covering the skeleton perfectly.
*   **Action Loading (Add to Bag):** Button text fades down, replaced by delicate loading dots natively within the button structure. Button width *must not change*.
*   **Success state (Add to Bag):** Slide the cart drawer in automatically upon adding an item. Provide subtle green (`--accent-success`) checkmark feedback on the button itself momentarily.

## 4. Interaction Logic
*   **Swatches:** Generously sized (24px+). On hover: tooltip displays exact material name. On click: High-contrast active ring appears, and the main product image smoothly cross-fades to the selected material.
*   **Filters:** On desktop, sticky sidebar or clean horizontal bar. On mobile, triggers a clean bottom-sheet drawer. Filter application should instantly update the grid without a page reload (via soft fade transition).
*   **Search:** Clicking the search icon opens an expansive, full-bleed drop-down overlay. Live visual results (thumbnail + price) load instantly on keystroke.
*   **Add-to-Bag:** Deliberate, 300-500ms ease transition. Triggers cart drawer to slide in from the right.
*   **Bundles (Cross-Sells):** Present contextually. Click "Add Bundle" to sequentially add items to cart with a single loader state, updating the cart drawer to show the matched set.
*   **Waitlist Flow:** "Join Waitlist" opens a minimal modal capturing email. Replaces Add-to-Bag for OOP items.
*   **Custom-Order Flow:** "Customize This Piece" secondary CTA opens a step-by-step configurator modal. Visual texture maps update on a placeholder. Captures requirement and proceeds either to "Request Consultation" or "Pay 50% Deposit".
*   **Product Tiles (PLP):** On hover, image scales to `1.03` over `400ms`. Subtle 1px `--border-subtle` emerges to faintly frame the card. No drop shadow.

## 5. Mobile-First Behavior (PDP & Checkout)
*   **PDP Mobile:** 
    *   Smooth horizontal swipe carousel for the 5-shot image gallery (no tiny arrows).
    *   Buy box sits immediately below the image.
    *   Typography remains highly legible (`16px` base).
    *   Sticky Add-to-Bag button drops to the bottom of the viewport on scroll.
    *   Drawers/Accordions used heavily for Specs, Delivery, and Care to avoid infinite scrolling. Use `+`/`-` icons for technical exactness.
*   **Checkout Mobile:**
    *   Order summary collapses into a sticky top-bar accordion ("Show Order Summary") to save space, but expands cleanly.
    *   Forms use bottom-borders only. Focus states trigger mobile numeric keypads correctly for phone/card inputs. 
    *   Trust badges remain visible near the bottom "Pay Securely" action.

## 6. Order-Status Tracker Behavior & Edge Cases (The "Purgatory Fix")
The Order Status Hub uses a graphical, dynamic real-time timeline instead of generic "Processing" states. The dates must be dynamically configurable based on the product.
*   **Stage 1 (Order Confirmed):** "We have received your order." Active immediately.
*   **Stage 2 (Materials Secured / Production Started):** "Wood is cut, fabric is prepped."
*   **Stage 3 (Assembly & Upholstery):** "Our artisans are building your piece."
*   **Stage 4 (Quality Assurance):** "Final structural and finish checks."
*   **Stage 5 (Ready for Dispatch / En Route):** "Handed to our white-glove delivery team. They will call you to schedule a time." (Includes city-specific SLA).
*   **Stage 6 (Delivered):** Completed state. Triggers automated check-in email 48 hours later.
*   **Edge Cases (Delays):** If an item sits in Stage 2/3 longer than the dynamic SLA, an automated but personal-sounding email is fired from a "Concierge," and the timeline updates with a revised Date *without* resetting progress. The UI must remain calm, explaining the delay as a commitment to quality (e.g., "Waiting for the exact fabric match").
