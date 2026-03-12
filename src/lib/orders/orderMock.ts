/**
 * Mock Order Client
 * 
 * Simulates fetching order history and detailed tracker status
 * that would typically come from Shopify + backend logistics metadata.
 */

export type OrderStage = 'RECEIVED' | 'SOURCING' | 'CRAFTING' | 'FINISHING' | 'LOGISTICS' | 'DELIVERED' | 'CANCELLED';

export type OrderExceptionType = 'NONE' | 'MATERIAL_DELAY' | 'QA_HOLD' | 'DISPATCH_DELAY' | 'SCHEDULING_PENDING';

export interface OrderLineItem {
  id: string;
  title: string;
  swatchName: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface OrderData {
  id: string;
  date: string;
  stage: OrderStage;
  exceptionType: OrderExceptionType;
  estimatedCompletion: string;
  shippingAddress: string;
  deliveryMethod: string;
  isWhiteGlove: boolean;
  subtotal: number;
  deliveryFee: number;
  total: number;
  items: OrderLineItem[];
}

const MOCK_ORDERS: Record<string, OrderData> = {
  'ARC-84920': {
    id: 'ARC-84920',
    date: 'March 10, 2026',
    stage: 'CRAFTING',
    exceptionType: 'NONE',
    estimatedCompletion: 'March 24, 2026',
    shippingAddress: '14 Bourdillon Road, Ikoyi, Lagos, Nigeria',
    deliveryMethod: 'White-Glove Assembly',
    isWhiteGlove: true,
    subtotal: 1700000,
    deliveryFee: 25000,
    total: 1725000,
    items: [
      {
        id: '1',
        title: 'The Sapele Sofa',
        swatchName: 'Almond Beige',
        price: 1850000,
        quantity: 1,
        imageUrl: '/sapele-sofa/main.png'
      },
      {
        id: '2',
        title: 'Veda Coffee Table',
        swatchName: 'Natural Teak',
        price: 450000,
        quantity: 1,
        imageUrl: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=300'
      }
    ]
  },
  'ARC-73104': {
    id: 'ARC-73104',
    date: 'November 12, 2025',
    stage: 'DELIVERED',
    exceptionType: 'NONE',
    estimatedCompletion: 'Delivered',
    shippingAddress: '14 Bourdillon Road, Ikoyi, Lagos, Nigeria',
    deliveryMethod: 'Secure Crated Delivery',
    isWhiteGlove: false,
    subtotal: 740000,
    deliveryFee: 60000,
    total: 800000,
    items: [
      {
        id: '3',
        title: 'Alta Dining Chair',
        swatchName: 'Oatmeal Linen',
        price: 185000,
        quantity: 4,
        imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  'ARC-90211': {
    id: 'ARC-90211',
    date: 'March 01, 2026',
    stage: 'SOURCING',
    exceptionType: 'MATERIAL_DELAY',
    estimatedCompletion: 'April 05, 2026 (Revised)',
    shippingAddress: 'Plot 4, Trans Amadi Industrial Layout, Port Harcourt',
    deliveryMethod: 'Secure Crated Delivery',
    isWhiteGlove: false,
    subtotal: 1250000,
    deliveryFee: 150000,
    total: 1400000,
    items: [
      {
        id: '4',
        title: 'The Cloud Sofa',
        swatchName: 'Cloud White',
        price: 2150000,
        quantity: 1,
        imageUrl: '/cloud-sofa/main.png'
      }
    ]
  },
  'ARC-90555': {
    id: 'ARC-90555',
    date: 'February 20, 2026',
    stage: 'LOGISTICS',
    exceptionType: 'SCHEDULING_PENDING',
    estimatedCompletion: 'Pending Scheduling',
    shippingAddress: '14 Bourdillon Road, Ikoyi, Lagos, Nigeria',
    deliveryMethod: 'White-Glove Assembly',
    isWhiteGlove: true,
    subtotal: 850000,
    deliveryFee: 25000,
    total: 875000,
    items: [
      {
        id: '5',
        title: 'Kolo Sideboard',
        swatchName: 'Natural Teak',
        price: 850000,
        quantity: 1,
        imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600'
      }
    ]
  }
};

export async function getOrderHistory(): Promise<OrderData[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return Object.values(MOCK_ORDERS).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getOrderById(id: string): Promise<OrderData | null> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_ORDERS[id] || null;
}
