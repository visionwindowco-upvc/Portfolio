import type { Metadata } from 'next';
import ProductsContent from './ProductsContent';
import { products } from '@/lib/data/products';

export const metadata: Metadata = {
  title: 'Products — Premium UPVC Windows & Doors Range',
  description: 'Explore Vision Window Co\'s complete range of premium UPVC windows and doors — Casement, Sliding, Tilt & Turn, Fixed windows, French doors, and Sliding doors. Energy-efficient, weather-resistant. Best UPVC products in Vasai-Virar, Maharashtra.',
  keywords: [
    'UPVC windows range',
    'UPVC doors range',
    'casement windows India',
    'sliding windows India',
    'tilt and turn windows',
    'fixed windows',
    'French doors UPVC',
    'sliding doors UPVC',
    'buy UPVC windows',
    'UPVC windows price',
    'UPVC products Vasai-Virar',
    'best UPVC windows Maharashtra',
  ],
  openGraph: {
    title: 'Premium UPVC Windows & Doors Collection | Vision Window Co',
    description: 'Browse our complete range: Casement, Sliding, Tilt & Turn, Fixed Windows, French Doors & Sliding Doors. Energy-efficient UPVC products in Vasai-Virar.',
    url: 'https://visionwindowco.com/products',
    siteName: 'Vision Window Co',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/products/casement-window.png',
        width: 800,
        height: 600,
        alt: 'Vision Window Co Premium UPVC Product Range',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium UPVC Products | Vision Window Co',
    description: 'Casement, Sliding, Tilt & Turn, Fixed Windows, French Doors & Sliding Doors. Quality guaranteed.',
    images: ['/images/products/casement-window.png'],
  },
  alternates: {
    canonical: 'https://visionwindowco.com/products',
  },
};

// JSON-LD: ItemList of all products
const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Vision Window Co UPVC Product Range",
  description: "Complete range of premium UPVC windows and doors by Vision Window Co",
  url: "https://visionwindowco.com/products",
  numberOfItems: products.length,
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.name,
    url: `https://visionwindowco.com/products/${product.id}`,
    image: `https://visionwindowco.com${product.image}`,
    description: product.description,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://visionwindowco.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Products",
      item: "https://visionwindowco.com/products",
    },
  ],
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://visionwindowco.com/products/#collectionpage",
  url: "https://visionwindowco.com/products",
  name: "Premium UPVC Windows & Doors Range",
  description: "Explore Vision Window Co's complete range of premium UPVC windows and doors.",
  isPartOf: { "@id": "https://visionwindowco.com/#website" },
  about: { "@id": "https://visionwindowco.com/#organization" },
  inLanguage: "en-IN",
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <ProductsContent />
    </>
  );
}
