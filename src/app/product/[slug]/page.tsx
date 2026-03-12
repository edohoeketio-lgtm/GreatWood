import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PDPClient } from '@/components/pdp/PDPClient';
import { DimensionsModule } from '@/components/pdp/DimensionsModule';
import { PairsWellWith } from '@/components/pdp/PairsWellWith';
import { TrustSignals } from '@/components/shared/TrustSignals';
import { calculateDelivery } from '@/lib/utils/delivery';
import { getSanityProduct } from '@/lib/cms/sanityMock';
import { getShopifyProducts, getRelatedProducts } from '@/lib/cms/shopifyMock';
import styles from './page.module.css';



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

  const allProducts = await getShopifyProducts();
  const shopifyProduct = allProducts.find(p => p.handle === resolvedParams.slug);

  const unifiedProduct = {
    id: product.shopifyHandle,
    title: product.title,
    description: product.editorialDescription,
    price: shopifyProduct?.price ?? 0,
    badge: 'In Stock',
    swatches: product.swatches.map(s => {
      const shopifyVariant = shopifyProduct?.variants.find(v => v.id === s.shopifyVariantId);
      return {
        id: s.shopifyVariantId,
        name: s.name,
        colorHex: s.colorHex,
        imageUrl: shopifyVariant?.imageUrl || shopifyProduct?.featuredImageUrl
      };
    })
  };

  const relatedShopifyProducts = await getRelatedProducts(resolvedParams.slug);
  const mappedRelated = relatedShopifyProducts.map(p => ({
    id: p.id,
    slug: p.handle,
    title: p.title,
    price: p.price,
    imageUrl: p.featuredImageUrl,
  }));

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
          <PairsWellWith products={mappedRelated} />
        </Container>
      </section>
    </main>
  );
}
