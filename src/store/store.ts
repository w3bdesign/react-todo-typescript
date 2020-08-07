import { createStore, action } from 'easy-peasy';

import INITIAL_STATE from '../const/INITIAL_STATE';

// https://easy-peasy.now.sh/docs/typescript-tutorial/create-your-store.html

const store = createStore({
  todos: {
    items: INITIAL_STATE,
    add: action((state, payload) => {
      // state.todos.items.push(payload);
      console.log(state);
    }),
  },
});

export default store;
