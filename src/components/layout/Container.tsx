import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({ children, className = '', as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={`${styles.container} ${className}`}>
      {children}
    </Component>
  );
}
