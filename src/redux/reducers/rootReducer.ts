import { combineReducers } from 'redux';
import postsReducer from './postReducer';
import commentsReducer from './commentsReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});
