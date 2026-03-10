'use client';

import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  categories: string[];
  totalResults: number;
}

export function FilterBar({ categories, totalResults }: FilterBarProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollContainer}>
        <div className={styles.categories}>
          <button
            className={`${styles.categoryBtn} ${activeCategory === 'All' ? styles.active : ''}`}
            onClick={() => setActiveCategory('All')}
          >
            All Collections
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <span className={styles.resultsCount}>{totalResults} pieces</span>
        <Button variant="ghost" size="sm" className={styles.filterBtn}>
          <SlidersHorizontal size={16} strokeWidth={1.5} />
          Filter
        </Button>
        <Button variant="ghost" size="sm" className={styles.sortBtn}>
          Sort By
          <ChevronDown size={16} strokeWidth={1.5} />
        </Button>
      </div>
    </div>
  );
}
