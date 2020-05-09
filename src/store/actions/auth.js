import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBH2H77-aKMk6KUQQKBfDc9kp3MuO4z-f0';
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBH2H77-aKMk6KUQQKBfDc9kp3MuO4z-f0';
        }
        axios.post(url, authData)
            .then(responce => {
                console.log(responce);
                dispatch(authSuccess(responce.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
}