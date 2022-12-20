import React from 'react';
import './styles.css';
import TextInput from '../TextInput';
import MessagesList from '../MessagesList';
import { ChatRoomT } from './types';
import useMessagesChat from '../../hooks/useMessagesChat';
import UsersList from '../UserList';

const ChatRoom: ChatRoomT = ({ currentUser }) => {
  const { msgsChat } = useMessagesChat(currentUser);

  return (
    <div className="containerWithUsersList">
      <MessagesList currentUser={currentUser} msgsChat={msgsChat} />
      <TextInput isChat={true} currentUser={currentUser} />
      <UsersList />
    </div>
  );
};

export default ChatRoom;
