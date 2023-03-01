// @flow
import { all, fork, put, takeEvery, call } from 'redux-saga/effects';

import { loginGoogle } from '../../helpers/api/auth';
import {
    login as loginApi,
    logout as logoutApi,
    signup as signupApi,
    forgotPassword as forgotPasswordApi,
    forgotPasswordConfirm,
} from '../../helpers/api/auth';

import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { authApiResponseSuccess, authApiResponseError } from './actions';
import { AuthActionTypes } from './constants';
import { getDetail, updateUser, getAllProjects, updateToken } from '../../helpers/api/auth';
import { takeLatest } from 'redux-saga/effects';
const api = new APICore();

function* loginWithGoogle({ payload: { params } }) {
    try {
        const response = yield call(loginGoogle, params);
        const { content } = response.data;
        api.setLoggedInUser({ ...content?.user, token: content?.token });
        setAuthorization(content?.token);
        yield put(authApiResponseSuccess(AuthActionTypes.LOGIN_USER, content?.user));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.LOGIN_GOOGLE, error));
        api.setLoggedInUser(null);
        setAuthorization(null);
    }
}

/**
 * Login the user
 * @param {*} payload - username and password
 */
function* login({ payload: { username, password } }) {
    try {
        const response = yield call(loginApi, { username, password });
        const user = response.data;
        // NOTE - You can change this according to response format from your api
        api.setLoggedInUser(user);
        setAuthorization(user['token']);
        yield put(authApiResponseSuccess(AuthActionTypes.LOGIN_USER, user));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.LOGIN_USER, error));
        api.setLoggedInUser(null);
        setAuthorization(null);
    }
}

/**
 * Logout the user
 */
function* logout() {
    try {
        // yield call(logoutApi);
        api.setLoggedInUser(null);
        setAuthorization(null);
        yield put(authApiResponseSuccess(AuthActionTypes.LOGOUT_USER, {}));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.LOGOUT_USER, error));
    }
}

function* signup({ payload: { fullname, email, password } }) {
    try {
        const response = yield call(signupApi, { fullname, email, password });
        const user = response.data;
        // api.setLoggedInUser(user);
        // setAuthorization(user['token']);
        yield put(authApiResponseSuccess(AuthActionTypes.SIGNUP_USER, user));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.SIGNUP_USER, error));
        api.setLoggedInUser(null);
        setAuthorization(null);
    }
}

function* forgotPassword({ payload: { username } }) {
    try {
        const response = yield call(forgotPasswordApi, { username });
        yield put(authApiResponseSuccess(AuthActionTypes.FORGOT_PASSWORD, response.data));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.FORGOT_PASSWORD, error));
    }
}

function* forgotPasswordChange({ payload: { data } }) {
    try {
        const response = yield call(forgotPasswordConfirm, data);
        yield put(authApiResponseSuccess(AuthActionTypes.FORGOT_PASSWORD_CHANGE, response.data));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.FORGOT_PASSWORD_CHANGE, error));
    }
}

export function* watchLoginWithGoogle(): any {
    yield takeEvery(AuthActionTypes.LOGIN_GOOGLE, loginWithGoogle);
}

function* getDetails({ payload: {} }) {
    try {
        const user = api.getLoggedInUser();
        const userId = user?.id;
        const response = yield call(getDetail, { userId });
        const userDetails = response.data;
        yield put(authApiResponseSuccess(AuthActionTypes.GET_DETAILS, userDetails));
    } catch (error) {
        console.log(error);
    }
}

function* updateUsers({ payload: { data } }) {
    try {
        const user = api.getLoggedInUser();
        data.id = user?.id;
        const res = yield call(updateUser, data);
        if (res?.status === 200) {
            yield put(authApiResponseSuccess(AuthActionTypes.UPDATE_USER, {}));
        } else {
            yield put(authApiResponseError(AuthActionTypes.UPDATE_USER, res?.message));
        }
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.UPDATE_USER, error));
    }
}

function* getProjects({ payload: {} }) {
    try {
        const response = yield call(getAllProjects);
        yield put(authApiResponseSuccess(AuthActionTypes.GET_ALL_PROJECTS, response?.data));
    } catch (error) {
        console.log(error);
    }
}

function* updateTokens({ payload: { params } }) {
    try {
        const response = yield call(updateToken, params);
        yield put(authApiResponseSuccess(AuthActionTypes.UPDATE_TOKEN, response?.data));
    } catch (error) {
        console.log(error);
    }
}

export function* watchLoginUser(): any {
    yield takeEvery(AuthActionTypes.LOGIN_USER, login);
}

export function* watchLogout(): any {
    yield takeEvery(AuthActionTypes.LOGOUT_USER, logout);
}

export function* watchSignup(): any {
    yield takeEvery(AuthActionTypes.SIGNUP_USER, signup);
}

export function* watchForgotPassword(): any {
    yield takeEvery(AuthActionTypes.FORGOT_PASSWORD, forgotPassword);
}

export function* watchForgotPasswordChange(): any {
    yield takeEvery(AuthActionTypes.FORGOT_PASSWORD_CHANGE, forgotPasswordChange);
}

export function* watchGetDetails(): any {
    yield takeLatest(AuthActionTypes.GET_DETAILS, getDetails);
}

export function* watchUpdateUser(): any {
    yield takeLatest(AuthActionTypes.UPDATE_USER, updateUsers);
}

export function* watchGetProjects(): any {
    yield takeLatest(AuthActionTypes.GET_ALL_PROJECTS, getProjects);
}

export function* watchUpdateToken(): any {
    yield takeLatest(AuthActionTypes.UPDATE_TOKEN, updateTokens);
}

function* authSaga(): any {
    yield all([
        fork(watchLoginWithGoogle),
        fork(watchLoginUser),
        fork(watchLogout),
        fork(watchSignup),
        fork(watchForgotPassword),
        fork(watchForgotPasswordChange),
        fork(watchGetDetails),
        fork(watchUpdateUser),
        fork(watchGetProjects),
        fork(watchUpdateToken),
    ]);
}

export default authSaga;
