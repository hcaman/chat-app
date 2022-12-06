import React from 'react';
import './styles.css';
import phrases from '../../dictionary';
import { TextInputType } from './types';
import useInput from '../../hooks/useInput';

const TextInput: TextInputType = ({
  isChat = false,
  setIsLoggedIn,
  currentUser = '',
  foundLastMsg,
}) => {
  const {
    onSubmitForm,
    errorEmptyInput,
    inputValue,
    onChangeInput,
    onKeyUpChange,
  } = useInput(setIsLoggedIn, currentUser, foundLastMsg, isChat);
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
