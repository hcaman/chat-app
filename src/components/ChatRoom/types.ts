export interface IChatRoomProps {
  currentUser: string;
}

export type ChatRoomT = (props: IChatRoomProps) => JSX.Element;

export type FoundLastMsg = (user: string) => void;
