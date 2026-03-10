import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import styles from '../support/support.module.css';

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <Container>
        <SectionHeader 
          title="Terms of Service"
          description="The operational framework governing our relationship with you."
          align="center"
        />
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h3 className={styles.title}>1. Acceptance of Terms</h3>
            <p className={styles.text}>
              By engaging our bespoke services or purchasing our collection directly through this platform, you agree to these fundamental operational guidelines. We operate on a foundation of mutual aesthetic and operational respect.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.title}>2. Lead Times and Production</h3>
            <p className={styles.text}>
              Lead times provided at checkout are expert estimates based on current supply chain capacity. We prioritize absolute material quality over speed. By placing an order, you accept that minor variances in the delivery window may occur, which we will strictly and proactively communicate.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.title}>3. Bespoke Commission Deposits</h3>
            <p className={styles.text}>
              Custom orders require a non-refundable 50% deposit before fabrication begins. This secures the raw materials and the time of our engineering team in Lagos.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
