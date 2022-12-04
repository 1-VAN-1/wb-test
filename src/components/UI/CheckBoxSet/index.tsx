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
        <label key={v} className={styles.checkbox}>
          {v}
        </label>
      ))}
    </fieldset>
  );
}

export default CheckBoxSet;
