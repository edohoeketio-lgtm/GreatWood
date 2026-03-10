# Integration Edge Cases & Graceful Degradation

*Owner: Technical Architect*

This document defines how the frontend must react when the integrations between Shopify, Sanity, or user connectivity fail. The primary goal is maintaining the "Premium = Calm" aesthetic even during errors.

## 1. Shopify Outages or Timeout
**Scenario:** Shopify Storefront API fails or times out.
**Action:**
- Show the `EmptyState` component immediately.
- **Title:** "System Optimization"
- **Message:** "We are currently optimizing our commerce architecture. Please check back shortly, or contact concierge@architect.ng."
- **Visuals:** Do not show broken carts. Hide the Add to Bag buttons. 

## 2. Data Desync (Sanity lacks Shopify Match)
**Scenario:** Sanity has a `.slug` but Shopify returns 404 for that handle.
**Action:**
- Next.js must catch this during SSR.
- Return a Next.js `notFound()`, triggering the custom 404 page.
- Do NOT render a half-broken PDP with missing prices.

## 3. The 5-Shot Violation
**Scenario:** Merchandising team publishes a product in Sanity with only 3 images.
**Action:**
- The `PDPGallery` component detects `< 5` images.
- It logs a Sentry/Datadog warning: "Validation Warning: The Noka Sofa violates 5-shot aesthetic policy."
- **UI:** It still renders, bypassing the strict stack to prevent throwing a user-facing error.

## 4. Swatch Desync
**Scenario:** Shopify has a variant "Oceana Blue" but Sanity lacks the swatch data.
**Action:**
- The `SwatchSelector` falls back to generating a generic CSS circle based on a hash of the string, or renders a default neutral circle, but appends the text label.
- The BuyBox remains functional.

## 5. Cart LocalStorage Conflict
**Scenario:** User has item in `localStorage` cart, but item is now out of stock on Shopify.
**Action:**
- Upon `initializeCart` (running on mount/focus), the cart validates against Shopify.
- Out of stock items are flagged.
- The UI renders them slightly transparent with a "No longer available" badge. The Checkout button is disabled until the user manually removes the item.
