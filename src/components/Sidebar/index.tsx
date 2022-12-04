import useProductFilters from '@/hooks/useProductFilters';
import { ReactNode, useMemo, useState } from 'react';
import CheckBoxSet from '@/components/UI/CheckBoxSet';
import RadioButtonSet from '@/components/UI/RadioButtonSet';
import RangeInput from '@/components/UI/RangeInput';
import CategoryList from './CategoryList';
import Filter from './Filter';
import styles from './SideBar.module.scss';
import ColorPicker from './ColorPicker';

function RadioSetFilter({ radioValues }: { radioValues: string[] }) {
  const [selected, setSelected] = useState<string | number | null>(null);
  const values = useMemo(() => {
    return radioValues.map((d) => ({ value: d, title: d }));
  }, [radioValues]);

  return (
    <Filter
      header={
        <>
          <span>Срок доставки</span>
          <span
            className={`${styles['reset-button']} ${
              selected !== null ? styles.show : ''
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setSelected(null);
            }}
          >
            Сбросить
          </span>
        </>
      }
      content={
        <RadioButtonSet
          setSelected={(option) => setSelected(option)}
          selectedOption={selected}
          values={values}
        />
      }
    />
  );
}

function Sidebar() {
  const {
    categories,
    brands,
    sellers,
    sizes,
    deliveryTimes,
    discounts,
    colors,
  } = useProductFilters();

  return (
    <aside className={styles.sidebar}>
      <CategoryList />
      <div className={styles['filter-list']}>
        <Filter
          header="Категория"
          content={<CheckBoxSet values={categories} />}
        />
        <RadioSetFilter radioValues={deliveryTimes} />
        <Filter
          header="Бренд"
          content={
            <>
              <CheckBoxSet values={brands} />
              <div className={styles['text-button']}>Показать все</div>
            </>
          }
        />
        <Filter
          header="Продавец"
          content={
            <>
              <CheckBoxSet values={sellers} />
              <div className={styles['text-button']}>Показать все</div>
            </>
          }
        />
        <Filter header="Цена, ₽" content={<RangeInput />} />
        <RadioSetFilter radioValues={discounts} />
        <Filter header="Цвет" content={<ColorPicker colors={colors} />} />
        <Filter
          header="Размер"
          content={
            <>
              <input
                className={styles['search-input']}
                type="text"
                placeholder="Я ищу..."
              />
              <CheckBoxSet
                className={styles['filter-content'] + ' ' + styles['show-many']}
                values={sizes}
              />
            </>
          }
        />
      </div>
    </aside>
  );
}

export default Sidebar;
