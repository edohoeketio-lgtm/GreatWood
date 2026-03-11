'use client';

import React, { useState } from 'react';
import styles from './SwatchSelector.module.css';

interface Swatch {
  id: string;
  name: string;
  colorHex?: string;
  imageUrl?: string;
}

interface SwatchSelectorProps {
  swatches: Swatch[];
  onSelect?: (swatch: Swatch) => void;
  size?: 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'square';
}

export function SwatchSelector({
  swatches,
  onSelect,
  size = 'md',
  shape = 'circle',
}: SwatchSelectorProps) {
  const [activeId, setActiveId] = useState<string>(swatches[0]?.id || '');

  const handleSelect = (swatch: Swatch) => {
    setActiveId(swatch.id);
    if (onSelect) onSelect(swatch);
  };

  return (
    <div className={styles.wrapper}>
      {swatches.map((swatch) => {
        const isActive = swatch.id === activeId;
        const swatchStyle = { backgroundColor: swatch.colorHex || '#EFECE5' };

        return (
          <button
            key={swatch.id}
            onClick={() => handleSelect(swatch)}
            className={[
              styles.swatch,
              styles[size],
              styles[shape],
              isActive ? styles.active : '',
            ].filter(Boolean).join(' ')}
            style={swatchStyle}
            aria-label={`Select material ${swatch.name}`}
            title={swatch.name} /* Basic tooltip */
          />
        );
      })}
    </div>
  );
}
