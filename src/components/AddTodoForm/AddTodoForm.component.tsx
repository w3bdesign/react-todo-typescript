import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Paper,
  Button,
  TextField,
  Typography,
  Fade,
  Snackbar,
  Box,
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import { useStoreActions } from '../../hooks/hooks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(2),
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
    buttonBox: {
      display: 'flex',
    },
    buttons: {
      margin: theme.spacing(1),
    },
  })
);

type Inputs = {
  addTodoInput: string;
};

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddTodoForm = () => {
  /**
   * Text in AddTodo input field
   */
  const [text, setText] = useState<string>('');
  /**
   * Text in AddTodo has text = true | false
   */
  const [hasWritten, sethasWritten] = useState<boolean>(false);
  /**
   * We have added a new TODO = true | false
   */
  const [addedTodo, setaddedTodo] = useState<boolean>(false);

  const classes = useStyles();

  const addTodo = useStoreActions((actions) => actions.todos.addTodo);
  const deleteAllTodos = useStoreActions(
    (actions) => actions.todos.deleteAllTodos
  );

  useEffect(() => {
    if (text.length > 0) {
      sethasWritten(true);
    } else if (text.length === 0) {
      sethasWritten(false);
    }
  }, [text]);

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    setaddedTodo(true);
    addTodo(Object.values(data)[0]);
    setText('');
  };

  const onTodoAddedClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setaddedTodo(false);
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
          <Box justifyContent="center">
            <TextField
              fullWidth
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
          </Box>
          <Box
            className={classes.buttonBox}
            justifyContent="center"
            width="100%"
          >
            <Fade in={hasWritten} timeout={1500}>
              {hasWritten ? (
                <Button
                  className={classes.buttons}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Add TODO
                </Button>
              ) : (
                <div />
              )}
            </Fade>
            <Button
              className={classes.buttons}
              onClick={() => {
                deleteAllTodos();
              }}
              variant="contained"
              color="secondary"
            >
              Delete all
            </Button>
          </Box>
        </form>
      </Paper>
      <Snackbar
        open={addedTodo}
        autoHideDuration={2000}
        onClose={onTodoAddedClose}
      >
        <Alert severity="success">TODO has been added!</Alert>
      </Snackbar>
    </div>
  );
};

export default AddTodoForm;
