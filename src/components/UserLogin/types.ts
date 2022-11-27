import { SetIsLoggedIn } from '../../App';

export type UserLoginElement = ({
  setIsLoggedIn,
}: {
  setIsLoggedIn: SetIsLoggedIn;
}) => JSX.Element;
