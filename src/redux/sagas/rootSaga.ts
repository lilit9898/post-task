import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
  FETCH_POSTS_REQUEST,
  fetchPostsSuccess,
  fetchPostsFailure,
} from '../actions/postAction';
import {
  FETCH_COMMENTS_REQUEST,
  fetchCommentsSuccess,
  fetchCommentsFailure,
  CommentsAction,
} from '../actions/commentsAction';
import instance from '../../config/axios';
import { USERS_LIST_URL, COMMENTS_URL } from '../../constants';

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
    yield put(fetchCommentsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchCommentsFailure(error.message));
  }
}

function* watchFetchData() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPostsSaga);
  yield takeEvery('FETCH_COMMENTS_REQUEST', fetchCommentsSaga);
}

function* rootSaga() {
  yield watchFetchData();
}

export default rootSaga;
