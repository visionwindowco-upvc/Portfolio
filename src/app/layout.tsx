import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://visionwindowco.com"),
  title: {
    default: "Vision Window Co | Premium UPVC Windows & Doors in Vasai-Virar, Maharashtra",
    template: "%s | Vision Window Co",
  },
  description:
    "Vision Window Co offers premium UPVC windows and doors in Vasai-Virar, Maharashtra. Energy-efficient, weather-resistant, and beautifully designed casement, sliding, tilt & turn windows and French doors. Get a free quote today!",
  keywords: [
    // Core product keywords
    "UPVC windows",
    "UPVC doors",
    "UPVC windows and doors",
    "uPVC window manufacturer",
    "premium UPVC windows",
    // Product type keywords
    "casement windows",
    "sliding windows",
    "tilt and turn windows",
    "fixed windows",
    "French doors",
    "sliding doors",
    "UPVC casement windows",
    "UPVC sliding windows",
    "UPVC French doors",
    // Geo-targeted keywords (GEO)
    "UPVC windows Vasai-Virar",
    "UPVC windows Maharashtra",
    "UPVC windows Mumbai",
    "UPVC doors Vasai-Virar",
    "window manufacturer Maharashtra",
    "UPVC windows near me",
    "UPVC windows Palghar",
    "UPVC windows Thane",
    "UPVC windows Navi Mumbai",
    "best UPVC windows in Mumbai",
    "window dealer Vasai",
    "window installation Virar",
    // Benefit/feature keywords
    "energy efficient windows",
    "soundproof windows",
    "noise reduction windows",
    "weather resistant windows",
    "low maintenance windows",
    "double glazed windows India",
    "thermal insulation windows",
    // AEO question-based keywords
    "best windows for home India",
    "UPVC vs aluminium windows",
    "cost of UPVC windows in India",
    "how long do UPVC windows last",
    // Brand
    "Vision Window Co",
    "Vision Window Company",
  ],
  authors: [{ name: "Vision Window Co", url: "https://visionwindowco.com" }],
  creator: "Vision Window Co",
  publisher: "Vision Window Co",
  category: "Home Improvement",
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://visionwindowco.com",
    siteName: "Vision Window Co",
    title: "Vision Window Co | Premium UPVC Windows & Doors in Vasai-Virar",
    description:
      "Transform your home with premium UPVC windows and doors. Energy-efficient, weather-resistant, and elegant designs by Vision Window Co, Vasai-Virar, Maharashtra. 1200+ projects completed.",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Vision Window Co — Premium UPVC Windows and Doors in Vasai-Virar, Maharashtra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Window Co | Premium UPVC Windows & Doors",
    description:
      "Premium UPVC windows & doors in Vasai-Virar. Energy-efficient, weather-resistant, elegant designs. 1200+ projects completed. Get a free quote!",
    images: ["/images/hero-bg.png"],
    creator: "@visionwindowco",
    site: "@visionwindowco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://visionwindowco.com",
  },
  verification: {
    // Fill these in once you register with search consoles
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Vasai-Virar",
    "geo.position": "19.4598;72.8847",
    "ICBM": "19.4598, 72.8847",
  },
};

// JSON-LD Structured Data — Multiple schemas for maximum SEO/GEO/AEO coverage
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://visionwindowco.com/#organization",
  name: "Vision Window Co",
  alternateName: "Vision Window Company",
  url: "https://visionwindowco.com",
  logo: {
    "@type": "ImageObject",
    url: "https://visionwindowco.com/images/logo.png",
    width: 512,
    height: 512,
  },
  image: "https://visionwindowco.com/images/logo.png",
  description:
    "Vision Window Co is a premium UPVC windows and doors manufacturer based in Vasai-Virar, Maharashtra, India. Specializing in casement, sliding, tilt & turn, and fixed windows as well as French and sliding doors.",
  email: "contact@visionwindowco.com",
  telephone: "+919511637830",
  foundingDate: "2013",
  founder: {
    "@type": "Person",
    name: "Dattaram Kanade",
    jobTitle: "Founder & CEO",
    url: "https://visionwindowco.com/vcard/dattaram-kanade",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "H No.89, Tokare Village, Mumbai - Ahmedabad Road, Virar Phata",
    addressLocality: "Vasai-Virar",
    addressRegion: "Maharashtra",
    postalCode: "401208",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919511637830",
    contactType: "sales",
    availableLanguage: ["English", "Hindi", "Marathi"],
    areaServed: "IN",
  },
  sameAs: [
    "https://wa.me/919511637830",
  ],
  knowsAbout: [
    "UPVC Windows",
    "UPVC Doors",
    "Casement Windows",
    "Sliding Windows",
    "Tilt and Turn Windows",
    "Fixed Windows",
    "French Doors",
    "Sliding Doors",
    "Energy Efficient Fenestration",
    "Double Glazing",
    "Sound Insulation Windows",
    "Weather Resistant Windows",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://visionwindowco.com/#website",
  name: "Vision Window Co",
  url: "https://visionwindowco.com",
  publisher: {
    "@id": "https://visionwindowco.com/#organization",
  },
  description:
    "Premium UPVC windows and doors manufacturer in Vasai-Virar, Maharashtra. Browse products, view completed projects, and get a free quote.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://visionwindowco.com/products?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-IN",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://visionwindowco.com/#localbusiness",
  name: "Vision Window Co",
  image: "https://visionwindowco.com/images/logo.png",
  url: "https://visionwindowco.com",
  telephone: "+919511637830",
  email: "contact@visionwindowco.com",
  foundingDate: "2013",
  description:
    "Vision Window Co offers premium UPVC windows and doors in Vasai-Virar, Maharashtra. We specialize in casement windows, sliding windows, tilt & turn windows, fixed windows, French doors, and sliding doors. Energy-efficient, weather-resistant, and beautifully designed. Over 1200 projects completed.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "H No.89, Tokare Village, Mumbai - Ahmedabad Road, Virar Phata",
    addressLocality: "Vasai-Virar",
    addressRegion: "Maharashtra",
    postalCode: "401208",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.4598,
    longitude: 72.8847,
  },
  hasMap: "https://maps.app.goo.gl/nuCFLsa595HoZBz58",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  priceRange: "₹₹₹",
  paymentAccepted: "Cash, UPI, Bank Transfer, Credit Card, Debit Card",
  currenciesAccepted: "INR",
  founder: {
    "@type": "Person",
    name: "Dattaram Kanade",
    jobTitle: "Founder & CEO",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Rajesh Sharma" },
      reviewBody:
        "Vision Window Co transformed our apartment with their UPVC windows. The noise reduction is incredible — we can finally sleep peacefully! Premium quality at a fair price.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Priya Mehta" },
      reviewBody:
        "I recommend Vision Window Co to all my clients. Their attention to detail, modern designs, and professional installation set them apart from the competition.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Sunil Patil" },
      reviewBody:
        "We've used Vision Window Co for multiple residential projects. Their products are top-tier, delivery is always on time, and the after-sales service is excellent.",
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Vasai-Virar",
      containedInPlace: { "@type": "State", name: "Maharashtra" },
    },
    {
      "@type": "City",
      name: "Mumbai",
      containedInPlace: { "@type": "State", name: "Maharashtra" },
    },
    {
      "@type": "City",
      name: "Thane",
      containedInPlace: { "@type": "State", name: "Maharashtra" },
    },
    {
      "@type": "City",
      name: "Navi Mumbai",
      containedInPlace: { "@type": "State", name: "Maharashtra" },
    },
    {
      "@type": "City",
      name: "Palghar",
      containedInPlace: { "@type": "State", name: "Maharashtra" },
    },
  ],
  sameAs: [
    "https://wa.me/919511637830",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Premium UPVC Products",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "UPVC Windows",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "UPVC Casement Windows",
              url: "https://visionwindowco.com/products/casement-windows",
              description: "Classic side-hinged windows that open outward, providing excellent ventilation and unobstructed views.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "UPVC Sliding Windows",
              url: "https://visionwindowco.com/products/sliding-windows",
              description: "Sleek horizontal sliding windows that save space while maximizing natural light.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "UPVC Tilt & Turn Windows",
              url: "https://visionwindowco.com/products/tilt-turn-windows",
              description: "Versatile windows that tilt inward for ventilation or swing open fully for easy cleaning.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "UPVC Fixed Windows",
              url: "https://visionwindowco.com/products/fixed-windows",
              description: "Non-opening panoramic windows designed for maximum light and views.",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "UPVC Doors",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "UPVC French Doors",
              url: "https://visionwindowco.com/products/french-doors",
              description: "Elegant double doors that add a touch of sophistication to any entrance.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "UPVC Sliding Doors",
              url: "https://visionwindowco.com/products/sliding-doors",
              description: "Premium sliding doors for balconies and patios with panoramic glass.",
            },
          },
        ],
      },
    ],
  },
  knowsAbout: [
    "UPVC Fenestration",
    "Energy Efficient Windows",
    "Sound Insulation",
    "Double Glazing",
    "Weather Resistant Windows",
    "Multi-chambered UPVC Profiles",
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Vasai-Virar" />
        <meta name="geo.position" content="19.4598;72.8847" />
        <meta name="ICBM" content="19.4598, 72.8847" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body>
        <Navbar />
        <main style={{ marginTop: 0 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
