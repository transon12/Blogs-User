import { MeTypes } from "./constants";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { forgotPassword } from "./actions";
import {responseSuccess,responseError} from "./actions"
import axios from "axios";

function* forgotPasswordSaga() {
    try {
        console.log(1);
        const response =yield call(axios.get, 'https://dev-api.rikkeiacademy.com/api/student/change-password')
        console.log(response);
        yield put(forgotPassword({ actionType: MeTypes.FORGOT_PASSWORD, payload: response.data }))

    } catch (error) {
      yield put(responseError(MeTypes.APPROVE_ME, error));
    }
  }
function* postPasswordSaga(){
    yield all([takeLatest(MeTypes.FORGOT_PASSWORD, forgotPasswordSaga)])
}
export default postPasswordSaga;