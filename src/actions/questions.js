import { _getQuestions } from '../utils/_DATA'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION'


export function handleReceiveQuestions() {
    return (dispatch) => {
        return _getQuestions()
        .then((questions) => {
            dispatch(receiveQuestions(questions))
        })
    }
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function answerQuestion(answer) {
    return {
        type: ANSWER_QUESTION,
        answer
    }
}
