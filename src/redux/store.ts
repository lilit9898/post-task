import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import rootSaga from './sagas/rootSaga';
import rootReducer from './reducers/postReducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
