import React from 'react';
import styles from '../dashboard.module.css';

const customers = [
  { id: 'USR-001', name: 'Priya Sharma', email: 'priya@email.com', phone: '+91 98765 00001', orders: 3, totalSpent: '₹8,997', joined: 'Jan 2026' },
  { id: 'USR-002', name: 'Rajesh Kumar', email: 'rajesh@email.com', phone: '+91 98765 00002', orders: 2, totalSpent: '₹1,050', joined: 'Mar 2026' },
  { id: 'USR-003', name: 'Anita Desai', email: 'anita@email.com', phone: '+91 98765 00003', orders: 1, totalSpent: '₹999', joined: 'May 2026' },
  { id: 'USR-004', name: 'Vikram Singh', email: 'vikram@email.com', phone: '+91 98765 00004', orders: 2, totalSpent: '₹3,298', joined: 'Feb 2026' },
  { id: 'USR-005', name: 'Meera Patel', email: 'meera@email.com', phone: '+91 98765 00005', orders: 4, totalSpent: '₹12,995', joined: 'Dec 2025' },
  { id: 'USR-006', name: 'Suresh Nair', email: 'suresh@email.com', phone: '+91 98765 00006', orders: 1, totalSpent: '₹51', joined: 'Jul 2026' },
];

export default function AdminCustomers() {
  return (
    <div>
      <h1 className={`${styles.pageTitle} font-serif`}>Customers</h1>
      <p className={`${styles.pageSubtitle} font-sans`}>View and manage your customer base.</p>

      <div className={styles.tableSection}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className="font-sans">ID</th>
                <th className="font-sans">Name</th>
                <th className="font-sans">Email</th>
                <th className="font-sans">Phone</th>
                <th className="font-sans">Orders</th>
                <th className="font-sans">Total Spent</th>
                <th className="font-sans">Joined</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id}>
                  <td className="font-sans" style={{ fontWeight: 600 }}>{c.id}</td>
                  <td className="font-sans">{c.name}</td>
                  <td className="font-sans">{c.email}</td>
                  <td className="font-sans">{c.phone}</td>
                  <td className="font-sans">{c.orders}</td>
                  <td className="font-sans" style={{ fontWeight: 600 }}>{c.totalSpent}</td>
                  <td className="font-sans">{c.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
