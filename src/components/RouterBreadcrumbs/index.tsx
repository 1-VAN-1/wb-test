import styles from './RouterBreadcrumbs.module.scss';

function RouterBreadcrumbs() {
  const categories = ['Главная', 'Обувь', 'Мужская', 'Кеды и кроссовки'];

  return (
    <ul className={styles['router-breadcrumbs']}>
      {categories.map((category) => (
        <li className={styles['breadcrumb-item']} key={category}>
          <a className="text3 text4-big text5-xs" href="#">
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default RouterBreadcrumbs;
