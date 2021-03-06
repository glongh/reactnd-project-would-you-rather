import { _getUsers } from '../utils/_DATA'

export const RECEIVE_USERS = 'RECEIVE_USERS';

export function handleReceiveUsers() {
    return (dispatch) => {
        return _getUsers()
            .then((users) => dispatch(receiveUsers(users)))
    }

}

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}