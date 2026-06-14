import Link from 'next/link';
import Image from 'next/image';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/our-work', label: 'Our Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
];

const products = [
  { href: '/products#casement', label: 'Casement Windows' },
  { href: '/products#sliding', label: 'Sliding Windows' },
  { href: '/products#tilt-turn', label: 'Tilt & Turn Windows' },
  { href: '/products#fixed', label: 'Fixed Windows' },
  { href: '/products#doors', label: 'UPVC Doors' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGlow} />
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <Image
                src="/images/logo.png"
                alt="Vision Window Co"
                width={44}
                height={44}
                className={styles.footerLogoImage}
              />
              <div>
                <span className={styles.footerLogoName}>Vision Window Co</span>
                <span className={styles.footerLogoTag}>Premium UPVC Solutions</span>
              </div>
            </Link>
            <p className={styles.footerDesc}>
              Crafting premium UPVC windows and doors that transform your spaces with elegance, 
              energy efficiency, and lasting quality.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook" className={styles.socialLink}><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" className={styles.socialLink}><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}><FaLinkedinIn /></a>
              <a href="https://wa.me/919511637830" aria-label="WhatsApp" className={styles.socialLink} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Products</h4>
            <ul className={styles.footerLinks}>
              {products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <HiOutlineLocationMarker className={styles.contactIcon} />
                <a href="https://maps.app.goo.gl/nuCFLsa595HoZBz58" target="_blank" rel="noopener noreferrer">
                  H No.89, Tokare Village, Mumbai - Ahmedabad Road, Virar Phata, Vasai-Virar, Maharashtra 401208
                </a>
              </li>
              <li className={styles.contactItem}>
                <HiOutlinePhone className={styles.contactIcon} />
                <a href="tel:+919511637830">+91 95116 37830</a>
              </li>
              <li className={styles.contactItem}>
                <HiOutlineMail className={styles.contactIcon} />
                <a href="mailto:contact@visionwindowco.com">contact@visionwindowco.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Vision Window Co. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <Link href="/vcard/dattaram-kanade">Founder&apos;s VCard</Link>
            <span className={styles.divider}>|</span>
            <Link href="/about">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
