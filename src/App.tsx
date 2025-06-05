import {} from '@chakra-ui/icons';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import { ColumnType } from './utils/enums';

function App() {
  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" px={4} py={10}>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={{ base: 16, md: 4 }}
          >
            <Column column={ColumnType.SEGMENT} />
            <Column column={ColumnType.JOBS} />
            <Column column={ColumnType.PAINS} />
            <Column column={ColumnType.GAINS} />
          </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default App;
