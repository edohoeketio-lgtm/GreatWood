export interface SpaceContent {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImageUrl: string;
  gallery?: { id: string; url: string; alt: string }[];
  productHandles: string[];
}

export const MOCK_SPACES: Record<string, SpaceContent> = {
  'the-lagos-executive': {
    slug: 'the-lagos-executive',
    title: 'The Lagos Executive',
    subtitle: 'A curated exploration of spatial harmony and restrained luxury, designed to anchor the modern Nigerian home.',
    description: 'This space does not shout. We designed this collection to balance the dense, grounding presence of Nigerian Mahogany with the breathable, tactile warmth of Oatmeal Linen. The result is a room that feels both deeply rooted and effortlessly contemporary.',
    heroImageUrl: '/spaces/lagos_executive.png',
    gallery: [
      { id: 'le-1', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200', alt: 'The Lagos Executive depth perspective' },
      { id: 'le-2', url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200', alt: 'The Lagos Executive material context' }
    ],
    productHandles: ['the-sapele-sofa', 'the-pebble-table', 'the-lari-mirror']
  },
  'the-warm-reading-nook': {
    slug: 'the-warm-reading-nook',
    title: 'The Warm Reading Nook',
    subtitle: 'An intimate corner optimized for deep focus and slow mornings.',
    description: 'We built this space around the idea of solitary comfort. The Boucle Chair provides unstructured softness, while the Wavy Bookshelf and Tapered Side Table introduce structured visual interest without overwhelming the tight footprint. It is a space designed for quiet exhale.',
    heroImageUrl: '/spaces/reading_nook.png',
    gallery: [
      { id: 'rn-1', url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1200', alt: 'The Warm Reading Nook perspective' },
      { id: 'rn-2', url: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1200', alt: 'The Warm Reading Nook detail' }
    ],
    productHandles: ['the-boucle-chair', 'the-tapered-side-table', 'the-wavy-bookshelf', 'the-woven-lounge']
  },
  'the-brutalist-study': {
    slug: 'the-brutalist-study',
    title: 'The Brutalist Study',
    subtitle: 'Raw materials, sharp geometry, and an absolute absence of noise.',
    description: 'For those who require a sterile, distraction-free environment to do their best work. High-contrast elements define the room, resting heavily on industrial forms softened only slightly by natural wood grain. A study not in comfort, but in pure utility.',
    heroImageUrl: '/spaces/brutalist_study.png',
    gallery: [
      { id: 'bs-1', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200', alt: 'The Brutalist Study angle' },
      { id: 'bs-2', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200', alt: 'The Brutalist Study texture' }
    ],
    productHandles: ['the-glass-cabinet', 'the-ota-chair', 'the-vinyl-stand', 'the-kano-stool']
  }
};

export async function getSpace(slug: string): Promise<SpaceContent | null> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_SPACES[slug] || null;
}

export async function getAllSpaces(): Promise<SpaceContent[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return Object.values(MOCK_SPACES);
}
