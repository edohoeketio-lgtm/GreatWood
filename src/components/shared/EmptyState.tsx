import React from 'react';
import { Loader2, AlertCircle, FileQuestion } from 'lucide-react';
import { Button } from '../ui/Button';
import styles from './EmptyState.module.css';

interface EmptyStateProps {
  type: 'empty' | 'error' | 'loading';
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
}

export function EmptyState({
  type,
  title,
  description,
  actionText,
  onAction,
}: EmptyStateProps) {
  const isError = type === 'error';
  const isLoading = type === 'loading';

  const defaultTitle = isError ? 'Something went wrong.' : isLoading ? 'Loading...' : 'Nothing found.';
  const defaultDesc = isError 
    ? 'We encountered an error processing your request.' 
    : isLoading 
    ? 'Preparing your experience.' 
    : 'We couldn’t find what you were looking for.';

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.iconWrapper} ${isError ? styles.errorIcon : ''}`}>
        {isLoading && <Loader2 size={48} strokeWidth={1} className={styles.spin} />}
        {isError && <AlertCircle size={48} strokeWidth={1} />}
        {type === 'empty' && <FileQuestion size={48} strokeWidth={1} />}
      </div>
      
      <h2 className={styles.title}>{title || defaultTitle}</h2>
      <p className={styles.description}>{description || defaultDesc}</p>
      
      {actionText && onAction && !isLoading && (
        <Button variant="secondary" onClick={onAction} className={styles.action}>
          {actionText}
        </Button>
      )}
    </div>
  );
}
