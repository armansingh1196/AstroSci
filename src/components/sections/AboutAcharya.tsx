import React from 'react';
import Link from 'next/link';
import styles from './AboutAcharya.module.css';
import { GraduationCap, Book, Globe, Star, User } from 'lucide-react';

export default function AboutAcharya() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <div className={styles.imagePlaceholder}></div>
          <div className={styles.experienceBadge}>
            <h4 className="font-serif">15+</h4>
            <p className="font-sans">Years Experience</p>
          </div>
        </div>

        <div className={styles.content}>
          <h2 className="font-serif">
            Meet <em>AstroSci</em>
          </h2>
          <p className="font-sans">
            With over 15 years of dedicated practice in Vedic Jyotish Shastra, AstroSci
            has guided more than 10 lakh individuals towards clarity, peace, and success. His
            unique approach combines ancient Vedic wisdom with modern-day practicality, making
            astrology accessible and actionable for everyone.
          </p>

          <div className={styles.credentials}>
            <div className={styles.credential}>
              <GraduationCap size={20} />
              <span className="font-sans">Jyotish Acharya Certified</span>
            </div>
            <div className={styles.credential}>
              <Book size={20} />
              <span className="font-sans">Vastu Shastra Expert</span>
            </div>
            <div className={styles.credential}>
              <Globe size={20} />
              <span className="font-sans">International Clientele</span>
            </div>
            <div className={styles.credential}>
              <Star size={20} />
              <span className="font-sans">4.9/5 Average Rating</span>
            </div>
          </div>

          <Link href="/about" className={`${styles.readMore} font-sans`}>
            Read Full Bio <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
