'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ImageFrame } from '../ui/ImageFrame';
import { PriceBlock } from './PriceBlock';
import { SwatchSelector } from './SwatchSelector';
import { Badge } from '../ui/Badge';
import styles from './ProductTile.module.css';

interface SwatchData {
  id: string;
  name: string;
  colorHex?: string;
  imageUrl?: string;
  tileImageUrl?: string;
  tileHoverUrl?: string;
}

interface ProductTileProps {
  title: string;
  slug: string;
  price: number;
  imageUrl: string;
  secondaryImageUrl?: string;
  swatches?: SwatchData[];
  badge?: string;
}

export function ProductTile({
  title,
  slug,
  price,
  imageUrl,
  secondaryImageUrl,
  swatches = [],
  badge,
}: ProductTileProps) {
  const [activeImage, setActiveImage] = useState(imageUrl);
  const [activeHover, setActiveHover] = useState(secondaryImageUrl);

  const handleSwatchSelect = (swatch: SwatchData) => {
    if (swatch.tileImageUrl) {
      setActiveImage(swatch.tileImageUrl);
    }
    if (swatch.tileHoverUrl) {
      setActiveHover(swatch.tileHoverUrl);
    } else {
      setActiveHover(undefined);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Link href={`/product/${slug}`} className={styles.imageLink}>
        <div className={styles.imageWrapper} data-has-secondary={!!activeHover}>
          <ImageFrame
            src={activeImage}
            alt={title}
            aspectRatio="portrait"
            width={600}
            height={750}
          />
          {activeHover && (
            <div className={styles.secondaryOverlay}>
              <ImageFrame
                src={activeHover}
                alt={`${title} hover`}
                aspectRatio="portrait"
                width={600}
                height={750}
              />
            </div>
          )}
          {badge && (
            <div className={styles.badgeWrapper}>
              <Badge variant={badge === 'Custom Order' ? 'warning' : 'neutral'}>
                {badge}
              </Badge>
            </div>
          )}
        </div>
      </Link>
      
      <div className={styles.details}>
        <div className={styles.titleRow}>
          <Link href={`/product/${slug}`} className={styles.title}>
            {title}
          </Link>
          <PriceBlock amount={price} size="md" />
        </div>
        
        {swatches.length > 0 && (
          <div className={styles.swatchRow}>
            <SwatchSelector swatches={swatches} size="sm" onSelect={handleSwatchSelect} />
            <span className={styles.swatchCount}>{swatches.length} finishes available</span>
          </div>
        )}
      </div>
    </div>
  );
}
