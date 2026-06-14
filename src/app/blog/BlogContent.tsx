'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight, HiOutlineClock, HiOutlineUser } from 'react-icons/hi';
import styles from './blog.module.css';

import { blogPosts } from '@/lib/data/blogs';

export default function BlogContent() {
  return (
    <>
      {/* Hero */}
      <section className={styles.blogHero}>
        <div className={styles.heroBg}>
          <div className={`liquid-blob liquid-blob-blue ${styles.blob1}`} />
          <div className={`liquid-blob liquid-blob-ice ${styles.blob2}`} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            📝 Our Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Insights & <span className="gradient-text">Expert Guides</span>
          </motion.h1>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Tips, comparisons, and expert advice to help you make the best choices 
            for your home&apos;s windows and doors.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className={`section ${styles.blogSection}`}>
        <div className="container">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={`/blog/${blogPosts[0].slug}`} className={`glass-card ${styles.featuredCard}`}>
              <div className={styles.featuredImageWrap}>
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  width={700}
                  height={400}
                  className={styles.featuredImage}
                />
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.postCategory}>{blogPosts[0].category}</span>
                <h2 className={styles.featuredTitle}>{blogPosts[0].title}</h2>
                <p className={styles.featuredExcerpt}>{blogPosts[0].excerpt}</p>
                <div className={styles.postMeta}>
                  <span><HiOutlineUser /> {blogPosts[0].author}</span>
                  <span><HiOutlineClock /> {blogPosts[0].readTime}</span>
                  <span>{blogPosts[0].date}</span>
                </div>
                <span className={styles.readMore}>
                  Read Article <HiOutlineArrowRight />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Blog Grid */}
          <div className={styles.blogGrid}>
            {blogPosts.slice(1).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className={`glass-card ${styles.blogCard}`}>
                  <div className={styles.blogImageWrap}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className={styles.blogImage}
                    />
                    <span className={styles.postCategoryBadge}>{post.category}</span>
                  </div>
                  <div className={styles.blogCardContent}>
                    <h3 className={styles.blogCardTitle}>{post.title}</h3>
                    <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
                    <div className={styles.postMeta}>
                      <span><HiOutlineClock /> {post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
