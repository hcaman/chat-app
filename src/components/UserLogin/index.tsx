import React from 'react';
import './styles.css';
import TextInput from '../TextInput';
import phrases from '../../dictionary';
import { UserLoginElement } from './types';

const UserLogin: UserLoginElement = ({ setIsLoggedIn }) => {
  return (
    <div className="loginContainer">
      <h2>{phrases.loginText}</h2>
      <TextInput setIsLoggedIn={setIsLoggedIn} isChat={false} />
    </div>
  );
};

export default UserLogin;
