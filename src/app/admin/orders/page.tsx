import React from 'react';
import styles from '../dashboard.module.css';

const orders = [
  { id: 'ORD-001', customer: 'Priya Sharma', type: 'Premium Handwritten', status: 'In Progress', date: '01 Aug 2026', amount: '₹2,999', phone: '+91 98765 00001' },
  { id: 'ORD-002', customer: 'Vikram Singh', type: 'Premium Handwritten', status: 'Pending', date: '31 Jul 2026', amount: '₹2,999', phone: '+91 98765 00002' },
  { id: 'ORD-003', customer: 'Kavita Joshi', type: 'Digital Report', status: 'Delivered', date: '30 Jul 2026', amount: '₹299', phone: '+91 98765 00003' },
  { id: 'ORD-004', customer: 'Suresh Nair', type: 'Premium Handwritten', status: 'Shipped', date: '29 Jul 2026', amount: '₹2,999', phone: '+91 98765 00004' },
  { id: 'ORD-005', customer: 'Meera Patel', type: 'Digital Report', status: 'Delivered', date: '28 Jul 2026', amount: '₹299', phone: '+91 98765 00005' },
  { id: 'ORD-006', customer: 'Arjun Reddy', type: 'Premium Handwritten', status: 'Delivered', date: '27 Jul 2026', amount: '₹2,999', phone: '+91 98765 00006' },
];

const statusColors: Record<string, string> = { 'Pending': '#f59e0b', 'In Progress': '#3b82f6', 'Shipped': '#a855f7', 'Delivered': '#22c55e' };

export default function AdminOrders() {
  return (
    <div>
      <h1 className={`${styles.pageTitle} font-serif`}>Kundli Orders</h1>
      <p className={`${styles.pageSubtitle} font-sans`}>Manage and track all Kundli order requests.</p>

      <div className={styles.tableSection}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className="font-sans">Order ID</th>
                <th className="font-sans">Customer</th>
                <th className="font-sans">Phone</th>
                <th className="font-sans">Type</th>
                <th className="font-sans">Status</th>
                <th className="font-sans">Date</th>
                <th className="font-sans">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td className="font-sans" style={{ fontWeight: 600 }}>{o.id}</td>
                  <td className="font-sans">{o.customer}</td>
                  <td className="font-sans">{o.phone}</td>
                  <td className="font-sans">{o.type}</td>
                  <td>
                    <span className={`${styles.badge} font-sans`} style={{ background: `${statusColors[o.status]}20`, color: statusColors[o.status] }}>
                      {o.status}
                    </span>
                  </td>
                  <td className="font-sans">{o.date}</td>
                  <td className="font-sans" style={{ fontWeight: 600 }}>{o.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
