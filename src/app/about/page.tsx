import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us — Our Story, Mission & Values',
  description: 'Learn about Vision Window Co — founded in 2013 by Dattaram Kanade. 1200+ projects completed. Premium UPVC windows and doors manufacturer in Vasai-Virar, Maharashtra. Our story, mission, and values.',
  keywords: [
    'about Vision Window Co',
    'UPVC window manufacturer Vasai-Virar',
    'Dattaram Kanade',
    'UPVC company Maharashtra',
    'window manufacturer history',
    'premium window company India',
  ],
  openGraph: {
    title: 'About Vision Window Co — Premium UPVC Manufacturer Since 2013',
    description: 'From a small workshop to 1200+ completed projects — discover Vision Window Co\'s journey, mission, and commitment to premium UPVC windows and doors in Maharashtra.',
    url: 'https://visionwindowco.com/about',
    siteName: 'Vision Window Co',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/about-team.png',
        width: 1200,
        height: 630,
        alt: 'Vision Window Co Team and Manufacturing Facility in Vasai-Virar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vision Window Co | UPVC Manufacturer Since 2013',
    description: 'From a small workshop to 1200+ completed projects. Meet our team and discover our commitment to premium UPVC solutions.',
    images: ['/images/about-team.png'],
  },
  alternates: {
    canonical: 'https://visionwindowco.com/about',
  },
};

// JSON-LD Structured Data for About Page
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://visionwindowco.com/about/#aboutpage",
  url: "https://visionwindowco.com/about",
  name: "About Vision Window Co",
  description: "Learn about Vision Window Co — our story, mission, values, and commitment to premium UPVC windows and doors in Vasai-Virar, Maharashtra.",
  isPartOf: { "@id": "https://visionwindowco.com/#website" },
  about: { "@id": "https://visionwindowco.com/#organization" },
  mainEntity: {
    "@id": "https://visionwindowco.com/#organization",
  },
  inLanguage: "en-IN",
};

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://visionwindowco.com/vcard/dattaram-kanade/#person",
  name: "Dattaram Madhukar Kanade",
  jobTitle: "Founder & CEO",
  url: "https://visionwindowco.com/vcard/dattaram-kanade",
  worksFor: {
    "@type": "Organization",
    name: "Vision Window Co",
    url: "https://visionwindowco.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vasai-Virar",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  telephone: "+919511637830",
  email: "contact@visionwindowco.com",
  knowsAbout: [
    "UPVC Windows and Doors",
    "Fenestration",
    "Project Management",
    "Business Development",
    "Government Sales",
  ],
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
      name: "About Us",
      item: "https://visionwindowco.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutContent />
    </>
  );
}
