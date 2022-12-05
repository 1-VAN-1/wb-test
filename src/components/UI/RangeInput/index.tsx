import { ReactNode } from 'react';
import styles from './RangeInput.module.scss';

function Container({ label, input }: { label: string; input: ReactNode }) {
  return (
    <div className={styles['container']}>
      <span className={styles['label-text'] + ' text4 text3-big'}>{label}</span>
      {input}
    </div>
  );
}

function RangeInput() {
  return (
    <div className={styles['range-input']}>
      <Container
        label="От"
        input={<input className={styles['from-input']} type="text" />}
      />
      <Container
        label="До"
        input={<input className={styles['to-input']} type="text" />}
      />
    </div>
  );
}

export default RangeInput;
