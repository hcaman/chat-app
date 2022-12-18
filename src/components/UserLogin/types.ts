import { SetIsLoggedIn } from '../../types';

interface UserLoginProps {
  setIsLoggedIn: SetIsLoggedIn;
}

export type UserLoginT = (props: UserLoginProps) => JSX.Element;
