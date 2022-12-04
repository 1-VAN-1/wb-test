import styles from './RangeInput.module.scss';

function RangeInput() {
  return (
    <div className={styles['range-input']}>
      <div className={styles['input-container']}>
        <span className={styles['label-text']}>От</span>
        <input className={styles['from-input']} type="text" />
      </div>
      <div className={styles['input-container']}>
        <span className={styles['label-text']}>До</span>
        <input className={styles['to-input']} type="text" />
      </div>
    </div>
  );
}

export default RangeInput;
