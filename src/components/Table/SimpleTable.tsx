import MUIDataTable from 'mui-datatables';
import React, { useState } from 'react';
import { useStoreState } from 'easy-peasy';
// import INITIAL_STATE from '../../const/INITIAL_STATE';

import store from '../../store/store';

// https://material-ui.com/components/transitions/#fade

// https://github.com/gregnb/mui-datatables

// https://codesandbox.io/s/github/gregnb/mui-datatables?file=/examples/component/index.js

export interface Test {
  name: string;
  options: {
    filter: boolean;
    customBodyRender: (value: number, tableMeta: number) => JSX.Element;
  };
}

const SimpleTable = () => {
  const todoItems = useStoreState((state) => state.todos.items);

  console.log(todoItems);

  // TODO Add better typing here
  // TODO Add Easy Peasy here
  // const [columns, setdataColumns] = useState(INITIAL_STATE);

  console.log(store);

  const data = [
    [
      'Play with Material UI',
      new Date().toLocaleString('no-NO'),
      'Play with Material UI',
    ],
    [
      'Play more with Material UI',
      new Date().toLocaleString('no-NO'),
      'Play more with Material UI',
    ],
  ];

  return (
    <MUIDataTable
      title={<h1>TODO Application</h1>}
      data={data}
      columns={todoItems}
      // columns={store.todos.items}
      // options={options}
    />
  );
};

export default SimpleTable;
