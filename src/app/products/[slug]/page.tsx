import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { HiOutlineCheck, HiOutlineArrowLeft } from 'react-icons/hi';
import { products } from '@/lib/data/products';

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

// Dynamic metadata per product
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const title = `${product.name} — Premium UPVC ${product.category}`;
  const description = `${product.description} Features: ${product.features.slice(0, 3).join(', ')}. Available in Vasai-Virar, Maharashtra from Vision Window Co. Get a free quote!`;

  return {
    title,
    description,
    keywords: [
      product.name,
      `UPVC ${product.name.toLowerCase()}`,
      `${product.category.toLowerCase()} UPVC`,
      `buy ${product.name.toLowerCase()}`,
      `${product.name.toLowerCase()} price India`,
      `${product.name.toLowerCase()} Vasai-Virar`,
      `${product.name.toLowerCase()} Maharashtra`,
      `best ${product.category.toLowerCase()} UPVC`,
    ],
    openGraph: {
      title: `${product.name} | Vision Window Co`,
      description: product.description,
      url: `https://visionwindowco.com/products/${product.id}`,
      siteName: 'Vision Window Co',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: `${product.name} by Vision Window Co — Premium UPVC ${product.category}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Vision Window Co`,
      description: product.description,
      images: [product.image],
    },
    alternates: {
      canonical: `https://visionwindowco.com/products/${product.id}`,
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  // Product JSON-LD schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.longDescription,
    image: `https://visionwindowco.com${product.image}`,
    url: `https://visionwindowco.com/products/${product.id}`,
    brand: {
      "@type": "Brand",
      name: "Vision Window Co",
      url: "https://visionwindowco.com",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Vision Window Co",
      url: "https://visionwindowco.com",
    },
    category: `UPVC ${product.category}`,
    material: "UPVC (Unplasticized Polyvinyl Chloride)",
    additionalProperty: product.features.map((feature) => ({
      "@type": "PropertyValue",
      name: "Feature",
      value: feature,
    })),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
      },
      seller: {
        "@type": "Organization",
        name: "Vision Window Co",
      },
      areaServed: {
        "@type": "State",
        name: "Maharashtra",
      },
      url: `https://visionwindowco.com/products/${product.id}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1200",
      bestRating: "5",
      worstRating: "1",
    },
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
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://visionwindowco.com/products/${product.id}`,
      },
    ],
  };

  return (
    <div className="product-detail-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', background: 'var(--color-white)', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container">
        <Link href="/products" className="btn btn-outline btn-sm" style={{ marginBottom: 'var(--space-2xl)' }}>
          <HiOutlineArrowLeft /> Back to Products
        </Link>
        
        <style>{`
          .product-detail-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-4xl);
            align-items: center;
          }
          @media (max-width: 900px) {
            .product-detail-grid {
              grid-template-columns: 1fr;
              gap: var(--space-2xl);
            }
          }
          @media (max-width: 600px) {
            .product-detail-grid h1 {
              font-size: var(--text-3xl) !important;
            }
            .product-detail-grid p {
              font-size: var(--text-base) !important;
            }
            .product-detail-wrapper {
              padding-top: 90px !important;
              padding-bottom: 40px !important;
            }
          }
        `}</style>

        <div className="product-detail-grid">
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', backgroundColor: 'var(--color-off-white)' }}>
            <Image src={product.image} alt={product.name} fill style={{ objectFit: 'contain', padding: 'var(--space-2xl)' }} />
          </div>

          <div>
            <span style={{ color: 'var(--color-blue)', fontWeight: 600, textTransform: 'uppercase', fontSize: 'var(--text-sm)', letterSpacing: '0.1em' }}>{product.category}</span>
            <h1 style={{ fontSize: 'var(--text-5xl)', marginTop: 'var(--space-sm)', marginBottom: 'var(--space-xl)' }}>{product.name}</h1>
            
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-2xl)' }}>
              {product.longDescription}
            </p>

            <div style={{ marginBottom: 'var(--space-2xl)' }}>
              <h3 style={{ marginBottom: 'var(--space-md)' }}>Key Features</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 'var(--space-sm)' }}>
                {product.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--color-blue)', background: 'var(--glass-blue)', padding: '6px', borderRadius: '50%', display: 'flex' }}><HiOutlineCheck size={18} /></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/#contact" className="btn btn-primary btn-lg">
              Request a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
