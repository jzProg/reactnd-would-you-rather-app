export const SET_USERS = 'SET_USERS';
export const SET_USER_QUESTION = 'SET_USER_QUESTION';

export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  }
}

export function setUserQuestion(userId, questionId) {
  return {
    type: SET_USER_QUESTION,
    userId,
    questionId
  }
}
