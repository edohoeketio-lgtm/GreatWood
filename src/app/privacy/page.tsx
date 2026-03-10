import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import styles from '../support/support.module.css';

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <Container>
        <SectionHeader 
          title="Privacy Policy"
          description="Total respect for your data and inbox architecture."
          align="center"
        />
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h3 className={styles.title}>Data Minimization</h3>
            <p className={styles.text}>
              We only collect data strictly necessary to fulfill your architectural commissions and facilitate secure delivery logistics. Your data is absolutely never sold to or shared with third-party marketing networks.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.title}>Payment Security</h3>
            <p className={styles.text}>
              All direct payment gateways adhere to the rigorous standards set by PCI-DSS. We do not store, nor do we have access to, your raw credit card or bank routing information on our servers.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.title}>Communication Etiquette</h3>
            <p className={styles.text}>
              Our communications are restrained. If you opt into our newsletter, you will receive updates on new collections and editorial features. We do not send daily promotional emails.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
