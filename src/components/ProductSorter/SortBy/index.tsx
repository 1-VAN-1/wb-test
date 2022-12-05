import { useState } from 'react';
import styles from './SortBy.module.scss';

function SortBy() {
  const [sortings, setSortings] = useState([
    { name: 'Популярности', active: true },
    { name: 'Рейтингу', active: false },
    { name: 'Цене', active: false },
    { name: 'Обновлению', active: false },
    { name: 'Сначала выгодные', active: false },
  ]);

  const onSortingClick = (index: number) => {
    setSortings((old) =>
      old.map((s, i) => {
        if (i === index) {
          return { ...s, active: true };
        } else {
          return { ...s, active: false };
        }
      })
    );
  };

  return (
    <div className={styles['sort-by']}>
      <span className={styles.title + ' text3 text4-big'}>
        Сортировать по:{' '}
      </span>
      <ul className={styles['sorting-list'] + ' text3 text4-big'}>
        {sortings.map((sorting, index) => (
          <li
            key={sorting.name}
            className={sorting.active ? styles.active : ''}
            onClick={() => onSortingClick(index)}
          >
            {sorting.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortBy;
