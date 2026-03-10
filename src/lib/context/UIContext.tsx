'use client';

import React, { createContext, useContext, useState } from 'react';

interface UIContextState {
  isCartOpen: boolean;
  isSearchOpen: boolean;
  toggleCart: () => void;
  toggleSearch: () => void;
  closeAll: () => void;
}

const UIContext = createContext<UIContextState | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
    if (!isCartOpen) setIsSearchOpen(false); // Close search if opening cart
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (!isSearchOpen) setIsCartOpen(false); // Close cart if opening search
  };

  const closeAll = () => {
    setIsCartOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <UIContext.Provider value={{ isCartOpen, isSearchOpen, toggleCart, toggleSearch, closeAll }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
