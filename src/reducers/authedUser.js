import { LOGIN, LOGOUT } from '../actions/auth'

export default function authedUser(state = null, action) {
    switch(action.type) {
        case LOGIN:
            return action.id
        case LOGOUT:
            return ''
        default:
            return state
    }
}