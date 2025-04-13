import { FC } from 'react';
// namespaces
import { LogoSizes, LogoVariants } from './component.namespace.ts';
// styles
import styles from './styles.module.css';

interface Props {
  variant?: LogoVariants;
  size?: LogoSizes;
  alt?: string;
}

const LogoComponent: FC<Props> = ({
  variant = LogoVariants.LIGHT,
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
