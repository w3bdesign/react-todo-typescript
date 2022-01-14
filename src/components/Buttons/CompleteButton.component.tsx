import React, { useCallback } from "react";
import { Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { useStoreActions } from "../../hooks/hooks";

/**
 * Returns the index of the row we are completing
 */
interface ICompleteButtonIndex {
  value: any;
  tableMeta: { rowIndex: number };
  updateValue: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      minWidth: "110px",
    },
  })
);

const CompleteButton = ({
  value,
  tableMeta,
  updateValue,
}: ICompleteButtonIndex) => {
  const classes = useStyles();

  const completeTodo = useStoreActions((actions) => actions.todos.completeTodo);

  const logValues = () => ({ value, updateValue });

  logValues();

  const onCompleteClick = useCallback(() => {
    completeTodo(tableMeta);
  }, [completeTodo, tableMeta]);

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={onCompleteClick}
    >
      Complete
    </Button>
  );
};

export default CompleteButton;
