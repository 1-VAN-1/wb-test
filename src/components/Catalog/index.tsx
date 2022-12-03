import Products from '@/components/Products';
import Sidebar from '@/components/Sidebar';
import ProductSorter from '@/components/ProductSorter';
import styles from './Catalog.module.scss';

function Catalog() {
  return (
    <section className={styles.catalog}>
      <Sidebar />
      <div className={styles.products}>
        <ProductSorter />
        <Products />
      </div>
    </section>
  );
}

export default Catalog;
