'use client';

import React, { useState } from 'react';
import { ImageFrame } from '../ui/ImageFrame';
import styles from './PDPGallery.module.css';

interface PDPGalleryProps {
  images: Array<{
    id: string;
    url: string;
    alt: string;
  }>;
}

export function PDPGallery({ images }: PDPGalleryProps) {
  // Photography Direction mandates a strictly curated 5-shot minimum.
  // Displayed as a stacked editorial feed on desktop, snap-scroll swipe on mobile.

  return (
    <div className={styles.gallery}>
      {/* Mobile thumbnails or dots could go here, but strategy prefers native scroll snapping */}
      <div className={styles.scrollContainer}>
        {images.map((img, index) => (
          <div key={img.id} className={styles.imageWrapper}>
            <ImageFrame
              src={img.url}
              alt={img.alt}
              aspectRatio="portrait"
              objectFit="cover"
              priority={index < 2} // Prioritize first two images for LCP
              width={1200}
              height={1500}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
