import { IPostsInitialState, IUserInitialState } from '../../types';
import {
  FETCH_USERINFO_FAILURE,
  FETCH_USERINFO_REQUEST,
  FETCH_USERINFO_SUCCESS,
  UserInfoAction,
} from '../actions/userInfoAction';

const initialState: IUserInitialState = {
  info: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: UserInfoAction) => {
  switch (action.type) {
    case FETCH_USERINFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USERINFO_SUCCESS:
      const { userId, userInfo, userPosts } = action.payload;
      return {
        ...state,
        loading: false,
        info: {
          ...state.info,
          [userId]: { userInfo, userPosts },
        },
      };
    case FETCH_USERINFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
