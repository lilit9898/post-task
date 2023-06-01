import { combineReducers } from 'redux';
import postsReducer from './postReducer';
import commentsReducer from './commentsReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  userInfo: userReducer,
});
