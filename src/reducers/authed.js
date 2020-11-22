import { SET_AUTHED, SET_AUTHED_USERNAME } from '../actions/authed';

export default function authedUser(state = {}, action) {
  switch(action.type) {
  case SET_AUTHED: return { ...state, token: action.token };
  case SET_AUTHED_USERNAME: return { ...state, username: action.username };
  default: return state;
  }
}
