import { AnyAction, CombinedState } from '@reduxjs/toolkit';
import { Reducer } from 'react';

/* ****************** */
// Root Reducer Types
/* ****************** */
export interface IState {
  user: IUsersAppData;
  chat: IChatAppData;
}

export type CombineStateT = CombinedState<IState>;

export type RootReducerT = Reducer<CombineStateT, AnyAction>;

/* **************** */
// Chat Slice Types
/* **************** */
export type ConvertTimeT = (timeString: string | number) => string;

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
export interface IChatAppData {
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

export interface IUsersAppData {
  usersOnline: IUserData[];
  userLogged: string;
  isLoggedIn: boolean;
}
