import { FC } from 'react';
import { calculateReadingTime } from '../../utils.ts';
import styles from './styles.module.css';

interface Props {
  text: string;
}

const ReadingTimeComponent: FC<Props> = ({ text }) => {
  const readingTime = calculateReadingTime(text);
  return (
    <p className={styles.text}>
      Approx. reading time: {readingTime ? '<' : null}
      {readingTime} minute
    </p>
  );
};

export default ReadingTimeComponent;
