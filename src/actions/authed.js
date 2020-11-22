export const SET_AUTHED = 'SET_AUTHED';

export function setAuthedToken(token) {
  return {
    type: SET_AUTHED,
    token
  }
}
