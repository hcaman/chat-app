import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  OnClickBtnDelteT,
  CheckUserT,
  IsOwnMsgsT,
} from '../components/MessagesList/types';
import { selectMsgsChat } from '../redux/chatSelector';
import { deleteMsg } from '../redux/chatSlice';
import { IChatAppData, IMessagesChat } from '../redux/types';
import { FoundLastMsg } from '../components/ChatRoom/types';

const useMessagesChat = (userLogged: string) => {
  const dispatch = useDispatch();
  const [isFinishTransition, setIsFinishtransition] = useState(false);

  const { msgsChat }: IChatAppData = useSelector(selectMsgsChat);

  const foundLastMsg: FoundLastMsg = (user) =>
    msgsChat.find((msg: IMessagesChat) => msg.user === user) || null;

  const onClickBtnDelte: OnClickBtnDelteT = (idToDelete) =>
    dispatch(deleteMsg(idToDelete));
  const setTrueFinishTrans = () => setIsFinishtransition(true);

  const checkUser: CheckUserT = (userMsgs) => userMsgs === userLogged;
  const isOwnMsgs: IsOwnMsgsT = (userMsgs) =>
    checkUser(userMsgs) ? 'onRight' : 'onLeft';

  return {
    isFinishTransition,
    msgsChat,
    foundLastMsg,
    setTrueFinishTrans,
    onClickBtnDelte,
    checkUser,
    isOwnMsgs,
  };
};

export default useMessagesChat;
