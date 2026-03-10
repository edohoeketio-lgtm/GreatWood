# Zustand Store Specification

*Owner: Frontend Development Team*

This document defines the strict structure of global client state using Zustand. It strictly separates business logic (cart, variants) from ephemeral UI state (which belongs in React Context).

## 1. Core Principles
- **No UI State:** Do not store `isCartOpen` or `isSearchOpen` in Zustand.
- **Persistence:** The cart must be persisted to `localStorage` to survive page reloads.
- **Shopify Syncing:** The store must maintain the `checkoutId` to rehydrate Shopify cart data.

## 2. Store: `useCartStore`

```typescript
interface CartItem {
  id: string; // Shopify Line Item ID
  variantId: string; // Shopify Variant ID
  productHandle: string;
  title: string;
  price: number;
  quantity: number;
  // Hydrated from Sanity based on SKU/Handle:
  swatchName: string;
  imageUrl: string;
}

interface CartState {
  // State
  items: CartItem[];
  checkoutId: string | null;
  checkoutUrl: string | null;
  status: 'idle' | 'syncing' | 'error';
  deliveryZoneId: string | null; // For early preview calculations
  
  // Computed (Getters)
  totalItems: () => number;
  subtotal: () => number;
  
  // Actions
  addLineItem: (variantId: string, quantity: number, meta: object) => Promise<void>;
  removeLineItem: (lineItemId: string) => Promise<void>;
  updateQuantity: (lineItemId: string, quantity: number) => Promise<void>;
  setDeliveryZone: (zoneId: string) => void;
  initializeCart: () => Promise<void>; // Rehydrates from localStorage/Shopify
}
```

## 3. Store: `useCommerceStore` (PDP & PLP)

Used to manage complex selections before they hit the cart.

```typescript
interface CommerceState {
  // PDP State
  activeProductHandle: string | null;
  selectedVariantId: string | null;
  selectedOptions: Record<string, string>; // e.g., { Material: 'Linen', Color: 'Oatmeal' }
  
  // PLP State
  activeFilters: string[]; // e.g., ['category-seating', 'material-wood']
  sortMode: 'price-asc' | 'price-desc' | 'newest';
  
  // Actions
  selectOption: (name: string, value: string) => void;
  setFilters: (filters: string[]) => void;
  setSort: (mode: string) => void;
  resetPDP: () => void;
}
```

## 4. Architectural Rules for Components
1. The **BuyBox** reads from `useCommerceStore` to determine which variant ID to pass to `useCartStore.addLineItem`.
2. The **FilterBar** reads/writes to `useCommerceStore`, triggering a URL update or Reipgination.
3. The **Checkout Hand-off**: Clicking "Pay" in the custom checkout routes the user to the Shopify `checkoutUrl` stored in `useCartStore`.
