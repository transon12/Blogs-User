import { all, call, put, takeLatest } from 'redux-saga/effects';
import { MeTypes } from './constants';
import { responseSuccess, responseError, getAllPost } from './actions';
import { getListPostApi } from '../../helpers/api/postApi';

function* getListPost({ payload: { params } }) {
    try {
        const response = yield call(getListPostApi);
        if (response.status === 200) {
            const data = response.data ? response.data : null;
            yield put(responseSuccess(MeTypes.GET_ALL_POST, data));
        }
    } catch (error) {
        yield put(responseError(MeTypes.GET_ALL_POST, error));
    }
}
function* postSaga() {
    yield all([takeLatest(MeTypes.GET_ALL_POST, getListPost)]);
}
export default postSaga;
