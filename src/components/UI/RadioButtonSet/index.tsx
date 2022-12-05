import styles from './RadioButtonSet.module.scss';

interface IProps {
  values: { title: string; value: number | string }[];
  selectedOption: number | string | null;
  setSelected: (option: number | string) => void;
}

function RadioButtonSet({ values, selectedOption, setSelected }: IProps) {
  return (
    <fieldset>
      {values.map((v, index) => (
        <label
          key={v.value}
          className={`${styles.radio} ${
            selectedOption === v.value ? styles.selected : ''
          } + ' text2 text3-big'`}
          onClick={() => setSelected(v.value)}
        >
          {v.title}
        </label>
      ))}
    </fieldset>
  );
}

export default RadioButtonSet;
