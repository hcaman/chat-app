import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  OnChangeInputT,
  OnKeyUpChangeT,
  OnSubmitDataT,
  OnSubmitFormT,
} from '../components/TextInput/types';
import { addMsg, updateMsg } from '../redux/chatSlice';
import { IMessageModified, IMessagesChat } from '../redux/types';
import { loginUser } from '../redux/userSlice';
import { SetIsLoggedIn } from '../types';

const useInput = (
  setIsLoggedIn: SetIsLoggedIn | undefined,
  currentUser: string,
  foundLastMsg: Function | undefined,
  isChat: boolean | undefined
) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const [errorEmptyInput, setErrorEmptyInput] = useState<boolean>(false);
  const [lastMsg, setLastMsg] = useState<null | IMessagesChat>(null);

  useEffect(() => {
    if (lastMsg) {
      setInputValue(lastMsg.message);
    }
  }, [lastMsg]);

  const onSubmitUser: OnSubmitDataT = (user) => {
    if (!user?.trim()) {
      return;
    }
    if (typeof setIsLoggedIn !== 'undefined') {
      dispatch(loginUser(user));
      setIsLoggedIn({
        logUsername: user,
        isLoggedIn: true,
      });
      sessionStorage.setItem('logUsername', user);
    }
  };

  const onSubmitChat: OnSubmitDataT = (message) => {
    if (currentUser) {
      const idToModify = lastMsg?.id;
      const dataMsg = {
        message,
        user: currentUser,
      };
      if (idToModify) {
        const msgToModify: IMessageModified = Object.assign(dataMsg, {
          id: idToModify,
        });
        dispatch(updateMsg(msgToModify));
        setLastMsg(null);
      } else {
        dispatch(addMsg(dataMsg));
      }
    }
  };

  const onChangeInput: OnChangeInputT = (e) => {
    setInputValue(e.currentTarget.value);
    setErrorEmptyInput(false);
  };

  const onSubmitForm: OnSubmitFormT = (e) => {
    e.preventDefault();
    if (!inputValue?.trim()) return setErrorEmptyInput(true);
    if (isChat) {
      onSubmitChat(inputValue);
    } else {
      onSubmitUser(inputValue);
    }
    setInputValue('');
  };

  const onKeyUpChange: OnKeyUpChangeT = (e) => {
    if (!isChat || typeof foundLastMsg === 'undefined' || e.key !== 'ArrowUp')
      return;
    setLastMsg(foundLastMsg(currentUser));
  };

  return {
    onSubmitForm,
    errorEmptyInput,
    inputValue,
    onChangeInput,
    onKeyUpChange,
  };
};

export default useInput;
