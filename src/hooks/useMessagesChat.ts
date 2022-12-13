import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  OnClickBtnDelteType,
  CheckUserType,
  IsOwnMsgsType,
} from '../components/MessagesList/types';
import { selectMsgsChat } from '../redux/chatSelector';
import { deleteMsg } from '../redux/chatSlice';
import { ChatAppData } from '../redux/types';

const useMessagesChat = (userLogged: string) => {
  const dispatch = useDispatch();
  const [isFinishTransition, setIsFinishtransition] = useState(false);

  const { msgsChat }: ChatAppData = useSelector(selectMsgsChat);

  const onClickBtnDelte: OnClickBtnDelteType = (idToDelete) =>
    dispatch(deleteMsg(idToDelete));
  const setTrueFinishTrans = () => setIsFinishtransition(true);

  const checkUser: CheckUserType = (userMsgs) => userMsgs === userLogged;
  const isOwnMsgs: IsOwnMsgsType = (userMsgs) =>
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
