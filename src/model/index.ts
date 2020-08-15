import todosModel, { TodosModel } from './todos';

export interface StoreModel {
  todos: TodosModel;
}

const storeModel: StoreModel = {
  todos: todosModel,
};

export default storeModel;
