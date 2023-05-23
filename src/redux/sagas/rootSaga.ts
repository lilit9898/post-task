import { takeLatest, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  FETCH_POSTS_REQUEST,
  fetchPostsSuccess,
  fetchPostsFailure,
} from '../actions/postAction';
import instance from '../../config/axios';
import { USERS_LIST_URL } from '../../constants';

function* fetchPostsSaga() {
  try {
    const response: AxiosResponse = yield call(
      instance.get,
      `${USERS_LIST_URL}`,
    );
    yield put(fetchPostsSuccess(response.data));
  } catch (error: any) {
    //petqa uxxel
    yield put(fetchPostsFailure(error.message));
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export default rootSaga;

