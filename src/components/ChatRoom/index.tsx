import React from 'react';
import './styles.css';
import TextInput from '../TextInput';
import MessagesList from '../MessagesList';
import { IMessagesChat } from '../../redux/types';
import { ChatRoomT, FoundLastMsg } from './types';
import useMessagesChat from '../../hooks/useMessagesChat';
import UsersList from '../UserList';

const ChatRoom: ChatRoomT = ({ currentUser }) => {
  const { msgsChat } = useMessagesChat(currentUser);
  const foundLastMsg: FoundLastMsg = (user) =>
    msgsChat.find((msg: IMessagesChat) => msg.user === user);

  return (
    <div className="containerWithUsersList">
      <MessagesList currentUser={currentUser} msgsChat={msgsChat} />
      <TextInput
        isChat={true}
        currentUser={currentUser}
        foundLastMsg={foundLastMsg}
      />
      <UsersList />
    </div>
  );
};

export default ChatRoom;
