import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Paper, Button, TextField, Typography,
} from '@material-ui/core';

import { Inputs } from './types';

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
  error: {
    fontSize: 16,
    textAlign: 'left',
    color: '#FF0000',
  },
}));

const AddTodoForm = () => {
  const classes = useStyles();
  const {
    register, handleSubmit, watch, errors,
  } = useForm<Inputs>();

  const onSubmit:SubmitHandler<Inputs> = (data) => {
    console.log('Submit!');
    alert(JSON.stringify(data));
  };

  return (
    <Paper className={classes.root} elevation={3} variant="elevation">
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Add TODO item
      </Typography>
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          name="addTodoInput"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          // inputRef={register}
          // required

          inputRef={register({ required: true })}
        />
        {errors.addTodoInput && (
        <Typography className={classes.error} color="textSecondary" gutterBottom>
          This field is required
        </Typography>
        )}
        <Button variant="contained" color="primary" type="submit">
          Add TODO
        </Button>
      </form>
    </Paper>
  );
};

export default AddTodoForm;
