import React, { useEffect, useState } from 'react';
import '../../styles/TextInput.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/userSlice';
import {
  addMsg,
  MessageModified,
  MessagesChat,
  updateMsg,
} from '../../redux/chatSlice';
import { SetIsLoggedIn } from '../../App';
import phrases from '../../dictionary';

type TextInputElement = ({
  isChat,
  setIsLoggedIn,
  currentUser,
  foundLastMsg,
}: {
  isChat?: boolean | undefined;
  setIsLoggedIn?: SetIsLoggedIn;
  currentUser?: string;
  foundLastMsg?: Function;
}) => JSX.Element;

type OnSubmitData = (data: string, id?: string) => void;
type OnSubmitFormType = (e: React.FormEvent<HTMLFormElement>) => void;
type OnChangeInputType = (e: React.FormEvent<HTMLInputElement>) => void;
type OnKeyUpChangeType = (e: React.KeyboardEvent<HTMLInputElement>) => void;

const TextInput: TextInputElement = ({
  isChat = false,
  setIsLoggedIn,
  currentUser,
  foundLastMsg,
}) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const [errorEmptyInput, setErrorEmptyInput] = useState<boolean>(false);
  const [lastMsg, setLastMsg] = useState<null | MessagesChat>(null);

  useEffect(() => {
    if (lastMsg) {
      setInputValue(lastMsg.message);
    }
  }, [lastMsg]);

  const onSubmitUser: OnSubmitData = (user) => {
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
  const onSubmitChat: OnSubmitData = (message) => {
    if (currentUser) {
      const idToModify = lastMsg?.id;
      const dataMsg = {
        message,
        user: currentUser,
      };
      if (idToModify) {
        const msgToModify: MessageModified = Object.assign(dataMsg, {
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
