'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '../layout/Container';
import { Grid } from '../layout/Grid';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import styles from './Footer.module.css';

export function Footer() {
  const pathname = usePathname();
  
  // Hide global footer on secure checkout pages
  if (pathname.startsWith('/checkout')) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <Container>
        <Grid columns={4} className={styles.grid}>
          {/* Brand & Newsletter */}
          <div className={styles.brandCol}>
            <h2 className={styles.logo}>GreatWood</h2>
            <p className={styles.tagline}>The Architect of Confident Spaces.</p>
            <div className={styles.newsletter}>
              <p className={styles.newsletterText}>Receive highly curated interior inspiration.</p>
              <form className={styles.form}>
                <Input type="email" placeholder="Email address" className={styles.inputInner} />
                <Button variant="secondary" size="sm">Subscribe</Button>
              </form>
            </div>
          </div>

          {/* Shop */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Shop</h3>
            <Link href="/shop?category=sofas" className={styles.link}>Sofas</Link>
            <Link href="/shop?category=tables" className={styles.link}>Tables</Link>
            <Link href="/shop?category=storage" className={styles.link}>Storage</Link>
            <Link href="/custom-orders" className={styles.link}>Bespoke</Link>
          </div>

          {/* Support */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Support</h3>
            <Link href="/support/delivery-and-assembly" className={styles.link}>Delivery & Assembly</Link>
            <Link href="/support/warranty-and-returns" className={styles.link}>Warranty & Returns</Link>
            <Link href="/support/faq" className={styles.link}>FAQ</Link>
            <Link href="/support/consultation" className={styles.link}>Design Consultation</Link>
          </div>

          {/* Legal */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Legal</h3>
            <Link href="/terms" className={styles.link}>Terms of Service</Link>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            <Link href="/materials" className={styles.link}>Material Provenance</Link>
          </div>
        </Grid>
        
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} GreatWood Furniture. Crafted in Lagos, Nigeria.</p>
        </div>
      </Container>
    </footer>
  );
}
