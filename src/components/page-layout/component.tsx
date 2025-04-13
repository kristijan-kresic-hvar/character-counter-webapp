import { FC } from 'react';
import { Navigation } from '../../feature/navigation';
import { Container } from '../container';

const PageLayoutComponent: FC = () => {
  return (
    <Container>
      <Navigation />
      <main style={{ marginTop: '48px' }}>
        <p>This is the main content area.</p>
      </main>
    </Container>
  );
};

export default PageLayoutComponent;
