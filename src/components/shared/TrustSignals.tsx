import React from 'react';
import { Truck, ShieldCheck, Ruler } from 'lucide-react';
import styles from './TrustSignals.module.css';
import { Grid } from '../layout/Grid';

interface TrustSignalProps {
  signals?: Array<{
    id: string;
    icon: 'truck' | 'shield' | 'ruler';
    title: string;
    description: string;
  }>;
}

const DEFAULT_SIGNALS: TrustSignalProps['signals'] = [
  {
    id: 'delivery',
    icon: 'truck',
    title: 'White-Glove Delivery',
    description: 'Delivered, unboxed, and installed in your room of choice if located in Lagos or Abuja.',
  },
  {
    id: 'warranty',
    icon: 'shield',
    title: 'Craftsmanship Guarantee',
    description: 'We build for permanence. Every structural frame carries a 5-year guarantee against defects.',
  },
  {
    id: 'materials',
    icon: 'ruler',
    title: 'Material Truth',
    description: 'Kiln-dried tropical hardwoods and heavyweight textural weaves, selected for the Nigerian climate.',
  },
];

export function TrustSignals({ signals = DEFAULT_SIGNALS }: TrustSignalProps) {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'truck': return <Truck size={32} strokeWidth={1} />;
      case 'shield': return <ShieldCheck size={32} strokeWidth={1} />;
      case 'ruler': return <Ruler size={32} strokeWidth={1} />;
      default: return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      <Grid columns={3} className={styles.grid}>
        {signals?.map((signal) => (
          <div key={signal.id} className={styles.signal}>
            <div className={styles.iconWrapper}>
              {renderIcon(signal.icon)}
            </div>
            <h3 className={styles.title}>{signal.title}</h3>
            <p className={styles.description}>{signal.description}</p>
          </div>
        ))}
      </Grid>
    </div>
  );
}
