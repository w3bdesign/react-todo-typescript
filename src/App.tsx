import React from 'react';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const App: React.FC = () => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App v4-beta example with TypeScript
        <Button color="inherit">Test button</Button>
      </Typography>
    </Box>
  </Container>
);

export default App;
