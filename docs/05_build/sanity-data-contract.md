# Sanity Data Contract

*Owner: Content & Backend Team*

Sanity acts as the "Content Lake". It holds all the premium, editorial data that Shopify's rigid transactional model cannot support. The `slug` or `shopifyHandle` is the strict foreign key mapping.

## 1. Product Document Schema
This data is merged with the Shopify payload at build time (or SSR).

```json
{
  "_type": "product",
  "title": "The Noka Sofa",
  "shopifyHandle": "the-noka-sofa",
  "editorialDescription": [ /* Portable Text Array */ ],
  
  "gallery": [
    // Must contain exactly 5 images to pass validation
    { "_type": "image", "alt": "Hero", "asset": { "url": "..." } },
    { "_type": "image", "alt": "Context", "asset": { "url": "..." } },
    { "_type": "image", "alt": "Macro", "asset": { "url": "..." } },
    { "_type": "image", "alt": "Craft", "asset": { "url": "..." } },
    { "_type": "image", "alt": "Scale", "asset": { "url": "..." } }
  ],

  "dimensions": [
    { "label": "Width", "value": "240 cm" },
    { "label": "Depth", "value": "95 cm" }
  ],
  "blueprintImage": { "asset": { "url": "..." } },
  
  "materialsList": [
    "Kiln-dried Mahogany frame",
    "High-resiliency foam"
  ],

  "swatches": [
    {
      "shopifyVariantSku": "NOK-OAT-01",
      "swatchName": "Oatmeal Linen",
      "colorHex": "#E5E0D8", // Used for UI circles
      "macroImage": { "asset": { "url": "..." } } // Used for Tooltips
    }
  ],

  "crossSells": [
    { "_ref": "product_document_id_1" },
    { "_ref": "product_document_id_2" }
  ]
}
```

## 2. Global Delivery Zones Schema
Used during checkout to calculate accurate delivery estimations before the user enters their full address, building trust early.

```json
{
  "_type": "deliveryZone",
  "zoneId": "lagos-premium",
  "title": "Lagos Metropolitan Area",
  "baseFeeNgn": 25000,
  "supportsWhiteGlove": true,
  "leadTimeDaysMin": 14,
  "leadTimeDaysMax": 21,
  "message": "Delivered, unboxed, and installed."
}
```

## 3. The Resolution Strategy
In the Next.js `generateMetadata` and `Page` render cycle:
1. `const sanityData = await client.fetch(GET_PRODUCT_QUERY, { handle })`
2. `const shopifyData = await getShopifyProduct(handle)`
3. Create `MergedProduct` object.
4. If `sanityData.gallery` lacks 5 images, log a warning to Sanity Studio but degrade gracefully on the frontend.
