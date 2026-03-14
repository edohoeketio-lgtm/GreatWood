import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ProductTile } from '@/components/shared/ProductTile';
import Image from 'next/image';
import styles from './page.module.css';
import { getSpace } from '@/lib/cms/spacesMock';
import { getShopifyProducts } from '@/lib/cms/shopifyMock';
import { getSanityProduct } from '@/lib/cms/sanityMock';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const space = await getSpace(resolvedParams.slug);
  
  if (!space) return { title: 'Space Not Found' };

  return {
    title: `${space.title} | GreatWood Spaces`,
    description: space.subtitle
  };
}

export default async function SpaceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const space = await getSpace(resolvedParams.slug);

  if (!space) {
    notFound();
  }

  const allShopifyProducts = await getShopifyProducts();

  // Enrich the products that belong to this space
  const roomProducts = await Promise.all(
    space.productHandles.map(async (handle) => {
      const shopifyProd = allShopifyProducts.find((p) => p.handle === handle);
      if (!shopifyProd) return null;

      const sanityData = await getSanityProduct(handle).catch(() => null);

      return {
        id: shopifyProd.id,
        slug: shopifyProd.handle,
        title: shopifyProd.title,
        price: shopifyProd.price,
        imageUrl: shopifyProd.featuredImageUrl,
        secondaryImageUrl: shopifyProd.secondaryImageUrl,
        badge: shopifyProd.title.includes('Table') ? 'Custom Order' : undefined,
        swatches: shopifyProd.variants.map((v: any, i: number) => {
          const sanitySwatch = sanityData?.swatches?.find((s) => s.name === v.title);
          return {
            id: `${shopifyProd.id}-s${i}`,
            name: v.title,
            colorHex: sanitySwatch?.colorHex || '#E5E0D8',
            tileImageUrl: v.imageUrl,
            tileHoverUrl: v.hoverImageUrl,
          };
        }),
      };
    })
  );

  const validRoomProducts = roomProducts.filter(Boolean) as any[];

  return (
    <main className={styles.page}>
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
            <p className={styles.heroSubtitle}>{space.subtitle}</p>
          </div>
        </div>
      </section>

      <Container>
        {/* Curatorial Note */}
        <section className={styles.curatorNote}>
          <h2 className={styles.curatorTitle}>The Architectural Context</h2>
          <p className={styles.curatorText}>{space.description}</p>
        </section>

        {/* Space Gallery */}
        {space.gallery && space.gallery.length > 0 && (
          <section className={styles.gallery}>
            {space.gallery.map((img) => (
              <div key={img.id} className={styles.galleryImageWrapper}>
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.galleryImage}
                />
              </div>
            ))}
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
              {validRoomProducts.map(product => (
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
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
