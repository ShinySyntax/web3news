import AuthService from '../../services/authService';
export const LOGIN = 'LOGIN';
export const REGISTER  = 'REGISTER'

export const login = (params, history) => dispatch => {
    return AuthService.login(params)
        .then(data => {
            dispatch({ type: LOGIN, payload: data });
            history.push('/');
        })
        .catch(err => console.log(err));
}

export const register = (params, history) => dispatch => {
    return AuthService.register(params)
        .then(data => {
            dispatch({ type: REGISTER, payload: data });
            history.push('/');
        })
        .catch(err => console.log(err));
}