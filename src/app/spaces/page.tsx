import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { getAllSpaces } from '@/lib/cms/spacesMock';

export default async function SpacesIndexPage() {
  const spaces = await getAllSpaces();

  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.headerArea}>
          <SectionHeader 
            title="Curated Spaces"
            description="Explore our vision of spatial harmony. Complete rooms, carefully composed with our flagship pieces."
            align="center"
          />
        </div>

        <div className={styles.spacesGrid}>
          {spaces.map((space) => (
            <Link key={space.slug} href={`/spaces/${space.slug}`} className={styles.spaceCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={space.heroImageUrl}
                  alt={space.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className={styles.overlay}>
                  <span className={styles.exploreText}>Explore Space</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{space.title}</h3>
                <p className={styles.subtitle}>{space.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
