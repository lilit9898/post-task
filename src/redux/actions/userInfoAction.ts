import { IUser, IUserData, IUserInfo } from '../../types';

export const FETCH_USERINFO_REQUEST = 'FETCH_USERINFO_REQUEST';
export const FETCH_USERINFO_SUCCESS = 'FETCH_USERINFO_SUCCESS';
export const FETCH_USERINFO_FAILURE = 'FETCH_USERINFO_FAILURE';

export interface FetchUserInfoRequestAction {
  type: typeof FETCH_USERINFO_REQUEST;
  payload: string;
}

export interface FetchUserInfoSuccessAction {
  type: typeof FETCH_USERINFO_SUCCESS;
  payload: IUser;
}

export interface FetchUserInfoFailureAction {
  type: typeof FETCH_USERINFO_FAILURE;
  payload: string;
}

export type UserInfoAction =
  | FetchUserInfoRequestAction
  | FetchUserInfoSuccessAction
  | FetchUserInfoFailureAction;

export const fetchUserInfoRequest = (
  userId: string,
): FetchUserInfoRequestAction => ({
  type: FETCH_USERINFO_REQUEST,
  payload: userId,
});

export const fetchUserInfoSuccess = (
  userId: string,
  userPosts: IUserData,
  userInfo: IUserInfo,
): FetchUserInfoSuccessAction => ({
  type: FETCH_USERINFO_SUCCESS,
  payload: { userId, userInfo,userPosts },
});

export const fetchUserInfoFailure = (
  error: string,
): FetchUserInfoFailureAction => ({
  type: FETCH_USERINFO_FAILURE,
  payload: error,
});
