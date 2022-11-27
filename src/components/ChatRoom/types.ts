export type ChatRoomType = ({
  currentUser,
}: {
  currentUser: string;
}) => JSX.Element;

export type FoundLastMsg = (user: string) => void;
