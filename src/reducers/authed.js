import { SET_AUTHED } from '../actions/authed';

export default function authedUser(state = {}, action) {
  switch(action.type) {
  case SET_AUTHED: return action.token;
  default: return state;
  }
}
