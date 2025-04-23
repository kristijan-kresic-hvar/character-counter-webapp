import { FC } from 'react';
import styles from './styles.module.css';

interface Props {
  time: string | number;
}

const ReadingTimeComponent: FC<Props> = ({ time }) => {
  return (
    <p className={styles.text}>
      Approx. reading time: {time ? '<' : null}
      {time} minute
    </p>
  );
};

export default ReadingTimeComponent;
