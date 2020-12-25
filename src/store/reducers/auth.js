import { LOGIN, REGISTER } from '../actions/actionTypes';

const initalState = {
    user: {},
    token: '',
    isLoggedIn: false
}

const authReducer = (state = initalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN:
            return {
                ...state,
                user: payload,
                token: payload.token,
                isLoggedIn: true
            }
        case REGISTER:
            return {
                ...state,
                user: payload,
                token: payload.token,
                isLoggedIn: true
            }
        default:
            return state;
    }


}

export default authReducer;
