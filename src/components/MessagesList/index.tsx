import React from 'react';
import './styles.css';
import { IMessagesChat } from '../../redux/types';
import { MessagesCardT, MessagesListT } from './types';
import useMessagesChat from '../../hooks/useMessagesChat';

const MessagesList: MessagesListT = ({ currentUser, msgsChat }) => {
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

const MessagesCard: MessagesCardT = ({ singleMsg, userLogged }) => {
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
