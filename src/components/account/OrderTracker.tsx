'use client';

import React from 'react';
import { Badge } from '../ui/Badge';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';
import { OrderStage, OrderExceptionType } from '@/lib/orders/orderMock';
import styles from './OrderTracker.module.css';

const STAGES = [
  { id: 'RECEIVED', label: 'Order Received', desc: 'Securely logged in our system.' },
  { id: 'SOURCING', label: 'Sourcing Materials', desc: 'Procuring exact kiln-dried mahogany and premium linens.' },
  { id: 'CRAFTING', label: 'Crafting Frame', desc: 'Our artisans are cutting and anchoring the structural foundation.' },
  { id: 'FINISHING', label: 'Upholstery & Finish', desc: 'Hand-tailoring fabrics and applying surface treatments.' },
  { id: 'LOGISTICS', label: 'Final QC & Transit', desc: 'With our white-glove logistics team for scheduled delivery.' },
  { id: 'DELIVERED', label: 'Delivered', desc: 'Anchoring your space.' }
];

const EXCEPTION_MESSAGES: Record<OrderExceptionType | 'CANCELLED', { title: string; desc: string } | null> = {
  NONE: null,
  MATERIAL_DELAY: { title: 'Material Sourcing Update', desc: 'We are experiencing a slight delay procuring materials that meet our exact standards. Your timeline has been updated.' },
  QA_HOLD: { title: 'Quality Assurance Hold', desc: 'Your piece did not pass our final inspection. Our artisans are correcting the finish to ensure absolute perfection.' },
  DISPATCH_DELAY: { title: 'Logistics Update', desc: 'There is a minor transit delay. Your order remains secure in our network and tracking will resume shortly.' },
  SCHEDULING_PENDING: { title: 'Pending Installation Scheduling', desc: 'Your pieces are ready. Our concierge will contact you within 24 hours to coordinate your white-glove delivery.' },
  CANCELLED: { title: 'Order Cancelled', desc: 'This order has been securely cancelled and refunded to your original payment method.' }
};

interface OrderTrackerProps {
  currentStage: OrderStage;
  estimatedDate: string;
  exceptionType?: OrderExceptionType;
}

export function OrderTracker({ currentStage, estimatedDate, exceptionType = 'NONE' }: OrderTrackerProps) {
  const isCancelled = currentStage === 'CANCELLED';
  const currentIndex = isCancelled ? -1 : STAGES.findIndex(s => s.id === currentStage);
  const activeException = EXCEPTION_MESSAGES[isCancelled ? 'CANCELLED' : exceptionType];

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>{isCancelled ? 'Order Cancelled' : 'Live Production Status'}</h2>
          {!isCancelled && <p className={styles.subtitle}>Estimated Completion: {estimatedDate}</p>}
        </div>
        <Badge variant={isCancelled ? 'neutral' : currentStage === 'DELIVERED' ? 'neutral' : exceptionType !== 'NONE' ? 'warning' : 'outline'}>
          {isCancelled ? 'Cancelled' : STAGES[currentIndex]?.label || 'Review Required'}
        </Badge>
      </header>
      
      {activeException && (
        <div className={styles.exceptionBox}>
          <AlertCircle size={20} className={styles.exceptionIcon} />
          <div>
            <h4 className={styles.exceptionTitle}>{activeException.title}</h4>
            <p className={styles.exceptionDesc}>{activeException.desc}</p>
          </div>
        </div>
      )}

      {!isCancelled && (
        <div className={styles.trackerRow}>
          {STAGES.map((stage, index) => {
            const isCompleted = index < currentIndex;
            const isActive = index === currentIndex;
            const isPending = index > currentIndex;
            const hasException = isActive && exceptionType !== 'NONE';

            return (
              <div 
                key={stage.id} 
                className={`${styles.step} ${isCompleted ? styles.completed : ''} ${isActive ? styles.active : ''} ${isPending ? styles.pending : ''}`}
              >
                <div className={styles.iconWrapper}>
                  {isCompleted ? (
                    <CheckCircle2 size={24} className={styles.completedIcon} />
                  ) : isActive ? (
                    hasException ? (
                      <AlertCircle size={24} className={styles.exceptionActiveIcon} />
                    ) : (
                      <span className={styles.activePulse}></span>
                    )
                  ) : (
                    <Circle size={24} className={styles.pendingIcon} />
                  )}
                  {/* Connecting Line */}
                  {index < STAGES.length - 1 && <div className={styles.connector} />}
                </div>
                
                <div className={styles.stepInfo}>
                  <span className={styles.stepLabel}>{stage.label}</span>
                  {(isActive || isCompleted) && (
                    <span className={styles.stepDesc}>{stage.desc}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
