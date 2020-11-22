export const SET_AUTHED = 'SET_AUTHED';
export const SET_AUTHED_USERNAME = 'SET_AUTHED_USERNAME';

export function setAuthedToken(token) {
  return {
    type: SET_AUTHED,
    token
  }
}

export function setAuthedUsername(username) {
  return {
    type: SET_AUTHED_USERNAME,
    username
  }
}
