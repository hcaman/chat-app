import { IMessagesChat } from '../../redux/types';

export type MessagesListType = ({
  currentUser,
  msgsChat,
}: {
  currentUser: string;
  msgsChat: IMessagesChat[];
}) => JSX.Element;

export type MessagesCardType = ({
  singleMsg,
  userLogged,
}: {
  singleMsg: IMessagesChat;
  userLogged: string;
}) => JSX.Element;

export type CheckUserType = (userMsgs: string) => boolean;
export type IsOwnMsgsType = (userMsgs: string) => string;
export type OnClickBtnDelteType = (idToDelete: string) => void;
