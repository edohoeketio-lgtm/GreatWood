import { Metadata } from 'next';
import Link from 'next/link';
import { Lock } from 'lucide-react';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Secure Checkout | Architect Furniture',
  description: 'Complete your purchase securely.',
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Checkout requires an "enclosed" layout—no global navigation or footer links 
  // that could distract from the conversion funnel.

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/shop" className={styles.backLink}>
            ← Return to Shop
          </Link>
          <div className={styles.logoWrapper}>
            <Link href="/" className={styles.logo}>Architect</Link>
          </div>
          <div className={styles.secureBadge}>
            <Lock size={14} strokeWidth={1.5} />
            <span>Secure Checkout</span>
          </div>
        </div>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Architect Furniture. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
