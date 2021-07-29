import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer, // books 라는 키와 책의 배열을 값으로 가짐
  ActiveBook: ActiveBook
});

export default rootReducer;
