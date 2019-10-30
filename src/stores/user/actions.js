import userConstants from './actionTypes';

export const login = (userData) => ({
    type: userConstants.LOGIN_REQUEST,
    payload: userData
})

export const logout = () => ({
    type: userConstants.LOGOUT_REQUEST
})