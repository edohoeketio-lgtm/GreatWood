import type { Metadata } from 'next';
import './globals.css';
import { UIProvider } from '@/lib/context/UIContext';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { CartDrawer } from '@/components/shared/CartDrawer';
import { SearchOverlay } from '@/components/shared/SearchOverlay';

export const metadata: Metadata = {
  title: 'GreatWood | Premium Nigerian Furniture',
  description: 'Premium, design-led furniture for the modern Nigerian home. Uncompromising craftsmanship met with radical operational reliability.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UIProvider>
          <Header />
          <SearchOverlay />
          <CartDrawer />
          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
