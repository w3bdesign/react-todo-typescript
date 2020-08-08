export type BodyRender = {
    value: number;
    tableMeta: { rowIndex: number };
  };

/**
 * CompleteButton and DeleteButton
 */
export type ButtonProps = { tableMeta: { rowIndex: number } };

/**
 * Todo
 */

export type Todo = {
    id: number;
    bodyText: string;
    completed: boolean;
  }

export type TodoListType = Todo[];

export type AppState = {
    todoList: TodoListType;
  }
