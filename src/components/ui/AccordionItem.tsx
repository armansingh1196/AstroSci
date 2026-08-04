'use client';

import React, { useState } from 'react';
import styles from './AccordionItem.module.css';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export default function AccordionItem({ question, answer, isOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button
        className={`${styles.trigger} font-sans`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>
      <div className={styles.content} style={{ maxHeight: open ? '500px' : '0' }}>
        <p className="font-sans">{answer}</p>
      </div>
    </div>
  );
}
