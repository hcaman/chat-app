import { SetIsLoggedIn } from '../../types';

interface ITextInputProps {
  isChat?: boolean | undefined;
  setIsLoggedIn?: SetIsLoggedIn;
  currentUser?: string;
  foundLastMsg?: Function;
}

export type TextInputT = (props: ITextInputProps) => JSX.Element;

export type OnSubmitDataT = (data: string, id?: string) => void;
export type OnSubmitFormT = (e: React.FormEvent<HTMLFormElement>) => void;
export type OnChangeInputT = (e: React.FormEvent<HTMLInputElement>) => void;
export type OnKeyUpChangeT = (e: React.KeyboardEvent<HTMLInputElement>) => void;
