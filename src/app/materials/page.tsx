import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Grid } from '@/components/layout/Grid';
import styles from './page.module.css';

export default function MaterialsPage() {
  const materials = [
    { 
      title: 'Nigerian Mahogany', 
      desc: 'Sourced from managed forests in Cross River, our primary hardwood is kiln-dried for six months to ensure absolute structural stability before it reaches the workshop floor. It offers a dense, reassuring weight.' 
    },
    { 
      title: 'Oatmeal Linen', 
      desc: 'A heavy-weight, breathable weave selected for its tactile warmth and resistance to tropical humidity. Rated at 45,000 double rubs, it is engineered for the rigors of daily life without compromising its soft hand-feel.' 
    },
    { 
      title: 'Saddle Leather', 
      desc: 'Full-grain hides that develop a distinct, personal patina over years of daily interaction. We avoid heavy top-coats, allowing the natural grain and subtle imperfections of the hide to remain visible as a mark of authenticity.' 
    },
    { 
      title: 'Powder-Coated Steel', 
      desc: 'Used for structural bases and hidden joinery. Our heavy-gauge steel is sandblasted and powder-coated to prevent oxidation, ensuring permanent structural rigidity.' 
    },
    { 
      title: 'High-Resilience Foam', 
      desc: 'A multi-layered 35kg density foam core provides the structural architectural shape of our cushions, wrapped in a softer Dacron layer for immediate surface comfort.' 
    },
    { 
      title: 'Travertine & Marble', 
      desc: 'Hand-selected slabs featuring unique, unrepeatable veining. We prefer a honed, matte finish over high-gloss to maintain a quiet, tactile relationship with the stone.' 
    }
  ];

  return (
    <div className={styles.page}>
      <Container>
        <section className={styles.hero}>
          <SectionHeader 
            title="Material Provenance"
            description="Honest sourcing. Enduring quality. The foundation of everything we build."
            align="center"
          />
          <p className={styles.introText}>
            We do not use veneers, particle board, or synthetic leather substitutes. 
            Our commitment is to natural materials that age gracefully, developing 
            character the longer they live in your home.
          </p>
        </section>
        
        <Grid columns={3} className={styles.grid}>
          {materials.map(material => (
            <div key={material.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{material.title}</h3>
              <p className={styles.cardDesc}>{material.desc}</p>
            </div>
          ))}
        </Grid>
        
        <div className={styles.footerNote}>
          <p>Detailed acoustic, thermal, and durability specs are available for all materials upon request.</p>
        </div>
      </Container>
    </div>
  );
}
