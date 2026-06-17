import type { Metadata } from 'next';
import BlogContent from './BlogContent';
import { blogPosts } from '@/lib/data/blogs';

export const metadata: Metadata = {
  title: 'Blog — UPVC Windows & Doors Expert Insights | Vision Window Co',
  description: 'Wondering which windows are best for your home? Read expert insights, tips, and guides on UPVC windows and doors from Vision Window Co. Learn about energy efficiency, UPVC vs aluminium, and maintenance tips at www.visionwindowco.com.',
  keywords: [
    'are UPVC windows good for Indian weather',
    'UPVC vs aluminium',
    'how to choose windows for home',
    'visionwindowco.com blog',
    'UPVC windows blog',
    'energy efficient windows guide',
    'window maintenance tips',
    'UPVC window design trends',
    'UPVC benefits',
    'window installation guide',
  ],
  openGraph: {
    title: 'Blog — Expert UPVC Insights | Vision Window Co',
    description: 'Not sure if UPVC is right for you? Read expert insights, tips, and guides on UPVC windows and doors. Learn about energy efficiency, maintenance, and buying guides at visionwindowco.com.',
    url: 'https://visionwindowco.com/blog',
    siteName: 'Vision Window Co',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720976/hero-bg_wjokad.jpg',
        width: 1200,
        height: 630,
        alt: 'Vision Window Co Blog — UPVC Windows & Doors Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — UPVC Expert Insights | Vision Window Co',
    description: 'Need help choosing the right windows? Read tips, guides, and insights on UPVC windows and doors from Vision Window Co experts.',
    images: ['https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720976/hero-bg_wjokad.jpg'],
  },
  alternates: {
    canonical: 'https://visionwindowco.com/blog',
  },
};

// JSON-LD: Blog + ItemList of blog posts
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://visionwindowco.com/blog/#blog",
  url: "https://visionwindowco.com/blog",
  name: "Vision Window Co Blog — UPVC Expert Insights",
  description: "Expert insights, tips, and guides on UPVC windows and doors from Vision Window Co.",
  publisher: {
    "@type": "Organization",
    name: "Vision Window Co",
    url: "https://visionwindowco.com",
    logo: {
      "@type": "ImageObject",
      url: "https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720976/logo_ml0tyg.jpg",
    },
  },
  isPartOf: { "@id": "https://visionwindowco.com/#website" },
  inLanguage: "en-IN",
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://visionwindowco.com/blog/${post.slug}`,
    image: `https://visionwindowco.com${post.image}`,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Vision Window Co",
    },
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
      name: "Blog",
      item: "https://visionwindowco.com/blog",
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogContent />
    </>
  );
}
