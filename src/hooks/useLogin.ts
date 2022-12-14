import { useState } from 'react';
import { loggedInDataType } from '../types';

const useLogin = () => {
  const logUsername = sessionStorage.getItem('logUsername');

  const [loggedInData, setLoggedInData] = useState<loggedInDataType>({
    logUsername: logUsername || '',
    isLoggedIn: !!logUsername || false,
  });
  return { loggedInData, setLoggedInData };
};

export default useLogin;
