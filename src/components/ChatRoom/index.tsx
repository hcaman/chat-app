import React from 'react';
import './styles.css';
import TextInput from '../TextInput';
import MessagesList from '../MessagesList';
import { useSelector } from 'react-redux';
import { selectMsgsChat } from '../../redux/chatSelector';
import { ChatAppData, MessagesChat } from '../../redux/chatSlice';
import { ChatRoomType, FoundLastMsg } from './types';

const ChatRoom: ChatRoomType = ({ currentUser }) => {
  const { msgsChat }: ChatAppData = useSelector(selectMsgsChat);
  const foundLastMsg: FoundLastMsg = (user) =>
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
