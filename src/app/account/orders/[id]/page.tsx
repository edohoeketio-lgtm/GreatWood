'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { OrderTracker } from '@/components/account/OrderTracker';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { PriceBlock } from '@/components/shared/PriceBlock';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getOrderById } from '@/lib/orders/orderMock';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

// Ensure component accepts Next.js Page Props
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function OrderStatusPage({ params }: PageProps) {
  const resolvedParams = await params;
  const order = await getOrderById(resolvedParams.id);

  if (!order) return notFound();

  return (
    <Container className={styles.wrapper}>
      <header className={styles.header}>
        <Link href="/account" className={styles.backLink}>
          <ArrowLeft size={16} />
          Back to Orders
        </Link>
        <div className={styles.meta}>
          <h1 className={styles.title}>Order #{order.id}</h1>
          <p className={styles.date}>Placed on {order.date}</p>
        </div>
      </header>

      <div className={styles.trackerSection}>
        <OrderTracker 
           currentStage={order.stage}
           estimatedDate={order.estimatedCompletion}
           exceptionType={order.exceptionType}
        />
      </div>

      <div className={styles.grid}>
        <div className={styles.column}>
           <h2 className={styles.sectionTitle}>Order Items</h2>
           <div className={styles.itemList}>
             {order.items.map((item) => (
                <div key={item.id} className={styles.lineItem}>
                  <div className={styles.itemImage}>
                    <ImageFrame src={item.imageUrl} alt={item.title} aspectRatio="square" width={120} height={120} />
                  </div>
                  <div className={styles.itemMeta}>
                    <h3 className={styles.itemName}>{item.title}</h3>
                    <p className={styles.itemDesc}>{item.swatchName} · Qty: {item.quantity}</p>
                    <PriceBlock amount={item.price} size="sm" className={styles.itemPrice} />
                  </div>
                </div>
             ))}
           </div>
        </div>

        <div className={styles.column}>
           <div className={styles.summaryBox}>
              <h2 className={styles.sectionTitle}>Order Summary</h2>
              
              <div className={styles.summaryGroup}>
                <h3 className={styles.groupTitle}>Shipping Information</h3>
                <p className={styles.groupText}>{order.shippingAddress}</p>
                <p className={styles.groupText}>{order.deliveryMethod}</p>
              </div>

              <div className={styles.totals}>
                <div className={styles.totalRow}>
                  <span>Subtotal</span>
                  <span>₦{order.subtotal.toLocaleString('en-NG')}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Delivery</span>
                  <span>₦{order.deliveryFee.toLocaleString('en-NG')}</span>
                </div>
                <div className={`${styles.totalRow} ${styles.grandTotal}`}>
                  <span>Total Paid</span>
                  <span>₦{order.total.toLocaleString('en-NG')}</span>
                </div>
              </div>
           </div>

           <div className={styles.careBox}>
              <h3 className={styles.careTitle}>Preparing for Delivery</h3>
              {order.isWhiteGlove ? (
                <p className={styles.careText}>Ensure doorways and corridors are clear. Our white-glove team will require approximately 45 minutes for assembly.</p>
              ) : (
                <p className={styles.careText}>Your pieces will arrive securely crated. Please ensure you have assistance available for unboxing.</p>
              )}
              <Button variant="secondary" className={styles.careBtn}>Read Care Guides</Button>
           </div>
        </div>
      </div>
    </Container>
  );
}
