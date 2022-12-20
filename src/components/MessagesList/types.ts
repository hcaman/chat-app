import { IMessagesChat } from '../../redux/types';

interface IMessagesListProps {
  currentUser: string;
  msgsChat: IMessagesChat[];
}

interface IMessagesCardProps {
  singleMsg: IMessagesChat;
  userLogged: string;
}

export type MessagesListT = (props: IMessagesListProps) => JSX.Element;

export type MessagesCardT = (props: IMessagesCardProps) => JSX.Element;

export type CheckUserT = (userMsgs: string) => boolean;
export type IsOwnMsgsT = (userMsgs: string) => string;
export type OnClickBtnDelteT = (idToDelete: string) => void;
