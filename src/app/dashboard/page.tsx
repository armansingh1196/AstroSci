'use client';

import React from 'react';
import styles from './dashboard.module.css';
import { FileText, Sparkles, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function UserDashboardOverview() {
  // In a real app, fetch these from Supabase based on the logged-in user
  const recentOrders = [
    { id: 'ORD-001', service: 'Premium Kundli', status: 'In Progress', date: '01 Aug 2026' },
  ];

  const upcomingConsultations = [
    { id: 'APT-001', service: 'Astrology Consultation', date: '05 Aug 2026', time: '10:00 AM' },
  ];

  return (
    <div>
      <h1 className={`${styles.pageTitle} font-serif`}>Overview</h1>
      <p className={`${styles.pageSubtitle} font-sans`}>Here is a summary of your recent activity and upcoming appointments.</p>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}><FileText size={32} color="var(--primary-gold)" /></div>
          <div>
            <p className={`${styles.statLabel} font-sans`}>Active Orders</p>
            <h3 className={`${styles.statValue} font-serif`}>1</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}><Sparkles size={32} color="var(--primary-gold)" /></div>
          <div>
            <p className={`${styles.statLabel} font-sans`}>Upcoming Consultations</p>
            <h3 className={`${styles.statValue} font-serif`}>1</h3>
          </div>
        </div>
      </div>

      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <h3 className="font-serif">Recent Orders</h3>
          <Link href="/dashboard/orders" className={`${styles.viewAll} font-sans`}>View All →</Link>
        </div>
        
        {recentOrders.length > 0 ? (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className="font-sans">Order ID</th>
                  <th className="font-sans">Service</th>
                  <th className="font-sans">Date</th>
                  <th className="font-sans">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="font-sans" style={{ fontWeight: 600 }}>{order.id}</td>
                    <td className="font-sans">{order.service}</td>
                    <td className="font-sans">{order.date}</td>
                    <td>
                      <span className={`${styles.badge} font-sans`} style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles.emptyState}>
            <AlertCircle size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
            <p className="font-sans">You don&apos;t have any recent orders.</p>
          </div>
        )}
      </div>

      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <h3 className="font-serif">Upcoming Consultations</h3>
          <Link href="/dashboard/consultations" className={`${styles.viewAll} font-sans`}>View All →</Link>
        </div>

        {upcomingConsultations.length > 0 ? (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className="font-sans">ID</th>
                  <th className="font-sans">Service</th>
                  <th className="font-sans">Date</th>
                  <th className="font-sans">Time</th>
                </tr>
              </thead>
              <tbody>
                {upcomingConsultations.map((apt) => (
                  <tr key={apt.id}>
                    <td className="font-sans" style={{ fontWeight: 600 }}>{apt.id}</td>
                    <td className="font-sans">{apt.service}</td>
                    <td className="font-sans">{apt.date}</td>
                    <td className="font-sans">{apt.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles.emptyState}>
            <AlertCircle size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
            <p className="font-sans">You don&apos;t have any upcoming consultations.</p>
          </div>
        )}
      </div>
    </div>
  );
}
