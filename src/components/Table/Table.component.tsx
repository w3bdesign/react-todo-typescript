import * as React from 'react';
import MUIDataTable from 'mui-datatables';
import Typography from '@material-ui/core/Typography';

import { useStoreState } from '../../hooks/hooks';
import CompleteButton from '../Buttons/CompleteButton';
import DeleteButton from '../Buttons/DeleteButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({   
    title: {
      fontSize: 24,
      textAlign: 'left',
      color: '#000',
      paddingTop: theme.spacing(2),
    },    
  })
);


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
      ) => (
        <>
          <CompleteButton tableMeta={tableMeta} />
          <DeleteButton tableMeta={tableMeta} />
        </>
      ),
    },
  },
];

export default function Table() {
  const classes = useStyles();
  const todos = useStoreState((state) => state.todos.todoItems);
  return (
    <>
      <MUIDataTable
        title={<Typography className={classes.title}>TODO Application</Typography>}
        data={todos}
        columns={COLUMNS}
      />
    </>
  );
}
