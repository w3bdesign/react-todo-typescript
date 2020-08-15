import React, { useCallback, useState } from 'react';

import { useStoreActions } from '../../hooks/hooks';

const AddTodoForm = () => {
  const [text, setText] = useState('');

  const addTodo = useStoreActions((actions) => actions.todos.addTodo);
  const deleteTodo = useStoreActions((actions) => actions.todos.deleteTodo);

  const onAddClick = useCallback(() => {
    addTodo(text);
    setText('');
  }, [addTodo, setText, text]);

  const onDeleteClick = useCallback(() => {
    deleteTodo('');
    setText('');
  }, [deleteTodo]);

  return (
    <div>
      <h1>Add todo form</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button onClick={onAddClick}>Add TODO</button>
      <button onClick={onDeleteClick}>Clear TODO</button>
    </div>
  );
};

export default AddTodoForm;
