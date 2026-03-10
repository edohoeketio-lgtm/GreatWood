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
