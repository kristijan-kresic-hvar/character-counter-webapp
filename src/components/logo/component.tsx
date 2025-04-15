import { FC } from 'react';
// namespaces
import { LogoSizes } from './component.namespace.ts';
// styles
import styles from './styles.module.css';
import { ThemeVariants } from '../../namespace.ts';
// hooks
import useTheme from '../../hooks/use-theme.ts';

interface Props {
  size?: LogoSizes;
  alt?: string;
}

const LogoComponent: FC<Props> = ({
  size = LogoSizes.MEDIUM,
  alt = 'logo',
}) => {
  const { currentTheme } = useTheme();
  const selectedVariant =
    currentTheme === ThemeVariants.DARK
      ? ThemeVariants.DARK
      : ThemeVariants.LIGHT;
  return (
    <img
      className={styles[size]}
      src={`/assets/images/logo-${selectedVariant}-theme.svg`}
      alt={alt}
    />
  );
};

export default LogoComponent;
