export interface Todo {
  id: number;
  bodyText: string;
  completed: boolean;
}

export type TodoListType = Todo[];

export interface AppState {
  todoList: TodoListType;
}
