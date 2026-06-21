'use client';

import { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView, useMotionValue, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineShieldCheck, 
  HiOutlineSun, 
  HiOutlineVolumeOff, 
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiOutlineStar
} from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import ContactSection from '@/components/ContactSection';
import HomeJsonLd from '@/components/HomeJsonLd';
import styles from './page.module.css';

const Window3D = dynamic(() => import('@/components/Window3D'), { 
  ssr: false,
  loading: () => (
    <div style={{
      width: '100%',
      height: '100%',
      minHeight: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
    }}>
      <div style={{
        position: 'relative',
        width: '60px',
        height: '80px',
        border: '4px solid #1a1a1a',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 0 25px rgba(0,0,0,0.1)',
        background: 'transparent',
        marginBottom: '20px'
      }}>
        {/* Left Fixed Pane */}
        <div style={{ 
          position: 'absolute', top: 0, bottom: 0, left: 0, width: '52%', 
          borderRight: '3px solid #1a1a1a',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 100%)',
          zIndex: 1
        }} />
        
        {/* Right Sliding Pane */}
        <div style={{ 
          position: 'absolute', top: 0, bottom: 0, right: 0, width: '52%', 
          borderLeft: '3px solid #1a1a1a',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 100%)',
          zIndex: 2,
          animation: 'windowSlide 2s infinite ease-in-out',
          display: 'flex',
          alignItems: 'center'
        }}>
          {/* Handle */}
          <div style={{ width: '3px', height: '14px', background: '#1a1a1a', marginLeft: '3px', borderRadius: '2px' }} />
        </div>
      </div>
      <style>{`
        @keyframes windowSlide {
          0%, 15%, 100% { transform: translateX(0); }
          40%, 75% { transform: translateX(-85%); }
        }
      `}</style>
    </div>
  ),
});

// A small component to track scroll position for each feature topic
function FeatureTopic({ 
  index, 
  feature, 
  activeFeature, 
  setActiveFeature 
}: { 
  index: number, 
  feature: any, 
  activeFeature: number | null, 
  setActiveFeature: (val: number | null) => void 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  
  useEffect(() => {
    if (isInView && setActiveFeature) {
      setActiveFeature(index);
    }
  }, [isInView, index, setActiveFeature]);

  return (
    <div 
      ref={ref} 
      className={styles.featureTopic} 
      data-active={activeFeature === index}
    >
      <div className={styles.featureIcon}>{feature.icon}</div>
      <h3 className={styles.featureTitle}>{feature.title}</h3>
      <p className={styles.featureDesc}>{feature.description}</p>
    </div>
  );
}

const features = [
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Weather Resistant',
    description: 'Engineered to withstand extreme temperatures, rain, and humidity without warping or fading.',
  },
  {
    icon: <HiOutlineSun />,
    title: 'Energy Efficient',
    description: 'Multi-chambered profiles with double glazing reduce heat transfer by up to 70%, cutting energy costs.',
  },
  {
    icon: <HiOutlineVolumeOff />,
    title: 'Sound Insulation',
    description: 'Advanced acoustic design reduces outside noise by up to 40dB, creating peaceful interiors.',
  },
  {
    icon: <HiOutlineSparkles />,
    title: 'Low Maintenance',
    description: 'Never needs painting or polishing. Simply wipe clean for a lifetime of elegant performance.',
  },
];

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '1200+', label: 'Projects Completed' },
  { value: '1200+', label: 'Happy Clients' },
  { value: '15+', label: 'Product Lines' },
];

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Homeowner, Mumbai',
    text: 'Vision Window Co transformed our apartment with their UPVC windows. The noise reduction is incredible — we can finally sleep peacefully! Premium quality at a fair price.',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    role: 'Interior Designer',
    text: 'I recommend Vision Window Co to all my clients. Their attention to detail, modern designs, and professional installation set them apart from the competition.',
    rating: 5,
  },
  {
    name: 'Sunil Patil',
    role: 'Builder, Vasai-Virar',
    text: 'We\'ve used Vision Window Co for multiple residential projects. Their products are top-tier, delivery is always on time, and the after-sales service is excellent.',
    rating: 5,
  },
];

const productShowcase = [
  { name: 'Casement Windows', image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/casement-window_lctpxt.jpg', href: '/products/casement-windows' },
  { name: 'Sliding Windows', image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/sliding-window_zdnymm.jpg', href: '/products/sliding-windows' },
  { name: 'French Doors', image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/french-door_hp6aee.jpg', href: '/products/french-doors' },
];

// Animated Counter Component
function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      className={styles.statItem}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </motion.div>
  );
}

export default function HomePage() {
  const [introMode, setIntroMode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Detect mobile
    const mobile = window.innerWidth <= 1024;
    setIsMobile(mobile);
  }, []);
  const gridRef = useRef<HTMLDivElement>(null);
  const featureGridRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLElement>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  useEffect(() => {
    if (introMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Skip intro if page loads already scrolled (e.g. F5 while scrolled down)
    if (window.scrollY > 100) {
      setIntroMode(false);
    }
  }, [introMode]);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  
  // Desktop & Mobile Frame Sizes
  const frameWidthDesktop = useTransform(scrollYProgress, [0, 0.3], ['65vw', '100vw']);
  const frameHeightDesktop = useTransform(scrollYProgress, [0, 0.3], ['70vh', '100vh']);
  const frameWidthMobile = useTransform(scrollYProgress, [0, 0.3], ['92vw', '100vw']);
  const frameHeightMobile = useTransform(scrollYProgress, [0, 0.3], ['85vh', '100vh']);
  
  const frameWidth = isMobile ? frameWidthMobile : frameWidthDesktop;
  const frameHeight = isMobile ? frameHeightMobile : frameHeightDesktop;
  const frameRadius = useTransform(scrollYProgress, [0, 0.3], ['40px', '0px']);
  
  // Text fades out and scales up early in the scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);

  // Scroll indicator state for complete unmounting
  const [isScrolled, setIsScrolled] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.005 && !isScrolled) setIsScrolled(true);
    else if (latest <= 0.005 && isScrolled) setIsScrolled(false);
  });

  // Track feature scroll for pie chart
  const { scrollYProgress: featureScrollY } = useScroll({
    target: featuresSectionRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    return featureScrollY.on("change", (latest) => {
      let newIndex = Math.min(3, Math.max(0, Math.floor(latest * 4)));
      if (latest === 1) newIndex = 3;
      setActiveFeature(newIndex);
    });
  }, [featureScrollY]);

  return (
    <>
      <HomeJsonLd />
      {/* ========== HERO SECTION ========== */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroBgElements}>
          <div className={`${styles.liquidBlob} ${styles.liquidBlobBlue} ${styles.heroBlob1}`} />
          <div className={`${styles.liquidBlob} ${styles.liquidBlobIce} ${styles.heroBlob2}`} />
          <div className={`${styles.liquidBlob} ${styles.liquidBlobWhite} ${styles.heroBlob3}`} />
          <div className={styles.heroGrid} />
        </div>

        {/* Mobile Cinematic Hero Background (Unchanged) */}
        {/* Desktop & Mobile Cinematic Content Container */}
        <div className={styles.heroSticky}>
          <motion.div 
            className={`container ${styles.heroContent}`}
            style={{ y: textY, opacity: textOpacity, scale: textScale }}
          >
            <motion.span
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ✨ Premium UPVC Solutions
            </motion.span>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Elevate Your Spaces with{' '}
              <span className="gradient-text">Premium UPVC</span>{' '}
              Windows & Doors
            </motion.h1>

            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Experience the perfect blend of elegance, energy efficiency, and durability. 
              Crafted for homes that deserve nothing but the best.
            </motion.p>

            <motion.div
              className={styles.heroCtas}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Get a Free Quote <HiOutlineArrowRight />
              </Link>
              <Link href="/products" className="btn btn-secondary btn-lg">
                Explore Products
              </Link>
            </motion.div>

            <motion.div
              className={styles.heroTrust}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className={styles.trustStars}>
                {[...Array(5)].map((_, i) => (
                  <HiOutlineStar key={i} className={styles.starFill} />
                ))}
              </div>
              <span>Trusted by 1200+ homeowners across Maharashtra</span>
            </motion.div>
          </motion.div>

          {/* Expanding Cinematic Frame (Desktop & Mobile) */}
          <motion.div
            className={styles.heroVisualFrame}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: frameWidth,
              height: frameHeight,
              borderRadius: frameRadius,
            }}
          >
            <Image
              src="https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1600,c_limit/v1781720963/luxury-villa_blzsse.jpg"
              alt="Luxury Villa"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
              priority
            />
            <div className={styles.heroVisualOverlay} />
          </motion.div>
          {/* Unified Minimalist Scroll Indicator (Moved inside sticky container) */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                className={styles.unifiedScrollIndicator}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.scrollText}>SCROLL</span>
                <div className={styles.minimalScrollLineContainer}>
                  <motion.div 
                    className={styles.minimalScrollLine}
                    animate={{ y: [0, 60] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ========== FEATURES SECTION (PIE CHART) ========== */}
      <section ref={featuresSectionRef} id="features" className={styles.featuresPie}>
        <div className={styles.pieStickyContainer}>
          <div className={styles.featureBlob} />
          <div className={styles.featureBlob2} />
          
          <div className={styles.pieCenter}>
            <div 
              ref={featureGridRef} 
              className={styles.pieWindowPlaceholder}
            >
              <div className={styles.featureVisualGlow} style={{ visibility: 'visible' }} />
              <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 10 }}>
                <Window3D activeFeature={activeFeature} skipIntro={true} />
              </div>
            </div>

            {/* Circular Feature Nodes */}
            {features.map((feature, i) => (
              <div 
                key={i}
                className={`${styles.pieNode} ${activeFeature === i ? styles.pieNodeActive : ''} ${styles[`pieNode${i}`]}`}
              >
                <div className={styles.pieIconWrapper}>
                   <div className={styles.pieIcon}>{feature.icon}</div>
                </div>
                <div className={styles.pieContent}>
                  <h3 className={styles.pieTitle}>{feature.title}</h3>
                  <p className={styles.pieDesc}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsContainer}`}>
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <AnimatedCounter key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRODUCTS SHOWCASE ========== */}
      <section className={`section ${styles.showcase}`}>
        <div className="container">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">🪟 Our Products</span>
            <h2>Premium <span className="gradient-text">UPVC Collection</span></h2>
            <p>Explore our range of beautifully crafted windows and doors</p>
          </motion.div>

          <div className={styles.showcaseGrid}>
            {productShowcase.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Link href={product.href} className={`glass-card ${styles.showcaseCard}`}>
                  <div className={styles.showcaseImageWrap}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className={styles.showcaseImage}
                    />
                  </div>
                  <div className={styles.showcaseInfo}>
                    <h3>{product.name}</h3>
                    <span className={styles.showcaseLink}>
                      Explore <HiOutlineArrowRight />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.showcaseCta}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/products" className="btn btn-outline">
              View All Products <HiOutlineArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className={`section ${styles.testimonials}`}>
        <div className={`liquid-blob liquid-blob-blue ${styles.testBlob}`} />
        <div className="container">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">⭐ Testimonials</span>
            <h2>What Our <span className="gradient-text">Clients Say</span></h2>
            <p>Real stories from homeowners who transformed their spaces</p>
          </motion.div>

          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className={`glass-card ${styles.testimonialCard}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <FaQuoteLeft className={styles.quoteIcon} />
                <p className={styles.testimonialText}>{t.text}</p>
                <div className={styles.testimonialStars}>
                  {[...Array(t.rating)].map((_, j) => (
                    <HiOutlineStar key={j} className={styles.starFill} />
                  ))}
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Transform Your Home?</h2>
            <p>Get a free consultation and personalized quote for your UPVC window & door project.</p>
            <div className={styles.ctaActions}>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Get a Free Quote <HiOutlineArrowRight />
              </Link>
              <a href="tel:+919511637830" className="btn btn-secondary btn-lg">
                Call +91 95116 37830
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <ContactSection />
      
      {/* ========== FULLSCREEN 3D INTRO OVERLAY ========== */}
      <AnimatePresence>
        {introMode && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999999,
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '100%', height: '100%', maxWidth: '1000px', maxHeight: '1000px' }}>
              <Window3D onIntroFinish={() => setIntroMode(false)} skipIntro={false} />
            </div>
            <motion.div 
              style={{ position: 'absolute', bottom: '15%', textAlign: 'center' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="gradient-text" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>Vision Window Co</h2>
              <p style={{ color: 'var(--text-dark)', letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.7 }}>Crafting Excellence</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
