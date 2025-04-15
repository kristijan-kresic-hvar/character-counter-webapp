import { FC } from 'react';
import { Logo } from '../../components/logo';
import { ThemeToggle } from '../../components/theme-toggle';
// styles
import styles from './styles.module.css';

const NavigationComponent: FC = () => {
  return (
    <nav className={styles.navigation}>
      <Logo alt={'Character counter'} />
      <ThemeToggle />
    </nav>
  );
};

export default NavigationComponent;
