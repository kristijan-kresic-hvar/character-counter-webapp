import { ChangeEvent, FC } from 'react';
import styles from './styles.module.css';

interface Props {
  value: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInputComponent: FC<Props> = ({ value, placeholder, onChange }) => {
  return (
    <div>
      <input
        value={value}
        className={styles.input}
        type='text'
        onChange={onChange}
        placeholder={placeholder ?? 'Enter text'}
      />
    </div>
  );
};

export default TextInputComponent;
