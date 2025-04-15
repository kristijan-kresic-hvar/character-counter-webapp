import { FC, ReactNode } from 'react';
// styles
import styles from './styles.module.css';

interface Props {
  children?: ReactNode;
}

const ContainerComponent: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerComponent;
