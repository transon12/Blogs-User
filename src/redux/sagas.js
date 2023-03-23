// @flow
import { all, takeLatest } from 'redux-saga/effects';

import authSaga from './auth/saga';
import layoutSaga from './layout/saga';
import dashboardSaga from './dashboard/saga';
import * as userSaga from './postInformation/userSaga';
import * as constants from './postInformation/constants'

export default function* rootSaga() {
    yield all([authSaga(), layoutSaga(), dashboardSaga(), userSaga()]);
}

export default function* rootSaga(){
    yield all([
        takeLatest(constants.USER_GET, userSaga.get_all_user),
        takeLatest(constants.UPDATE_POSTUSER, userSaga.create_user),   
    ])
}