import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function CustomOrdersPage() {
  return (
    <div className={styles.page}>
      <Container>
        {/* Hero Section */}
        <section className={styles.hero}>
          <SectionHeader 
            title="Bespoke Commission"
            description="Collaborate with our artisans to tailor dimensions, materials, or entirely new silhouettes for your space."
            align="center"
          />
          <p className={styles.introText}>
            We recognize that some architectural spaces demand exactness beyond a standard catalog. 
            Our bespoke program pairs you directly with our design and engineering team in Lagos 
            to manifest your precise vision—whether it's extending a dining table to seat fourteen 
            or sourcing a specific grade of Italian bouclé.
          </p>
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <SectionHeader title="The Commission Process" align="center" />
          <Grid columns={3} className={styles.processGrid}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>01</span>
              <h3 className={styles.stepTitle}>Consultation</h3>
              <p className={styles.stepDesc}>
                Submit your vision below. Our interior specialists will contact you within 48 hours to discuss spatial constraints, timeline, and material provenance.
              </p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>02</span>
              <h3 className={styles.stepTitle}>Draft & Exacting</h3>
              <p className={styles.stepDesc}>
                We develop technical drawings and provide physical material swatches for your approval, ensuring zero ambiguity in scale or texture.
              </p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>03</span>
              <h3 className={styles.stepTitle}>Fabrication & White-Glove</h3>
              <p className={styles.stepDesc}>
                Upon approving the engineering blueprint and a required 50% deposit, production begins. The finished piece is delivered and installed by our internal logistics team.
              </p>
            </div>
          </Grid>
        </section>
        
        {/* Form Section */}
        <section className={styles.formSection}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Initiate a Project</h2>
            <p className={styles.formDesc}>
              Provide initial details to begin the dialogue.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.formRow}>
              <Input label="First Name" />
              <Input label="Last Name" />
            </div>
            <Input label="Email Address" type="email" />
            <Input label="Phone Number (Optional)" type="tel" />
            
            <div className={styles.textAreaContainer}>
              <label className={styles.label}>Project Vision</label>
              <textarea 
                rows={5}
                className={styles.textarea}
                placeholder="Describe your requirements, dimensions, or the specific architectural piece you wish to customize..."
              />
            </div>

            <Button variant="primary" size="lg" className={styles.submitBtn}>
              Request Consultation
            </Button>
          </form>
        </section>
      </Container>
    </div>
  );
}
