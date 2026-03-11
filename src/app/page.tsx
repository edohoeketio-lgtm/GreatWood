import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { TrustSignals } from '@/components/shared/TrustSignals';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ProductTile } from '@/components/shared/ProductTile';
import styles from './page.module.css';
import Link from 'next/link';
import { getShopifyProducts } from '@/lib/cms/shopifyMock';

export default async function Home() {
  const allProducts = await getShopifyProducts();
  const featuredProducts = allProducts.slice(0, 3).map(product => ({
    id: product.id,
    slug: product.handle,
    title: product.title,
    price: product.price,
    imageUrl: product.featuredImageUrl,
    secondaryImageUrl: product.secondaryImageUrl,
    badge: product.title.includes('Table') ? 'Custom Order' : undefined,
    swatches: product.variants.map((v, i) => ({
      id: `${product.id}-s${i}`,
      name: v.title,
      colorHex: v.title === 'Yellow Ochre' ? '#Edb442' 
        : v.title === 'Blue Velvet' ? '#4A6FA5' 
        : v.title === 'Walnut' ? '#5C4033'
        : '#E5E0D8'
    }))
  }));
  return (
    <main className={styles.main}>
        {/* Editoral Hero */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}>
            <Container>
              <h1 className={styles.heroTitle}>Beautifully<br/>Certain.</h1>
              <p className={styles.heroSub}>
                Premium, design-led furniture for the modern Nigerian home. 
                Uncompromising craftsmanship met with radical operational reliability.
              </p>
              <Link href="/shop" className={styles.heroCta}>Explore the Collection</Link>
            </Container>
          </div>
        </section>

        {/* Brand Promise / Trust Signals */}
        <TrustSignals />

        {/* Featured Assortment */}
        <section className={styles.featuredSection}>
          <Container>
            <SectionHeader 
              title="Curated Assortment" 
              description="Pieces designed to anchor your space."
              ctaText="View All Seating"
              ctaLink="/shop/seating"
            />
            <Grid columns={3}>
              {featuredProducts.map((product) => (
                <ProductTile
                  key={product.id}
                  title={product.title}
                  slug={product.slug}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  secondaryImageUrl={product.secondaryImageUrl}
                  swatches={product.swatches}
                  badge={product.badge}
                />
              ))}
            </Grid>
          </Container>
        </section>
        
        {/* Editorial Story Block */}
        <section className={styles.storySection}>
          <Container>
            <Grid columns={2} className={styles.storyGrid}>
              <div className={styles.storyImagePlaceholder}>
                <span className={styles.storyLabel}>Macro Craftsmanship Shot (WebP)</span>
              </div>
              <div className={styles.storyContent}>
                <h2 className={styles.storyTitle}>Visual Evidence Over Empty Claims.</h2>
                <p className={styles.storyText}>
                  We do not rely on generic language. We prove quality through macro material shots, 
                  joinery detail, and exact dimension diagrams. You will know exactly what is arriving 
                  at your door.
                </p>
                <Link href="/materials" className={styles.linkUnderline}>Explore our Materials</Link>
              </div>
            </Grid>
          </Container>
        </section>

      </main>
  );
}
