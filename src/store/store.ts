import { createStore, action, Action } from 'easy-peasy';

import INITIAL_STATE from '../const/INITIAL_STATE';
import { BodyRender } from './types';

// https://easy-peasy.now.sh/docs/typescript-tutorial/create-your-store.html

// TODO Add better typing here



const store:any = createStore({
  items: INITIAL_STATE,
  addTodo: action((state, payload) => {
    // state.todos.items.push(payload);
    // state.push(payload);
    console.log('Add State from Easy Peasy: ');
    console.log(state);
    console.log(payload);
  }),
  completeTodo: action((state, payload) => {
    // state.todos.items.splice(payload);
    console.log('Complete State from Easy Peasy: ');
    console.log(state);
    console.log(payload);
  }),
  deleteTodo: action((state, payload) => {
    // state.todos.items.splice(payload);
    console.log('Delete State from Easy Peasy: ');
    console.log(state);
    console.log(payload);
  }),
});

export default store;
