import { _getUsers, _createUser, _authenticateUser, _getQuestions, _saveQuestion, _saveQuestionAnswer, _updateData } from '../utils/_DATA';
import { getHash } from '../utils/encryption';
import { setUsers, setUserQuestion, setUserToken, setUserAnswer } from '../actions/users';
import { setQuestions, addQuestion, addQuestionAnswer } from '../actions/questions';
import { setAuthedToken, setAuthedUsername } from '../actions/authed';

export function fetchInitialData() {
  return (dispatch, getState) => {
    const { users, questions } = getState();
    if (Object.keys(users).length && Object.keys(questions).length) { // fetch from browser storage and update backend
      return _updateData(users, questions);
    } else {
      return Promise.all([
            _getUsers(),
            _getQuestions(),
         ]).then(([users, questions]) => {
            dispatch(setUsers(users));
            dispatch(setQuestions(questions));
          });
    }
  }
}

export function authenticate(username, pass) {
  return (dispatch) => {
    return _authenticateUser(username, getHash(pass))
        .then(token => {
          dispatch(setUserToken(username, token));
          dispatch(setAuthedToken(token));
          if (token) dispatch(setAuthedUsername(username));
        });
  }
}

export function createUserAccount(username, name, pass, avatar) {
  return (dispatch) => {
    return _createUser(username, name, getHash(pass), avatar)
        .then(users => {
          dispatch(setUsers(users));
          dispatch(setAuthedToken(users[username].token));
          dispatch(setAuthedUsername(username));
        });
  }
}

export function logoutUser() {
  return (dispatch) => {
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
    }).then(() => {
      dispatch(addQuestionAnswer(qid, answer, authed.username));
      dispatch(setUserAnswer(qid, answer, authed.username));
    })
  }
}
