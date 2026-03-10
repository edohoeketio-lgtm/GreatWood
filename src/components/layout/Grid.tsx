import styles from './Grid.module.css';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  columns?: 1 | 2 | 3 | 4;
}

export function Grid({ children, className = '', as: Component = 'div', columns = 3 }: GridProps) {
  const columnClass = styles[`gridCols${columns}`] || styles.gridCols3;

  return (
    <Component className={`${styles.grid} ${columnClass} ${className}`}>
      {children}
    </Component>
  );
}
