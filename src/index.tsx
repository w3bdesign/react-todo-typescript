import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Table from './components/Table/Table.component';
import store from './store/index';
import AddTodoForm from './components/AddTodoForm/AddTodoForm.component';

ReactDOM.render(
  <StoreProvider store={store}>
    <Container maxWidth="lg">
      <Box my={4}>
        <Table />
        <AddTodoForm />
      </Box>
    </Container>
  </StoreProvider>,
  document.getElementById('root')
);
