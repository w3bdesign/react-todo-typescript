import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Paper, Button, TextField, Typography } from '@material-ui/core';

import { useStoreActions } from '../../hooks/hooks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

type Inputs = {
  addTodoInput: string;
};

const AddTodoForm = () => {
  const [text, setText] = useState('');
  const classes = useStyles();

  const addTodo = useStoreActions((actions) => actions.todos.addTodo);
  const deleteTodo = useStoreActions((actions) => actions.todos.deleteTodo);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addTodo(Object.values(data)[0]);
    setText('');
  };

  const { register, handleSubmit, watch, errors } = useForm<Inputs>();

  return (
    <div>
      <Paper className={classes.root} elevation={3} variant="elevation">
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Add TODO item
        </Typography>
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            name="addTodoInput"
            id="addTodoInput"
            label="Title"
            variant="outlined"
            inputRef={register({ required: true })}
          />
          {errors.addTodoInput && (
            <Typography
              className={classes.error}
              color="textSecondary"
              gutterBottom
            >
              This field is required
            </Typography>
          )}
          <Button variant="contained" color="primary" type="submit">
            Add TODO
          </Button>
          <Button
          onClick={() => {
            deleteTodo("");
          }}
          variant="contained"
          color="primary"
        >
          Delete TODOs
        </Button>
        </form>        
      </Paper>
    </div>
  );
};

export default AddTodoForm;
