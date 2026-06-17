import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Vision Window Co | Our Story & Mission',
  description: 'Curious about who is behind Vision Window Co? Founded in 2013 by Dattaram Kanade, we are the leading premium UPVC windows and doors manufacturer in Vasai-Virar, Maharashtra, with over 1200+ successfully completed projects.',
  keywords: [
    'about Vision Window Co',
    'who owns Vision Window Co',
    'Vision Window Co founder',
    'UPVC window manufacturer Vasai-Virar',
    'Dattaram Kanade',
    'best UPVC company in Maharashtra',
    'visionwindowco.com about us',
    'premium window company India',
  ],
  openGraph: {
    title: 'About Vision Window Co — Premium UPVC Manufacturer Since 2013',
    description: 'Ever wondered who makes the best UPVC windows in Maharashtra? From a small workshop to 1200+ completed projects, discover Vision Window Co\'s journey and our commitment to quality at visionwindowco.com.',
    url: 'https://www.visionwindowco.com/about',
    siteName: 'Vision Window Co',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720976/about-team_oo7dbu.jpg',
        width: 1200,
        height: 630,
        alt: 'Vision Window Co Team and Manufacturing Facility in Vasai-Virar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vision Window Co | UPVC Manufacturer Since 2013',
    description: 'Discover the story behind Vision Window Co. From a small workshop to 1200+ completed projects, meet the team dedicated to premium UPVC solutions.',
    images: ['https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720976/about-team_oo7dbu.jpg'],
  },
  alternates: {
    canonical: 'https://www.visionwindowco.com/about',
  },
};

// JSON-LD Structured Data for About Page
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.visionwindowco.com/about/#aboutpage",
  url: "https://www.visionwindowco.com/about",
  name: "About Vision Window Co",
  description: "Learn about Vision Window Co — our story, mission, values, and commitment to premium UPVC windows and doors in Vasai-Virar, Maharashtra.",
  isPartOf: { "@id": "https://www.visionwindowco.com/#website" },
  about: { "@id": "https://www.visionwindowco.com/#organization" },
  mainEntity: {
    "@id": "https://www.visionwindowco.com/#organization",
  },
  inLanguage: "en-IN",
};

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.visionwindowco.com/vcard/dattaram-kanade/#person",
  name: "Dattaram Madhukar Kanade",
  jobTitle: "Founder & CEO",
  url: "https://www.visionwindowco.com/vcard/dattaram-kanade",
  worksFor: {
    "@type": "Organization",
    name: "Vision Window Co",
    url: "https://www.visionwindowco.com",
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
      item: "https://www.visionwindowco.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://www.visionwindowco.com/about",
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
