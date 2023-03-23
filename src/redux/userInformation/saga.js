import { MeTypes } from "./constants";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { forgotPassword, responseError } from "./actions";
// import {responseSuccess,responseError} from "./actions"
import axios from "axios";

function* forgotPasswordSaga({ payload: params }) {
  console.log(params);
  try {
    let datatoken = window.localStorage.datatoken

    console.log(datatoken);
    const response = yield call(axios.post('https://dev-api.rikkeiacademy.com/api/student/change-password', {
      old_password: params.data.oldPassword,
      password: params.data.newPassword
    }
    )
    )
    console.log(response);
    // if(response.status === 200){
    //   const data = response.data ? response.data : null;
    //   yield put(forgotPassword({ actionType: MeTypes.FORGOT_PASSWORD, payload: data }))
    // }
  } catch (error) {
    yield put(responseError({ actionType: MeTypes.RESPONSE_ERROR, payload: error.message }));
  }
}
function* postPasswordSaga() {
  yield all([takeLatest(MeTypes.FORGOT_PASSWORD, forgotPasswordSaga)])
}
export default postPasswordSaga;