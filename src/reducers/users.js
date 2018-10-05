import { RECEIVE_USERS } from '../actions/users';
import { ADD_QUESTION } from '../actions/questions'; 

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_QUESTION:
        return {
            ...state,
            [action.user]: {
                ...state[action.user],
                questions: state[action.user].questions.concat(action.question)
            }
        }
    default:
      return state;
  }
}
