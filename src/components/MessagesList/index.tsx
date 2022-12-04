import React, { useState } from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { deleteMsg } from '../../redux/chatSlice';
import { IMessagesChat } from '../../redux/types';
import {
  CheckUserType,
  IsOwnMsgsType,
  MessagesCardType,
  MessagesListType,
  OnClickBtnDelteType,
} from './types';

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
  const dispatch = useDispatch();
  const [isFinishTransition, setIsFinishtransition] = useState(false);
  const checkUser: CheckUserType = (userMsgs) => userMsgs === userLogged;
  const isOwnMsgs: IsOwnMsgsType = (userMsgs) =>
    checkUser(userMsgs) ? 'onRight' : 'onLeft';

  const onClickBtnDelte: OnClickBtnDelteType = (idToDelete) => {
    dispatch(deleteMsg(idToDelete));
  };
  setTimeout(() => {
    setIsFinishtransition(true);
  }, 100);

  return (
    <div className={'msgCard ' + isOwnMsgs(singleMsg.user)}>
      <div className="userSentMsg">{singleMsg.user}:</div>
      <div
        className={`msgContainer ${isFinishTransition ? '' : 'initialColor'}`}
      >
        {checkUser(singleMsg.user) && (
          <button
            onClick={() => onClickBtnDelte(singleMsg.id)}
            className="onRight deleteChat"
          >
            X
          </button>
        )}
        <div className="msgText">{singleMsg.message}</div>
        <span className="timeSentMsg">{singleMsg.hourAndMinutes}</span>
      </div>
    </div>
  );
};

export default MessagesList;
