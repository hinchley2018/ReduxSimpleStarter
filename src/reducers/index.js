import { combineReducers } from 'redux';

import booksReducer from './books';
import ActiveBook from './active_book'

const rootReducer = combineReducers({
  books: booksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
