import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import userReducer, { UsersAppData } from './userSlice';
import chatReducer, { ChatAppData } from './chatSlice';
import { Reducer } from 'react';

export type RootReducerType = Reducer<
  CombinedState<{
    user: UsersAppData;
    chat: ChatAppData;
  }>,
  AnyAction
>;

const rootReducer: RootReducerType = combineReducers({
  user: userReducer,
  chat: chatReducer,
});

export default rootReducer;
