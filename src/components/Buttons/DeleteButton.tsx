import React from 'react';
import { Button } from '@material-ui/core';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    margin: theme.spacing(1),
  },
}));

// TODO Add better typing here

const DeleteButton = ({ tableMeta }:any) => {
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
        Delete
      </Button>
    </>
  );
};

export default DeleteButton;
