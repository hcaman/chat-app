import React from 'react';
import './styles.css';
import phrases from '../../dictionary';
import { TextInputT } from './types';
import useInput from '../../hooks/useInput';

const TextInput: TextInputT = ({
  isChat = false,
  setIsLoggedIn,
  currentUser = '',
}) => {
  const {
    onSubmitForm,
    errorEmptyInput,
    inputValue,
    onChangeInput,
    onKeyUpChange,
  } = useInput(setIsLoggedIn, currentUser, isChat);
  const { placeholderChat, placeholderUser, errorMsg } = phrases;

  return (
    <form className="chatForm" onSubmit={onSubmitForm}>
      <input
        className={`chatInput ${errorEmptyInput ? 'errorInput' : ''}`}
        value={inputValue}
        onChange={onChangeInput}
        onKeyUpCapture={(e) => onKeyUpChange(e)}
        placeholder={isChat ? placeholderChat : placeholderUser}
      />
      {errorEmptyInput && <p className="errorMessage">{errorMsg}</p>}
    </form>
  );
};

export default TextInput;
