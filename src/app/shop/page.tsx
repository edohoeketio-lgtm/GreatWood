import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { FilterBar } from '@/components/shared/FilterBar';
import { ProductTile } from '@/components/shared/ProductTile';
import { getShopifyProducts } from '@/lib/cms/shopifyMock';
import styles from './page.module.css';

export default async function ShopIndex({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const products = await getShopifyProducts();
  const categoryParam = typeof resolvedParams.category === 'string' ? resolvedParams.category : 'All';
  
  const filteredProducts = categoryParam === 'All' 
    ? products 
    : products.filter((p: any) => p.category === categoryParam);

  const uniqueCategories = Array.from(new Set(products.map((p: any) => p.category))).filter(Boolean) as string[];
  
  // Map Shopify schema to the generic ProductTile prop shape that will eventually merge with Sanity
  // Swatches are mocked via hardcoded badge logic until Sanity merges happen
  const mappedProducts = filteredProducts.map(product => ({
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
      colorHex: v.title === 'Yellow Ochre' ? '#Edb442' 
        : v.title === 'Blue Velvet' ? '#4A6FA5'
        : v.title === 'Oatmeal Linen' ? '#E5E0D8'
        : v.title === 'Charcoal Velvet' ? '#333333'
        : v.title === 'Natural Teak' ? '#C4A777'
        : v.title === 'Ebonized Oak' ? '#2C2C2C'
        : v.title === 'Walnut' ? '#5C4033'
        : '#E5E0D8',
      tileImageUrl: v.imageUrl,
    }))
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
          categories={uniqueCategories} 
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
              secondaryImageUrl={product.secondaryImageUrl}
              swatches={product.swatches}
              badge={product.badge}
            />
          ))}
        </Grid>
      </Container>
    </main>
  );
}
