import { combineReducers } from 'redux';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  PostAction,
} from '../actions/postAction';
import { IInitialState } from '../../types';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: IInitialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action: PostAction) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
