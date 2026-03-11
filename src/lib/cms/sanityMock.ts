/**
 * Mock Sanity Client
 * 
 * Simulates fetching rich media, dimensions, and editorial content 
 * that will eventually live in Sanity, decoupling it from the Shopify transactional model.
 */

export interface SanityProductContent {
  shopifyHandle: string;
  title: string;
  editorialDescription: string;
  gallery: Array<{ id: string; url: string; alt: string }>;
  dimensions: Array<{ label: string; value: string }>;
  blueprintUrl: string;
  materials: string[];
  careGuide: string;
  swatches: Array<{ id: string; shopifyVariantId: string; name: string; colorHex?: string; imageUrl?: string }>;
  variantGalleries?: Record<string, Array<{ id: string; url: string; alt: string }>>;
}

const MOCK_SANITY_DATABASE: Record<string, SanityProductContent> = {
  'the-noka-sofa': {
    shopifyHandle: 'the-noka-sofa',
    title: 'The Noka Sofa',
    editorialDescription: 'An architectural statement piece. The Noka balances sharp geometric lines with deep, unstructured comfort. Built on a solid mahogany frame, it anchors any contemporary living space.',
    gallery: [
      { id: 'img1', url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200', alt: 'The Noka Sofa front profile' },
      { id: 'img2', url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200', alt: 'The Noka Sofa side profile' },
      { id: 'img3', url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200', alt: 'The Noka Sofa room context' },
      { id: 'img4', url: 'https://images.unsplash.com/photo-1540574163026-643ea20abc46?auto=format&fit=crop&q=80&w=1200', alt: 'The Noka Sofa material detail' },
      { id: 'img5', url: 'https://images.unsplash.com/photo-1567016432779-094069811ea0?auto=format&fit=crop&q=80&w=1200', alt: 'The Noka Sofa lifestyle composition' }
    ],
    dimensions: [
      { label: 'Overall Width', value: '240 cm' },
      { label: 'Overall Depth', value: '95 cm' },
      { label: 'Overall Height', value: '75 cm' },
      { label: 'Seat Height', value: '42 cm' },
      { label: 'Seat Depth', value: '65 cm' }
    ],
    materials: [
      'Frame: Kiln-dried Nigerian Mahogany (Swietenia macrophylla)',
      'Suspension: High-tensile sinuous steel springs',
      'Cushions: High-resiliency foam core wrapped in down blend',
      'Upholstery: 100% Belgian Linen'
    ],
    blueprintUrl: 'https://images.unsplash.com/photo-1617325247661-675003add638?auto=format&fit=crop&q=80&w=800',
    careGuide: 'Vacuum linen regularly to prevent dust buildup. For spills, blot immediately with a clean, colorfast cloth. Do not rub. Professional upholstery cleaning recommended annually.',
    swatches: [
      { id: 's1', shopifyVariantId: 'gid://shopify/ProductVariant/1', name: 'Oatmeal Linen', colorHex: '#E5E0D8' },
      { id: 's2', shopifyVariantId: 'gid://shopify/ProductVariant/2', name: 'Charcoal Velvet', colorHex: '#333333' }
    ]
  },
  'the-sola-chair': {
    shopifyHandle: 'the-sola-chair',
    title: 'The Sola Chair',
    editorialDescription: 'A vibrant architectural statement. The Sola Chair features a bold yellow ochre finish with elegant curves and solid timber legs. Designed to bring warmth and contemporary sophistication to any room.',
    gallery: [
      { id: 'sola-1', url: '/yellow-chair/hover.jpg', alt: 'The Sola Chair front profile' },
      { id: 'sola-2', url: '/yellow-chair/Main.png', alt: 'The Sola Chair angled profile' },
      { id: 'sola-3', url: '/yellow-chair/side-view.jpg', alt: 'The Sola Chair side profile' },
      { id: 'sola-4', url: '/yellow-chair/Back view.jpeg', alt: 'The Sola Chair back view' },
      { id: 'sola-5', url: '/yellow-chair/legs.jpg', alt: 'The Sola Chair leg detail' },
      { id: 'sola-6', url: '/yellow-chair/chair-material.jpg', alt: 'The Sola Chair material detail' }
    ],
    dimensions: [
      { label: 'Overall Width', value: '70 cm' },
      { label: 'Overall Depth', value: '75 cm' },
      { label: 'Overall Height', value: '80 cm' },
      { label: 'Seat Height', value: '45 cm' }
    ],
    materials: [
      'Frame: Solid Oak',
      'Upholstery: Premium Velvet Blend'
    ],
    blueprintUrl: '/yellow-chair/dimension.jpeg',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'sola-s1', shopifyVariantId: 'gid://shopify/ProductVariant/4', name: 'Yellow Ochre', colorHex: '#Edb442' },
      { id: 'sola-s2', shopifyVariantId: 'gid://shopify/ProductVariant/4b', name: 'Blue Velvet', colorHex: '#4A6FA5' }
    ],
    variantGalleries: {
      'gid://shopify/ProductVariant/4': [
        { id: 'sola-y1', url: '/yellow-chair/hover.jpg', alt: 'The Sola Chair Yellow Ochre realistic' },
        { id: 'sola-y2', url: '/yellow-chair/2nd view.jpeg', alt: 'The Sola Chair Yellow Ochre second view' },
        { id: 'sola-y3', url: '/yellow-chair/side-view.jpg', alt: 'The Sola Chair Yellow Ochre side' },
        { id: 'sola-y4', url: '/yellow-chair/Back view.jpeg', alt: 'The Sola Chair Yellow Ochre back' },
        { id: 'sola-y5', url: '/yellow-chair/legs.jpg', alt: 'The Sola Chair Yellow Ochre legs' },
        { id: 'sola-y6', url: '/yellow-chair/chair-material.jpg', alt: 'The Sola Chair Yellow Ochre material' }
      ],
      'gid://shopify/ProductVariant/4b': [
        { id: 'sola-b1', url: '/yellow-chair/blue/main.jpg', alt: 'The Sola Chair Blue Velvet front' },
        { id: 'sola-b1b', url: '/yellow-chair/blue/Main2 prod details.jpeg', alt: 'The Sola Chair Blue Velvet product detail' },
        { id: 'sola-b2', url: '/yellow-chair/blue/front-view.jpg', alt: 'The Sola Chair Blue Velvet angled' },
        { id: 'sola-b3', url: '/yellow-chair/blue/side-view.jpg', alt: 'The Sola Chair Blue Velvet side' },
        { id: 'sola-b4', url: '/yellow-chair/blue/back-view.jpg', alt: 'The Sola Chair Blue Velvet back' },
        { id: 'sola-b5', url: '/yellow-chair/blue/upclose.jpg', alt: 'The Sola Chair Blue Velvet detail' }
      ]
    }
  },
  'the-eko-console': {
    shopifyHandle: 'the-eko-console',
    title: 'The Eko Console',
    editorialDescription: 'Named after Lagos itself, The Eko Console channels the city\'s restless sophistication into a single surface. A slim, architectural profile in solid walnut with brass-finished handles and tapered legs. Designed to anchor an entryway, hallway, or living space with quiet authority.',
    gallery: [
      { id: 'eko-1', url: '/the-eko-console/main.jpg', alt: 'The Eko Console realistic view' },

      { id: 'eko-3', url: '/the-eko-console/back-view.jpg', alt: 'The Eko Console back view' },
      { id: 'eko-4', url: '/the-eko-console/handles-detail.jpg', alt: 'The Eko Console handle detail' },
      { id: 'eko-5', url: '/the-eko-console/legs-detail.jpg', alt: 'The Eko Console leg detail' }
    ],
    dimensions: [
      { label: 'Overall Width', value: '120 cm' },
      { label: 'Overall Depth', value: '35 cm' },
      { label: 'Overall Height', value: '85 cm' }
    ],
    materials: [
      'Frame: Solid Walnut (Juglans regia)',
      'Handles: Brass, brushed finish',
      'Top: Walnut veneer over engineered core'
    ],
    blueprintUrl: '/the-eko-console/dimension.jpg',
    careGuide: 'Dust regularly with a soft, dry cloth. For deeper cleaning, use a damp cloth and dry immediately. Avoid placing hot items directly on the surface. Apply furniture wax every 6 months to maintain the finish.',
    swatches: [
      { id: 'eko-s1', shopifyVariantId: 'gid://shopify/ProductVariant/5', name: 'Walnut', colorHex: '#5C4033' }
    ]
  },
  'the-tapered-side-table': {
    shopifyHandle: 'the-tapered-side-table',
    title: 'The Tapered Side Table',
    editorialDescription: 'A study in elegant geometry. The Tapered Side Table features a distinctive A-frame profile with two tiered shelves. Crafted from rich wood, it offers both display space and quiet structural beauty for your living room or study.',
    gallery: [
      { id: 'st-1', url: '/SIde table/main.png', alt: 'The Tapered Side Table realistic view' },
      { id: 'st-2', url: '/SIde table/front-view.png', alt: 'The Tapered Side Table front view' },
      { id: 'st-3', url: '/SIde table/side-view.png', alt: 'The Tapered Side Table side profile' },
      { id: 'st-4', url: '/SIde table/back-view.png', alt: 'The Tapered Side Table back view' },
      { id: 'st-5', url: '/SIde table/upclose.png', alt: 'The Tapered Side Table macro detail' }
    ],
    dimensions: [
      { label: 'Overall Width', value: '70 cm' },
      { label: 'Overall Depth', value: '35 cm' },
      { label: 'Overall Height', value: '60 cm' },
      { label: 'Distance between shelves', value: '30 cm' }
    ],
    materials: [
      'Frame: Solid Oak',
      'Shelves: Oak veneer over engineered core',
      'Finish: Warm honey tone'
    ],
    blueprintUrl: '/SIde table/Dimension sketch.jpeg',
    careGuide: 'Dust regularly with a soft, dry cloth. Wipe up spills immediately to prevent staining. Avoid harsh chemicals and direct prolonged sunlight.',
    swatches: [
      { id: 'st-s1', shopifyVariantId: 'gid://shopify/ProductVariant/6', name: 'Warm Oak', colorHex: '#ae734e' }
    ]
  },
  'the-sapele-sofa': {
    shopifyHandle: 'the-sapele-sofa',
    title: 'The Sapele Sofa',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'sap-1', url: '/sapele-sofa/main.png', alt: 'The Sapele Sofa main' },
      { id: 'sap-2', url: '/sapele-sofa/front.png', alt: 'The Sapele Sofa front' },
      { id: 'sap-3', url: '/sapele-sofa/side.png', alt: 'The Sapele Sofa side' },
      { id: 'sap-4', url: '/sapele-sofa/back.png', alt: 'The Sapele Sofa back' },
      { id: 'sap-5', url: '/sapele-sofa/upclose.png', alt: 'The Sapele Sofa upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/sapele-sofa/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'sap-s1', shopifyVariantId: 'gid://shopify/ProductVariant/sap-1', name: 'Almond Beige', colorHex: '#EAE1D3' }
    ]
  },
  'the-ayo-lounge': {
    shopifyHandle: 'the-ayo-lounge',
    title: 'The Ayo Lounge',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'ayo-1', url: '/ayo-lounge/main.png', alt: 'The Ayo Lounge main' },
      { id: 'ayo-2', url: '/ayo-lounge/front.png', alt: 'The Ayo Lounge front' },
      { id: 'ayo-3', url: '/ayo-lounge/side.png', alt: 'The Ayo Lounge side' },
      { id: 'ayo-4', url: '/ayo-lounge/back.png', alt: 'The Ayo Lounge back' },
      { id: 'ayo-5', url: '/ayo-lounge/upclose.png', alt: 'The Ayo Lounge upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/ayo-lounge/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'ayo-s1', shopifyVariantId: 'gid://shopify/ProductVariant/ayo-1', name: 'Olive Green', colorHex: '#889B85' }
    ]
  },
  'the-pebble-table': {
    shopifyHandle: 'the-pebble-table',
    title: 'The Pebble Table',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'peb-1', url: '/pebble-table/main.png', alt: 'The Pebble Table main' },
      { id: 'peb-2', url: '/pebble-table/front.png', alt: 'The Pebble Table front' },
      { id: 'peb-3', url: '/pebble-table/side.png', alt: 'The Pebble Table side' },
      { id: 'peb-4', url: '/pebble-table/back.png', alt: 'The Pebble Table back' },
      { id: 'peb-5', url: '/pebble-table/upclose.png', alt: 'The Pebble Table upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/pebble-table/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'peb-s1', shopifyVariantId: 'gid://shopify/ProductVariant/peb-1', name: 'Travertine', colorHex: '#D4CBB9' }
    ]
  },
  'the-kano-stool': {
    shopifyHandle: 'the-kano-stool',
    title: 'The Kano Stool',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'kan-1', url: '/kano-stool/main.png', alt: 'The Kano Stool main' },
      { id: 'kan-2', url: '/kano-stool/front.png', alt: 'The Kano Stool front' },
      { id: 'kan-3', url: '/kano-stool/side.png', alt: 'The Kano Stool side' },
      { id: 'kan-4', url: '/kano-stool/back.png', alt: 'The Kano Stool back' },
      { id: 'kan-5', url: '/kano-stool/upclose.png', alt: 'The Kano Stool upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/kano-stool/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'kan-s1', shopifyVariantId: 'gid://shopify/ProductVariant/kan-1', name: 'Roasted Walnut', colorHex: '#6A4B3A' }
    ]
  },
  'the-asaba-dresser': {
    shopifyHandle: 'the-asaba-dresser',
    title: 'The Asaba Dresser',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'asa-1', url: '/asaba-dresser/main.png', alt: 'The Asaba Dresser main' },
      { id: 'asa-2', url: '/asaba-dresser/front.png', alt: 'The Asaba Dresser front' },
      { id: 'asa-3', url: '/asaba-dresser/side.png', alt: 'The Asaba Dresser side' },
      { id: 'asa-4', url: '/asaba-dresser/back.png', alt: 'The Asaba Dresser back' },
      { id: 'asa-5', url: '/asaba-dresser/upclose.png', alt: 'The Asaba Dresser upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/asaba-dresser/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'asa-s1', shopifyVariantId: 'gid://shopify/ProductVariant/asa-1', name: 'Bleached Ash', colorHex: '#E5D6C5' }
    ]
  },
  'the-lari-mirror': {
    shopifyHandle: 'the-lari-mirror',
    title: 'The Lari Mirror',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'lar-1', url: '/lari-mirror/main.png', alt: 'The Lari Mirror main' },
      { id: 'lar-2', url: '/lari-mirror/front.png', alt: 'The Lari Mirror front' },
      { id: 'lar-3', url: '/lari-mirror/side.png', alt: 'The Lari Mirror side' },
      { id: 'lar-4', url: '/lari-mirror/back.png', alt: 'The Lari Mirror back' },
      { id: 'lar-5', url: '/lari-mirror/upclose.png', alt: 'The Lari Mirror upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/lari-mirror/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'lar-s1', shopifyVariantId: 'gid://shopify/ProductVariant/lar-1', name: 'Brushed Brass', colorHex: '#CDBCA7' }
    ]
  },
  'the-ota-chair': {
    shopifyHandle: 'the-ota-chair',
    title: 'The Ota Chair',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'ota-1', url: '/ota-chair/main.png', alt: 'The Ota Chair main' },
      { id: 'ota-2', url: '/ota-chair/front.png', alt: 'The Ota Chair front' },
      { id: 'ota-3', url: '/ota-chair/side.png', alt: 'The Ota Chair side' },
      { id: 'ota-4', url: '/ota-chair/back.png', alt: 'The Ota Chair back' },
      { id: 'ota-5', url: '/ota-chair/upclose.png', alt: 'The Ota Chair upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/ota-chair/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'ota-s1', shopifyVariantId: 'gid://shopify/ProductVariant/ota-1', name: 'Charcoal Black', colorHex: '#2B2B2B' }
    ]
  },
  'the-woven-lounge': {
    shopifyHandle: 'the-woven-lounge',
    title: 'The Woven Lounge',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'wov-1', url: '/woven-lounge/main.png', alt: 'The Woven Lounge main' },
      { id: 'wov-2', url: '/woven-lounge/front.png', alt: 'The Woven Lounge front' },
      { id: 'wov-3', url: '/woven-lounge/side.png', alt: 'The Woven Lounge side' },
      { id: 'wov-4', url: '/woven-lounge/back.png', alt: 'The Woven Lounge back' },
      { id: 'wov-5', url: '/woven-lounge/upclose.png', alt: 'The Woven Lounge upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/woven-lounge/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'wov-s1', shopifyVariantId: 'gid://shopify/ProductVariant/wov-1', name: 'Natural Rattan', colorHex: '#D2B48C' }
    ]
  },
  'the-bolster-daybed': {
    shopifyHandle: 'the-bolster-daybed',
    title: 'The Bolster Daybed',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'bol-1', url: '/bolster-daybed/main.png', alt: 'The Bolster Daybed main' },
      { id: 'bol-2', url: '/bolster-daybed/front.png', alt: 'The Bolster Daybed front' },
      { id: 'bol-3', url: '/bolster-daybed/side.png', alt: 'The Bolster Daybed side' },
      { id: 'bol-4', url: '/bolster-daybed/back.png', alt: 'The Bolster Daybed back' },
      { id: 'bol-5', url: '/bolster-daybed/upclose.png', alt: 'The Bolster Daybed upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/bolster-daybed/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'bol-s1', shopifyVariantId: 'gid://shopify/ProductVariant/bol-1', name: 'Pebble Grey', colorHex: '#D0C3B7' }
    ]
  },
  'the-cloud-sofa': {
    shopifyHandle: 'the-cloud-sofa',
    title: 'The Cloud Sofa',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'clo-1', url: '/cloud-sofa/main.png', alt: 'The Cloud Sofa main' },
      { id: 'clo-2', url: '/cloud-sofa/front.png', alt: 'The Cloud Sofa front' },
      { id: 'clo-3', url: '/cloud-sofa/side.png', alt: 'The Cloud Sofa side' },
      { id: 'clo-4', url: '/cloud-sofa/back.png', alt: 'The Cloud Sofa back' },
      { id: 'clo-5', url: '/cloud-sofa/upclose.png', alt: 'The Cloud Sofa upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/cloud-sofa/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'clo-s1', shopifyVariantId: 'gid://shopify/ProductVariant/clo-1', name: 'Cloud White', colorHex: '#F0EAD6' }
    ]
  },
  'the-vinyl-stand': {
    shopifyHandle: 'the-vinyl-stand',
    title: 'The Vinyl Stand',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'vin-1', url: '/vinyl-stand/main.png', alt: 'The Vinyl Stand main' },
      { id: 'vin-2', url: '/vinyl-stand/front.png', alt: 'The Vinyl Stand front' },
      { id: 'vin-3', url: '/vinyl-stand/side.png', alt: 'The Vinyl Stand side' },
      { id: 'vin-4', url: '/vinyl-stand/back.png', alt: 'The Vinyl Stand back' },
      { id: 'vin-5', url: '/vinyl-stand/upclose.png', alt: 'The Vinyl Stand upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/vinyl-stand/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'vin-s1', shopifyVariantId: 'gid://shopify/ProductVariant/vin-1', name: 'Rich Walnut', colorHex: '#5C4033' }
    ]
  },
  'the-floral-chaise': {
    shopifyHandle: 'the-floral-chaise',
    title: 'The Floral Chaise',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'flo-1', url: '/floral-chaise/main.png', alt: 'The Floral Chaise main' },
      { id: 'flo-2', url: '/floral-chaise/front.png', alt: 'The Floral Chaise front' },
      { id: 'flo-3', url: '/floral-chaise/side.png', alt: 'The Floral Chaise side' },
      { id: 'flo-4', url: '/floral-chaise/back.png', alt: 'The Floral Chaise back' },
      { id: 'flo-5', url: '/floral-chaise/upclose.png', alt: 'The Floral Chaise upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/floral-chaise/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'flo-s1', shopifyVariantId: 'gid://shopify/ProductVariant/flo-1', name: 'Vintage Floral', colorHex: '#908984' }
    ]
  },
  'the-wood-nightstand': {
    shopifyHandle: 'the-wood-nightstand',
    title: 'The Wood Nightstand',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'woo-1', url: '/wood-nightstand/main.png', alt: 'The Wood Nightstand main' },
      { id: 'woo-2', url: '/wood-nightstand/front.png', alt: 'The Wood Nightstand front' },
      { id: 'woo-3', url: '/wood-nightstand/side.png', alt: 'The Wood Nightstand side' },
      { id: 'woo-4', url: '/wood-nightstand/back.png', alt: 'The Wood Nightstand back' },
      { id: 'woo-5', url: '/wood-nightstand/upclose.png', alt: 'The Wood Nightstand upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/wood-nightstand/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'woo-s1', shopifyVariantId: 'gid://shopify/ProductVariant/woo-1', name: 'Warm Teak', colorHex: '#7E5B42' }
    ]
  },
  'the-wavy-bookshelf': {
    shopifyHandle: 'the-wavy-bookshelf',
    title: 'The Wavy Bookshelf',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'wav-1', url: '/wavy-bookshelf/main.png', alt: 'The Wavy Bookshelf main' },
      { id: 'wav-2', url: '/wavy-bookshelf/front.png', alt: 'The Wavy Bookshelf front' },
      { id: 'wav-3', url: '/wavy-bookshelf/side.png', alt: 'The Wavy Bookshelf side' },
      { id: 'wav-4', url: '/wavy-bookshelf/back.png', alt: 'The Wavy Bookshelf back' },
      { id: 'wav-5', url: '/wavy-bookshelf/upclose.png', alt: 'The Wavy Bookshelf upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/wavy-bookshelf/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'wav-s1', shopifyVariantId: 'gid://shopify/ProductVariant/wav-1', name: 'Matte Cream', colorHex: '#D9D3C8' }
    ]
  },
  'the-glass-cabinet': {
    shopifyHandle: 'the-glass-cabinet',
    title: 'The Glass Cabinet',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'gla-1', url: '/glass-cabinet/main.png', alt: 'The Glass Cabinet main' },
      { id: 'gla-2', url: '/glass-cabinet/front.png', alt: 'The Glass Cabinet front' },
      { id: 'gla-3', url: '/glass-cabinet/side.png', alt: 'The Glass Cabinet side' },
      { id: 'gla-4', url: '/glass-cabinet/back.png', alt: 'The Glass Cabinet back' },
      { id: 'gla-5', url: '/glass-cabinet/upclose.png', alt: 'The Glass Cabinet upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/glass-cabinet/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'gla-s1', shopifyVariantId: 'gid://shopify/ProductVariant/gla-1', name: 'Matte Black', colorHex: '#313331' }
    ]
  },
  'the-boucle-chair': {
    shopifyHandle: 'the-boucle-chair',
    title: 'The Boucle Chair',
    editorialDescription: 'A premium furniture piece crafted with attention to detail. Designed for modern living spaces to provide both comfort and aesthetic appeal.',
    gallery: [
      { id: 'bou-1', url: '/boucle-chair/main.png', alt: 'The Boucle Chair main' },
      { id: 'bou-2', url: '/boucle-chair/front.png', alt: 'The Boucle Chair front' },
      { id: 'bou-3', url: '/boucle-chair/side.png', alt: 'The Boucle Chair side' },
      { id: 'bou-4', url: '/boucle-chair/back.png', alt: 'The Boucle Chair back' },
      { id: 'bou-5', url: '/boucle-chair/upclose.png', alt: 'The Boucle Chair upclose' }
    ],
    dimensions: [
      { label: 'Overall Width', value: 'TBD' },
      { label: 'Overall Depth', value: 'TBD' },
      { label: 'Overall Height', value: 'TBD' }
    ],
    materials: [
      'Premium Custom Materials'
    ],
    blueprintUrl: '/boucle-chair/dimension.png',
    careGuide: 'Vacuum with soft brush attachment. Spot clean with mild soap and water.',
    swatches: [
      { id: 'bou-s1', shopifyVariantId: 'gid://shopify/ProductVariant/bou-1', name: 'Ivory Boucle', colorHex: '#FDFBF7' }
    ]
  },
};

export async function getSanityProduct(handle: string): Promise<SanityProductContent> {
  // Simulate network
  await new Promise(resolve => setTimeout(resolve, 300));

  if (MOCK_SANITY_DATABASE[handle]) {
    return MOCK_SANITY_DATABASE[handle];
  }

  // Procedural Fallback to ensure all clicks resolve during prototyping
  const generatedTitle = handle.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return {
    shopifyHandle: handle,
    title: generatedTitle,
    editorialDescription: `An architectural statement piece. The ${generatedTitle} balances sharp geometric lines with deep, unstructured comfort. Built on a solid mahogany frame, it anchors any contemporary living space.`,
    gallery: [
      { id: 'img1', url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200', alt: `${generatedTitle} front profile` },
      { id: 'img2', url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200', alt: `${generatedTitle} side profile` },
      { id: 'img3', url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200', alt: `${generatedTitle} room context` }
    ],
    dimensions: [
      { label: 'Overall Width', value: '240 cm' },
      { label: 'Overall Depth', value: '95 cm' },
      { label: 'Overall Height', value: '75 cm' }
    ],
    materials: [
      'Frame: Kiln-dried Nigerian Mahogany (Swietenia macrophylla)',
      'Suspension: High-tensile sinuous steel springs',
      'Upholstery: 100% Belgian Linen'
    ],
    blueprintUrl: 'https://images.unsplash.com/photo-1617325247661-675003add638?auto=format&fit=crop&q=80&w=800',
    careGuide: 'Vacuum linen regularly to prevent dust buildup. For spills, blot immediately with a clean, colorfast cloth. Do not rub. Professional upholstery cleaning recommended annually.',
    swatches: [
      { id: 's1', shopifyVariantId: `gid://shopify/ProductVariant/${handle}-1`, name: 'Oatmeal Linen', colorHex: '#E5E0D8' },
      { id: 's2', shopifyVariantId: `gid://shopify/ProductVariant/${handle}-2`, name: 'Charcoal Velvet', colorHex: '#333333' }
    ]
  };
}
