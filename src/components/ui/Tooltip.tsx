import React, { useState } from 'react';
import { Info } from 'lucide-react';
import styles from './Tooltip.module.css';

interface TooltipProps {
  content: React.ReactNode;
  iconSize?: number;
}

export function Tooltip({ content, iconSize = 16 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className={styles.wrapper}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      // For mobile tap:
      onClick={() => setIsVisible(!isVisible)} 
    >
      <Info size={iconSize} className={styles.icon} />
      
      {isVisible && (
        <div className={styles.popover}>
          {content}
        </div>
      )}
    </div>
  );
}
