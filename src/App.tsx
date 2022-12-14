import React from 'react';
import UserLogin from './components/UserLogin';
import ChatRoom from './components/ChatRoom';
import Header from './components/Header';
import useLogin from './hooks/useLogin';
import { AppType } from './types';

const App: AppType = () => {
  const { loggedInData, setLoggedInData } = useLogin();

  return (
    <>
      <Header />
      {loggedInData.isLoggedIn ? (
        <ChatRoom currentUser={loggedInData.logUsername} />
      ) : (
        <UserLogin setIsLoggedIn={setLoggedInData} />
      )}
    </>
  );
};

export default App;
