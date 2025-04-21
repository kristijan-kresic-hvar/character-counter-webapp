import { FC } from 'react';
// Components
import { Navigation } from '../../feature/navigation';
import { Container } from '../container';
import { CharacterCounter } from '../../feature/characterCounter';

const PageLayoutComponent: FC = () => {
  return (
    <Container>
      <Navigation />
      <main style={{ marginTop: '48px' }}>
        <CharacterCounter />
      </main>
    </Container>
  );
};

export default PageLayoutComponent;
