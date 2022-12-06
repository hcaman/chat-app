import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OnClickBtnDelteType } from '../components/MessagesList/types';
import { selectMsgsChat } from '../redux/chatSelector';
import { deleteMsg } from '../redux/chatSlice';
import { ChatAppData } from '../redux/types';

const useMessagesChat = () => {
  const dispatch = useDispatch();
  const [isFinishTransition, setIsFinishtransition] = useState(false);

  const { msgsChat }: ChatAppData = useSelector(selectMsgsChat);

  const onClickBtnDelte: OnClickBtnDelteType = (idToDelete) =>
    dispatch(deleteMsg(idToDelete));
  const setTrueFinishTrans = () => setIsFinishtransition(true);

  return {
    isFinishTransition,
    setTrueFinishTrans,
    onClickBtnDelte,
    msgsChat,
  };
};

export default useMessagesChat;
