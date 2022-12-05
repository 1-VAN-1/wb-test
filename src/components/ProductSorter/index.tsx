import SortBy from './SortBy';
import styles from './ProductSorter.module.scss';
import grid2 from '@/assets/grid2.svg';
import grid3 from '@/assets/grid3.svg';
import grid1 from '@/assets/grid1.svg';
import filter from '@/assets/filter.svg';
import { useState } from 'react';

type CardSizes = 'big' | 'small';

function ProductSorter() {
  const [size, setSize] = useState('big' as CardSizes);

  return (
    <>
      <div className={styles.sorter}>
        <SortBy />
        <div className={styles['card-sizes']}>
          <img
            className={`${styles.icon} ${size === 'big' ? styles.active : ''}`}
            src={grid3}
            onClick={() => setSize('big')}
          />
          <img
            className={`${styles.icon} ${
              size === 'small' ? styles.active : ''
            }`}
            src={grid2}
            onClick={() => setSize('small')}
          />
        </div>
      </div>
      <div className={styles['sorter-mobile']}>
        <img
          className={`${styles.icon} ${
            size === 'big' ? styles.active : styles.inactive
          }`}
          src={grid2}
          onClick={() => setSize('small')}
        />
        <img
          className={`${styles.icon} ${
            size === 'small' ? styles.active : styles.inactive
          }`}
          src={grid1}
          onClick={() => setSize('big')}
        />
        <div className={styles['select-filter'] + ' text4 text3-xs'}>
          По популярности
        </div>
        <img width="18px" height="18px" src={filter} />
      </div>
    </>
  );
}

export default ProductSorter;
