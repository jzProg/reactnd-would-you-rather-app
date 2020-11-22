import { _getUsers, _createUser, _authenticateUser } from '../utils/_DATA';
import { getHash } from '../utils/encryption';
import { setUsers } from '../actions/users';
import { setAuthedToken, setAuthedUsername } from '../actions/authed';

export function fetchInitialData() {
  return (dispatch) => {
    return _getUsers()
        .then((users) => {
          dispatch(setUsers(users));
          const token = sessionStorage.getItem('authed');
          dispatch(setAuthedToken(token));
          const usersWithThisToken = Object.values(users).filter(user => user.token === token);
          if (usersWithThisToken.length) {
            dispatch(setAuthedUsername(usersWithThisToken[0].username));
          }
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
          if (token) dispatch(setAuthedUsername(username));
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
          dispatch(setAuthedUsername(username));
        });
  }
}

export function logoutUser() {
  return (dispatch) => {
    sessionStorage.setItem('authed', '');
    dispatch(setAuthedToken(''));
    dispatch(setAuthedUsername(''));
  }
}
