'use client';

import React from 'react';
import Link from 'next/link';
import styles from './ServiceCoverflow.module.css';

interface CarouselItem {
  id: string;
  title: string;
  shortDescription: string;
  href: string;
  bgImage: string;
}

const items: CarouselItem[] = [
  {
    id: 'kundali',
    title: 'Kundli Report',
    shortDescription: 'Detailed Janam Kundli analysis for career, love, and life predictions.',
    href: '/services/kundali',
    bgImage: '/images/simple_kundli.png',
  },
  {
    id: 'consultation',
    title: 'Consultation',
    shortDescription: 'Book a 1-on-1 session with AstroSci for personalized guidance.',
    href: '/services/consultation',
    bgImage: '/images/simple_consultation.png',
  },
  {
    id: 'vastu',
    title: 'Vastu Analysis',
    shortDescription: 'Transform your home or office energy with expert Vastu assessment.',
    href: '/services/vastu',
    bgImage: '/images/simple_vastu.png',
  }
];

export default function ServiceCoverflow() {
  return (
    <div className={styles.gridContainer}>
      {items.map((item) => (
        <Link key={item.id} href={item.href} style={{ textDecoration: 'none' }}>
          <div className={styles.cardWrapper}>
            <div 
              className={styles.cardImageSection}
              style={{ backgroundImage: `url('${item.bgImage}')` }}
            />
            <div className={styles.cardTextSection}>
              <div className={styles.textContent}>
                <h3 className="font-serif">{item.title}</h3>
                <p className="font-sans">{item.shortDescription}</p>
              </div>
              <span className={styles.arrowIcon}>→</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
