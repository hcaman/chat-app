import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import userReducer from './userSlice';
import chatReducer from './chatSlice';
import persistConfig from './persistConfig';
import { RootReducerT } from './types';

const rootReducer = combineReducers<RootReducerT>({
  user: userReducer,
  chat: chatReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
