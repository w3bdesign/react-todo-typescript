import { createStore } from 'easy-peasy';
import model from '../model';

const store = createStore(model, devTools: process.env.NODE_ENV === 'development');

export default store;
