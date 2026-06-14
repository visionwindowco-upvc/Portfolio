import type { Metadata } from 'next';
import BlogContent from './BlogContent';
import { blogPosts } from '@/lib/data/blogs';

export const metadata: Metadata = {
  title: 'Blog — UPVC Windows & Doors Expert Insights & Guides',
  description: 'Expert insights, tips, and guides on UPVC windows and doors from Vision Window Co. Learn about energy efficiency, UPVC vs aluminium, maintenance tips, design trends, and more.',
  keywords: [
    'UPVC windows blog',
    'UPVC doors tips',
    'energy efficient windows guide',
    'UPVC vs aluminium',
    'window maintenance tips',
    'UPVC window design trends',
    'how to choose windows',
    'UPVC benefits',
    'window installation guide',
    'home improvement windows',
  ],
  openGraph: {
    title: 'Blog — Expert UPVC Insights | Vision Window Co',
    description: 'Expert insights, tips, and guides on UPVC windows and doors. Energy efficiency, maintenance, design trends, and buying guides.',
    url: 'https://visionwindowco.com/blog',
    siteName: 'Vision Window Co',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Vision Window Co Blog — UPVC Windows & Doors Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — UPVC Expert Insights | Vision Window Co',
    description: 'Tips, guides, and insights on UPVC windows and doors from Vision Window Co experts.',
    images: ['/images/hero-bg.png'],
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
      url: "https://visionwindowco.com/images/logo.png",
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
