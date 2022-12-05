import styles from './RangeInput.module.scss';

function Container({ label }: { label: string }) {
  return (
    <div className={styles['container']}>
      <span className={styles['label-text'] + ' text3 text4-big'}>{label}</span>
      <input className={styles['from-input']} type="text" />
    </div>
  );
}

function RangeInput() {
  return (
    <div className={styles['range-input']}>
      <Container label="От" />
      <Container label="До" />
    </div>
  );
}

export default RangeInput;
