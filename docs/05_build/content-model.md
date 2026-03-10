# Content & Data Models

*Owner: Technical Architect*

This file defines the robust structured data models required by our Headless CMS (Sanity) and Commerce Engine (Shopify) to support the deep, editorial shopping experience.

## 1. Commerce Entities
*   **Product:**
    *   `id` (String), `sku_base` (String)
    *   `name` (String: e.g., "The Noka Sofa")
    *   `category` (Reference -> Category)
    *   `base_price` (Float)
    *   `editorial_description` (RichText)
    *   `dimensions_text` (String)
    *   `dimension_diagram` (Image)
    *   `materials_breakdown` (List of Strings)
    *   `care_instructions` (RichText)
    *   `dispatch_time_estimate` (String: e.g., "14-21 days")
    *   `is_waitlist_active` (Boolean)
*   **Variant:**
    *   `id` (String), `sku` (String)
    *   `product_id` (Reference -> Product)
    *   `material_id` (Reference -> Material)
    *   `price_adjustment` (Float)
    *   `inventory_quantity` (Int)
    *   `images` (Array of Images - Must strictly follow the 5-Shot rule: Hero, Context, Macro, Craft, Scale)
*   **Materials & Swatches:**
    *   `id` (String)
    *   `name` (String: e.g., "Tactile Weave - Oatmeal")
    *   `family` (Enum: Velvet, Leather, Linen, Wood, Metal)
    *   `swatch_image` (Image 1:1)
    *   `macro_texture` (Image)
    *   `is_custom_order_only` (Boolean)
*   **Bundles:**
    *   `id` (String), `name` (String)
    *   `products` (Array of References -> Product)
    *   `discount_percentage` (Float)
    *   `lifestyle_imagery` (Array of Images)

## 2. Editorial & Trust Entities
*   **Collections:**
    *   `id` (String), `title` (String), `slug` (String)
    *   `hero_image` (Image), `description` (RichText)
    *   `products` (Array of References -> Product)
*   **Lookbook Entries:**
    *   `id` (String), `title` (String)
    *   `room_type` (Enum: Living, Dining, Bedroom)
    *   `hero_image` (Image - 16:9 or 3:4)
    *   `hotspots` (Array of Objects: `x_coord`, `y_coord`, `product_reference`)
*   **FAQs:**
    *   `id` (String), `question` (String), `answer` (RichText), `category` (Enum)
*   **Consultations & Custom Orders (Form Data Payload):**
    *   `customer_name`, `email`, `phone`, `room_type`, `description`, `uploaded_images` (Array of Image URLs), `preferred_contact_method`

## 3. Operational Entities
*   **Delivery Zones:**
    *   `zone_name` (Enum: Lagos, Abuja, Nationwide, RestOfWorld)
    *   `supports_white_glove` (Boolean)
    *   `base_shipping_cost` (Float)
    *   `estimated_transit_days` (Int)
*   **Order Status Stages (The "Purgatory Fix" Model):**
    *   `order_id` (String)
    *   `current_stage_index` (Int: 1 through 6)
    *   *Stages defined chronologically:* 
        1. Confirmed / 2. Materials Secured / 3. Assembly / 4. QA / 5. Dispatch / 6. Delivered.
    *   `estimated_completion_date` (Date)
