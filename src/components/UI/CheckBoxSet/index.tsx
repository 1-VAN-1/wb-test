import styles from './CheckBoxSet.module.scss';

function CheckBoxSet({
  values,
  className,
}: {
  values: string[];
  className?: string;
}) {
  return (
    <fieldset className={className}>
      {values.map((v) => (
        <label key={v} className={styles.checkbox + ' text3 text2-big'}>
          {v}
        </label>
      ))}
    </fieldset>
  );
}

export default CheckBoxSet;
