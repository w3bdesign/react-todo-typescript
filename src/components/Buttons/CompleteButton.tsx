import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { useStoreActions } from '../../hooks/hooks';

interface ICompleteButtonIndex {
  tableMeta: { rowIndex: number };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

const CompleteButton = ({ tableMeta }: ICompleteButtonIndex) => {
  const classes = useStyles();

  const completeTodo = useStoreActions((actions) => actions.todos.completeTodo);

  const onCompleteClick = useCallback(() => {
    completeTodo(tableMeta);
  }, [completeTodo, tableMeta]);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={onCompleteClick}
      >
        Complete
      </Button>
    </>
  );
};

export default CompleteButton;
