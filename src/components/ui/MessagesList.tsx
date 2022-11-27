import React, { useState } from 'react';
import '../../styles/MessagesList.css';
import { useDispatch } from 'react-redux';
import { deleteMsg, MessagesChat } from '../../redux/chatSlice';

type MessagesListElement = ({
  currentUser,
  msgsChat,
}: {
  currentUser: string;
  msgsChat: MessagesChat[];
}) => JSX.Element;

const MessagesList: MessagesListElement = ({ currentUser, msgsChat }) => {
  return (
    <div className="msgsList">
      {msgsChat?.length
        ? msgsChat.map((singleMsg: MessagesChat) => (
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

type MessagesCardElement = ({
  singleMsg,
  userLogged,
}: {
  singleMsg: MessagesChat;
  userLogged: string;
}) => JSX.Element;

const MessagesCard: MessagesCardElement = ({ singleMsg, userLogged }) => {
  const dispatch = useDispatch();
  const [isFinishTransition, setIsFinishtransition] = useState(false);
  const checkUser: (userMsgs: string) => boolean = (userMsgs) =>
    userMsgs === userLogged;
  const isOwnMsgs: (userMsgs: string) => string = (userMsgs) =>
    checkUser(userMsgs) ? 'onRight' : 'onLeft';

  const onClickBtnDelte: (idToDelete: string) => void = (idToDelete) => {
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
