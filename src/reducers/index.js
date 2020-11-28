import { combineReducers } from 'redux';
import authed from './authed';
import users from './users';
import questions from './questions';

export default combineReducers({
  authed,
  users,
  questions,
})
