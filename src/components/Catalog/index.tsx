import Products from '@/components/Products';
import Sidebar from '@/components/Sidebar';
import SortBy from '@/components/SortBy';
import styles from './Catalog.module.scss';

function Catalog() {
  return (
    <div className={styles.catalog}>
      <Sidebar />
      <div className={styles.products}>
        <SortBy />
        <Products />
      </div>
    </div>
  );
}

export default Catalog;
