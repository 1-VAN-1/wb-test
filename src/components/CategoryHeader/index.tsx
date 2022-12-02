import styles from './CategoryHeader.module.scss';

function CategoryHeader() {
  return (
    <header className={styles.header}>
      <h1>Мужские кеды и кроссовки</h1>
      <span className={styles.itemsCount}>40 217 товаров</span>
    </header>
  );
}

export default CategoryHeader;
