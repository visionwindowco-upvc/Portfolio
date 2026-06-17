'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowRight, HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineViewGrid } from 'react-icons/hi';
import styles from './work.module.css';

const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

const projects = [
  {
    id: 'rainbow-school',
    name: 'Rainbow School',
    category: 'Commercial',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720963/commercial-building_vwf7gc.jpg',
    location: 'Thane, Maharashtra',
    year: '2024',
    units: '100+ Windows',
    description: 'Complete UPVC window installation for a prestigious school with energy-efficient casement and fixed glass systems.',
  },
  {
    id: 'jk-infra',
    name: 'JK Infra Residential',
    category: 'Residential',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720963/residential-complex_jcqtjy.jpg',
    location: 'Mira Road, Maharashtra',
    year: '2024',
    units: '150+ Units',
    description: 'Large-scale residential project featuring premium sliding and casement UPVC windows throughout.',
  },
  {
    id: 'mg-hospital',
    name: 'MG Hospital',
    category: 'Hospitality',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720963/hospital_ykx2tl.jpg',
    location: 'Vashi, Maharashtra',
    year: '2023',
    units: '200+ Windows',
    description: 'Healthcare facility equipped with sound-insulating UPVC sliding windows for patient comfort and energy efficiency.',
  },
  {
    id: 'stay-by-lake',
    name: 'Stay by Lake Resort',
    category: 'Hospitality',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720963/luxury-villa_blzsse.jpg',
    location: 'Palghar, Maharashtra',
    year: '2023',
    units: '80+ Units',
    description: 'Premium lakeside resort with French doors, panoramic sliding systems, and tilt & turn windows.',
  },
  {
    id: 'bridge-candy',
    name: 'Bridge Candy',
    category: 'Commercial',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720963/interior_vvfxh2.jpg',
    location: 'Mumbai, Maharashtra',
    year: '2024',
    units: '120+ Windows',
    description: 'Commercial establishment with elegant UPVC window and door solutions for a modern aesthetic.',
  },
];

const testimonials = [
  {
    quote: 'Vision Window Co transformed our residential complex. The quality of UPVC windows is outstanding and the installation was seamless. Highly recommended!',
    author: 'Rajesh Sharma',
    role: 'Builder, Sai Residency Complex',
  },
  {
    quote: 'We chose Vision Window for our villa project and couldn\'t be happier. The French doors are absolutely stunning and the energy savings are remarkable.',
    author: 'Priya Mehta',
    role: 'Homeowner, Green Meadows',
  },
  {
    quote: 'Professional team, premium quality, and excellent after-sales service. They delivered 200+ windows on time for our commercial project.',
    author: 'Amit Patel',
    role: 'Project Manager, Nexus Tower',
  },
];

export default function WorkContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className={styles.workHero}>
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
            🏗️ Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Projects That <span className="gradient-text">Speak Quality</span>
          </motion.h1>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Explore our portfolio of completed projects across residential, commercial, 
            and hospitality sectors — each crafted with precision and passion.
          </motion.p>

          <motion.div
            className={styles.statsStrip}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1200+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1200+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>8+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className={styles.filterSection}>
        <div className="container">
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
                    layoutId="workFilterIndicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <div className={styles.projectsGrid}>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  className={`glass-card ${styles.projectCard}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  layout
                >
                  <div className={styles.projectImageWrap}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={450}
                      className={styles.projectImage}
                    />
                    <div className={styles.projectOverlay}>
                      <span className={styles.overlayText}>{project.description}</span>
                    </div>
                    <div className={styles.projectBadge}>
                      {project.category}
                    </div>
                  </div>
                  <div className={styles.projectInfo}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <div className={styles.projectLocation}>
                      <HiOutlineLocationMarker />
                      <span>{project.location}</span>
                    </div>
                    <div className={styles.projectDetails}>
                      <span className={styles.projectDetail}>
                        <HiOutlineCalendar /> {project.year}
                      </span>
                      <span className={styles.projectDetail}>
                        <HiOutlineViewGrid /> {project.units}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`section ${styles.testimonialSection}`}>
        <div className={`liquid-blob liquid-blob-ice ${styles.testimonialBlob}`} />
        <div className="container">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">⭐ Client Testimonials</span>
            <h2>What Our <span className="gradient-text">Clients Say</span></h2>
          </motion.div>

          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className={`glass-card ${styles.testimonialCard}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <p className={styles.testimonialQuote}>{t.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={`glass-card ${styles.ctaCard}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Join 1200+ satisfied clients. Get a free consultation and quote for your UPVC window and door project.</p>
            <div className={styles.ctaActions}>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Get a Free Quote <HiOutlineArrowRight />
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
