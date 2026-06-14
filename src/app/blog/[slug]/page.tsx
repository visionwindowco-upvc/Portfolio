import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { HiOutlineClock, HiOutlineUser, HiOutlineArrowLeft } from 'react-icons/hi';
import { blogPosts } from '@/lib/data/blogs';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic metadata per blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      post.category,
      'UPVC windows',
      'UPVC doors',
      post.title.toLowerCase(),
      'Vision Window Co blog',
      'UPVC guide',
      'window tips India',
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://visionwindowco.com/blog/${post.slug}`,
      siteName: 'Vision Window Co',
      locale: 'en_IN',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://visionwindowco.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // BlogPosting JSON-LD
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://visionwindowco.com/blog/${post.slug}/#blogposting`,
    headline: post.title,
    description: post.excerpt,
    image: `https://visionwindowco.com${post.image}`,
    url: `https://visionwindowco.com/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://visionwindowco.com",
      logo: {
        "@type": "ImageObject",
        url: "https://visionwindowco.com/images/logo.png",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Vision Window Co",
      url: "https://visionwindowco.com",
      logo: {
        "@type": "ImageObject",
        url: "https://visionwindowco.com/images/logo.png",
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://visionwindowco.com/blog/${post.slug}`,
    },
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    inLanguage: "en-IN",
    isPartOf: {
      "@id": "https://visionwindowco.com/blog/#blog",
    },
    about: {
      "@type": "Thing",
      name: "UPVC Windows and Doors",
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
        name: "Blog",
        item: "https://visionwindowco.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://visionwindowco.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="blog-detail-wrapper" style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--color-off-white)', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link href="/blog" className="btn btn-outline btn-sm" style={{ marginBottom: 'var(--space-xl)' }}>
          <HiOutlineArrowLeft /> Back to Blog
        </Link>
        
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <span style={{ color: 'var(--color-blue)', fontWeight: 600, textTransform: 'uppercase', fontSize: 'var(--text-sm)', letterSpacing: '0.1em' }}>{post.category}</span>
          <h1 className="blog-detail-title" style={{ fontSize: 'var(--text-4xl)', marginTop: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>{post.title}</h1>
          <div className="blog-detail-meta" style={{ display: 'flex', gap: 'var(--space-md)', color: 'var(--text-muted)', fontSize: 'var(--text-sm)', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><HiOutlineUser /> {post.author}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><HiOutlineClock /> {post.readTime}</span>
            <span>{post.date}</span>
          </div>
        </div>

        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', marginBottom: 'var(--space-2xl)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
          <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
        </div>

        <div 
          className="blog-content"
          style={{ 
            fontSize: 'var(--text-lg)', 
            lineHeight: 1.8, 
            color: 'var(--text-secondary)' 
          }}
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        <style>{`
          .blog-content h2 { margin-top: 2.5rem; margin-bottom: 1rem; color: var(--text-primary); font-size: var(--text-2xl); }
          .blog-content p { margin-bottom: 1.5rem; }
          @media (max-width: 600px) {
            .blog-detail-wrapper { padding-top: 90px !important; padding-bottom: 40px !important; }
            .blog-detail-title { font-size: var(--text-3xl) !important; }
            .blog-content { font-size: var(--text-base) !important; }
            .blog-content h2 { font-size: var(--text-xl) !important; margin-top: 2rem; }
          }
        `}</style>
      </div>
    </div>
  );
}
