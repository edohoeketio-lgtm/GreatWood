import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ProductTile } from '@/components/shared/ProductTile';
import Image from 'next/image';
import styles from './page.module.css';

export default function SpaceCollectionPage({ params }: { params: { slug: string } }) {
  const spaceName = params.slug === 'spaces' ? 'The Lagos Executive' : 
    params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  // Mock product data to populate the room
  const roomProducts = [
    {
      title: "The Noka Sofa",
      slug: "noka-sofa",
      price: 1850000,
      imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
      badge: "Flagship"
    },
    {
      title: "The Veda Coffee Table",
      slug: "veda-coffee-table",
      price: 640000,
      imageUrl: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Sola Chair",
      slug: "the-sola-chair",
      price: 320000,
      imageUrl: "/yellow-chair/Main.png",
      secondaryImageUrl: "/yellow-chair/hover.jpg",
      badge: "New"
    },
    {
      title: "Oatmeal Linen Pouf",
      slug: "linen-pouf",
      price: 240000,
      imageUrl: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className={styles.page}>
      {/* Hero Lookbook Image */}
      <section className={styles.hero}>
        <Image 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85&w=2880"
          alt={spaceName}
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{spaceName}</h1>
            <p className={styles.heroSubtitle}>
              A curated exploration of spatial harmony and restrained luxury, 
              designed to anchor the modern Nigerian home.
            </p>
          </div>
        </div>
      </section>

      <Container>
        {/* Curatorial Note */}
        <section className={styles.curatorNote}>
          <h2 className={styles.curatorTitle}>The Architectural Context</h2>
          <p className={styles.curatorText}>
            This space does not shout. We designed this collection to balance 
            the dense, grounding presence of Nigerian Mahogany with the breathable, 
            tactile warmth of Oatmeal Linen. The result is a room that feels both 
            deeply rooted and effortlessly contemporary.
          </p>
        </section>

        {/* Room Inventory */}
        <section className={styles.inventory}>
          <SectionHeader 
            title="Pieces in this Space"
            description="The individual foundations that construct the room."
            align="center"
          />
          <div style={{ marginTop: '3rem' }}>
            <div className={styles.grid}>
              {roomProducts.map(product => (
                <ProductTile 
                  key={product.slug}
                  title={product.title}
                  slug={product.slug}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  secondaryImageUrl={product.secondaryImageUrl}
                  badge={product.badge}
                />
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
