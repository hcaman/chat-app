export type SetIsLoggedIn = React.Dispatch<
  React.SetStateAction<loggedInDataType>
>;

export interface loggedInDataType {
  logUsername: string;
  isLoggedIn: boolean;
}

export interface StringArray {
  [index: string]: string;
}

export type AppType = () => JSX.Element;
