import { ReactNode, useState } from 'react';
import styles from './Filter.module.scss';

interface IFilterProps {
  header: ReactNode;
  content: ReactNode;
}

function Filter({ header, content }: IFilterProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`${styles.filter} ${isExpanded ? styles.expanded : ''}`}>
      <div
        className={styles['filter-title']}
        onClick={() => setIsExpanded((old) => !old)}
      >
        {header}
      </div>
      <div className={styles.container}>{content}</div>
    </div>
  );
}

export default Filter;
