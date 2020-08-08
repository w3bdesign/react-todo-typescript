import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { Paper, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '98%',
    },
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#000',
    paddingTop: theme.spacing(2),
  },
}));

const AddTodoForm = () => {
  const classes = useStyles();
  // className={classes.root} variant="outlined" raised>

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography
        className={classes.title}
        color="textSecondary"
        gutterBottom
      >
        Add TODO item
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <Button variant="contained" color="primary">
          Add TODO
        </Button>
      </form>
    </Paper>
  );
};

export default AddTodoForm;
