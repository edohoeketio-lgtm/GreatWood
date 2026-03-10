import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/Button';
import styles from '../support.module.css';

export default function ConsultationPage() {
  return (
    <div className={styles.page}>
      <Container>
        <SectionHeader 
          title="Design Consultation"
          description="Curate the perfect atmosphere with our interior specialists."
          align="center"
        />
        
        <div className={styles.content} style={{ textAlign: 'center' }}>
          <section className={styles.section}>
            <p className={styles.text}>
              Whether you are furnishing a single room or developing an entire architectural project, our consultation team provides spatial planning, material curation, and bespoke timeline management.
            </p>
            <p className={styles.text} style={{ marginBottom: '3rem' }}>
              Sessions are available virtually or in-person at our Lagos studio.
            </p>
            <Button variant="primary" size="lg">Schedule a Session</Button>
          </section>
        </div>
      </Container>
    </div>
  );
}
