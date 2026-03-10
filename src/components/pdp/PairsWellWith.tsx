import React from 'react';
import { ProductTile } from '../shared/ProductTile';
import { SectionHeader } from '../shared/SectionHeader';
import styles from './PairsWellWith.module.css';

interface RelatedProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  imageUrl: string;
  badge?: string;
  swatches?: Array<{ id: string; name: string; colorHex?: string; imageUrl?: string }>;
}

interface PairsWellWithProps {
  products: RelatedProduct[];
}

export function PairsWellWith({ products }: PairsWellWithProps) {
  if (!products || products.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <SectionHeader 
        title="Pairs Well With" 
        description="Complementary pieces designed to anchor the same spatial narrative."
        align="left"
      />
      
      <div className={styles.scrollContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.item}>
            <ProductTile
              title={product.title}
              slug={product.slug}
              price={product.price}
              imageUrl={product.imageUrl}
              swatches={product.swatches}
              badge={product.badge}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
