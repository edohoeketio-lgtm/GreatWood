'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/lib/store/cartStore';
import styles from './page.module.css';

export default function CheckoutSuccessPage() {
  const { clearCart } = useCartStore();
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // Generate a secure-looking random order number (e.g. GWD-9A3F2)
    const randomHex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(5, '0');
    setOrderNumber(`GWD-${randomHex}`);
    
    // Clear the cart on mount
    clearCart();
  }, [clearCart]);

  return (
    <div className={styles.container}>
      <div className={styles.receiptCard}>
        
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <CheckCircle2 size={48} strokeWidth={1} className={styles.icon} />
          <h1 className={styles.title}>Your order is confirmed.</h1>
          
          <div className={styles.receiptMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Order No.</span>
              <span>{orderNumber || '...'}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Email</span>
              <span>guest@greatwood.ng</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Date</span>
              <span>{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
          </div>
        </div>

        {/* Tracker Section */}
        <div className={styles.trackerSection}>
          <div className={styles.trackerContent}>
            <h2 className={styles.boxTitle}>Track Your Craft</h2>
            <p className={styles.boxText}>
              Follow your piece from our Lagos workshop right to your door. Our radical transparency means you are never in the dark about the status of your order.
            </p>
          </div>
          <Link href={`/account/orders/${orderNumber}`} className={styles.trackerAction}>
            <span>View Status</span>
            <ArrowRight size={24} strokeWidth={1} className={styles.arrow} />
          </Link>
        </div>

        {/* Details Section */}
        <div className={styles.detailsSection}>
          <div className={styles.detailBlock}>
            <h3 className={styles.summaryTitle}>Shipping Destination</h3>
            <p className={styles.address}>
              Guest Customer<br />
              14 Bourdillon Road<br />
              Ikoyi, Lagos<br />
              Nigeria
            </p>
          </div>

          <div className={styles.detailBlock}>
            <h3 className={styles.summaryTitle}>Delivery Method</h3>
            <p className={styles.address}>
              White-Glove Assembly Delivery
              <span className={styles.muted}>Estimated window: 14 - 21 Days (Made to Order)</span>
            </p>
          </div>
        </div>

      </div>
      
      {/* Page Actions */}
      <div className={styles.pageActions}>
        <Button variant="secondary" size="lg" onClick={() => window.location.href = '/'}>
          Return to Selected Works
        </Button>
      </div>
    </div>
  );
}
