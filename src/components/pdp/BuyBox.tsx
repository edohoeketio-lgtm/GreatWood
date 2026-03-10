'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { PriceBlock } from '../shared/PriceBlock';
import { SwatchSelector } from '../shared/SwatchSelector';
import { Badge } from '../ui/Badge';
import { useUI } from '@/lib/context/UIContext';
import { useCartStore } from '@/lib/store/cartStore';
import styles from './BuyBox.module.css';

interface BuyBoxProps {
  product: {
    id: string;
    title: string;
    description: string;
    price: number;
    badge?: string;
    swatches: Array<{ id: string; name: string; colorHex?: string; imageUrl?: string }>;
  };
}

export function BuyBox({ product }: BuyBoxProps) {
  const { toggleCart } = useUI();
  const { addLineItem, status } = useCartStore();
  
  const [selectedSwatch, setSelectedSwatch] = useState(product.swatches[0]);
  const [quantity, setQuantity] = useState(1);
  const isAdding = status === 'syncing';

  const handleAddToCart = async () => {
    await addLineItem({
      variantId: selectedSwatch.id, // In real integration, this matches the Shopify Variant ID
      productHandle: product.id,
      title: product.title,
      price: product.price,
      quantity,
      swatchName: selectedSwatch.name,
      imageUrl: selectedSwatch.imageUrl || product.swatches[0].imageUrl || ''
    });
    toggleCart();
  };

  return (
    <div className={styles.wrapper}>
      {/* Sticky container behavior is handled by the parent layout, but internal spacing here */}
      <div className={styles.header}>
        {product.badge && <Badge variant="neutral" className={styles.badge}>{product.badge}</Badge>}
        <h1 className={styles.title}>{product.title}</h1>
        <PriceBlock amount={product.price} size="lg" className={styles.price} />
      </div>

      <div className={styles.description}>
        <p>{product.description}</p>
      </div>

      {product.swatches.length > 0 && (
        <div className={styles.swatchSection}>
          <div className={styles.swatchHeader}>
            <span className={styles.swatchLabel}>Material</span>
            <span className={styles.swatchValue}>{selectedSwatch?.name}</span>
          </div>
          <SwatchSelector
            swatches={product.swatches}
            size="lg"
            onSelect={setSelectedSwatch}
          />
        </div>
      )}

      <div className={styles.actions}>
        <div className={styles.quantityWrapper}>
          <button 
            type="button" 
            className={styles.qtyBtn}
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className={styles.qtyValue}>{quantity}</span>
          <button 
            type="button" 
            className={styles.qtyBtn}
            onClick={() => setQuantity(quantity + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        
        <Button 
          variant="primary" 
          size="lg" 
          className={styles.addToCartBtn}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? 'Adding...' : 'Add to Bag'}
        </Button>
      </div>

      {/* Mobile Sticky Add To Bag (Appears on scroll via CSS context or separate component, but embedded here for semantic structure) */}
      <div className={styles.mobileStickyActions}>
        <Button 
          variant="primary" 
          size="lg" 
          fullWidth
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? 'Adding...' : `Add to Bag — ₦${(product.price * quantity).toLocaleString('en-NG')}`}
        </Button>
      </div>
    </div>
  );
}
