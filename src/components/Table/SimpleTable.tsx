import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';

import INITIAL_STATE from '../../const/INITIAL_STATE';

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
  // TODO Add better typing here
  const [columns, setdataColumns] = useState<any>(INITIAL_STATE);

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
      columns={columns}
      // options={options}
    />
  );
};

export default SimpleTable;
