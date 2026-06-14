'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowRight, HiOutlineShieldCheck, HiOutlineCheck } from 'react-icons/hi';
import styles from './products.module.css';

const categories = ['All', 'Windows', 'Doors'];
import { products } from '@/lib/data/products';

export default function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className={styles.productsHero}>
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
            🪟 Our Products
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Premium <span className="gradient-text">UPVC Windows</span> & Doors
          </motion.h1>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Explore our extensive range of UPVC products, each engineered for 
            durability, efficiency, and timeless aesthetics.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          {/* Category Filter */}
          <motion.div
            className={styles.filterBar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    className={styles.filterIndicator}
                    layoutId="filterIndicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Product Cards */}
          <div className={styles.productsGrid}>
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  id={product.id}
                  className={`glass-card ${styles.productCard}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  layout
                >
                  <div className={styles.productImageWrap}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={375}
                      className={styles.productImage}
                    />
                    <div className={styles.productBadge}>
                      <HiOutlineShieldCheck /> Premium
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <span className={styles.productCategory}>{product.category}</span>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productDesc}>{product.description}</p>
                    <div className={styles.productFeatures}>
                      {product.features.map((f, j) => (
                        <span key={j} className={styles.featureTag}>
                          <HiOutlineCheck /> {f}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginTop: 'var(--space-sm)' }}>
                      <Link href={`/products/${product.id}`} className="btn btn-outline btn-sm">
                        View Details
                      </Link>
                      <Link href="/#contact" className="btn btn-primary btn-sm">
                        Get a Quote <HiOutlineArrowRight />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.productsCta}>
        <div className="container">
          <motion.div
            className={`glass-card ${styles.ctaCard}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Can&apos;t Find What You Need?</h2>
            <p>We offer custom UPVC solutions tailored to your specific requirements. 
               Contact us for a personalized consultation.</p>
            <div className={styles.ctaActions}>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Request Custom Quote <HiOutlineArrowRight />
              </Link>
              <a href="tel:+919511637830" className="btn btn-outline btn-lg">
                Call +91 95116 37830
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
