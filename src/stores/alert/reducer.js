import alertConstants from './actionTypes';

const inintialState = {
    type: 'info',
    message: ''
}

export default function (state = inintialState, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                ...state,
                type: 'success',
                message: action.payload
            }

        case alertConstants.ERROR:
            return {
                ...state,
                type: 'error',
                message: action.payload
            }

        case alertConstants.CLEAR:
            return {
                ...state,
                type: 'info',
                message: ''
            }

        default:
            return state;
    }
}