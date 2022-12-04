import styles from './ColorPicker.module.scss';
import { type Color } from '../types';

interface IProps {
  colors: {
    color: Color;
    title: string;
  }[];
}

function ColorPicker({ colors }: IProps) {
  return (
    <div className={styles['color-picker']}>
      {colors.map((c) => (
        <label key={c.color} className={styles.color} title={c.title}>
          <div className={styles[c.color]}></div>
        </label>
      ))}
    </div>
  );
}

export default ColorPicker;
