# Shopify Data Contract

*Owner: Backend Integration Team*

This defines the exact GraphQL queries and expected payloads from the Shopify Storefront API. Shopify is strictly treated as a transaction API; all marketing and rich media are stripped out.

## 1. Primary Queries

### Fetch Product (Live Pricing & Inventory)
**Input:** `handle`
**Returns:**
```json
{
  "product": {
    "id": "gid://...",
    "handle": "the-noka-sofa",
    "title": "The Noka Sofa",
    "availableForSale": true,
    "variants": {
      "edges": [
        {
          "node": {
            "id": "gid://.../Variant/1",
            "sku": "NOK-OAT-01",
            "title": "Oatmeal Linen",
            "price": { "amount": "1250000", "currencyCode": "NGN" },
            "availableForSale": true,
            "selectedOptions": [
              { "name": "Material", "value": "Oatmeal Linen" }
            ]
          }
        }
      ]
    }
  }
}
```

### Cart Creation & Mutation
Uses the standard Storefront API `cartCreate`, `cartLinesAdd`, `cartLinesUpdate`.

## 2. Hard Constraints
1. **No Images from Shopify:** We do not query the `images` connection on Shopify products. They are often unoptimized or generic. Sanity owns the 5-shot aesthetic.
2. **Tags for Internal Routing:** Shopify `tags` will be mapped to Sanity references. E.g., a tag `requires_white_glove` on Shopify will trigger specific Sanity delivery messaging.
3. **Prices:** Always formatted server-side using NGN currency formatting. No client-side math for base prices.

## 3. The "Custom Order" Bypass
If a Shopify variant returns `availableForSale: false` but possesses a specific tag (e.g., `allow_custom_order`), the frontend will bypass the standard "Add to Bag" and switch the CTA to "Request Custom Build". This initiates an email lead or a 50% deposit draft order workflow instead of a standard checkout.
