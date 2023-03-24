// @flow
import { all } from 'redux-saga/effects';
import postSaga from './posts-redux/saga';
import authSaga from './auth/saga';
import layoutSaga from './layout/saga';
import dashboardSaga from './dashboard/saga';
export default function* rootSaga() {
    yield all([authSaga(), layoutSaga(), dashboardSaga(), postSaga()]);
}
