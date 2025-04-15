import { FC, useEffect } from 'react';
// components
import { PageLayout } from '../page-layout';

const AppComponent: FC = () => {
  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme');
    if (!theme) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);
  return <PageLayout />;
};

export default AppComponent;
