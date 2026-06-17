import type { Metadata } from 'next';
import VCardContent from './VCardContent';

export const metadata: Metadata = {
  title: 'Dattaram Kanade — Founder & CEO Digital Business Card',
  description: 'Digital business card for Dattaram Madhukar Kanade, Founder & CEO of Vision Window Co. 20+ years of experience in project management, sales, and business development. Premium UPVC windows and doors manufacturer in Vasai-Virar, Maharashtra.',
  keywords: [
    'Dattaram Kanade',
    'Dattaram Madhukar Kanade',
    'Vision Window Co founder',
    'UPVC window manufacturer owner',
    'Vasai-Virar business leader',
    'digital business card',
    'VCard',
  ],
  openGraph: {
    title: 'Dattaram Kanade — Founder & CEO | Vision Window Co',
    description: 'Connect with Dattaram Kanade, Founder & CEO of Vision Window Co. 20+ years experience in sales, project management, and premium UPVC fenestration.',
    url: 'https://www.visionwindowco.com/vcard/dattaram-kanade',
    siteName: 'Vision Window Co',
    locale: 'en_IN',
    type: 'profile',
    images: [
      {
        url: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781721408/Transform_this_into_a_professional_202605271903_udolel_1_zrghdc.jpg',
        width: 400,
        height: 400,
        alt: 'Dattaram Madhukar Kanade — Founder & CEO of Vision Window Co',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Dattaram Kanade — Founder | Vision Window Co',
    description: 'Connect with Dattaram Kanade, Founder & CEO of Vision Window Co. Premium UPVC windows and doors in Vasai-Virar.',
    images: ['https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781721408/Transform_this_into_a_professional_202605271903_udolel_1_zrghdc.jpg'],
  },
  alternates: {
    canonical: 'https://www.visionwindowco.com/vcard/dattaram-kanade',
  },
};

// JSON-LD: Person schema
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.visionwindowco.com/vcard/dattaram-kanade/#person",
  name: "Dattaram Madhukar Kanade",
  givenName: "Dattaram",
  familyName: "Kanade",
  jobTitle: "Founder & CEO",
  url: "https://www.visionwindowco.com/vcard/dattaram-kanade",
  image: "https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781721408/Transform_this_into_a_professional_202605271903_udolel_1_zrghdc.jpg",
  telephone: "+919511637830",
  email: "contact@visionwindowco.com",
  worksFor: {
    "@type": "Organization",
    "@id": "https://www.visionwindowco.com/#organization",
    name: "Vision Window Co",
    url: "https://www.visionwindowco.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "H No.89, Tokare Village, Mumbai - Ahmedabad Road, Virar Phata",
    addressLocality: "Vasai-Virar",
    addressRegion: "Maharashtra",
    postalCode: "401208",
    addressCountry: "IN",
  },
  knowsAbout: [
    "UPVC Windows and Doors",
    "Fenestration",
    "Project Management",
    "Business Development",
    "Government Sales",
    "Project Sales",
  ],
  alumniOf: [
    { "@type": "Organization", name: "Eureka Forbes Ltd." },
    { "@type": "Organization", name: "Koochie Play Systems" },
    { "@type": "Organization", name: "Somany Ceramics" },
    { "@type": "Organization", name: "Aparna Enterprises Ltd." },
    { "@type": "Organization", name: "Apar Industries Ltd." },
  ],
  sameAs: [
    "https://wa.me/919511637830",
    "https://www.visionwindowco.com",
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
      name: "Dattaram Kanade — VCard",
      item: "https://www.visionwindowco.com/vcard/dattaram-kanade",
    },
  ],
};

export default function VCardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <VCardContent />
    </>
  );
}
