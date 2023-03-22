import { MeTypes } from './constants';
import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { responseRequet, responseFeail, responseSuccess } from './actions';
import {} from './actions';

function* loginsaga({ payload: { params } }) {
    console.log(params);
    try {
        const response = yield call(axios.post, 'https://dev-api.rikkeiacademy.com/api/student/login', params);
        yield put(responseSuccess({ type: MeTypes.LOGIN_REQUET, payload: response.data }));
    } catch (error) {
        yield put(responseFeail({ type: MeTypes.LOGIN_FEAIL, payload: error.message }));
    }
}
// Đăng ký saga với action type tương ứng
function* loginSaga() {
    yield all([takeLatest(MeTypes.LOGIN_REQUET, loginsaga)]);
}

export default loginSaga;
