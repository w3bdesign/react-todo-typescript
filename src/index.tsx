import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';

import Table from './components/Table/Table.component';
import store from './store/index';
import AddTodoForm from './components/AddTodoForm/AddTodoForm.component';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Table />
      <AddTodoForm />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
