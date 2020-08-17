import * as React from 'react';
import MUIDataTable from 'mui-datatables';

import { useStoreState } from '../../hooks/hooks';
import CompleteButton from '../Buttons/CompleteButton';

//import COLUMNS from '../../constants/COLUMNS';

interface ITableMeta {
  rowIndex: number;
}

const COLUMNS = [
  'Title',
  'Date',
  {
    name: 'Action',
    options: {
      filter: true,
      customBodyRender: (
        value: any,
        tableMeta: ITableMeta,
        updateValue: any
      ) => <CompleteButton tableMeta={tableMeta} />,
    },
  },
];

export default function Table() {
  const todos = useStoreState((state) => state.todos.todoItems);
  return (
    <>
      <MUIDataTable
        title={<h1>TODO Application</h1>}
        data={todos}
        columns={COLUMNS}
      />
    </>
  );
}
