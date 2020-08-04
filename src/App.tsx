import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import SimpleTable from './components/Table/SimpleTable';

const App: React.FC = () => (
  <Container maxWidth="lg">
    <Box my={4}>
      <SimpleTable />
    </Box>
  </Container>
);

export default App;
