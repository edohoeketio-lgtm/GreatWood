'use client';

import React from 'react';
import { ImageFrame } from '../ui/ImageFrame';
import { Grid } from '../layout/Grid';
import styles from './DimensionsModule.module.css';

interface DimensionData {
  label: string;
  value: string;
}

interface DimensionsModuleProps {
  blueprintUrl: string;
  dimensions: DimensionData[];
  materials: string[];
}

export function DimensionsModule({ blueprintUrl, dimensions, materials }: DimensionsModuleProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Dimensions & Details</h2>
      
      <Grid columns={2} className={styles.grid}>
        <div className={styles.blueprint}>
          <ImageFrame
            src={blueprintUrl}
            alt="Product blueprint diagram"
            aspectRatio="square"
            className={styles.image}
            width={800}
            height={800}
          />
        </div>
        
        <div className={styles.details}>
          <div className={styles.section}>
            <h3 className={styles.subtitle}>Dimensions</h3>
            <ul className={styles.list}>
              {dimensions.map((dim, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.label}>{dim.label}</span>
                  <span className={styles.value}>{dim.value}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.subtitle}>Material Breakdown</h3>
            <ul className={styles.list}>
              {materials.map((mat, i) => (
                <li key={i} className={styles.listItem}>
                  {mat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Grid>
    </div>
  );
}
