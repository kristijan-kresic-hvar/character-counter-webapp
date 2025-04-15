import { FC } from 'react';
// namespaces
import { ThemeToggleIconName } from './component.namespace.ts';
// styles
import styles from './styles.module.css';
import { ThemeVariants } from '../../namespace.ts';
import useTheme from '../../hooks/use-theme.ts';

const ThemeToggleComponent: FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const isLightTheme = currentTheme === ThemeVariants.LIGHT;
  const iconName = isLightTheme
    ? ThemeToggleIconName.LIGHT
    : ThemeToggleIconName.DARK;

  const handleToggleTheme = () => {
    const newTheme = isLightTheme ? ThemeVariants.DARK : ThemeVariants.LIGHT;
    setTheme(newTheme);
  };

  return (
    <button className={styles.themeToggle} onClick={handleToggleTheme}>
      <img src={`/assets/images/${iconName}.svg`} alt={'theme toggle'} />
    </button>
  );
};

export default ThemeToggleComponent;
