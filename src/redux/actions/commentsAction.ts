import { ICommentsData } from '../../types';

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export interface FetchCommentsRequestAction {
  type: typeof FETCH_COMMENTS_REQUEST;
  payload: number;
}

export interface FetchCommentsSuccessAction {
  type: typeof FETCH_COMMENTS_SUCCESS;
  payload: ICommentsData[];
}

export interface FetchCommentsFailureAction {
  type: typeof FETCH_COMMENTS_FAILURE;
  payload: string;
}

export type CommentsAction =
  | FetchCommentsRequestAction
  | FetchCommentsSuccessAction
  | FetchCommentsFailureAction;

export const fetchCommentsRequest = (
  id: number,
): FetchCommentsRequestAction => ({
  type: FETCH_COMMENTS_REQUEST,
  payload: id,
});

export const fetchCommentsSuccess = (
  comments: ICommentsData[],
): FetchCommentsSuccessAction => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchCommentsFailure = (
  error: string,
): FetchCommentsFailureAction => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});
