import React from 'react';
import { Button } from '@material-ui/core';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

type ActionButtonProps = {
  id: number;
};

const ActionButtons = ({ id }: ActionButtonProps) => {
  const classes = useStyles();
  return (
    <>
      <Button variant="contained" color="primary" className={classes.button}>
        Complete
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Delete
      </Button>
    </>
  );
};

export default ActionButtons;
