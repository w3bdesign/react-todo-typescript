import { createTypedHooks } from 'easy-peasy';

// import { StoreModel } from './model'; // 👈 import our model type

interface TodosModel {
    items: string[];
  }

  interface StoreModel {
    todos: TodosModel;
  }

const todosModel: TodosModel = {
  items: [],
};

const storeModel: StoreModel = {
  todos: todosModel,

};

// Provide our model to the helper      👇
const typedHooks = createTypedHooks<StoreModel>();

/* eslint-disable prefer-destructuring */
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
