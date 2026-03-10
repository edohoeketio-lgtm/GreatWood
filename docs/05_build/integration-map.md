# Integration Map

*Owner: Technical Architect*

This document defines the high-level boundaries and responsibilities between Shopify (Commerce), Sanity (Content), and Zustand (State) for the Architect Furniture storefront.

## 1. System Responsibilities

### Shopify (Headless Storefront API)
**Role:** The transaction and inventory engine.
**Owns:**
- Core product pricing and inventory (variants).
- Checkout handoff and payment processing.
- Order creation and historical order logic.
- Basic customer accounts (identity).

### Sanity (Content Lake)
**Role:** The rich editorial and merchandising engine.
**Owns:**
- Rich product descriptions, architectural blueprints, and material breakdowns.
- The 5-shot photography assets (linked to Shopify SKUs).
- "Pairs Well With" merchandising relationships.
- Editorial pages (Home, Story, Care Guides).
- Delivery zones and lead-time logic specific to regions (e.g., Lagos White-Glove).
- The "Purgatory Fix" order tracking states.

### Zustand (Client State)
**Role:** The orchestrator of purchasable session state.
**Owns:**
- The active Cart (synced via Shopify Storefront API).
- Temporary checkout session preferences (e.g., selected delivery zone).
- Active PDP variant selection prior to adding to cart.
**Does NOT own:** UI visibility (modals/drawers belong to Next.js Context).

## 2. Component Integration Matrix

| Component / View | Data Source 1 | Data Source 2 | State Manager |
| :--- | :--- | :--- | :--- |
| **Homepage** | Sanity (Hero, Story, Trust) | Sanity (Curated collections) | UIContext (Nav state) |
| **PLP (Shop)** | Sanity (Category meta, Filters) | Shopify (Price, Base product) | Zustand (Filter selections) |
| **PDP: Gallery** | Sanity (5-shot strict images) | - | - |
| **PDP: BuyBox** | Shopify (Price, Inventory) | Sanity (Swatches) | Zustand (Active variant) |
| **PDP: Dimensions** | Sanity (Blueprint, Materials) | - | - |
| **Cart Drawer** | Shopify (Cart object, Line items)| Sanity (Fallback images) | Zustand (Cart operations) |
| **Checkout Flow**| Zustand (Local session) | Shopify (Checkout API Create) | UIContext (UI Lock) |
| **Order Status** | Shopify (Order ID, Base details)| Sanity (6-stage tracking meta) | - |

## 3. The Resolution Logic (Sanity + Shopify Merge)

To prevent generic ecommerce UX, the storefront relies heavily on merging data.

**The Golden Rule of Merging:** 
1. The **SKU** or **Product Handle** is the unified key binding Shopify and Sanity.
2. Next.js fetches the Sanity document first (for rich media).
3. Next.js fetches the Shopify product second (for live price/inventory).
4. The server merges these into a single highly-structured object before sending to the client components. Do not leave the client to fetch heavy product data. 
