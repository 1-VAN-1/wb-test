import styles from './CategoryHeader.module.scss';

function CategoryHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Мужские кеды и кроссовки</h1>
      <span className={styles['items-count'] + ' text4 text3-big'}>
        40 217 товаров
      </span>
    </header>
  );
}

export default CategoryHeader;
