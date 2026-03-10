import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { calculateDelivery, DeliveryZone, DeliveryEstimate, ProductDeliveryConfig } from '../utils/delivery';

export interface CartItem {
  id: string; // Shopify Line Item ID or internal mock ID
  variantId: string;
  productHandle: string;
  title: string;
  price: number;
  quantity: number;
  swatchName: string;
  imageUrl: string;
}

export interface CartState {
  items: CartItem[];
  checkoutId: string | null;
  checkoutUrl: string | null;
  status: 'idle' | 'syncing' | 'error';
  deliveryZone: DeliveryZone;
  
  // Actions
  addLineItem: (item: Omit<CartItem, 'id'>) => Promise<void>;
  removeLineItem: (id: string) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  setDeliveryZone: (zone: DeliveryZone) => void;
  initializeCart: () => Promise<void>;
  getCheckoutUrl: () => string;
  getDeliveryEstimate: () => DeliveryEstimate;
}

// Temporary implementation using mocked local state until Shopify Storefront API is live
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      checkoutId: null,
      checkoutUrl: null,
      status: 'idle',
      deliveryZone: 'LAGOS',

      addLineItem: async (item) => {
        set({ status: 'syncing' });
        // Simulate network/Shopify delay
        await new Promise(resolve => setTimeout(resolve, 600));

        set((state) => {
          const existingItemIndex = state.items.findIndex(i => i.variantId === item.variantId);
          if (existingItemIndex >= 0) {
            const newItems = [...state.items];
            newItems[existingItemIndex].quantity += item.quantity;
            return { items: newItems, status: 'idle' };
          }
          return {
            items: [...state.items, { ...item, id: `mock-line-${Date.now()}` }],
            status: 'idle'
          };
        });
      },

      removeLineItem: async (id) => {
        set({ status: 'syncing' });
        await new Promise(resolve => setTimeout(resolve, 400));
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
          status: 'idle'
        }));
      },

      updateQuantity: async (id, quantity) => {
        if (quantity < 1) return get().removeLineItem(id);
        
        set({ status: 'syncing' });
        await new Promise(resolve => setTimeout(resolve, 400));
        set((state) => ({
          items: state.items.map((item) => 
            item.id === id ? { ...item, quantity } : item
          ),
          status: 'idle'
        }));
      },

      setDeliveryZone: (zone) => set({ deliveryZone: zone }),

      initializeCart: async () => {
        // Future: Rehydrate with live Shopify check
      },

      getCheckoutUrl: () => {
        const state = get();
        return state.checkoutUrl || '/checkout'; // Fallback to mocked checkout
      },

      getDeliveryEstimate: () => {
        const { items, deliveryZone } = get();
        // Map cart items to generic product delivery config (mocking live Sanity data)
        const mockProductConfigs: ProductDeliveryConfig[] = items.map(item => ({
          isMadeToOrder: true, 
          baseLeadTimeDays: 14, 
          maxLeadTimeDays: 21,
          requiresWhiteGlove: item.title.includes('Sofa') || item.title.includes('Table'),
          isCustomMaterial: item.swatchName.includes('Oatmeal')
        }));

        return calculateDelivery(deliveryZone, mockProductConfigs);
      }
    }),
    {
      name: 'architect-cart-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items, deliveryZone: state.deliveryZone }) // Only persist data, not loading states
    }
  )
);
