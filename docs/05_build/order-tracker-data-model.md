# Order Tracker Data Model

*Owner: Architecture Team*

This defines the logic behind the "Purgatory Fix" — the 6-stage radical transparency tracking interface shown to customers post-purchase.

## 1. The Core Problem
Customers waiting 14-21 days for custom furniture experience anxiety ("Purgatory"). Generic Shopify statuses ("Unfulfilled") exacerbate this. 

## 2. The Solution Architecture
We use Sanity to maintain a mapping of **Shopify Order Tags** or **Metafields** to our custom **6-Stage UI**. A cron job or webhook listener translates backend logistics updates into these tags.

## 3. The 6 Stages

| Stage Number | ID | UI Label | Triggering Shopify Data / Tag |
| :--- | :--- | :--- | :--- |
| 1 | `RECEIVED` | Order Received | Default state upon order. `financial_status: 'paid'` |
| 2 | `SOURCING` | Sourcing Materials | Webhook adds tag: `track:sourcing` |
| 3 | `CRAFTING` | Crafting Frame | Webhook adds tag: `track:crafting` |
| 4 | `FINISHING` | Upholstery & Finish | Webhook adds tag: `track:finishing` |
| 5 | `LOGISTICS` | Final QC & Transit | Webhook adds tag: `track:logistics` |
| 6 | `DELIVERED` | Delivered | `fulfillment_status: 'fulfilled'` |

## 4. Frontend Implementation Rules
1. The tracker must NEVER jump backwards. If a previous tag exists alongside a newer one, the newest tag dictates the current state.
2. The `estimatedCompletionDate` is calculated at checkout based on the Delivery Zone schema + Custom Order flags. It is written to a Shopify Order Metafield upon creation so it remains static (unless manually updated by CS).
3. If an order is canceled, the tracker UI collapses and is replaced by a cancellation apology and refund status.

## 5. API Flow
1. Fetch `Shopify Order` by ID.
2. Extract `tags` and `metafields`.
3. Map `tags` to the highest-ranking Stage ID.
4. Pass `Stage ID` and `metafield.estimated_date` to `OrderTracker.tsx`.
