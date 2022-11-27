import { SetIsLoggedIn } from '../../App';

export type TextInputType = ({
  isChat,
  setIsLoggedIn,
  currentUser,
  foundLastMsg,
}: {
  isChat?: boolean | undefined;
  setIsLoggedIn?: SetIsLoggedIn;
  currentUser?: string;
  foundLastMsg?: Function;
}) => JSX.Element;

export type OnSubmitDataType = (data: string, id?: string) => void;
export type OnSubmitFormType = (e: React.FormEvent<HTMLFormElement>) => void;
export type OnChangeInputType = (e: React.FormEvent<HTMLInputElement>) => void;
export type OnKeyUpChangeType = (
  e: React.KeyboardEvent<HTMLInputElement>
) => void;
