import React, { useEffect, useState } from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/userSlice';
import { addMsg, updateMsg } from '../../redux/chatSlice';
import phrases from '../../dictionary';
import {
  OnChangeInputType,
  OnKeyUpChangeType,
  OnSubmitDataType,
  OnSubmitFormType,
  TextInputType,
} from './types';
import { IMessageModified, IMessagesChat } from '../../redux/types';

const TextInput: TextInputType = ({
  isChat = false,
  setIsLoggedIn,
  currentUser,
  foundLastMsg,
}) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const [errorEmptyInput, setErrorEmptyInput] = useState<boolean>(false);
  const [lastMsg, setLastMsg] = useState<null | IMessagesChat>(null);

  useEffect(() => {
    if (lastMsg) {
      setInputValue(lastMsg.message);
    }
  }, [lastMsg]);

  const onSubmitUser: OnSubmitDataType = (user) => {
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
  const onSubmitChat: OnSubmitDataType = (message) => {
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

  const onChangeInput: OnChangeInputType = (e) => {
    setInputValue(e.currentTarget.value);
    setErrorEmptyInput(false);
  };

  const onSubmitForm: OnSubmitFormType = (e) => {
    e.preventDefault();
    if (!inputValue?.trim()) return setErrorEmptyInput(true);
    if (isChat) {
      onSubmitChat(inputValue);
    } else {
      onSubmitUser(inputValue);
    }
    setInputValue('');
  };

  const onKeyUpChange: OnKeyUpChangeType = (e) => {
    if (!isChat || typeof foundLastMsg === 'undefined' || e.key !== 'ArrowUp')
      return;
    setLastMsg(foundLastMsg(currentUser));
  };

  return (
    <form className="chatForm" onSubmit={onSubmitForm}>
      <input
        className={`chatInput ${errorEmptyInput ? 'errorInput' : ''}`}
        value={inputValue}
        onChange={onChangeInput}
        onKeyUpCapture={(e) => onKeyUpChange(e)}
        placeholder={isChat ? phrases.placeholderChat : phrases.placeholderUser}
      />
      {errorEmptyInput && <p className="errorMessage">{phrases.errorMsg}</p>}
    </form>
  );
};

export default TextInput;
