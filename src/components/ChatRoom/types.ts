export interface IChatRoomProps {
  currentUser: string;
}

export type TChatRoom = (props: IChatRoomProps) => JSX.Element;

export type FoundLastMsg = (user: string) => void;
