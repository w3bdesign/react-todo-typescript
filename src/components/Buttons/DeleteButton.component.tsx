import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { useStoreActions } from '../../hooks/hooks';

/**
 * Returns the index of the row we are deleting
 */
interface IDeleteButtonIndex {
  tableMeta: { rowIndex: number };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

const DeleteButton = ({ tableMeta }: IDeleteButtonIndex) => {
  const classes = useStyles();

  const deleteTodo = useStoreActions((actions) => actions.todos.deleteTodo);

  const onDeleteClick = useCallback(() => {
    deleteTodo(tableMeta);
  }, [deleteTodo, tableMeta]);

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={onDeleteClick}
      >
        Delete
      </Button>
    </>
  );
};

export default DeleteButton;
