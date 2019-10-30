import { put, takeLatest } from 'redux-saga/effects';
import userConstants from './actionTypes';
import alertConstants from '../alert/actionTypes';
import UserService from '../../services/user.service';
import AuthService from '../../services/auth.service';

function* login(action) {
    try {
        const res = yield UserService.login(action.payload);

        if (res && res.message === 'Login success') {
            const user = AuthService.getUserAuth();
            yield put({ type: userConstants.LOGIN_SUCCESS, payload: user });
        } else {
            const alertMessage = 'Please check your email and password again.';
            yield put({ type: alertConstants.ERROR, payload: alertMessage });
            yield put({ type: userConstants.LOGIN_FAILURE, payload: res.message })
        }
    } catch (error) {
        yield put({ type: userConstants.LOGIN_FAILURE, payload: error })
    }
}

function* logout() {
    try {
        const user = yield UserService.logout();

        yield put({ type: userConstants.LOGOUT_SUCCESS, payload: user });
    } catch (error) {
        yield put({ type: userConstants.LOGOUT_FAILURE, payload: error })
    }
}

export default function * userSaga(){
    yield takeLatest(userConstants.LOGIN_REQUEST, login);
    yield takeLatest(userConstants.LOGOUT_REQUEST, logout);
}