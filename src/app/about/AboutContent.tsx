'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiOutlineEye, HiOutlineLightBulb, HiOutlineHeart, HiOutlineArrowRight } from 'react-icons/hi';
import styles from './about.module.css';

const timeline = [
  { year: '2013', title: 'Founded', description: 'Vision Window Co was founded by Dattaram Kanade with a vision to bring world-class UPVC solutions to Maharashtra.' },
  { year: '2016', title: 'First Major Project', description: 'Completed our first 100-unit residential complex, establishing our reputation for quality and reliability.' },
  { year: '2019', title: 'Expanded Operations', description: 'Upgraded manufacturing facility with state-of-the-art German machinery for precision fabrication.' },
  { year: '2022', title: 'Industry Recognition', description: 'Recognized as a leading UPVC manufacturer in the Vasai-Virar region with 1500+ completed projects.' },
  { year: '2025', title: 'Innovation Leader', description: 'Launched energy-efficient series with advanced multi-chambered profiles and smart glass options.' },
];

const values = [
  {
    icon: <HiOutlineEye />,
    title: 'Vision',
    description: 'To be the most trusted name in premium UPVC fenestration, transforming every home into a sanctuary of comfort and elegance.',
  },
  {
    icon: <HiOutlineLightBulb />,
    title: 'Innovation',
    description: 'Continuously adopting the latest technologies and materials to deliver superior products that exceed expectations.',
  },
  {
    icon: <HiOutlineHeart />,
    title: 'Customer First',
    description: 'Every product, every service, every interaction is designed with our customers\' satisfaction at the core.',
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className={styles.aboutHeroBg}>
          <div className={`liquid-blob liquid-blob-blue ${styles.blob1}`} />
          <div className={`liquid-blob liquid-blob-ice ${styles.blob2}`} />
        </div>
        <div className={`container ${styles.aboutHeroContent}`}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            🏢 About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Crafting Premium <span className="gradient-text">Windows & Doors</span><br />
            Since 2013
          </motion.h1>
          <motion.p
            className={styles.aboutHeroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            From a small workshop to a trusted manufacturer — our journey is driven by 
            passion for quality and commitment to transforming spaces.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className={`section ${styles.storySection}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <motion.div
              className={styles.storyImage}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720976/about-team_oo7dbu.jpg"
                alt="Vision Window Co Manufacturing"
                width={600}
                height={450}
                className={styles.storyImg}
              />
              <div className={styles.storyImageBadge}>
                <strong>8+</strong>
                <span>Years of Excellence</span>
              </div>
            </motion.div>
            <motion.div
              className={styles.storyContent}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="section-label">Our Story</span>
              <h2>A Legacy of <span className="gradient-text">Quality & Trust</span></h2>
              <p>
                Vision Window Co was born from a simple belief: every home deserves windows 
                that are beautiful, durable, and energy-efficient. Founded by Dattaram Kanade 
                in 2013, we started as a small workshop in Vasai-Virar with a dream to bring 
                world-class UPVC solutions to Maharashtra.
              </p>
              <p>
                Over the years, we&apos;ve invested in cutting-edge German fabrication machinery, 
                trained our craftsmen to the highest standards, and partnered with leading UPVC 
                profile manufacturers to deliver products that stand the test of time.
              </p>
              <p>
                Today, with over 1200 completed projects and 1200+ satisfied clients, we&apos;re 
                proud to be one of the most trusted names in UPVC fenestration across the 
                Mumbai Metropolitan Region.
              </p>
              <Link href="/#contact" className="btn btn-primary" style={{ marginTop: 'var(--space-md)' }}>
                Get in Touch <HiOutlineArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`section ${styles.valuesSection}`}>
        <div className={`liquid-blob liquid-blob-ice ${styles.valueBlob}`} />
        <div className="container">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">💎 Our Values</span>
            <h2>What <span className="gradient-text">Drives Us</span></h2>
          </motion.div>

          <div className={styles.valuesGrid}>
            {values.map((value, i) => (
              <motion.div
                key={i}
                className={`glass-card ${styles.valueCard}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">📅 Our Journey</span>
            <h2>Milestones of <span className="gradient-text">Growth</span></h2>
          </motion.div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`glass-card ${styles.timelineCard}`}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className={styles.timelineDot} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className={`section ${styles.founderSection}`}>
        <div className="container">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">👔 Leadership</span>
            <h2>Meet Our <span className="gradient-text">Founder & CEO</span></h2>
          </motion.div>

          <motion.div
            className={`glass-card ${styles.founderCard}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}
          >
            <div style={{ display: 'flex', gap: 'var(--space-xl)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <div className={styles.founderAvatar} style={{ flexShrink: 0, width: 140, height: 140, fontSize: 0, overflow: 'hidden' }}>
                <Image
                  src="https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781721408/Transform_this_into_a_professional_202605271903_udolel_1_zrghdc.jpg"
                  alt="Dattaram Madhukar Kanade"
                  width={200}
                  height={200}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: '50%' }}
                />
              </div>
              <div className={styles.founderInfo} style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: 'var(--space-xs)' }}>Dattaram Madhukar Kanade</h3>
                <span className={styles.founderRole} style={{ color: 'var(--color-blue)', fontWeight: 600, display: 'block', marginBottom: 'var(--space-md)', fontSize: '1.1rem' }}>CEO & Founder, Vision Window Co.</span>
                <p style={{ lineHeight: 1.7 }}>
                  A 42-year-old corporate professional turned entrepreneur, Dattaram Madhukar Kanade 
                  has spent over 20 years building extensive experience across Government as well as Project Sales, 
                  Project Management, and Business Development. Over his career, he has successfully managed premium 
                  portfolios for prominent Indian corporate and industrial brands.
                </p>
                <Link href="/vcard/dattaram-kanade" className="btn btn-primary" style={{ marginTop: 'var(--space-md)' }}>
                  View Digital Business Card <HiOutlineArrowRight />
                </Link>
              </div>
            </div>

            <div className="career-profile" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: 'var(--space-xl)' }}>
              <h4 style={{ marginBottom: 'var(--space-sm)', fontSize: '1.3rem' }}>Professional Career Timeline</h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-lg)', lineHeight: 1.6 }}>
                His career reflects a steady progression from ground-level direct sales to senior management, 
                culminating in enterprise ownership:
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <li style={{ display: 'flex', gap: 'var(--space-md)' }}>
                  <div style={{ color: 'var(--color-blue)', paddingTop: 4, fontSize: '1.2rem' }}><HiOutlineArrowRight /></div>
                  <div>
                    <strong style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Eureka Forbes Ltd.</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: 6, lineHeight: 1.5 }}>Started his professional career as a Sales Executive, building foundational skills in direct consumer-facing corporate sales and business acquisition.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 'var(--space-md)' }}>
                  <div style={{ color: 'var(--color-blue)', paddingTop: 4, fontSize: '1.2rem' }}><HiOutlineArrowRight /></div>
                  <div>
                    <strong style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Koochie Play Systems</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: 6, lineHeight: 1.5 }}>Managed projects and business solutions for Koochie Play Systems Private Limited, a multinational outdoor playground and fitness equipment brand.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 'var(--space-md)' }}>
                  <div style={{ color: 'var(--color-blue)', paddingTop: 4, fontSize: '1.2rem' }}><HiOutlineArrowRight /></div>
                  <div>
                    <strong style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Somany Ceramics (Somany Tiles Ltd.)</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: 6, lineHeight: 1.5 }}>Handled corporate and institutional sales channels for one of India&apos;s leading ceramic tile and decor manufacturers.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 'var(--space-md)' }}>
                  <div style={{ color: 'var(--color-blue)', paddingTop: 4, fontSize: '1.2rem' }}><HiOutlineArrowRight /></div>
                  <div>
                    <strong style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Aparna Enterprises Ltd.</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: 6, lineHeight: 1.5 }}>Shifted deep focus into the premium building materials and architectural sector (such as uPVC window and door systems).</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 'var(--space-md)' }}>
                  <div style={{ color: 'var(--color-blue)', paddingTop: 4, fontSize: '1.2rem' }}><HiOutlineArrowRight /></div>
                  <div>
                    <strong style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Apar Industries Ltd.</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: 6, lineHeight: 1.5 }}>Gained experience in institutional industrial sales with APAR Industries, an established global player in specialized conductor wires and cable networks.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
