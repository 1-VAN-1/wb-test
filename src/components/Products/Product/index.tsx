import IProduct from '@/models/IProduct';
import styles from './Product.module.scss';

function Product({ product }: { product: IProduct }) {
  const starClass = `star${Math.round(product.rating.rate)}`;

  return (
    <div className={styles.product}>
      <img
        className={styles['product__image']}
        src={product.image}
        alt={product.title}
      />
      <div className={styles.details}>
        <div className={styles.price + ' text1 text3-big'}>
          {product.price} $
        </div>
        <div className={styles.title + ' text3'}>{product.title}</div>
        <div className={styles.rating}>
          <div className={`${styles['stars-line']} ${styles[starClass]}`} />
          <div className={styles['rating-count'] + ' text3 text4-big'}>
            {product.rating.count}
          </div>
        </div>
        <div className={styles.delivery + ' text3 text4-big'}>
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
