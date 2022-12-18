import { Action, configureStore } from '@reduxjs/toolkit';
import {
  initMessageListener,
  createStateSyncMiddleware,
} from 'redux-state-sync';
import persistedReducer from './rootReducer';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { PersistPartial } from 'redux-persist/es/persistReducer';

const excludedActions: string[] = ['persist/PERSIST', 'persist/REHYDRATE'];

const store: StoreT = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      createStateSyncMiddleware({
        blacklist: excludedActions,
      })
    ),
});

export type StoreT = ToolkitStore<PersistPartial, Action<any>, any>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof persistedReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

initMessageListener(store);

export default store;
