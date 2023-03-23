import { call, put, takeLatest } from 'redux-saga/effects';
import * as services from '../postInformation/axios';
import { act_success } from './actions';
import { USER_GET_SUCCESS } from './constants';

export function* get_all_user() {
    listUser = yield call(services.GET_USER);
    yield put(act_success(listUser, USER_GET_SUCCESS));
}

export function* create_user(action) {
    yield call(services.POST_USER, action.payload);
    get_all_user();
}
