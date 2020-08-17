import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Paper, Button, TextField, Typography, Fade } from '@material-ui/core';

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
  const [hasWritten, sethasWritten] = useState(false);
  const classes = useStyles();

  const addTodo = useStoreActions((actions) => actions.todos.addTodo);
  const deleteTodo = useStoreActions((actions) => actions.todos.deleteTodo);

  useEffect(() => {
    if (text.length > 0) {
      sethasWritten(true);
    } else if (text.length === 0) {
      sethasWritten(false);
    }
  }, [text]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addTodo(Object.values(data)[0]);
    setText('');
  };

  const { register, handleSubmit, errors } = useForm<Inputs>();

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
            onChange={(event) => {
              setText(event.target.value);
            }}
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
          <Fade in={hasWritten} timeout={1500}>
            {hasWritten ? (
              <Button variant="contained" color="primary" type="submit">
                Add TODO
              </Button>
            ) : (
              <Button
                style={{ display: 'none' }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Add TODO
              </Button>
            )}
          </Fade>

          <Button
            onClick={() => {
              deleteTodo();
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
