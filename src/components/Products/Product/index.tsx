import IProduct from '@/models/IProduct';
import styles from './Product.module.scss';

function Product({ product }: { product: IProduct }) {
  const starClass = `star${Math.round(product.rating.rate)}`;

  return (
    <div className={styles.product}>
      <img
        className={styles['product-image']}
        src={product.image}
        alt={product.title}
      />
      <div className={styles.details}>
        <div className={styles.price}>{product.price} $</div>
        <div>{product.title}</div>
        <div className={styles.rating}>
          <div className={`${styles['stars-line']} ${styles[starClass]}`} />
          <div className={styles['rating-count']}>{product.rating.count}</div>
        </div>
        <div className={styles.delivery}>
          Доставка <span className={styles['delivery-date']}>послезавтра</span>
        </div>
        <div className={styles.buttons}>
          <button className={styles['cart-btn']}>В корзину</button>
          <button className={styles['postpone-btn']}></button>
        </div>
      </div>
    </div>
  );
}

export default Product;
