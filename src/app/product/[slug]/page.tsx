import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PDPGallery } from '@/components/pdp/PDPGallery';
import { BuyBox } from '@/components/pdp/BuyBox';
import { DimensionsModule } from '@/components/pdp/DimensionsModule';
import { PairsWellWith } from '@/components/pdp/PairsWellWith';
import { TrustSignals } from '@/components/shared/TrustSignals';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
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

  // Simulate fetching delivery logic for this specific product targeting the default zone (Lagos)
  // Fallback map since mock currently lacks full product base schema
  const deliveryPreview = calculateDelivery('LAGOS', [
    {
      isMadeToOrder: true,
      baseLeadTimeDays: 14,
      maxLeadTimeDays: 21,
      requiresWhiteGlove: true,
      isCustomMaterial: false
    }
  ]);

  // Construct a unified product object mimicking the future Shopify + Sanity SSR merge
  const unifiedProduct = {
    id: product.shopifyHandle,
    title: product.shopifyHandle.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), // Title normally from Shopify
    description: product.editorialDescription,
    price: 1250000, // Eventually from Shopify
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
        {/* Gallery / Left Column */}
        <div className={styles.galleryColumn}>
          <PDPGallery images={product.gallery} />
        </div>

        {/* Details / Right Column (Sticky) */}
        <div className={styles.buyColumn}>
          <div className={styles.buyBoxSticky}>
            <BuyBox product={unifiedProduct} />
            
            {/* Contextual Accordions */}
            <div className={styles.accordions}>
              <Accordion title="Delivery & Assembly">
                <p style={{ marginBottom: '1rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                  {deliveryPreview.message}
                </p>
                <p>
                  Calculated for Lagos. Extended rates and timelines apply to other regions. Our dedicated logistics team will unbox, assemble, and remove all packaging materials.
                </p>
              </Accordion>
              <Accordion title="Care Instructions">
                {product.careGuide}
              </Accordion>
            </div>
            
            {/* Concierge CTA */}
            <div className={styles.conciergeBox}>
              <p className={styles.conciergeText}>
                Need spatial planning advice or material samples? Our design team is available to assist.
              </p>
              <Button variant="ghost" className={styles.conciergeBtn}>
                Speak to a Consultant
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Trust Protocol (Reassurance First) */}
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
