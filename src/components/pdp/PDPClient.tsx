'use client';

import React, { useState, useMemo } from 'react';
import { PDPGallery } from './PDPGallery';
import { BuyBox } from './BuyBox';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import styles from './PDPClient.module.css';

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

interface PDPClientProps {
  defaultGallery: GalleryImage[];
  variantGalleries?: Record<string, GalleryImage[]>;
  product: {
    id: string;
    title: string;
    description: string;
    price: number;
    badge?: string;
    swatches: Array<{ id: string; name: string; colorHex?: string; imageUrl?: string }>;
  };
  deliveryMessage: string;
  careGuide: string;
}

export function PDPClient({
  defaultGallery,
  variantGalleries,
  product,
  deliveryMessage,
  careGuide,
}: PDPClientProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    product.swatches[0]?.id || ''
  );

  const activeGallery = useMemo(() => {
    if (variantGalleries && variantGalleries[selectedVariantId]) {
      return variantGalleries[selectedVariantId];
    }
    return defaultGallery;
  }, [selectedVariantId, variantGalleries, defaultGallery]);

  const handleSwatchChange = (swatch: { id: string; name: string; colorHex?: string; imageUrl?: string }) => {
    setSelectedVariantId(swatch.id);
  };

  return (
    <>
      {/* Gallery / Left Column */}
      <div className={styles.galleryColumn}>
        <PDPGallery images={activeGallery} />
      </div>

      {/* Details / Right Column (Sticky) */}
      <div className={styles.buyColumn}>
        <div className={styles.buyBoxSticky}>
          <BuyBox product={product} onSwatchChange={handleSwatchChange} />
          
          {/* Contextual Accordions */}
          <div className={styles.accordions}>
            <Accordion title="Delivery & Assembly">
              <p style={{ marginBottom: '1rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                {deliveryMessage}
              </p>
              <p>
                Calculated for Lagos. Extended rates and timelines apply to other regions. Our dedicated logistics team will unbox, assemble, and remove all packaging materials.
              </p>
            </Accordion>
            <Accordion title="Care Instructions">
              {careGuide}
            </Accordion>
          </div>
          
          {/* Concierge CTA */}
          <div className={styles.conciergeBox}>
            <p className={styles.conciergeText}>
              Need spatial planning advice or material samples? Our design team is available to assist.
            </p>
            <Button variant="ghost" className={styles.conciergeBtn}>
              Speak to a Consultant
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
