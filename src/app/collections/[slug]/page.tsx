import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ProductTile } from '@/components/shared/ProductTile';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getSpace } from '@/lib/cms/spacesMock';
import { getShopifyProducts } from '@/lib/cms/shopifyMock';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SpaceCollectionPage({ params }: PageProps) {
  const resolvedParams = await params;
  const space = await getSpace(resolvedParams.slug);

  if (!space) {
    notFound();
  }

  // Fetch all shopify products and filter based on the space's product handles
  const allProducts = await getShopifyProducts();
  const roomProducts = space.productHandles
    .map(handle => allProducts.find(p => p.handle === handle))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .map(product => ({
      id: product.id,
      slug: product.handle,
      title: product.title,
      price: product.price,
      imageUrl: product.featuredImageUrl,
      secondaryImageUrl: product.secondaryImageUrl,
      badge: product.title.includes('Table') ? 'Custom Order' : product.title.includes('Mara') ? 'In Stock' : undefined,
      swatches: product.variants.map((v, i) => ({
        id: `${product.id}-s${i}`,
        name: v.title,
      }))
    }));

  return (
    <div className={styles.page}>
      {/* Hero Lookbook Image */}
      <section className={styles.hero}>
        <Image 
          src={space.heroImageUrl}
          alt={space.title}
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{space.title}</h1>
            <p className={styles.heroSubtitle}>
              {space.subtitle}
            </p>
          </div>
        </div>
      </section>

      <Container>
        {/* Curatorial Note */}
        <section className={styles.curatorNote}>
          <h2 className={styles.curatorTitle}>The Architectural Context</h2>
          <p className={styles.curatorText}>
            {space.description}
          </p>
        </section>

        {/* Spatial Narrative Gallery */}
        {space.gallery && space.gallery.length > 0 && (
          <section className={styles.gallerySection}>
            <div className={styles.masonryGallery}>
              {space.gallery.map((image, index) => (
                <div key={image.id} className={`${styles.galleryItem} ${index === 0 ? styles.galleryItemLarge : ''}`}>
                  <Image 
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.galleryImage}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

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
                  swatches={product.swatches}
                />
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
