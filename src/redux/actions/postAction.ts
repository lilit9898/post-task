import { IPostsData } from '../../types';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export interface FetchPostsRequestAction {
  type: typeof FETCH_POSTS_REQUEST;
}

export interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: IPostsData[];
}

export interface FetchPostsFailureAction {
  type: typeof FETCH_POSTS_FAILURE;
  payload: string;
}

export type PostAction =
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction;

export const fetchPostsRequest = (): FetchPostsRequestAction => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (
  posts: IPostsData[],
): FetchPostsSuccessAction => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error: string): FetchPostsFailureAction => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

