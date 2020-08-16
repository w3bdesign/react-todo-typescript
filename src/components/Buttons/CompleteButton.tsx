import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={(event) => {
          console.log('Tablemeta new rowIndex: ');
          console.log(tableMeta.rowIndex);
        }}
      >
        Complete
      </Button>
    </>
  );
};

export default CompleteButton;
