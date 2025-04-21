import { FC, ChangeEvent } from 'react';
import styles from './styles.module.css';

interface Props {
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxComponent: FC<Props> = ({ label, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={label}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default CheckboxComponent;
