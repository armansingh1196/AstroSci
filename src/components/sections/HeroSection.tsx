import React from 'react';
import styles from './HeroSection.module.css';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Sun, Star } from 'lucide-react';

const zodiacSigns = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

export default function HeroSection() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={`${styles.heroContent} slide-in-left`}>
            <div className={`${styles.heroLabel} font-sans`}>
              <span></span>
              Trusted by 10 Lakh+ Customers
            </div>
            <h1 className="font-serif">
              Accurate Predictions For <em>Love, Career</em> & More!
            </h1>
            <p className="font-sans">
              Feeling stuck in life or lost about your future? AstroSci&apos;s Accurate Vedic
              Kundli Report reveals answers hidden in your Janam Kundli and shows when your luck
              will transform.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/services/kundali">
                <Button variant="primary">
                  Get Your Kundli Report →
                </Button>
              </Link>
              <Link href="/services/consultation">
                <Button variant="outline">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>

          <div className={`${styles.heroVisual} slide-in-right`}>
            <div className={styles.aiImageWrapper}>
              <img 
                src="/images/vedic_chakra.png" 
                alt="Vedic Astrology Chakra" 
                className={styles.chakraImage}
              />
            </div>
          </div>
        </div>
      </section>

      <div className={`${styles.statsBanner} scale-in`}>
        <div className={styles.statItem}>
          <h3 className="font-body">10 Lakh+</h3>
          <p className="font-sans">Reports Delivered</p>
        </div>
        <div className={styles.divider} />
        <div className={styles.statItem}>
          <h3 className="font-body">4.9/5 <Star size={24} fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'text-bottom' }}/></h3>
          <p className="font-sans">Average Rating</p>
        </div>
        <div className={styles.divider} />
        <div className={styles.statItem}>
          <h3 className="font-body">15+ Years</h3>
          <p className="font-sans">Experience</p>
        </div>
        <div className={styles.divider} />
        <div className={styles.statItem}>
          <h3 className="font-body">100%</h3>
          <p className="font-sans">Personalized</p>
        </div>
      </div>
    </>
  );
}
