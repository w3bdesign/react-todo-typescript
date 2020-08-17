import { Action, action } from 'easy-peasy';

/**
 * Interface for completeTodo with rowIndex: number
 */
interface ICompleteTodo {
  rowIndex: number;
}

export interface TodosModel {
  /**
   * List of todoItems as an array of arrays
   */
  todoItems: (string | boolean)[][];
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
  deleteTodo: Action<TodosModel>;
}

const todosModel: TodosModel = {
  todoItems: [
    ['Test', new Date().toLocaleString('no-NO'), false],
    ['Test more', new Date().toLocaleString('no-NO'), false],
    ['Test even more', new Date().toLocaleString('no-NO'), false],
    ['Test way more', new Date().toLocaleString('no-NO'), false],
  ],
  addTodo: action((state, payload) => {
    state.todoItems.push([payload, payload, payload]);
  }),
  completeTodo: action((state, { rowIndex }) => {
    console.log('Complete todo called from todo.ts');
    console.log(rowIndex);
    console.log(state.todoItems);
  }),
  deleteTodo: action((state, payload) => {
    state.todoItems.length = 0;
  }),
};

export default todosModel;
