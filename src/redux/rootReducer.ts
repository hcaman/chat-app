import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { Reducer } from 'react';
import { persistReducer } from 'redux-persist';
import userReducer from './userSlice';
import chatReducer from './chatSlice';
import persistConfig from './persistConfig';
import { ChatAppData, UsersAppData } from './types';

export type RootReducerType = Reducer<
  CombinedState<{
    user: UsersAppData;
    chat: ChatAppData;
  }>,
  AnyAction
>;

const rootReducer: RootReducerType | any = combineReducers({
  user: userReducer,
  chat: chatReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
