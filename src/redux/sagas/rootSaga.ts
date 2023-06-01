import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { fetchPostsSuccess, fetchPostsFailure } from '../actions/postAction';
import {
  fetchCommentsSuccess,
  fetchCommentsFailure,
  CommentsAction,
} from '../actions/commentsAction';
import instance from '../../config/axios';
import { USERS_LIST_URL, COMMENTS_URL } from '../../constants';
import {
  UserInfoAction,
  fetchUserInfoFailure,
  fetchUserInfoSuccess,
} from '../actions/userInfoAction';
import { log } from 'console';

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

function* fetchCommentsSaga(action: CommentsAction) {
  const id = action.payload;

  try {
    const response: AxiosResponse = yield call(
      instance.get,
      `/posts/${id}${COMMENTS_URL}`,
    );
    yield put(fetchCommentsSuccess(id as number, response.data));
  } catch (error: any) {
    yield put(fetchCommentsFailure(error.message));
  }
}

function* fetchUserInfoSaga(action: UserInfoAction) {
  const userId = action.payload;
  try {
    const response: AxiosResponse = yield call(
      instance.get,
      `/users/${userId}/posts`,
    );
    const userInfoResponse: AxiosResponse = yield call(
      instance.get,
      `/users/${userId}`,
    );
    yield put(
      fetchUserInfoSuccess(
        userId as string, 
        response.data,
        userInfoResponse.data
      
      ),
    );
  } catch (error: any) {
    yield put(fetchUserInfoFailure(error.message));
  }
}

function* watchFetchData() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPostsSaga);
  yield takeEvery('FETCH_COMMENTS_REQUEST', fetchCommentsSaga);
  yield takeEvery('FETCH_USERINFO_REQUEST', fetchUserInfoSaga);
}

function* rootSaga() {
  yield watchFetchData();
}

export default rootSaga;
