import React from 'react';
import './styles.css';
import TextInput from '../TextInput';
import MessagesList from '../MessagesList';
import { IMessagesChat } from '../../redux/types';
import { ChatRoomType, FoundLastMsg } from './types';
import useMessagesChat from '../../hooks/useMessagesChat';

const ChatRoom: ChatRoomType = ({ currentUser }) => {
  const { msgsChat } = useMessagesChat();
  const foundLastMsg: FoundLastMsg = (user) =>
    msgsChat.find((msg: IMessagesChat) => msg.user === user);

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
