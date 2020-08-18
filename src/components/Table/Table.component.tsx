import * as React from 'react';
import MUIDataTable from 'mui-datatables';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { useStoreState } from '../../hooks/hooks';
import CompleteButton from '../Buttons/CompleteButton.component';
import DeleteButton from '../Buttons/DeleteButton.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 24,
      textAlign: 'left',
      color: '#000',
      paddingTop: theme.spacing(2),
    },
    CompletedTodoRow: {
      '& td': { backgroundColor: '#7cb342', textDecoration: 'line-through' },
    },
  })
);

interface ITableMeta {
  rowIndex: number;
}

const COLUMNS = [
  'Title',
  'Date',
  {
    name: 'Completed',
    options: {
      display: 'excluded',
      filter: false,
    },
  },
  {
    name: 'Action',
    options: {
      filter: true,
      customBodyRender: (
        _: any, // Unused variable, so any is OK
        tableMeta: ITableMeta,
        __: any // Unused variable, so any is OK
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

  const options = {
    setRowProps: (row: (string | boolean)[], _: number) => {
      console.log(row);
      return {
        className: clsx({
          [classes.CompletedTodoRow]: row[2] === true,
        }),
      };
    },
  };

  return (
    <>
      <MUIDataTable
        title={
          <Typography className={classes.title}>TODO Application</Typography>
        }
        data={todos}
        columns={COLUMNS}
        options={options}
      />
    </>
  );
}
