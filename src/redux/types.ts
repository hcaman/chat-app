// Chat Slice Types
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

// User Silce Types
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
