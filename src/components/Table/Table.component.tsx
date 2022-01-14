/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import MUIDataTable from "mui-datatables";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

import { useStoreState } from "../../hooks/hooks";
import CompleteButton from "../Buttons/CompleteButton.component";
import DeleteButton from "../Buttons/DeleteButton.component";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 24,
      textAlign: "left",
      color: "#000",
      paddingTop: theme.spacing(2),
    },
    CompletedTodoRow: {
      "& td": { backgroundColor: "#7cb342", textDecoration: "line-through" },
    },
  })
);

type Display = boolean | "true" | "false" | "excluded";

interface ITableMeta {
  rowIndex: number;
}

/* We need to import Display type and cast it as Display */
const excluded: string = "excluded";
const castExcluded: Display = excluded as Display;

const COLUMNS = [
  "Title",
  "Date",
  {
    name: "Completed",
    options: {
      display: castExcluded,
      filter: false,
    },
  },
  {
    name: "Action",
    options: {
      filter: true,
      customBodyRender: (
        value: String,
        tableMeta: ITableMeta,
        updateValue: Object
      ) => (
        <>
          <CompleteButton
            value={value}
            updateValue={updateValue}
            tableMeta={tableMeta}
          />
          <DeleteButton tableMeta={tableMeta} />
        </>
      ),
    },
  },
];

const Table = () => {
  const classes = useStyles();
  const todos = useStoreState((state) => state.todos.todoItems);

  const options = {
    setRowProps: (row: (string | boolean)[], _x: number) => ({
      className: clsx({
        [classes.CompletedTodoRow]: row[2] === true,
      }),
    }),
  };

  return (
    <MUIDataTable
      title={
        <Typography className={classes.title}>TODO Application</Typography>
      }
      data={todos}
      columns={COLUMNS}
      options={options}
    />
  );
};

export default Table;
