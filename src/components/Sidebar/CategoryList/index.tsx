import styles from './CategoryList.module.scss';

function CategoryList() {
  return (
    <div className={styles['category-list']}>
      <div className={styles['category-header']}>Мужская</div>
      <div className={styles['selected-category']}>Кеды и кроссовки</div>
    </div>
  );
}

export default CategoryList;
