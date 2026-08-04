import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const variantClass = variant === 'primary' ? styles.btnPrimary : styles.btnOutline;
  
  return (
    <button 
      className={`${styles.btn} ${variantClass} font-sans ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
