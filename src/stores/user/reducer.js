import userConstants from './actionTypes';
import AuthService from '../../services/auth.service';

const user = AuthService.getUserAuth()

const initialState = {
    data: user,
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                data: { ...action.payload },
                loading: false
            }

        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                errMessage: action.payload,
                loading: false
            }

        case userConstants.LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case userConstants.LOGOUT_SUCCESS:
            return {
                ...state,
                data: { ...action.payload },
                loading: false
            }

        case userConstants.LOGOUT_FAILURE:
            return {
                ...state,
                errMessage: action.payload,
                loading: false
            }
        default:
            return state
    }
}