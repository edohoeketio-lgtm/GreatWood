'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useUI } from '../../lib/context/UIContext';
import { useCartStore } from '@/lib/store/cartStore';
import { Button } from '../ui/Button';
import { ImageFrame } from '../ui/ImageFrame';
import { PriceBlock } from '../shared/PriceBlock';
import { useRouter } from 'next/navigation';
import styles from './CartDrawer.module.css';

export function CartDrawer() {
  const { isCartOpen, toggleCart } = useUI();
  const { items, removeLineItem, updateQuantity, getCheckoutUrl, getDeliveryEstimate } = useCartStore();
  const router = useRouter();

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const isEmpty = items.length === 0;
  
  // Guard for empty cart delivery calc
  const deliveryEstimate = isEmpty ? null : getDeliveryEstimate();

  // Prevent background scrolling when open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isCartOpen]);

  const handleCheckout = () => {
    toggleCart();
    router.push(getCheckoutUrl());
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.backdrop}
            onClick={toggleCart}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping Cart"
          >
            <div className={styles.header}>
              <h2 className={styles.title}>Your Bag {items.length > 0 && `(${items.length})`}</h2>
              <button onClick={toggleCart} className={styles.closeButton} aria-label="Close cart">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className={styles.content}>
              {isEmpty ? (
                <div className={styles.emptyState}>
                  <p>Your space is a blank canvas.</p>
                  <p className={styles.emptySubtext}>Find the pieces that anchor it.</p>
                  <Button variant="primary" fullWidth className={styles.shopButton} onClick={() => { toggleCart(); router.push('/shop'); }}>
                    Explore the Collection
                  </Button>
                </div>
              ) : (
                <div className={styles.itemList}>
                  {items.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                      <div className={styles.itemImage}>
                        <ImageFrame src={item.imageUrl} alt={item.title} aspectRatio="square" width={100} height={100} />
                      </div>
                      
                      <div className={styles.itemDetails}>
                        <div className={styles.itemHeader}>
                          <h3 className={styles.itemTitle}>{item.title}</h3>
                          <button onClick={() => removeLineItem(item.id)} className={styles.removeBtn} aria-label="Remove item">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        
                        <p className={styles.itemVariant}>{item.swatchName}</p>
                        
                        <div className={styles.itemActions}>
                          <div className={styles.quantityPicker}>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease">
                              <Minus size={14} />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase">
                              <Plus size={14} />
                            </button>
                          </div>
                          
                          <PriceBlock amount={item.price * item.quantity} size="sm" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.footer}>
              <div className={styles.subtotalLine}>
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString('en-NG')}</span>
              </div>
              <p className={styles.shippingNotice}>
                {deliveryEstimate ? deliveryEstimate.message : 'Shipping calculated at checkout.'}
              </p>
              <Button variant="primary" fullWidth size="lg" disabled={isEmpty} onClick={handleCheckout}>
                Secure Checkout
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
