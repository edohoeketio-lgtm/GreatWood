import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import styles from '../support.module.css';

export default function WarrantyPage() {
  return (
    <div className={styles.page}>
      <Container>
        <SectionHeader 
          title="Warranty & Returns"
          description="Enduring quality, unconditionally guaranteed."
          align="center"
        />
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h3 className={styles.title}>The Five-Year Structural Guarantee</h3>
            <p className={styles.text}>
              Every Architect piece is built to last a lifetime. We proudly offer a comprehensive 5-year warranty covering any structural failures, joinery defects, or material compromises under normal residential use.
            </p>
            <p className={styles.text}>
              If a structural issue arises, our team will either repair the piece on-site (if located in our primary zones) or arrange for a complete replacement.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.title}>What Is Not Covered</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Expected patination and aging of natural materials (leather, raw brass, solid wood).</li>
              <li className={styles.listItem}>Accidental damage, spills, or improper cleaning methods.</li>
              <li className={styles.listItem}>Pieces deployed in heavy-use commercial environments, unless specifically commissioned as commercial-grade.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.title}>Our Return Policy</h3>
            <p className={styles.text}>
              Because the majority of our collection is crafted to order based on your specific material and dimension selections, we do not accept arbitrary returns. If a piece arrives damaged or structurally flawed, it falls entirely under our structural guarantee for immediate resolution.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
