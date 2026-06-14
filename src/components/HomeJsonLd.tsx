'use client';

// FAQ schema targeting AEO (Answer Engine Optimization) — for People Also Ask, voice search, AI answers
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are UPVC windows and why should I choose them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UPVC (Unplasticized Polyvinyl Chloride) windows are premium fenestration products made from a rigid, weather-resistant plastic material. They offer superior thermal insulation, reduce outside noise by up to 40dB, are virtually maintenance-free (no painting/polishing needed), resist corrosion and termite damage, and last 25+ years. Vision Window Co manufactures premium UPVC windows in Vasai-Virar, Maharashtra.",
      },
    },
    {
      "@type": "Question",
      name: "How much do UPVC windows cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UPVC window prices in India vary based on size, type, glazing, and hardware. Casement windows typically range from ₹450-800 per sq ft, sliding windows from ₹400-700 per sq ft, and tilt & turn windows from ₹550-900 per sq ft. Contact Vision Window Co at +91 95116 37830 for a free, personalized quote based on your specific requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Are UPVC windows better than aluminium windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, UPVC windows outperform aluminium in several key areas: 1) Thermal insulation — UPVC is a natural insulator while aluminium conducts heat; 2) Sound insulation — UPVC's multi-chambered design reduces noise by up to 40dB; 3) Maintenance — UPVC never needs painting, while aluminium can corrode over time; 4) Energy efficiency — UPVC windows can cut energy bills by up to 30%. However, aluminium may be preferred for very large commercial facades.",
      },
    },
    {
      "@type": "Question",
      name: "How long do UPVC windows last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High-quality UPVC windows from reputable manufacturers like Vision Window Co last 25-30 years or more with minimal maintenance. The UPVC material is resistant to UV rays, weathering, salt water, and termite damage. A simple wipe-down with soapy water every few months keeps them looking new for decades.",
      },
    },
    {
      "@type": "Question",
      name: "What types of UPVC windows does Vision Window Co offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vision Window Co offers a comprehensive range of UPVC products: Casement Windows (side-hinged for maximum ventilation), Sliding Windows (space-saving horizontal glide), Tilt & Turn Windows (European-style dual-action opening), Fixed Windows (non-opening panoramic views), French Doors (elegant double-door openings), and Sliding Doors (panoramic glass for patios and balconies). All products feature multi-point locking, double glazing options, and galvanized steel reinforcement.",
      },
    },
    {
      "@type": "Question",
      name: "Does Vision Window Co provide installation services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Vision Window Co provides end-to-end service including free site measurement, custom manufacturing, professional installation, and after-sales support. We serve Vasai-Virar, Mumbai, Thane, Navi Mumbai, Palghar, and the wider Mumbai Metropolitan Region. Call +91 95116 37830 or visit our website at visionwindowco.com to schedule a free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Can UPVC windows reduce energy bills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, UPVC windows can reduce heating and cooling energy costs by up to 30%. The multi-chambered UPVC profiles combined with double or triple glazing create an insulating barrier that prevents heat transfer. This keeps your home cooler in summer and warmer in winter, significantly reducing reliance on air conditioning and heating systems.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Vision Window Co located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vision Window Co is located at H No.89, Tokare Village, Mumbai - Ahmedabad Road, Virar Phata, Vasai-Virar, Maharashtra 401208, India. We serve the entire Mumbai Metropolitan Region including Mumbai, Thane, Navi Mumbai, Palghar, and surrounding areas. Visit us Monday to Saturday, 9 AM - 7 PM, or call +91 95116 37830.",
      },
    },
  ],
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://visionwindowco.com/#webpage",
  url: "https://visionwindowco.com",
  name: "Vision Window Co | Premium UPVC Windows & Doors in Vasai-Virar, Maharashtra",
  description:
    "Premium UPVC windows and doors manufacturer in Vasai-Virar, Maharashtra. Casement, sliding, tilt & turn windows and French doors. 1200+ projects completed. Get a free quote!",
  isPartOf: { "@id": "https://visionwindowco.com/#website" },
  about: { "@id": "https://visionwindowco.com/#organization" },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://visionwindowco.com/images/hero-bg.png",
  },
  inLanguage: "en-IN",
};

export default function HomeJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
    </>
  );
}
