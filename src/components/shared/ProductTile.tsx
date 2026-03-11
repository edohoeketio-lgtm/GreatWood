import React from 'react';
import Link from 'next/link';
import { ImageFrame } from '../ui/ImageFrame';
import { PriceBlock } from './PriceBlock';
import { SwatchSelector } from './SwatchSelector';
import { Badge } from '../ui/Badge';
import styles from './ProductTile.module.css';

interface ProductTileProps {
  title: string;
  slug: string;
  price: number;
  imageUrl: string;
  secondaryImageUrl?: string;
  swatches?: Array<{ id: string; name: string; colorHex?: string; imageUrl?: string }>;
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
  return (
    <div className={styles.wrapper}>
      <Link href={`/product/${slug}`} className={styles.imageLink}>
        <div className={styles.imageWrapper} data-has-secondary={!!secondaryImageUrl}>
          {/* Primary image — stays in normal flow, provides height */}
          <ImageFrame
            src={imageUrl}
            alt={title}
            aspectRatio="portrait"
            width={600}
            height={750}
          />
          {/* Secondary image — wrapped in an absolutely-positioned overlay */}
          {secondaryImageUrl && (
            <div className={styles.secondaryOverlay}>
              <ImageFrame
                src={secondaryImageUrl}
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
            <SwatchSelector swatches={swatches} size="sm" />
            <span className={styles.swatchCount}>{swatches.length} finishes available</span>
          </div>
        )}
      </div>
    </div>
  );
}
