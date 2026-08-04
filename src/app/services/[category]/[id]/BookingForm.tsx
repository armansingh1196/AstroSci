'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function BookingForm({ category, tier, price }: { category: string, tier: string, price: number }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment / routing
    setTimeout(() => {
      alert('Order Placed Successfully! (Payment Gateway Integration Pending)');
      router.push('/dashboard');
    }, 1500);
  };

  const renderFields = () => {
    if (category === 'kundali') {
      return (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <label className="font-sans" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Full Name</label>
            <input type="text" required style={inputStyle} placeholder="John Doe" />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label className="font-sans" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Date of Birth</label>
            <input type="date" required style={inputStyle} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label className="font-sans" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Time of Birth</label>
            <input type="time" required style={inputStyle} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label className="font-sans" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Place of Birth</label>
            <input type="text" required style={inputStyle} placeholder="City, State" />
          </div>
        </>
      );
    }
    
    if (category === 'consultation') {
      return (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <label className="font-sans" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Full Name</label>
            <input type="text" required style={inputStyle} placeholder="John Doe" />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label className="font-sans" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Phone Number</label>
            <input type="tel" required style={inputStyle} placeholder="+91 98765 00000" />
          </div>
          {tier !== 'quick' && (
            <div style={{ marginBottom: '1rem' }}>
              <label className="font-sans" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Preferred Date</label>
              <input type="date" required style={inputStyle} />
            </div>
          )}
          <div style={{ marginBottom: '1rem' }}>
            <label className="font-sans" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Topic of Concern</label>
            <select required style={inputStyle}>
              <option value="career">Career & Wealth</option>
              <option value="love">Love & Marriage</option>
              <option value="health">Health</option>
              <option value="other">Other</option>
            </select>
          </div>
        </>
      );
    }

    if (category === 'vastu') {
      return (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <label className="font-sans" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Full Name</label>
            <input type="text" required style={inputStyle} placeholder="John Doe" />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label className="font-sans" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Property Type</label>
            <select required style={inputStyle}>
              <option value="home">Residential / Home</option>
              <option value="office">Commercial / Office</option>
              <option value="factory">Factory / Industrial</option>
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label className="font-sans" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Property Address</label>
            <textarea required rows={3} style={inputStyle} placeholder="Enter full address..."></textarea>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderFields()}
      <div style={{ marginTop: '2rem' }}>
        <Button variant="primary" style={{ width: '100%' }} disabled={loading}>
          {loading ? 'Processing...' : `Pay ₹${price}`}
        </Button>
      </div>
    </form>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.8rem 1rem',
  background: 'rgba(0,0,0,0.2)',
  border: '1px solid var(--border-gold)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--text-light)',
  fontFamily: 'inherit'
};
