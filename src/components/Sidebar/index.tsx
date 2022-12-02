import styles from './SideBar.module.scss';

function Sidebar() {
  return (
    <div className={styles['filter-list']}>
      <div>Категория</div>
      <div>Срок доставки</div>
      <div>Бренд</div>
      <div>Продавец</div>
      <div>Цена</div>
      <div>Скидка</div>
      <div>Цвет</div>
      <div>Размер</div>
    </div>
  );
}

export default Sidebar;
