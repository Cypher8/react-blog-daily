import alertConstants from './actionTypes';

export const success = (payload) => ({
    type: alertConstants.SUCCESS,
    payload
})

export const error = (payload) => ({
    type: alertConstants.ERROR,
    payload
})

export const clear = () => ({
    type: alertConstants.CLEAR
})

