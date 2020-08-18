import { Action, action } from 'easy-peasy';

/**
 * Interface for completeTodo with rowIndex: number
 */
interface ICompleteTodo {
  rowIndex: number;
}

export interface TodosModel {
  /**
   * List of todoItems. We accept strings and booleans, and we use the boolean for the completed TODOs
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
   * Action to delete all todos from todoItems array
   */
  deleteAllTodos: Action<TodosModel>;
  /**
   * Action to delete a single todo from todoItems array
   */
  deleteTodo: Action<TodosModel, ICompleteTodo>;
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
    state.todoItems[rowIndex][2] = true   
  }),
  deleteTodo: action((state, { rowIndex }) => {
    //state.todoItems.length = 0;
    console.log('Delete single todo called from todo.ts');
    console.log(rowIndex);
    

  }),
  deleteAllTodos: action((state, _) => {
    state.todoItems.length = 0;
  }),
};

export default todosModel;
