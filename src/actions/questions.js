export const SET_QUESTIONS = 'SET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

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

export function addQuestionAnswer(qid, answer, voter) {
  return {
    type: ADD_QUESTION_ANSWER,
    qid,
    answer,
    voter
  }
}
