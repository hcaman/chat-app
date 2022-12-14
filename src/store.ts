import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync';
import rootReducer from './redux/rootReducer';
import persistConfig from './redux/persistConfig';
import { RootReducerType } from './redux/types';

const excludedActions = ['persist/PERSIST', 'persist/REHYDRATE'];

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({ serializableCheck: false }).concat(
    createStateSyncMiddleware({
      blacklist: excludedActions,
    })
  );

const reducer = persistReducer(
  persistConfig,
  rootReducer as RootReducerType | any
);

const store = configureStore({ reducer, middleware });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

initMessageListener(store);

export default store;
