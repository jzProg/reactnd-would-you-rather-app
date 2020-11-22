import { _getUsers, _createUser, _authenticateUser } from '../utils/_DATA';
import { getHash } from '../utils/encryption';
import { setUsers } from '../actions/users';
import { setAuthedToken } from '../actions/authed';

export function fetchInitialData() {
  return (dispatch) => {
    return _getUsers()
        .then((users) => {
          dispatch(setUsers(users));
          dispatch(setAuthedToken(sessionStorage.getItem('authed')));
        });
  }
}

export function authenticate(username, pass) {
  return (dispatch) => {
    return _authenticateUser(username, getHash(pass))
        .then(({ users, token }) => {
          dispatch(setUsers(users));
          sessionStorage.setItem('authed', token);
          dispatch(setAuthedToken(token));
        });
  }
}

export function createUserAccount(username, name, pass) {
  return (dispatch) => {
    return _createUser(username, name, getHash(pass))
        .then((users) => {
          dispatch(setUsers(users));
          sessionStorage.setItem('authed', users[username].token);
          dispatch(setAuthedToken(users[username].token));
        });
  }
}

export function logoutUser() {
  return (dispatch) => {
    sessionStorage.setItem('authed', '');
    dispatch(setAuthedToken(''));
  }
}
