import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { FilterBar } from '@/components/shared/FilterBar';
import { ProductTile } from '@/components/shared/ProductTile';
import { getShopifyProducts } from '@/lib/cms/shopifyMock';
import styles from './page.module.css';

export default async function ShopIndex() {
  const products = await getShopifyProducts();
  
  // Map Shopify schema to the generic ProductTile prop shape that will eventually merge with Sanity
  // Swatches are mocked via hardcoded badge logic until Sanity merges happen
  const mappedProducts = products.map(product => ({
    id: product.id,
    slug: product.handle,
    title: product.title,
    price: product.price,
    imageUrl: product.featuredImageUrl,
    badge: product.title.includes('Table') ? 'Custom Order' : product.title.includes('Mara') ? 'In Stock' : undefined,
    swatches: [
      { id: `${product.id}-s1`, name: 'Default', colorHex: '#E5E0D8' } // Fallback for PLP preview
    ]
  }));
  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.headerLayer}>
          <SectionHeader 
            title="All Seating & Tables" 
            description="Explore our complete collection of architectural furniture, engineered for the Nigerian climate."
            align="left"
          />
        </div>

        <FilterBar 
          categories={['Sofas', 'Chairs', 'Tables', 'Storage', 'Beds']} 
          totalResults={mappedProducts.length} 
        />

        <Grid columns={3} className={styles.productGrid}>
          {mappedProducts.map((product) => (
            <ProductTile
              key={product.id}
              title={product.title}
              slug={product.slug}
              price={product.price}
              imageUrl={product.imageUrl}
              swatches={product.swatches}
              badge={product.badge}
            />
          ))}
        </Grid>
      </Container>
    </main>
  );
}
