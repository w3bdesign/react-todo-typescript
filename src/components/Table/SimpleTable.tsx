import MUIDataTable from 'mui-datatables';
import React from 'react';
import { useStoreState } from 'easy-peasy';

import AddTodoForm from '../AddTodoForm/AddTodoForm';
import DATA from '../../const/DATA';

import { BodyRender } from './types';

// https://material-ui.com/components/transitions/#fade

// https://github.com/gregnb/mui-datatables

// https://codesandbox.io/s/github/gregnb/mui-datatables?file=/examples/component/index.js

export interface Test {
  name: string;
  options: {
    filter: boolean;
    customBodyRender: ({ value, tableMeta }: BodyRender) => JSX.Element;
  };
}

const SimpleTable = () => {
  const todoItems = useStoreState((state) => state.todos.items);

  console.log(todoItems);

  return (
    <>
      <MUIDataTable
        title={<h1>TODO Application</h1>}
        data={DATA}
        columns={todoItems}
      />
      <AddTodoForm />
    </>
  );
};

export default SimpleTable;
