import { ChangeEvent, FC, RefObject } from 'react';
import styles from './styles.module.css';

interface Props {
  value: string;
  ref?: RefObject<HTMLInputElement | null>;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInputComponent: FC<Props> = ({
  value,
  ref,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <input
        ref={ref}
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
