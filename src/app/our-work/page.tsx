import type { Metadata } from 'next';
import WorkContent from './WorkContent';

export const metadata: Metadata = {
  title: 'Our Work — 1200+ Completed UPVC Window & Door Projects',
  description: 'Browse Vision Window Co\'s portfolio of 1200+ completed UPVC window and door projects across residential, commercial, and hospitality sectors in Mumbai, Thane, Vasai-Virar, and Maharashtra.',
  keywords: [
    'UPVC window projects',
    'UPVC door projects',
    'completed window installations',
    'UPVC portfolio Maharashtra',
    'window projects Mumbai',
    'window projects Thane',
    'residential window installations',
    'commercial window projects',
    'hospital windows',
    'resort windows UPVC',
    'window installation portfolio',
  ],
  openGraph: {
    title: 'Our Work — 1200+ Completed Projects | Vision Window Co',
    description: 'Explore our portfolio of premium UPVC window and door installations across residential, commercial, and hospitality sectors in Maharashtra.',
    url: 'https://visionwindowco.com/our-work',
    siteName: 'Vision Window Co',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/projects/commercial-building.png',
        width: 1200,
        height: 630,
        alt: 'Vision Window Co Completed UPVC Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work — 1200+ Projects | Vision Window Co',
    description: 'UPVC window & door installations across residential, commercial, and hospitality sectors.',
    images: ['/images/projects/commercial-building.png'],
  },
  alternates: {
    canonical: 'https://visionwindowco.com/our-work',
  },
};

// JSON-LD: CollectionPage + ImageGallery
const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://visionwindowco.com/our-work/#collectionpage",
  url: "https://visionwindowco.com/our-work",
  name: "Our Work — Completed UPVC Window & Door Projects",
  description: "Portfolio of 1200+ completed UPVC window and door projects by Vision Window Co across residential, commercial, and hospitality sectors in Maharashtra.",
  isPartOf: { "@id": "https://visionwindowco.com/#website" },
  about: { "@id": "https://visionwindowco.com/#organization" },
  inLanguage: "en-IN",
  mainEntity: {
    "@type": "ImageGallery",
    name: "Vision Window Co Project Gallery",
    description: "Gallery of completed UPVC window and door installations",
    image: [
      {
        "@type": "ImageObject",
        name: "Rainbow School",
        description: "Complete UPVC window installation for a prestigious school with energy-efficient casement and fixed glass systems.",
        contentUrl: "https://visionwindowco.com/images/projects/commercial-building.png",
        contentLocation: {
          "@type": "Place",
          name: "Thane, Maharashtra",
        },
      },
      {
        "@type": "ImageObject",
        name: "JK Infra Residential",
        description: "Large-scale residential project featuring premium sliding and casement UPVC windows.",
        contentUrl: "https://visionwindowco.com/images/projects/residential-complex.png",
        contentLocation: {
          "@type": "Place",
          name: "Mira Road, Maharashtra",
        },
      },
      {
        "@type": "ImageObject",
        name: "MG Hospital",
        description: "Healthcare facility equipped with sound-insulating UPVC sliding windows for patient comfort.",
        contentUrl: "https://visionwindowco.com/images/projects/hospital.png",
        contentLocation: {
          "@type": "Place",
          name: "Vashi, Maharashtra",
        },
      },
      {
        "@type": "ImageObject",
        name: "Stay by Lake Resort",
        description: "Premium lakeside resort with French doors, panoramic sliding systems, and tilt & turn windows.",
        contentUrl: "https://visionwindowco.com/images/projects/luxury-villa.png",
        contentLocation: {
          "@type": "Place",
          name: "Palghar, Maharashtra",
        },
      },
      {
        "@type": "ImageObject",
        name: "Bridge Candy",
        description: "Commercial establishment with elegant UPVC window and door solutions.",
        contentUrl: "https://visionwindowco.com/images/projects/interior.png",
        contentLocation: {
          "@type": "Place",
          name: "Mumbai, Maharashtra",
        },
      },
    ],
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
      name: "Our Work",
      item: "https://visionwindowco.com/our-work",
    },
  ],
};

export default function OurWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WorkContent />
    </>
  );
}
