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
  }
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
