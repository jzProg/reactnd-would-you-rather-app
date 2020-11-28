export const SET_QUESTIONS = 'SET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    questions
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}
