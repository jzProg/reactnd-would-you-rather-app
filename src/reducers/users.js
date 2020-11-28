import { SET_USERS, SET_USER_QUESTION } from '../actions/users';

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
  default: return state;
  }
}
