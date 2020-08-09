import { createStore, action } from 'easy-peasy';

import INITIAL_STATE from '../const/INITIAL_STATE';

// https://easy-peasy.now.sh/docs/typescript-tutorial/create-your-store.html

// TODO Add better typing here

const store = createStore({
  todos: {
    items: INITIAL_STATE,
    add: action((state, payload) => {
      // state.todos.items.push(payload);
      console.log('Add State from Easy Peasy: ');
      console.log(state);
    }),
    complete: action((state, payload) => {
      // state.todos.items.splice(payload);
      console.log('Complete State from Easy Peasy: ');
      console.log(state);
    }),
    delete: action((state, payload) => {
      // state.todos.items.splice(payload);
      console.log('Delete State from Easy Peasy: ');
      console.log(state);
    }),
  },
});

export default store;
