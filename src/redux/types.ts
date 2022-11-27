import { Action } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { AnyAction, CombinedState } from '@reduxjs/toolkit';
import { Reducer } from 'react';

/* *********** */
// Store Types
/* *********** */
export type StoreType = ToolkitStore<PersistPartial, Action<any>, any>;

/* ****************** */
// Root Reducer Types
/* ****************** */
export type RootReducerType = Reducer<
  CombinedState<{
    user: UsersAppData;
    chat: ChatAppData;
  }>,
  AnyAction
>;

/* **************** */
// Chat Slice Types
/* **************** */
export type ConvertTimeType = (timeString: string | number) => string;

export interface IMsgDataPayload {
  message: string;
  user: string;
}
export interface IMessageModified extends IMsgDataPayload {
  id: string;
}
export interface IMessagesChat extends IMessageModified {
  hourAndMinutes: string;
  addTime: number;
}
export interface ChatAppData {
  msgsChat: IMessagesChat[];
}

/* **************** */
// User Silce Types
/* **************** */
export interface IUserData {
  id: string;
  userName: string;
  isOnline: boolean;
}

export interface UsersAppData {
  usersOnline: IUserData[];
  userLogged: string;
  isLoggedIn: boolean;
}
