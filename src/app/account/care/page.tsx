import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import styles from '../../support/support.module.css';

export default function CareGuidesPage() {
  return (
    <div className={styles.page}>
      <Container>
        <SectionHeader 
          title="Care & Maintenance"
          description="Preserving the integrity of your pieces for generations."
          align="center"
        />
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h3 className={styles.title}>Solid Hardwoods</h3>
            <p className={styles.text}>
              Real wood breathes and responds to its environment. Prevent excessive drying by keeping pieces away from direct heat vents or prolonged, direct intense sunlight. Dust weekly with a dry microfiber cloth. Avoid silicone-based aerosol polishes entirely, as they damage the natural finish.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.title}>Upholstery & Linens</h3>
            <p className={styles.text}>
              Vacuum fabrics regularly using an upholstery attachment to prevent dust from settling into the weave. For spills, blot immediately with a clean, un-dyed cloth. Do not aggressively rub the fibers. Professional dry-cleaning is strictly required for deeper maintenance.
            </p>
          </section>
          
          <section className={styles.section}>
            <h3 className={styles.title}>Saddle Leather</h3>
            <p className={styles.text}>
              Our full-grain leathers are designed to age. Simply wipe with a slightly damp cloth to remove dust. A high-quality, natural leather conditioner should be applied twice a year to maintain suppleness and prevent cracking.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
