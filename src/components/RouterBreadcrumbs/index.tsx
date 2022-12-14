import styles from './RouterBreadcrumbs.module.scss';

function RouterBreadcrumbs() {
  const categories = ['Главная', 'Обувь', 'Мужская', 'Кеды и кроссовки'];

  return (
    <ul className={styles['router-breadcrumbs']}>
      {categories.map((category) => (
        <li className={styles['breadcrumb-item']} key={category}>
          <a className="text5 text4-xs text3-big" href="#">
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default RouterBreadcrumbs;
