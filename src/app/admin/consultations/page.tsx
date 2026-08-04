import React from 'react';
import styles from '../dashboard.module.css';

const consultations = [
  { id: 'APT-001', customer: 'Anita Desai', type: 'Standard', date: '03 Aug 2026', time: '10:00 AM', status: 'Confirmed', amount: '₹999' },
  { id: 'APT-002', customer: 'Rajesh Kumar', type: '₹51 Quick', date: '03 Aug 2026', time: 'Callback', status: 'Pending Callback', amount: '₹51' },
  { id: 'APT-003', customer: 'Suresh Nair', type: 'Vastu Online', date: '04 Aug 2026', time: '02:00 PM', status: 'Confirmed', amount: '₹1,499' },
  { id: 'APT-004', customer: 'Kavita Joshi', type: 'Standard', date: '05 Aug 2026', time: '11:00 AM', status: 'Confirmed', amount: '₹999' },
  { id: 'VST-001', customer: 'Arjun Reddy', type: 'Home Visit', date: '06 Aug 2026', time: '10:00 AM', status: 'Scheduled', amount: '₹4,999' },
];

const statusColors: Record<string, string> = { 'Confirmed': '#22c55e', 'Pending Callback': '#f59e0b', 'Scheduled': '#3b82f6', 'Completed': '#22c55e' };

export default function AdminConsultations() {
  return (
    <div>
      <h1 className={`${styles.pageTitle} font-serif`}>Consultations</h1>
      <p className={`${styles.pageSubtitle} font-sans`}>Manage appointments and Vastu consultation requests.</p>

      <div className={styles.tableSection}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className="font-sans">ID</th>
                <th className="font-sans">Customer</th>
                <th className="font-sans">Type</th>
                <th className="font-sans">Date</th>
                <th className="font-sans">Time</th>
                <th className="font-sans">Status</th>
                <th className="font-sans">Amount</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map((c) => (
                <tr key={c.id}>
                  <td className="font-sans" style={{ fontWeight: 600 }}>{c.id}</td>
                  <td className="font-sans">{c.customer}</td>
                  <td className="font-sans">{c.type}</td>
                  <td className="font-sans">{c.date}</td>
                  <td className="font-sans">{c.time}</td>
                  <td>
                    <span className={`${styles.badge} font-sans`} style={{ background: `${statusColors[c.status]}20`, color: statusColors[c.status] }}>
                      {c.status}
                    </span>
                  </td>
                  <td className="font-sans" style={{ fontWeight: 600 }}>{c.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
