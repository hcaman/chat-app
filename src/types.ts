export type SetIsLoggedIn = React.Dispatch<React.SetStateAction<ILoggedInData>>;

export interface ILoggedInData {
  logUsername: string;
  isLoggedIn: boolean;
}

export interface IStringArray {
  [index: string]: string;
}

export type AppT = () => JSX.Element;
