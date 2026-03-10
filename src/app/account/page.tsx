'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getOrderHistory } from '@/lib/orders/orderMock';
import styles from './page.module.css';

export default async function AccountDashboard() {
  const orders = await getOrderHistory();

  // Helper to visually map our internal states to a customer-friendly string 
  // without losing the strict types in the backend.
  const getDisplayStatus = (stage: string, exception: string) => {
    if (stage === 'DELIVERED') return 'Delivered';
    if (stage === 'CANCELLED') return 'Cancelled';
    if (exception !== 'NONE') return 'Review Required';
    return 'In Production';
  };
  return (
    <Container className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Account Overview</h1>
        <p className={styles.subtitle}>Welcome back, Guest.</p>
        <button className={styles.logoutBtn}>Sign Out</button>
      </header>

      <div className={styles.dashboard}>
        <div className={styles.mainColumn}>
          <h2 className={styles.sectionTitle}>Order History</h2>
          
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  const displayStatus = getDisplayStatus(order.stage, order.exceptionType);
                  return (
                    <tr key={order.id}>
                      <td className={styles.orderId}>{order.id}</td>
                      <td>{order.date}</td>
                      <td>
                        <Badge variant={displayStatus === 'Delivered' ? 'neutral' : displayStatus === 'Review Required' ? 'warning' : 'outline'}>
                          {displayStatus}
                        </Badge>
                      </td>
                      <td>₦{order.total.toLocaleString('en-NG')}</td>
                      <td className={styles.actionCell}>
                        <Link href={`/account/orders/${order.id}`} className={styles.viewLink}>
                          View <ArrowRight size={16} />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          
          <div className={styles.mobileList}>
            {orders.map((order) => {
              const displayStatus = getDisplayStatus(order.stage, order.exceptionType);
              return (
                <Link key={order.id} href={`/account/orders/${order.id}`} className={styles.mobileCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.orderId}>{order.id}</span>
                    <Badge variant={displayStatus === 'Delivered' ? 'neutral' : displayStatus === 'Review Required' ? 'warning' : 'outline'}>
                      {displayStatus}
                    </Badge>
                  </div>
                  <div className={styles.cardBody}>
                    <p>{order.date}</p>
                    <p>₦{order.total.toLocaleString('en-NG')}</p>
                  </div>
                </Link>
              )
            })}
          </div>

        </div>

        <div className={styles.sidebar}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Profile</h3>
            <p className={styles.cardText}>guest@architect.ng</p>
            <button className={styles.textBtn}>Edit Password</button>
          </div>
          
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Addresses</h3>
            <p className={styles.cardText}>14 Bourdillon Road<br />Ikoyi, Lagos<br />Nigeria</p>
            <button className={styles.textBtn}>Manage Addresses</button>
          </div>
          
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Care Guides</h3>
            <p className={styles.cardText}>Browse instructions for maintaining the finish of your Architect pieces.</p>
            <Link href="/account/care" className={styles.textBtn}>View Guides</Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
