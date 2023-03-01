// @flow
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { MeTypes } from './constants';
import { responseSuccess, responseError } from './actions';
import {
  getMeListApi,
  updateMeApi,
  submitMeApi,
  approveMeApi,
  feedbackMeApi,
  approveMultipleMeApi,
  feedbackMultipleMeApi,
} from '../../helpers/api/meApi';

function* getMeListSaga({ payload: { params } }) {
  try {
    const response = yield call(getMeListApi, params);
    if (response.status === 200) {
      const data = response.data ? response.data : null;
      yield put(responseSuccess(MeTypes.GET_ME_LIST, data));
    }
  } catch (error) {
    yield put(responseError(MeTypes.GET_ME_LIST, error));
  }
}

function* updateMeSaga({ payload: { params } }) {
  try {
    const response = yield call(updateMeApi, params);
    if (response.status === 200) {
      const data = response.data ? response.data : null;
      yield put(responseSuccess(MeTypes.UPDATE_ME, data));
    }
  } catch (error) {
    yield put(responseError(MeTypes.UPDATE_ME, error));
  }
}

function* submitMeSaga({ payload: { params } }) {
  try {
    const response = yield call(submitMeApi, params);
    if (response.status === 200) {
      const data = response.data ? response.data : null;
      yield put(responseSuccess(MeTypes.SUBMIT_ME, data));
    }
  } catch (error) {
    yield put(responseError(MeTypes.SUBMIT_ME, error));
  }
}

function* approveMeSaga({ payload: { params } }) {
  try {
    const response = yield call(approveMeApi, params);
    if (response.status === 200) {
      const data = response.data ? response.data : null;
      yield put(responseSuccess(MeTypes.APPROVE_ME, data));
    }
  } catch (error) {
    yield put(responseError(MeTypes.APPROVE_ME, error));
  }
}

function* feedbackMeSaga({ payload: { params } }) {
  try {
    const response = yield call(feedbackMeApi, params);
    if (response.status === 200) {
      const data = response.data ? response.data : null;
      yield put(responseSuccess(MeTypes.FEEDBACK_ME, data));
    }
  } catch (error) {
    yield put(responseError(MeTypes.FEEDBACK_ME, error));
  }
}

function* approveMultipleMeSaga({ payload: { params } }) {
  try {
    const response = yield call(approveMultipleMeApi, params);
    if (response.status === 200) {
      const data = response.data ? response.data : null;
      yield put(responseSuccess(MeTypes.APPROVE_MULTIPLE_ME, data));
    }
  } catch (error) {
    yield put(responseError(MeTypes.APPROVE_MULTIPLE_ME, error));
  }
}

function* feedbackMultipleMeSaga({ payload: { params } }) {
  try {
    const response = yield call(feedbackMultipleMeApi, params);
    if (response.status === 200) {
      const data = response.data ? response.data : null;
      yield put(responseSuccess(MeTypes.FEEDBACK_MULTIPLE_ME, data));
    }
  } catch (error) {
    yield put(responseError(MeTypes.FEEDBACK_MULTIPLE_ME, error));
  }
}

function* meSaga() {
  yield all([
    takeLatest(MeTypes.GET_ME_LIST, getMeListSaga),
    takeLatest(MeTypes.UPDATE_ME, updateMeSaga),
    takeLatest(MeTypes.SUBMIT_ME, submitMeSaga),
    takeLatest(MeTypes.APPROVE_ME, approveMeSaga),
    takeLatest(MeTypes.FEEDBACK_ME, feedbackMeSaga),
    takeLatest(MeTypes.APPROVE_MULTIPLE_ME, approveMultipleMeSaga),
    takeLatest(MeTypes.FEEDBACK_MULTIPLE_ME, feedbackMultipleMeSaga),
  ]);
}

export default meSaga;
