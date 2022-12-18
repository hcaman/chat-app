import { SetIsLoggedIn } from '../../types';

interface UserLoginProps {
  setIsLoggedIn: SetIsLoggedIn;
}

export type TUserLogin = (props: UserLoginProps) => JSX.Element;
