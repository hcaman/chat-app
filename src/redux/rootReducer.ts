import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { Reducer } from 'react';
import { persistReducer } from 'redux-persist';
import userReducer, { UsersAppData } from './userSlice';
import chatReducer, { ChatAppData } from './chatSlice';
import persistConfig from './persistConfig';

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
