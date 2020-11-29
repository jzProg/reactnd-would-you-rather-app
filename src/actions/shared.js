import { _getUsers, _createUser, _authenticateUser, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { getHash } from '../utils/encryption';
import { setUsers, setUserQuestion, setUserToken, setUserAnswer } from '../actions/users';
import { setQuestions, addQuestion, addQuestionAnswer } from '../actions/questions';
import { setAuthedToken, setAuthedUsername } from '../actions/authed';

export function fetchInitialData() {
  return (dispatch) => {
    return Promise.all([
          _getUsers(),
          _getQuestions(),
       ]).then(([users, questions]) => {
          dispatch(setUsers(users));
          dispatch(setQuestions(questions));
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
        .then(({ token }) => {
          dispatch(setUserToken(username, token));
          sessionStorage.setItem('authed', token);
          dispatch(setAuthedToken(token));
          if (token) dispatch(setAuthedUsername(username));
        });
  }
}

export function createUserAccount(username, name, pass, avatar) {
  return (dispatch) => {
    return _createUser(username, name, getHash(pass), avatar)
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

export function addQuestionAction(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authed } = getState();
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authed.username
    }).then(question => {
      dispatch(addQuestion(question));
      dispatch(setUserQuestion(authed.username, question.id));
    })
  }
}

export function answerQuestionAction(qid, answer) {
  return (dispatch, getState) => {
    const { authed } = getState();
    return _saveQuestionAnswer({
      authedUser: authed.username,
      qid,
      answer
    }).then(question => {
      dispatch(addQuestionAnswer(qid, answer, authed.username));
      dispatch(setUserAnswer(qid, answer, authed.username));
    })
  }
}
