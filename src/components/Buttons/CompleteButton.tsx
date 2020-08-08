import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    margin: theme.spacing(1),
  },
}));

const CompleteButton = ({ tableMeta }: { tableMeta: { rowIndex: number } }) => {
  const classes = useStyles();
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={(event) => {
          console.log('Tablemeta: ');
          console.log(tableMeta.rowIndex);
        }}
      >
        Complete
      </Button>
    </>
  );
};

export default CompleteButton;
