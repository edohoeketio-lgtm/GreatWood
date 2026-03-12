/**
 * Mock Shopify Client
 * 
 * Simulates fetching high-level transactional data (price, variants, availability)
 * that would typically come from the Shopify Storefront API.
 */

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  price: number;
  availableForSale: boolean;
  category: string;
  featuredImageUrl: string;
  secondaryImageUrl?: string;
  variants: Array<{
    id: string;
    title: string;
    availableForSale: boolean;
    price: number;
    imageUrl?: string;
    hoverImageUrl?: string;
  }>;
}

const MOCK_SHOPIFY_CATALOG: ShopifyProduct[] = [
  {
    id: 'gid://shopify/Product/1',
    handle: 'the-noka-sofa',
    title: 'The Noka Sofa',
    price: 1250000,
    category: 'Sofas',
    availableForSale: true,
    featuredImageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600',
    variants: [
      { id: 'gid://shopify/ProductVariant/1', title: 'Oatmeal Linen', availableForSale: true, price: 1250000 },
      { id: 'gid://shopify/ProductVariant/2', title: 'Charcoal Velvet', availableForSale: true, price: 1250000 }
    ]
  },
  {
    id: 'gid://shopify/Product/2',
    handle: 'the-tapered-side-table',
    title: 'The Tapered Side Table',
    price: 380000,
    category: 'Tables',
    availableForSale: true,
    featuredImageUrl: '/SIde table/main.png',
    secondaryImageUrl: '/SIde table/main.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/6', title: 'Warm Oak', availableForSale: true, price: 380000, imageUrl: '/SIde table/main.png', hoverImageUrl: '/SIde table/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/3',
    handle: 'the-sola-chair',
    title: 'The Sola Chair',
    price: 320000,
    category: 'Chairs',
    availableForSale: true,
    featuredImageUrl: '/yellow-chair/hover.jpg',
    secondaryImageUrl: '/yellow-chair/hover.jpg',
    variants: [
      { id: 'gid://shopify/ProductVariant/4', title: 'Yellow Ochre', availableForSale: true, price: 320000, imageUrl: '/yellow-chair/hover.jpg', hoverImageUrl: '/yellow-chair/hover.jpg' },
      { id: 'gid://shopify/ProductVariant/4b', title: 'Blue Velvet', availableForSale: true, price: 320000, imageUrl: '/yellow-chair/blue/main.jpg', hoverImageUrl: '/yellow-chair/blue/main.jpg' }
    ]
  },
  {
    id: 'gid://shopify/Product/4',
    handle: 'the-eko-console',
    title: 'The Eko Console',
    price: 680000,
    category: 'Storage',
    availableForSale: true,
    featuredImageUrl: '/Console/console realistic.jpeg',
    secondaryImageUrl: '/Console/console realistic.jpeg',
    variants: [
      { id: 'gid://shopify/ProductVariant/5', title: 'Walnut', availableForSale: true, price: 680000, imageUrl: '/Console/console realistic.jpeg', hoverImageUrl: '/Console/console realistic.jpeg' }
    ]
  },

  {
    id: 'gid://shopify/Product/sap-1',
    handle: 'the-sapele-sofa',
    title: 'The Sapele Sofa',
    price: 1850000,
    category: 'Sofas',
    availableForSale: true,
    featuredImageUrl: '/sapele-sofa/main.png',
    secondaryImageUrl: '/sapele-sofa/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/sap-1', title: 'Almond Beige', availableForSale: true, price: 1850000, imageUrl: '/sapele-sofa/main.png', hoverImageUrl: '/sapele-sofa/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/ayo-1',
    handle: 'the-ayo-lounge',
    title: 'The Ayo Lounge',
    price: 850000,
    category: 'Chairs',
    availableForSale: true,
    featuredImageUrl: '/ayo-lounge/main.png',
    secondaryImageUrl: '/ayo-lounge/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/ayo-1', title: 'Olive Green', availableForSale: true, price: 850000, imageUrl: '/ayo-lounge/main.png', hoverImageUrl: '/ayo-lounge/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/peb-1',
    handle: 'the-pebble-table',
    title: 'The Pebble Table',
    price: 450000,
    category: 'Tables',
    availableForSale: true,
    featuredImageUrl: '/pebble-table/main.png',
    secondaryImageUrl: '/pebble-table/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/peb-1', title: 'Travertine', availableForSale: true, price: 450000, imageUrl: '/pebble-table/main.png', hoverImageUrl: '/pebble-table/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/kan-1',
    handle: 'the-kano-stool',
    title: 'The Kano Stool',
    price: 250000,
    category: 'Chairs',
    availableForSale: true,
    featuredImageUrl: '/kano-stool/main.png',
    secondaryImageUrl: '/kano-stool/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/kan-1', title: 'Roasted Walnut', availableForSale: true, price: 250000, imageUrl: '/kano-stool/main.png', hoverImageUrl: '/kano-stool/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/asa-1',
    handle: 'the-asaba-dresser',
    title: 'The Asaba Dresser',
    price: 1200000,
    category: 'Storage',
    availableForSale: true,
    featuredImageUrl: '/asaba-dresser/main.png',
    secondaryImageUrl: '/asaba-dresser/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/asa-1', title: 'Bleached Ash', availableForSale: true, price: 1200000, imageUrl: '/asaba-dresser/main.png', hoverImageUrl: '/asaba-dresser/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/lar-1',
    handle: 'the-lari-mirror',
    title: 'The Lari Mirror',
    price: 380000,
    category: 'Decor',
    availableForSale: true,
    featuredImageUrl: '/lari-mirror/main.png',
    secondaryImageUrl: '/lari-mirror/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/lar-1', title: 'Brushed Brass', availableForSale: true, price: 380000, imageUrl: '/lari-mirror/main.png', hoverImageUrl: '/lari-mirror/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/ota-1',
    handle: 'the-ota-chair',
    title: 'The Ota Chair',
    price: 580000,
    category: 'Chairs',
    availableForSale: true,
    featuredImageUrl: '/ota-chair/main.png',
    secondaryImageUrl: '/ota-chair/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/ota-1', title: 'Charcoal Black', availableForSale: true, price: 580000, imageUrl: '/ota-chair/main.png', hoverImageUrl: '/ota-chair/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/wov-1',
    handle: 'the-woven-lounge',
    title: 'The Woven Lounge',
    price: 720000,
    category: 'Chairs',
    availableForSale: true,
    featuredImageUrl: '/woven-lounge/main.png',
    secondaryImageUrl: '/woven-lounge/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/wov-1', title: 'Natural Rattan', availableForSale: true, price: 720000, imageUrl: '/woven-lounge/main.png', hoverImageUrl: '/woven-lounge/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/bol-1',
    handle: 'the-bolster-daybed',
    title: 'The Bolster Daybed',
    price: 1450000,
    category: 'Sofas',
    availableForSale: true,
    featuredImageUrl: '/bolster-daybed/main.png',
    secondaryImageUrl: '/bolster-daybed/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/bol-1', title: 'Pebble Grey', availableForSale: true, price: 1450000, imageUrl: '/bolster-daybed/main.png', hoverImageUrl: '/bolster-daybed/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/clo-1',
    handle: 'the-cloud-sofa',
    title: 'The Cloud Sofa',
    price: 2150000,
    category: 'Sofas',
    availableForSale: true,
    featuredImageUrl: '/cloud-sofa/main.png',
    secondaryImageUrl: '/cloud-sofa/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/clo-1', title: 'Cloud White', availableForSale: true, price: 2150000, imageUrl: '/cloud-sofa/main.png', hoverImageUrl: '/cloud-sofa/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/vin-1',
    handle: 'the-vinyl-stand',
    title: 'The Vinyl Stand',
    price: 420000,
    category: 'Storage',
    availableForSale: true,
    featuredImageUrl: '/vinyl-stand/main.png',
    secondaryImageUrl: '/vinyl-stand/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/vin-1', title: 'Rich Walnut', availableForSale: true, price: 420000, imageUrl: '/vinyl-stand/main.png', hoverImageUrl: '/vinyl-stand/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/flo-1',
    handle: 'the-floral-chaise',
    title: 'The Floral Chaise',
    price: 950000,
    category: 'Chairs',
    availableForSale: true,
    featuredImageUrl: '/floral-chaise/main.png',
    secondaryImageUrl: '/floral-chaise/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/flo-1', title: 'Vintage Floral', availableForSale: true, price: 950000, imageUrl: '/floral-chaise/main.png', hoverImageUrl: '/floral-chaise/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/woo-1',
    handle: 'the-wood-nightstand',
    title: 'The Wood Nightstand',
    price: 350000,
    category: 'Storage',
    availableForSale: true,
    featuredImageUrl: '/wood-nightstand/main.png',
    secondaryImageUrl: '/wood-nightstand/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/woo-1', title: 'Warm Teak', availableForSale: true, price: 350000, imageUrl: '/wood-nightstand/main.png', hoverImageUrl: '/wood-nightstand/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/wav-1',
    handle: 'the-wavy-bookshelf',
    title: 'The Wavy Bookshelf',
    price: 880000,
    category: 'Storage',
    availableForSale: true,
    featuredImageUrl: '/wavy-bookshelf/main.png',
    secondaryImageUrl: '/wavy-bookshelf/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/wav-1', title: 'Matte Cream', availableForSale: true, price: 880000, imageUrl: '/wavy-bookshelf/main.png', hoverImageUrl: '/wavy-bookshelf/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/gla-1',
    handle: 'the-glass-cabinet',
    title: 'The Glass Cabinet',
    price: 1650000,
    category: 'Storage',
    availableForSale: true,
    featuredImageUrl: '/glass-cabinet/main.png',
    secondaryImageUrl: '/glass-cabinet/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/gla-1', title: 'Matte Black', availableForSale: true, price: 1650000, imageUrl: '/glass-cabinet/main.png', hoverImageUrl: '/glass-cabinet/main.png' }
    ]
  },
  {
    id: 'gid://shopify/Product/bou-1',
    handle: 'the-boucle-chair',
    title: 'The Boucle Chair',
    price: 650000,
    category: 'Chairs',
    availableForSale: true,
    featuredImageUrl: '/boucle-chair/main.png',
    secondaryImageUrl: '/boucle-chair/front.png',
    variants: [
      { id: 'gid://shopify/ProductVariant/bou-1', title: 'Ivory Boucle', availableForSale: true, price: 650000, imageUrl: '/boucle-chair/main.png', hoverImageUrl: '/boucle-chair/main.png' }
    ]
  },
];

export async function getShopifyProducts(): Promise<ShopifyProduct[]> {
  // Simulate network
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_SHOPIFY_CATALOG;
}

export const RELATED_PRODUCTS_MAP: Record<string, string[]> = {
  'the-sapele-sofa': ['the-pebble-table', 'the-lari-mirror', 'the-kano-stool'],
  'the-ayo-lounge': ['the-wavy-bookshelf', 'the-woven-lounge', 'the-wood-nightstand'],
  'the-pebble-table': ['the-sapele-sofa', 'the-bolster-daybed', 'the-ota-chair'],
  'the-kano-stool': ['the-glass-cabinet', 'the-sapele-sofa', 'the-vinyl-stand'],
  'the-asaba-dresser': ['the-lari-mirror', 'the-wood-nightstand', 'the-boucle-chair'],
  'the-lari-mirror': ['the-asaba-dresser', 'the-sapele-sofa', 'the-glass-cabinet'],
  'the-ota-chair': ['the-glass-cabinet', 'the-vinyl-stand', 'the-pebble-table'],
  'the-woven-lounge': ['the-ayo-lounge', 'the-floral-chaise', 'the-boucle-chair'],
  'the-bolster-daybed': ['the-pebble-table', 'the-cloud-sofa', 'the-wavy-bookshelf'],
  'the-cloud-sofa': ['the-bolster-daybed', 'the-wavy-bookshelf', 'the-boucle-chair'],
  'the-vinyl-stand': ['the-ota-chair', 'the-kano-stool', 'the-glass-cabinet'],
  'the-floral-chaise': ['the-woven-lounge', 'the-wood-nightstand', 'the-asaba-dresser'],
  'the-wood-nightstand': ['the-asaba-dresser', 'the-floral-chaise', 'the-ayo-lounge'],
  'the-wavy-bookshelf': ['the-cloud-sofa', 'the-boucle-chair', 'the-ayo-lounge'],
  'the-glass-cabinet': ['the-ota-chair', 'the-vinyl-stand', 'the-lari-mirror'],
  'the-boucle-chair': ['the-cloud-sofa', 'the-wavy-bookshelf', 'the-woven-lounge'],
  'the-noka-sofa': ['the-eko-console', 'the-sola-chair', 'the-pebble-table'],
  'the-eko-console': ['the-noka-sofa', 'the-sola-chair', 'the-lari-mirror'],
  'the-sola-chair': ['the-noka-sofa', 'the-eko-console', 'the-tapered-side-table'],
  'the-tapered-side-table': ['the-sola-chair', 'the-boucle-chair', 'the-wavy-bookshelf'],
};

export async function getRelatedProducts(handle: string): Promise<ShopifyProduct[]> {
  await new Promise(resolve => setTimeout(resolve, 150));
  const relatedHandles = RELATED_PRODUCTS_MAP[handle] || ['the-sapele-sofa', 'the-pebble-table'];
  
  return MOCK_SHOPIFY_CATALOG.filter(p => relatedHandles.includes(p.handle));
}
