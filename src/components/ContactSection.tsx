'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import styles from './ContactSection.module.css';

const productOptions = [
  { id: 'casement', label: 'Casement Windows' },
  { id: 'sliding', label: 'Sliding Windows' },
  { id: 'tilt-turn', label: 'Tilt & Turn Windows' },
  { id: 'fixed', label: 'Fixed Windows' },
  { id: 'french-door', label: 'French Doors' },
  { id: 'sliding-door', label: 'Sliding Doors' },
  { id: 'other', label: 'Other' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    products: [] as string[],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleProductToggle = (productId: string) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(productId)
        ? prev.products.filter((p) => p !== productId)
        : [...prev.products, productId],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        from_email: formData.email,
        products_interested: formData.products.map(id => productOptions.find(p => p.id === id)?.label).join(', ') || 'None selected',
        message: formData.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', products: [], message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`section ${styles.contactSection}`} id="contact">
      {/* Background blobs */}
      <div className={`liquid-blob liquid-blob-blue ${styles.blob1}`} />
      <div className={`liquid-blob liquid-blob-ice ${styles.blob2}`} />

      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">💬 Get In Touch</span>
          <h2>Let&apos;s Discuss Your <span className="gradient-text">Window Project</span></h2>
          <p>Reach out for a free consultation and quote. We&apos;d love to hear about your project.</p>
        </motion.div>

        <div className={styles.contactGrid}>
          {/* Contact Form */}
          <motion.div
            className={`glass-card ${styles.formCard}`}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={styles.formTitle}>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name" className={styles.formLabel}>Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    className="input-glass"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-phone" className={styles.formLabel}>Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    className="input-glass"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.formLabel}>Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  className="input-glass"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Product Interest <span className={styles.multiHint}>(select all that apply)</span></label>
                <div className={styles.productGrid}>
                  {productOptions.map((product) => (
                    <label
                      key={product.id}
                      className={`${styles.productChip} ${formData.products.includes(product.id) ? styles.productChipActive : ''}`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.products.includes(product.id)}
                        onChange={() => handleProductToggle(product.id)}
                        className={styles.productCheckbox}
                      />
                      <span className={styles.productChipCheck}>✓</span>
                      <span>{product.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.formLabel}>Your Message</label>
                <textarea
                  id="contact-message"
                  className="input-glass"
                  placeholder="Tell us about your project requirements..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              {submitStatus === 'error' && (
                <p style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>
                  Failed to send message. Please try again or contact us directly.
                </p>
              )}
              <button 
                type="submit" 
                className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className={styles.infoSide}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`glass-card ${styles.infoCard}`}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <HiOutlineLocationMarker />
                  </div>
                  <div>
                    <strong>Visit Us</strong>
                    <p>
                      <a href="https://maps.app.goo.gl/nuCFLsa595HoZBz58" target="_blank" rel="noopener noreferrer">
                        H No.89, Tokare Village, Mumbai - Ahmedabad Road, Virar Phata, Vasai-Virar, Maharashtra 401208
                      </a>
                    </p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <HiOutlinePhone />
                  </div>
                  <div>
                    <strong>Call Us</strong>
                    <p><a href="tel:+919511637830">+91 95116 37830</a></p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <HiOutlineMail />
                  </div>
                  <div>
                    <strong>Email Us</strong>
                    <p><a href="mailto:contact@visionwindowco.com">contact@visionwindowco.com</a></p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <HiOutlineClock />
                  </div>
                  <div>
                    <strong>Business Hours</strong>
                    <p>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919511637830?text=Hi!%20I%27m%20interested%20in%20UPVC%20windows%20and%20doors.%20Can%20you%20share%20more%20details?"
              className={`glass-card ${styles.whatsappCard}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={styles.whatsappIcon} />
              <div>
                <strong>Chat on WhatsApp</strong>
                <span>Get instant replies</span>
              </div>
            </a>

            {/* Map */}
            <div className={`glass-card ${styles.mapCard}`}>
              <a href="https://maps.app.goo.gl/nuCFLsa595HoZBz58" target="_blank" rel="noopener noreferrer" style={{ display: 'block', height: '100%' }}>
                <iframe
                  src="https://maps.google.com/maps?q=19.4598393,72.8846853&hl=en&z=15&output=embed"
                  width="100%"
                  height="180"
                  style={{ border: 0, borderRadius: 'var(--radius-md)', pointerEvents: 'none' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vision Window Co Location"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
