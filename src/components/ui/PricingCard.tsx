import React from 'react';
import styles from './PricingCard.module.css';
import Button from './Button';

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function PricingCard({
  name,
  description,
  price,
  originalPrice,
  features,
  popular = false,
  ctaText = 'Get Started',
  onCtaClick,
}: PricingCardProps) {
  return (
    <div className={`${styles.card} glass-card ${popular ? styles.popular : ''}`}>
      {popular && <div className={`${styles.popularBadge} font-sans`}>Most Popular</div>}
      <h3 className={`${styles.cardName} font-serif`}>{name}</h3>
      <p className={`${styles.cardDesc} font-sans`}>{description}</p>
      <div className={styles.priceRow}>
        <span className={`${styles.price} font-serif`}>₹{price.toLocaleString('en-IN')}</span>
        <span className={`${styles.originalPrice} font-sans`}>₹{originalPrice.toLocaleString('en-IN')}</span>
      </div>
      <div className={styles.features}>
        {features.map((feature, i) => (
          <div key={i} className={styles.feature}>
            <span className={styles.featureCheck}>✓</span>
            <span className="font-sans">{feature}</span>
          </div>
        ))}
      </div>
      <Button
        variant={popular ? 'primary' : 'outline'}
        className={styles.cardCta}
        onClick={onCtaClick}
        style={{ width: '100%' }}
      >
        {ctaText}
      </Button>
    </div>
  );
}
