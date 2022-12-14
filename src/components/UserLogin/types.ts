import { SetIsLoggedIn } from '../../types';

export type UserLoginElement = ({
  setIsLoggedIn,
}: {
  setIsLoggedIn: SetIsLoggedIn;
}) => JSX.Element;
