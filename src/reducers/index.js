import { combineReducers } from 'redux';
import authed from './authed';
import users from './users';
import questions from './questions';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  authed,
  users,
  questions,
  loadingBar: loadingBarReducer
})
