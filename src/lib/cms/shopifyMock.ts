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
  featuredImageUrl: string;
  secondaryImageUrl?: string;
  variants: Array<{
    id: string;
    title: string;
    availableForSale: boolean;
    price: number;
  }>;
}

const MOCK_SHOPIFY_CATALOG: ShopifyProduct[] = [
  {
    id: 'gid://shopify/Product/1',
    handle: 'the-noka-sofa',
    title: 'The Noka Sofa',
    price: 1250000,
    availableForSale: true,
    featuredImageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600',
    variants: [
      { id: 'gid://shopify/ProductVariant/1', title: 'Oatmeal Linen', availableForSale: true, price: 1250000 },
      { id: 'gid://shopify/ProductVariant/2', title: 'Charcoal Velvet', availableForSale: true, price: 1250000 }
    ]
  },
  {
    id: 'gid://shopify/Product/2',
    handle: 'veda-coffee-table',
    title: 'Veda Coffee Table',
    price: 450000,
    availableForSale: true,
    featuredImageUrl: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=600',
    variants: [
      { id: 'gid://shopify/ProductVariant/3', title: 'Default Title', availableForSale: true, price: 450000 }
    ]
  },
  {
    id: 'gid://shopify/Product/3',
    handle: 'the-sola-chair',
    title: 'The Sola Chair',
    price: 320000,
    availableForSale: true,
    featuredImageUrl: '/yellow-chair/main.jpg',
    secondaryImageUrl: '/yellow-chair/hover.jpg',
    variants: [
      { id: 'gid://shopify/ProductVariant/4', title: 'Yellow Ochre', availableForSale: true, price: 320000 },
      { id: 'gid://shopify/ProductVariant/4b', title: 'Blue Velvet', availableForSale: true, price: 320000 }
    ]
  },
  {
    id: 'gid://shopify/Product/4',
    handle: 'the-eko-console',
    title: 'The Eko Console',
    price: 680000,
    availableForSale: true,
    featuredImageUrl: '/the-eko-console/main.jpg',
    secondaryImageUrl: '/the-eko-console/front-view.jpg',
    variants: [
      { id: 'gid://shopify/ProductVariant/5', title: 'Walnut', availableForSale: true, price: 680000 }
    ]
  },
  {
    id: 'gid://shopify/Product/5',
    handle: 'luna-accent-chair',
    title: 'Luna Accent Chair',
    price: 320000,
    availableForSale: true,
    featuredImageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=600',
    variants: [
      { id: 'gid://shopify/ProductVariant/7', title: 'Default Title', availableForSale: true, price: 320000 }
    ]
  },
  {
    id: 'gid://shopify/Product/6',
    handle: 'mara-bed-frame',
    title: 'Mara Bed Frame (King)',
    price: 1100000,
    availableForSale: true,
    featuredImageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=600',
    variants: [
      { id: 'gid://shopify/ProductVariant/8', title: 'King', availableForSale: true, price: 1100000 }
    ]
  }
];

export async function getShopifyProducts(): Promise<ShopifyProduct[]> {
  // Simulate network
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_SHOPIFY_CATALOG;
}
