'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import styles from './ImageFrame.module.css';

interface ImageFrameProps extends Omit<ImageProps, 'onLoad'> {
  aspectRatio?: 'auto' | 'square' | 'video' | 'portrait';
  containerClassName?: string;
  objectFit?: 'cover' | 'contain';
}

export function ImageFrame({
  src,
  alt,
  aspectRatio = 'auto',
  containerClassName = '',
  className = '',
  objectFit = 'cover',
  ...props
}: ImageFrameProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const containerClasses = [
    styles.container,
    styles[aspectRatio],
    containerClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const imageClasses = [
    styles.image,
    objectFit === 'contain' ? styles.imageContain : '',
    isLoaded ? styles.loaded : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      {src ? (
        <Image
          src={src}
          alt={alt || ''}
          className={imageClasses}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      ) : null}
    </div>
  );
}
