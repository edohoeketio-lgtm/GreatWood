'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

export default function CheckoutSuccessPage() {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.header}>
        <CheckCircle2 size={48} strokeWidth={1} className={styles.icon} />
        <h1 className={styles.title}>Your order is confirmed.</h1>
        <p className={styles.subtitle}>
          Order #ARC-84920 has been received. We’ve sent a confirmation email to guest@architect.ng.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.trackerLink}>
          <div className={styles.trackerBox}>
            <h2 className={styles.boxTitle}>Track your craft</h2>
            <p className={styles.boxText}>
              Follow your piece from our Lagos workshop to your door. Our radical transparency means you will never wonder about the status of your order.
            </p>
          </div>
          <Link href="/account/orders/ARC-84920" className={styles.trackerCta}>
            View Live Order Status
            <ArrowRight size={20} className={styles.arrow} />
          </Link>
        </div>

        <div className={styles.summary}>
          <h3 className={styles.summaryTitle}>Shipping to</h3>
          <p className={styles.address}>
            Guest Customer<br />
            14 Bourdillon Road<br />
            Ikoyi, Lagos<br />
            Nigeria
          </p>

          <h3 className={styles.summaryTitle}>Delivery Method</h3>
          <p className={styles.address}>
            White-Glove Assembly<br />
            <span className={styles.muted}>Estimated window: 14 - 21 Days (Made to Order)</span>
          </p>
        </div>
      </div>
      
      <div className={styles.actions}>
        <Button variant="ghost" size="lg" onClick={() => window.location.href = '/'}>
          Return to Homepage
        </Button>
      </div>
    </Container>
  );
}
