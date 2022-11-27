import { MessagesChat } from '../../redux/chatSlice';

export type MessagesListType = ({
  currentUser,
  msgsChat,
}: {
  currentUser: string;
  msgsChat: MessagesChat[];
}) => JSX.Element;

export type MessagesCardType = ({
  singleMsg,
  userLogged,
}: {
  singleMsg: MessagesChat;
  userLogged: string;
}) => JSX.Element;

export type CheckUserType = (userMsgs: string) => boolean;
export type IsOwnMsgsType = (userMsgs: string) => string;
export type OnClickBtnDelteType = (idToDelete: string) => void;
