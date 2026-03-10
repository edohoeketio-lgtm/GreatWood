'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { PriceBlock } from '@/components/shared/PriceBlock';
import { CheckCircle2 } from 'lucide-react';
import { Tooltip } from '@/components/ui/Tooltip';
import { useCartStore } from '@/lib/store/cartStore';
import { DeliveryZone } from '@/lib/utils/delivery';
import styles from './page.module.css';

export default function CheckoutPage() {
  const { items, deliveryZone, getCheckoutUrl, getDeliveryEstimate, setDeliveryZone } = useCartStore();
  const [step, setStep] = useState(1);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const estimate = items.length > 0 ? getDeliveryEstimate() : null;
  const deliveryFee = estimate?.cost || 0;
  const total = subtotal + deliveryFee;

  // Simple unstyled select handler to test zone switching
  const handleZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDeliveryZone(e.target.value as DeliveryZone);
  };

  return (
    <Container className={styles.wrapper}>
      <div className={styles.grid}>
        
        {/* Left Column: Flow */}
        <div className={styles.flowColumn}>
          
          {/* Step 1: Information */}
          <section className={`${styles.step} ${step === 1 ? styles.activeStep : ''} ${step > 1 ? styles.completedStep : ''}`}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>1. Guest Information</h2>
              {step > 1 && <CheckCircle2 className={styles.checkIcon} size={20} />}
            </div>
            
            {step === 1 && (
              <div className={styles.stepContent}>
                <div className={styles.formGrid}>
                  <Input label="Email address" type="email" placeholder="Required for order updates" className={styles.fullWidth} />
                  <Input label="First name" type="text" />
                  <Input label="Last name" type="text" />
                  <Input label="Phone number" type="tel" className={styles.fullWidth} />
                </div>
                <Button variant="primary" size="lg" className={styles.nextBtn} onClick={() => setStep(2)}>
                  Continue to Delivery
                </Button>
              </div>
            )}
            {step > 1 && (
              <div className={styles.stepSummary}>
                <p>guest@architect.ng</p>
                <button className={styles.editBtn} onClick={() => setStep(1)}>Edit</button>
              </div>
            )}
          </section>

          {/* Step 2: Delivery */}
          <section className={`${styles.step} ${step === 2 ? styles.activeStep : ''} ${step > 2 ? styles.completedStep : ''}`}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>2. Delivery Method</h2>
              {step > 2 && <CheckCircle2 className={styles.checkIcon} size={20} />}
            </div>
            
            {step === 2 && estimate && (
              <div className={styles.stepContent}>
                 <div className={styles.deliveryPreview}>
                    <div className={styles.zoneSelectorWrapper} style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-secondary)'}}>Delivery Zone</label>
                      <select 
                        value={deliveryZone} 
                        onChange={handleZoneChange}
                        className={styles.zoneSelector}
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-subtle)', borderRadius: '4px', backgroundColor: 'var(--bg-canvas)' }}
                      >
                        <option value="LAGOS">Lagos Metropolitan Area</option>
                        <option value="ABUJA">Abuja & FCT</option>
                        <option value="NATIONWIDE">Rest of Nigeria</option>
                        <option value="UNSUPPORTED">International</option>
                      </select>
                    </div>

                    <div className={styles.methodCard}>
                      <div className={styles.methodInfo}>
                        <div className={styles.methodNameRow}>
                          <span className={styles.methodName}>
                            {estimate.method === 'WHITE_GLOVE' ? 'White-Glove Assembly' : 
                             estimate.method === 'CRATED' ? 'Secure Crated Delivery' : 'Bespoke Freight Quote'}
                          </span>
                          <Tooltip 
                            content={
                              estimate.method === 'WHITE_GLOVE' 
                                ? 'Our concierge team will deliver your pieces to your room of choice, assemble them, and remove all packaging materials.'
                                : estimate.method === 'CRATED'
                                ? 'Your pieces will arrive securely crated to your doorstep. You will be responsible for unboxing and any minor assembly required.'
                                : 'For custom orders or unsupported delivery zones, our logistics team will review your order and contact you with a dedicated freight quote.'
                            }
                          />
                        </div>
                        <div style={{ height: '4px' }} />
                        <span className={styles.methodDesc}>{estimate.message}</span>
                      </div>
                      <span className={styles.methodPrice}>
                        {estimate.isManualReview ? 'TBD' : `₦ ${estimate.cost.toLocaleString('en-NG')}`}
                      </span>
                    </div>
                 </div>
                 
                 {!estimate.isManualReview && (
                   <div className={styles.formGrid}>
                      <Input label="Street address" type="text" className={styles.fullWidth} />
                      <Input label="Apartment, suite, etc. (optional)" type="text" className={styles.fullWidth} />
                      <Input label="City" type="text" />
                      <Input label="State" type="text" defaultValue={deliveryZone === 'LAGOS' ? 'Lagos' : ''} />
                   </div>
                 )}

                <Button variant="primary" size="lg" className={styles.nextBtn} onClick={() => setStep(3)}>
                  Continue to Payment
                </Button>
              </div>
            )}
          </section>

          {/* Step 3: Payment */}
          <section className={`${styles.step} ${step === 3 ? styles.activeStep : ''}`}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>3. Secure Payment</h2>
            </div>
            {step === 3 && (
              <div className={styles.stepContent}>
                <div className={styles.paymentPlaceholder}>
                   <p className={styles.paymentText}>Paystack Hosted UI or Embedded Frame will render here.</p>
                </div>
                <Button variant="primary" size="lg" fullWidth className={styles.nextBtn} onClick={() => window.location.href = '/checkout/success'}>
                  Pay ₦{total.toLocaleString('en-NG')}
                </Button>
              </div>
            )}
          </section>

        </div>

        {/* Right Column: Summary */}
        <div className={styles.summaryColumn}>
          <div className={styles.summaryBox}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>
            
            <div className={styles.lineItemList}>
              {items.map((item) => (
                <div key={item.id} className={styles.lineItem}>
                  <div className={styles.itemImage}>
                    <ImageFrame src={item.imageUrl} alt={item.title} aspectRatio="square" width={100} height={100} />
                    <span className={styles.itemBadge}>{item.quantity}</span>
                  </div>
                  <div className={styles.itemMeta}>
                    <span className={styles.itemName}>{item.title}</span>
                    <span className={styles.itemSwatch}>{item.swatchName}</span>
                  </div>
                  <PriceBlock amount={item.price * item.quantity} size="sm" className={styles.itemPrice} />
                </div>
              ))}
            </div>

            <div className={styles.totals}>
              <div className={styles.totalRow}>
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString('en-NG')}</span>
              </div>
              <div className={styles.totalRow}>
                <span>Delivery</span>
                <span>
                  {step >= 2 
                    ? estimate?.isManualReview 
                      ? 'TBD' 
                      : `₦${deliveryFee.toLocaleString('en-NG')}` 
                    : 'Calculated next step'}
                </span>
              </div>
              <div className={`${styles.totalRow} ${styles.grandTotal}`}>
                <span>Total</span>
                {estimate?.isManualReview && step >= 2 ? (
                  <span>TBD</span>
                ) : (
                  <span>₦{(step >= 2 ? total : subtotal).toLocaleString('en-NG')}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
