import { Action, action } from 'easy-peasy';

export interface TodosModel {
  oitodoItems: string[][];
  addTodo: Action<TodosModel, string>;
  deleteTodo: Action<TodosModel, string>;
}

const todosModel: TodosModel = {
  oitodoItems: [
    ['Test', 'Build', 'Win'],
    ['Test more', 'Build more', 'Win more'],
    ['Test even more', 'Build even more', 'Win even more'],
    ['Test way more', 'Build', 'Win'],
  ],
  addTodo: action((state, payload) => {
    state.oitodoItems.push([payload, payload, payload]);
  }),
  deleteTodo: action((state, payload) => {
    state.oitodoItems.length = 0;
  }),
};

export default todosModel;
