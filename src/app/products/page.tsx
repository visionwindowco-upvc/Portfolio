import type { Metadata } from 'next';
import ProductsContent from './ProductsContent';
import { products } from '@/lib/data/products';

export const metadata: Metadata = {
  title: 'Products — Premium UPVC Windows & Doors | Vision Window Co',
  description: 'Looking to buy the best UPVC windows and doors? Explore Vision Window Co\'s complete range of premium casement, sliding, tilt & turn windows, and French doors at www.visionwindowco.com. Get a free quote!',
  keywords: [
    'vision window co products',
    'buy UPVC windows online',
    'UPVC windows range',
    'UPVC doors range',
    'casement windows India',
    'sliding windows India',
    'tilt and turn windows',
    'French doors UPVC',
    'where to buy UPVC sliding doors',
    'UPVC windows price',
    'best UPVC products Vasai-Virar',
    'soundproof windows Mumbai',
  ],
  openGraph: {
    title: 'Premium UPVC Windows & Doors Collection | Vision Window Co',
    description: 'Searching for high-quality, energy-efficient windows? Browse our complete UPVC range including Casement, Sliding, Tilt & Turn Windows, and French Doors at visionwindowco.com.',
    url: 'https://visionwindowco.com/products',
    siteName: 'Vision Window Co',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/casement-window_lctpxt.jpg',
        width: 800,
        height: 600,
        alt: 'Vision Window Co Premium UPVC Product Range',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium UPVC Products | Vision Window Co',
    description: 'Looking to upgrade your home? Discover our premium Casement, Sliding, Tilt & Turn Windows, & French Doors. Quality guaranteed by Vision Window Co.',
    images: ['https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/casement-window_lctpxt.jpg'],
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
