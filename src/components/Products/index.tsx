import useProducts from '@/hooks/useProducts';
import Product from './Product';
import styles from './Products.module.scss';

function Products() {
  const { products } = useProducts();

  return (
    <div className={styles['product-list']}>
      {products?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
