import { ChangeEvent, FC } from 'react';
import styles from './styles.module.css';

interface Props {
  value: string | undefined;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}

const TextAreaComponent: FC<Props> = ({ value, onChange, error }) => {
  return (
    <div>
      <textarea
        value={value}
        className={[styles.textarea, error ? styles.error : ''].join(' ')}
        placeholder={'Start typing here… (or paste your text)'}
        onChange={onChange}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default TextAreaComponent;
