import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import styles from '../support.module.css';

export default function FAQPage() {
  return (
    <div className={styles.page}>
      <Container>
        <SectionHeader 
          title="Frequently Asked Questions"
          description="Answers regarding ordering, production timelines, and care."
          align="center"
        />
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h3 className={styles.title}>Are items in stock or made to order?</h3>
            <p className={styles.text}>
              Select flagship pieces are held in limited quantities within our Lagos facility. However, to ensure absolute artisan quality and minimize waste, the majority of our collection is proudly crafted to order based on your specific material selections.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.title}>Do you ship internationally?</h3>
            <p className={styles.text}>
              Currently, our standard logistics network supports all Nigerian states via White-Glove installation (Lagos/Abuja) or Nationwide Crated Freight. International ocean and air freight quotes can be requested via our Bespoke channel on a case-by-case basis.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.title}>Can I change my order after placing it?</h3>
            <p className={styles.text}>
              Because production scheduling begins immediately, order modifications or cancellations are only accepted within 24 hours of placing the order. After this window, materials are cut and allocated specifically to your commission.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
