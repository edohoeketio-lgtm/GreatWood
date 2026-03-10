import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  title,
  description,
  ctaText,
  ctaLink,
  align = 'left',
}: SectionHeaderProps) {
  const alignClass = styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}`];

  return (
    <div className={`${styles.wrapper} ${alignClass}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      
      {ctaText && ctaLink && (
        <Link href={ctaLink} className={styles.cta}>
          {ctaText}
          <ArrowRight size={16} strokeWidth={1.5} className={styles.ctaIcon} />
        </Link>
      )}
    </div>
  );
}
