import { Action, action } from 'easy-peasy';

interface ICompleteTodo {
  rowIndex: number;
}

export interface TodosModel {
  /**
   * List of todoItems as an array of arrays
   */
  todoItems: string[][];
  /**
   * Action to add a todo to todoItems array
   */
  addTodo: Action<TodosModel, string>;
  /**
   * Action to complete a todo in todoItems array
   */
  completeTodo: Action<TodosModel, ICompleteTodo>;
  /**
   * Action to delete a todo from todoItems array
   */
  deleteTodo: Action<TodosModel, string>;
}

const todosModel: TodosModel = {
  todoItems: [
    ['Test', new Date().toLocaleString('no-NO'), 'Test'],
    ['Test more', new Date().toLocaleString('no-NO'), 'Test more'],
    ['Test even more', new Date().toLocaleString('no-NO'), 'Test even more'],
    ['Test way more', new Date().toLocaleString('no-NO'), 'Test way more'],
  ],
  addTodo: action((state, payload) => {
    state.todoItems.push([payload, payload, payload]);
  }),
  completeTodo: action((state, {rowIndex}) => {
    console.log("Complete todo called from todo.ts")
    console.log(rowIndex);
  }),
  deleteTodo: action((state, payload) => {
    state.todoItems.length = 0;
  }),
};

export default todosModel;
