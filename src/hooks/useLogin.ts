import { useState } from 'react';
import { ILoggedInData } from '../types';

const useLogin = () => {
  const logUsername = sessionStorage.getItem('logUsername');

  const [loggedInData, setLoggedInData] = useState<ILoggedInData>({
    logUsername: logUsername || '',
    isLoggedIn: !!logUsername || false,
  });
  return { loggedInData, setLoggedInData };
};

export default useLogin;
