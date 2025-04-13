import { FC } from 'react';
import { Logo } from '../../components/logo';
// styles
import styles from './styles.module.css';

const NavigationComponent: FC = () => {
  return (
    <nav className={styles.navigation}>
      <Logo alt={'Character counter'} />
      <button>theme toggle</button>
    </nav>
  );
};

export default NavigationComponent;
