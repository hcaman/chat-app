import React from 'react';
import '../styles/ChatRoom.css';
import TextInput from './ui/TextInput';
import MessagesList from './ui/MessagesList';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

type ChatRoomType = ({ currentUser }: { currentUser: string }) => JSX.Element;

const ChatRoom: ChatRoomType = ({ currentUser }) => {
  const { msgsChat } = useSelector((state: RootState) => state.chat);
  const foundLastMsg: (user: string) => void = (user) =>
    msgsChat.find((msg: any) => msg.user === user);

  return (
    <div className="container">
      <MessagesList currentUser={currentUser} msgsChat={msgsChat} />
      <TextInput
        isChat={true}
        currentUser={currentUser}
        foundLastMsg={foundLastMsg}
      />
    </div>
  );
};

export default ChatRoom;
