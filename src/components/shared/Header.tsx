'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Container } from '../layout/Container';
import { useUI } from '../../lib/context/UIContext';
import { useCartStore } from '../../lib/store/cartStore';
import styles from './Header.module.css';

export function Header() {
  const { toggleCart, toggleSearch } = useUI();
  const { items } = useCartStore();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItemCount = items.reduce((total: number, item: any) => total + item.quantity, 0);

  // Hide global header on secure checkout pages
  if (pathname.startsWith('/checkout')) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Container className={styles.inner}>
        {/* Mobile Menu Toggle */}
        <button className={styles.mobileToggle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          GreatWood
        </Link>

        {/* Desktop Nav */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/shop" className={styles.navLink}>Shop</Link>
          <Link href="/spaces" className={styles.navLink}>Spaces</Link>
          <Link href="/custom-orders" className={styles.navLink}>Bespoke</Link>
        </nav>

        {/* Utility Nav */}
        <div className={styles.utils}>
          <button onClick={toggleSearch} className={styles.iconButton} aria-label="Search">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button onClick={toggleCart} className={styles.iconButton} aria-label="Cart">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className={styles.cartBadge}>{cartItemCount}</span>
          </button>
        </div>
      </Container>
    </header>
  );
}
