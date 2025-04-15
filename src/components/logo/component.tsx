import { FC } from 'react';
// namespaces
import { LogoSizes } from './component.namespace.ts';
// styles
import styles from './styles.module.css';
import { ThemeVariants } from '../../namespace.ts';

interface Props {
  variant?: ThemeVariants;
  size?: LogoSizes;
  alt?: string;
}

const LogoComponent: FC<Props> = ({
  variant = ThemeVariants.LIGHT,
  size = LogoSizes.MEDIUM,
  alt = 'logo',
}) => {
  return (
    <img
      className={styles[size]}
      src={`/assets/images/logo-${variant}-theme.svg`}
      alt={alt}
    />
  );
};

export default LogoComponent;
