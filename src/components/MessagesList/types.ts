import { IMessagesChat } from '../../redux/types';

interface IMessagesListProps {
  currentUser: string;
  msgsChat: IMessagesChat[];
}

interface IMessagesCardProps {
  singleMsg: IMessagesChat;
  userLogged: string;
}

export type TMessagesList = (props: IMessagesListProps) => JSX.Element;

export type TMessagesCard = (props: IMessagesCardProps) => JSX.Element;

export type CheckUserType = (userMsgs: string) => boolean;
export type IsOwnMsgsType = (userMsgs: string) => string;
export type OnClickBtnDelteType = (idToDelete: string) => void;
