import React from 'react';
import './styles.css';
import { IMessagesChat } from '../../redux/types';
import { MessagesCardType, MessagesListType } from './types';
import useMessagesChat from '../../hooks/useMessagesChat';

const MessagesList: MessagesListType = ({ currentUser, msgsChat }) => {
  return (
    <div className="msgsList">
      {msgsChat?.length
        ? msgsChat.map((singleMsg: IMessagesChat) => (
            <MessagesCard
              key={singleMsg.id}
              singleMsg={singleMsg}
              userLogged={currentUser}
            />
          ))
        : null}
    </div>
  );
};

const MessagesCard: MessagesCardType = ({ singleMsg, userLogged }) => {
  const {
    isFinishTransition,
    setTrueFinishTrans,
    onClickBtnDelte,
    isOwnMsgs,
    checkUser,
  } = useMessagesChat(userLogged);

  const { user, id, message, hourAndMinutes } = singleMsg;

  setTimeout(() => {
    setTrueFinishTrans();
  }, 100);

  return (
    <div className={'msgCard ' + isOwnMsgs(user)}>
      <div className="userSentMsg">{user}:</div>
      <div
        className={`msgContainer ${isFinishTransition ? '' : 'initialColor'}`}
      >
        {checkUser(user) && (
          <button
            onClick={() => onClickBtnDelte(id)}
            className="onRight deleteChat"
          >
            X
          </button>
        )}
        <div className="msgText">{message}</div>
        <span className="timeSentMsg">{hourAndMinutes}</span>
      </div>
    </div>
  );
};

export default MessagesList;
