import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  OnClickBtnDelteT,
  CheckUserT,
  IsOwnMsgsT,
} from '../components/MessagesList/types';
import { selectMsgsChat } from '../redux/chatSelector';
import { deleteMsg } from '../redux/chatSlice';
import { IChatAppData } from '../redux/types';

const useMessagesChat = (userLogged: string) => {
  const dispatch = useDispatch();
  const [isFinishTransition, setIsFinishtransition] = useState(false);

  const { msgsChat }: IChatAppData = useSelector(selectMsgsChat);

  const onClickBtnDelte: OnClickBtnDelteT = (idToDelete) =>
    dispatch(deleteMsg(idToDelete));
  const setTrueFinishTrans = () => setIsFinishtransition(true);

  const checkUser: CheckUserT = (userMsgs) => userMsgs === userLogged;
  const isOwnMsgs: IsOwnMsgsT = (userMsgs) =>
    checkUser(userMsgs) ? 'onRight' : 'onLeft';

  return {
    isFinishTransition,
    setTrueFinishTrans,
    onClickBtnDelte,
    msgsChat,
    checkUser,
    isOwnMsgs,
  };
};

export default useMessagesChat;
