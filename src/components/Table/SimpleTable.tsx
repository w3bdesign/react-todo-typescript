import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { Button } from '@material-ui/core';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    margin: theme.spacing(1),
  },
}));

// https://material-ui.com/components/transitions/#fade

// https://github.com/gregnb/mui-datatables

// https://codesandbox.io/s/github/gregnb/mui-datatables?file=/examples/component/index.js

const SimpleTable = () => {
  const classes = useStyles();
  const [columns, setColumns] = useState([

    'Title',
    'Date',
    {
      name: 'Action',
      options: {
        filter: true,
        customBodyRender: (
          value: any,
          tableMeta: { rowIndex: number; },
          updateValue: any,
        ) => (
          <>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={(event) => {
                console.log('Value: ');
                console.log(value);
                console.log('Tablemeta: ');
                console.log(tableMeta);
                console.log('updateValue: ');
                console.log(updateValue);
              }}
            >
              Complete
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={(event) => {
                console.log('Tablemeta index: ');

                console.log(tableMeta.rowIndex);
              }}
            >
              Delete
            </Button>
          </>
        ),
      },
    },

  ]);

  const data = [
    ['Play with Material UI', new Date().toLocaleString('no-NO'), 'Play with Material UI'],
    ['Play more with Material UI', new Date().toLocaleString('no-NO'), 'Play more with Material UI'],
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
