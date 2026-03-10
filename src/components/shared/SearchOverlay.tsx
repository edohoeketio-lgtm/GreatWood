'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useUI } from '../../lib/context/UIContext';
import { Container } from '../layout/Container';
import styles from './SearchOverlay.module.css';

export function SearchOverlay() {
  const { isSearchOpen, toggleSearch } = useUI();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
      // Auto-focus after animation
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
  }, [isSearchOpen]);

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
        >
          <Container className={styles.inner}>
            <div className={styles.searchHeader}>
              <div className={styles.inputWrapper}>
                <Search size={24} strokeWidth={1.5} className={styles.searchIcon} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for pieces, materials, or spaces..."
                  className={styles.input}
                  aria-label="Search"
                />
              </div>
              <button onClick={toggleSearch} className={styles.closeButton} aria-label="Close search">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className={styles.suggestions}>
              <h3 className={styles.suggestionsTitle}>Trending Searches</h3>
              <div className={styles.pillGroup}>
                <button className={styles.suggestionPill}>Linen Sofas</button>
                <button className={styles.suggestionPill}>Solid Teak Dining Tables</button>
                <button className={styles.suggestionPill}>Accent Chairs</button>
                <button className={styles.suggestionPill}>Media Consoles</button>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
