'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineGlobe,
  HiOutlineDownload,
} from 'react-icons/hi';
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaStore } from 'react-icons/fa';
import styles from './vcard.module.css';

const contactInfo = {
  name: 'Dattaram Kanade',
  title: 'Founder',
  company: 'Vision Window Co',
  phone: '+91 95116 37830',
  email: 'contact@visionwindowco.com',
  website: 'https://visionwindowco.com',
  address: 'H No.89, Tokare Village, Mumbai - Ahmedabad Road, Virar Phata, Vasai-Virar, Maharashtra 401208',
  whatsapp: 'https://wa.me/919511637830',
  social: {
    linkedin: '#',
    instagram: '#',
    indiamart: 'https://www.indiamart.com/visionwindowco/',
  },
};

function generateVCF() {
  const vcf = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.company}
TITLE:${contactInfo.title}
TEL;TYPE=CELL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
ADR;TYPE=WORK:;;${contactInfo.address};;;;
URL;TYPE=IndiaMART:${contactInfo.social.indiamart}
END:VCARD`;

  const blob = new Blob([vcf], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Dattaram_Kanade_VisionWindowCo.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function VCardContent() {
  return (
    <section className={styles.vcardSection}>
      {/* Background */}
      <div className={styles.vcardBg}>
        <div className={`liquid-blob liquid-blob-blue ${styles.blob1}`} />
        <div className={`liquid-blob liquid-blob-ice ${styles.blob2}`} />
        <div className={`liquid-blob liquid-blob-white ${styles.blob3}`} />
      </div>

      <div className={`container ${styles.vcardContainer}`}>
        <motion.div
          className={styles.vcardCard}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Header / Cover */}
          <div className={styles.vcardHeader}>
            <span className={styles.headerBrand}>Vision Window Co.</span>
            <div className={styles.headerPattern} />
            <div className={styles.vcardAvatarWrap}>
              <div className={styles.vcardAvatar} style={{ overflow: 'hidden', fontSize: 0 }}>
                <Image
                  src="https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781721408/Transform_this_into_a_professional_202605271903_udolel_1_zrghdc.jpg"
                  alt="Dattaram Kanade"
                  width={200}
                  height={200}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: '50%' }}
                  priority
                />
              </div>
              <div className={styles.vcardAvatarGlow} />
            </div>
          </div>

          {/* Identity */}
          <div className={styles.vcardIdentity}>
            <h1 className={styles.vcardName}>{contactInfo.name}</h1>
            <span className={styles.vcardTitle}>{contactInfo.title}</span>
            <div className={styles.vcardCompany}>
              <Image
                src="https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720976/logo_ml0tyg.jpg"
                alt="Vision Window Co"
                width={24}
                height={24}
                className={styles.vcardCompanyLogo}
              />
              <span>{contactInfo.company}</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className={styles.quickActions}>
            <a href={`tel:${contactInfo.phone}`} className={styles.quickAction}>
              <HiOutlinePhone />
              <span>Call</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className={styles.quickAction}>
              <HiOutlineMail />
              <span>Email</span>
            </a>
            <a href={contactInfo.whatsapp} className={styles.quickAction} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
            <a href={contactInfo.website} className={styles.quickAction} target="_blank" rel="noopener noreferrer">
              <HiOutlineGlobe />
              <span>Website</span>
            </a>
          </div>

          {/* Contact Details */}
          <div className={styles.vcardDetails}>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><HiOutlinePhone /></div>
              <div className={styles.detailContent}>
                <span className={styles.detailLabel}>Phone</span>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><HiOutlineMail /></div>
              <div className={styles.detailContent}>
                <span className={styles.detailLabel}>Email</span>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><HiOutlineLocationMarker /></div>
              <div className={styles.detailContent}>
                <span className={styles.detailLabel}>Address</span>
                <a href="https://maps.app.goo.gl/nuCFLsa595HoZBz58" target="_blank" rel="noopener noreferrer">
                  {contactInfo.address}
                </a>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}><HiOutlineGlobe /></div>
              <div className={styles.detailContent}>
                <span className={styles.detailLabel}>Website</span>
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer">visionwindowco.com</a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className={styles.vcardSocial}>
            <span className={styles.socialTitle}>Connect</span>
            <div className={styles.socialGrid}>
              <a href={contactInfo.social.linkedin} className={styles.socialBtn} aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href={contactInfo.social.instagram} className={styles.socialBtn} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href={contactInfo.social.indiamart} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="IndiaMART">
                <FaStore />
              </a>
              <a href={contactInfo.whatsapp} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Save Contact Button */}
          <button
            className={styles.saveContactBtn}
            onClick={generateVCF}
            id="save-contact-btn"
          >
            <HiOutlineDownload />
            Save Contact
          </button>
        </motion.div>
      </div>
    </section>
  );
}
