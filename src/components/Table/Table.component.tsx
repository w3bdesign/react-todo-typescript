import * as React from 'react';
import MUIDataTable from 'mui-datatables';

import { useStoreState } from '../../hooks/hooks';
//import COLUMNS from '../../constants/COLUMNS';

const COLUMNS = ['Title', 'Date', 'Action'];

export default function Table() {
  const todos = useStoreState((state) => state.todos.todoItems);
  console.log('Todos from Table: ');
  console.log(todos);
  return (
    <>
      <h2>Todos Daniel - Data</h2>
      <MUIDataTable
        title={<h1>TODO Application</h1>}
        data={todos}
        columns={COLUMNS}
      />
    </>
  );
}
