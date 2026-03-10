import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import styles from '../support.module.css';

export default function DeliveryAndAssemblyPage() {
  return (
    <div className={styles.page}>
      <Container>
        <SectionHeader 
          title="Delivery & Assembly"
          description="Logistics designed with the same care as our furniture."
          align="center"
        />
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h3 className={styles.title}>White-Glove Installation</h3>
            <p className={styles.text}>
              For clients in Lagos and Abuja, our dedicated logistics team hand-delivers, fully inspects, and precisely installs your pieces within your home. The experience is designed to be completely frictionless.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Scheduled delivery windows with strict adherence to timing.</li>
              <li className={styles.listItem}>Full placement and architectural alignment within your space.</li>
              <li className={styles.listItem}>Complete removal and recycling of all packaging materials.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.title}>Nationwide Crated Freight</h3>
            <p className={styles.text}>
              For orders outside our primary zones, pieces are suspended and secured in custom-built timber crating to guarantee zero-transit damage. We partner with specialized freight networks to ensure the piece arrives in the exact condition it left our Lagos facility.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.title}>Production & Dispatch Timelines</h3>
            <p className={styles.text}>
              Because we craft to order to minimize waste and ensure quality, standard lead times range from 14 to 28 days depending on material availability. You will receive active tracking updates at every major production milestone.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
