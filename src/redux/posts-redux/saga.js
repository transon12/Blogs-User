import { call, put, takeLatest, fork, all } from 'redux-saga/effects';
import { postsListActionTypes } from './post_contanst';
import { fetchDataSuccess } from './post_actions';
import { fetchDataError } from './post_actions';
import axios from 'axios';




// Định nghĩa saga để gọi API
function* fetchDataDetailSaga(action) {
    console.log(action);
    try {
        const response = yield call(axios.get, `https://dev-api.rikkeiacademy.com/api/student/posts/${action.payload.params.id}`);
        yield put(fetchDataSuccess({ actionType: postsListActionTypes.POSTS_DETAIL, payload: response.data }));
    } catch (error) {
        yield put(fetchDataError({ actionType: postsListActionTypes.FETCH_DATA_DETAIL_ERROR, payload: error.message }));
    }
}

// Đăng ký saga với action type tương ứng
function* postSaga() {
    yield all([takeLatest(postsListActionTypes.POSTS_DETAIL, fetchDataDetailSaga)]);
}

export default postSaga;
