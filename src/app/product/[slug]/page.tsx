import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PDPClient } from '@/components/pdp/PDPClient';
import { DimensionsModule } from '@/components/pdp/DimensionsModule';
import { PairsWellWith } from '@/components/pdp/PairsWellWith';
import { TrustSignals } from '@/components/shared/TrustSignals';
import { calculateDelivery } from '@/lib/utils/delivery';
import { getSanityProduct } from '@/lib/cms/sanityMock';
import styles from './page.module.css';

// MOCK_RELATED left here until Sanity handles recommendations
const MOCK_RELATED = [
  {
    id: '2',
    slug: 'veda-coffee-table',
    title: 'Veda Coffee Table',
    price: 450000,
    imageUrl: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '5',
    slug: 'luna-accent-chair',
    title: 'Luna Accent Chair',
    price: 320000,
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=600'
  }
];

// Ensure this component can accept Next.js Page Props
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await getSanityProduct(resolvedParams.slug);

  return {
    title: `${product.title} | Architect Furniture`,
    description: product.editorialDescription
  };
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = await getSanityProduct(resolvedParams.slug);

  const deliveryPreview = calculateDelivery('LAGOS', [
    {
      isMadeToOrder: true,
      baseLeadTimeDays: 14,
      maxLeadTimeDays: 21,
      requiresWhiteGlove: true,
      isCustomMaterial: false
    }
  ]);

  const unifiedProduct = {
    id: product.shopifyHandle,
    title: product.title,
    description: product.editorialDescription,
    price: 1250000,
    badge: 'In Stock',
    swatches: product.swatches.map(s => ({
      id: s.shopifyVariantId,
      name: s.name,
      colorHex: s.colorHex
    }))
  };

  return (
    <main className={styles.main}>
      <Container className={styles.topSection}>
        <PDPClient
          defaultGallery={product.gallery}
          variantGalleries={product.variantGalleries}
          product={unifiedProduct}
          deliveryMessage={deliveryPreview.message}
          careGuide={product.careGuide}
        />
      </Container>

      {/* Trust Protocol */}
      <section className={styles.trustSection}>
        <Container>
          <TrustSignals />
        </Container>
      </section>

      {/* Blueprint & Materials */}
      <section className={styles.dimensionsSection}>
        <Container>
          <DimensionsModule 
            blueprintUrl={product.blueprintUrl}
            dimensions={product.dimensions}
            materials={product.materials}
          />
        </Container>
      </section>

      {/* Cross-Sell */}
      <section className={styles.relatedSection}>
        <Container>
          <PairsWellWith products={MOCK_RELATED} />
        </Container>
      </section>
    </main>
  );
}
