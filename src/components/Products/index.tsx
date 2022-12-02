import useProducts from '@/hooks/useProducts';
import IProduct from '@/models/IProduct';
import starsSvg from '@/assets/stars.svg';
import styles from './Products.module.scss';

function Product({ product }: { product: IProduct }) {
  const starClass = `star${Math.round(product.rating.rate)}`;

  return (
    <div className={styles.product}>
      <img
        className={styles['product-image']}
        width="516"
        height="688"
        src={product.image}
        alt={product.title}
      />
      <div className={styles.details}>
        <div className={styles.price}>{product.price} $</div>
        <div>{product.title}</div>
        <div className={styles.rating}>
          <div className={`${styles['stars-line']} ${styles[starClass]}`} />
          <div>{product.rating.count}</div>
        </div>
        <div>
          Доставка <span className={styles.delivery}>послезавтра</span>
        </div>
      </div>
    </div>
  );
}

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
