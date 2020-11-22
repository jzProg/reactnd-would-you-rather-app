import { combineReducers } from 'redux';
import authed from './authed';
import users from './users';

export default combineReducers({
  authed,
  users,
})
