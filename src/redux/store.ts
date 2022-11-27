import { configureStore } from '@reduxjs/toolkit';
import {
  initMessageListener,
  createStateSyncMiddleware,
} from 'redux-state-sync';
import persistedReducer from './rootReducer';

const excludedActions: string[] = ['persist/PERSIST', 'persist/REHYDRATE'];

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      createStateSyncMiddleware({
        blacklist: excludedActions,
      })
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof persistedReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

initMessageListener(store);

export default store;
