import { createContext, useState, ReactNode, FC } from 'react';
import { ThemeVariants } from '../namespace.ts';

type ThemeContextType = {
  currentTheme: ThemeVariants;
  setTheme: (theme: ThemeVariants) => void;
};

interface Props {
  children: ReactNode;
}

const defaultTheme =
  (document.documentElement.getAttribute('data-theme') as ThemeVariants) ||
  ThemeVariants.LIGHT;

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: defaultTheme,
  setTheme: () => {},
});

const ThemeProvider: FC<Props> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariants>(defaultTheme);
  const setTheme = (newTheme: ThemeVariants): void => {
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
