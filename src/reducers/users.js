import { SET_USERS, SET_USER_QUESTION, SET_USER_TOKEN, SET_USER_ANSWER } from '../actions/users';

export default function users(state = {}, action) {
  switch(action.type) {
  case SET_USERS: return {
    ...state,
    ...action.users
  };
  case SET_USER_QUESTION: return {
    ...state,
    [action.userId]: {
      ...state[action.userId],
      questions: state[action.userId].questions.concat([action.questionId])
    }
  };
  case SET_USER_TOKEN: return {
    ...state,
    [action.userId]: {
      ...state[action.userId],
      token: action.token
    }
  };
  case SET_USER_ANSWER: return {
    ...state,
    [action.userId]: {
      ...state[action.userId],
      answers: {
        ...state[action.userId].answers,
        [action.qid]: action.answer
      }
    }
  };
  default: return state;
  }
}
