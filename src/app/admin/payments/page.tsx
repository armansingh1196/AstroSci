import React from 'react';
import styles from '../dashboard.module.css';

const payments = [
  { id: 'PAY-001', orderId: 'ORD-001', customer: 'Priya Sharma', amount: '₹2,999', method: 'UPI', status: 'Success', date: '01 Aug 2026' },
  { id: 'PAY-002', orderId: 'ORD-002', customer: 'Vikram Singh', amount: '₹2,999', method: 'Card', status: 'Success', date: '31 Jul 2026' },
  { id: 'PAY-003', orderId: 'APT-001', customer: 'Anita Desai', amount: '₹999', method: 'UPI', status: 'Success', date: '31 Jul 2026' },
  { id: 'PAY-004', orderId: 'APT-002', customer: 'Rajesh Kumar', amount: '₹51', method: 'UPI', status: 'Success', date: '30 Jul 2026' },
  { id: 'PAY-005', orderId: 'ORD-003', customer: 'Kavita Joshi', amount: '₹299', method: 'Net Banking', status: 'Success', date: '30 Jul 2026' },
];

export default function AdminPayments() {
  return (
    <div>
      <h1 className={`${styles.pageTitle} font-serif`}>Payments</h1>
      <p className={`${styles.pageSubtitle} font-sans`}>Track all payment transactions and invoices.</p>

      <div className={styles.tableSection}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className="font-sans">Payment ID</th>
                <th className="font-sans">Order/Appt ID</th>
                <th className="font-sans">Customer</th>
                <th className="font-sans">Amount</th>
                <th className="font-sans">Method</th>
                <th className="font-sans">Status</th>
                <th className="font-sans">Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.id}>
                  <td className="font-sans" style={{ fontWeight: 600 }}>{p.id}</td>
                  <td className="font-sans">{p.orderId}</td>
                  <td className="font-sans">{p.customer}</td>
                  <td className="font-sans" style={{ fontWeight: 600 }}>{p.amount}</td>
                  <td className="font-sans">{p.method}</td>
                  <td>
                    <span className={`${styles.badge} font-sans`} style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e' }}>
                      {p.status}
                    </span>
                  </td>
                  <td className="font-sans">{p.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
