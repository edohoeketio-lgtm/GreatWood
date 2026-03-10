import React from 'react';
import styles from './PriceBlock.module.css';

interface PriceBlockProps {
  amount: number;
  compareAtAmount?: number;
  currency?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function PriceBlock({
  amount,
  compareAtAmount,
  currency = '₦',
  className = '',
  size = 'md',
}: PriceBlockProps) {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('en-NG').format(value);
  };

  const wrapperClasses = [styles.wrapper, styles[size], className].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      {compareAtAmount && (
        <span className={styles.compareAt}>
          {currency} {formatPrice(compareAtAmount)}
        </span>
      )}
      <span className={styles.current}>
        {currency} {formatPrice(amount)}
      </span>
    </div>
  );
}
