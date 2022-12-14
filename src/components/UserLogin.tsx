import React from 'react';
import { SetIsLoggedIn } from '../App';
import '../styles/UserLogin.css';
import TextInput from './ui/TextInput';
import phrases from '../dictionary';

type UserLoginElement = ({
  setIsLoggedIn,
}: {
  setIsLoggedIn: SetIsLoggedIn;
}) => JSX.Element;

const UserLogin: UserLoginElement = ({ setIsLoggedIn }) => {
  return (
    <div className="loginContainer">
      <h2>{phrases.loginText}</h2>
      <TextInput setIsLoggedIn={setIsLoggedIn} isChat={false} />
    </div>
  );
};

export default UserLogin;
