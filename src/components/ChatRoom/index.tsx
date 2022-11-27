import React from 'react';
import './styles.css';
import TextInput from '../ui/TextInput';
import MessagesList from '../ui/MessagesList';
import { useSelector } from 'react-redux';
import { selectMsgsChat } from '../../redux/chatSelector';
import { ChatAppData, MessagesChat } from '../../redux/chatSlice';

type ChatRoomType = ({ currentUser }: { currentUser: string }) => JSX.Element;

const ChatRoom: ChatRoomType = ({ currentUser }) => {
  const { msgsChat }: ChatAppData = useSelector(selectMsgsChat);
  const foundLastMsg: (user: string) => void = (user) =>
    msgsChat.find((msg: MessagesChat) => msg.user === user);

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
