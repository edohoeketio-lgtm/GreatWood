import { create } from 'zustand';

interface CommerceState {
  // PDP State
  activeProductHandle: string | null;
  selectedVariantId: string | null;
  selectedOptions: Record<string, string>;
  
  // PLP State
  activeFilters: string[];
  sortMode: 'price-asc' | 'price-desc' | 'newest';
  
  // Actions
  setActiveProduct: (handle: string) => void;
  selectOption: (name: string, value: string) => void;
  setVariantId: (id: string | null) => void;
  setFilters: (filters: string[]) => void;
  setSort: (mode: 'price-asc' | 'price-desc' | 'newest') => void;
  resetPDP: () => void;
}

export const useCommerceStore = create<CommerceState>()((set) => ({
  activeProductHandle: null,
  selectedVariantId: null,
  selectedOptions: {},
  activeFilters: [],
  sortMode: 'newest',

  setActiveProduct: (handle) => set({ activeProductHandle: handle }),
  
  selectOption: (name, value) => set((state) => ({
    selectedOptions: { ...state.selectedOptions, [name]: value }
  })),

  setVariantId: (id) => set({ selectedVariantId: id }),

  setFilters: (filters) => set({ activeFilters: filters }),
  
  setSort: (mode) => set({ sortMode: mode }),

  resetPDP: () => set({ activeProductHandle: null, selectedVariantId: null, selectedOptions: {} })
}));
