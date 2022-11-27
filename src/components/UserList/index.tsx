import React, { useEffect } from 'react';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/userSlice';
import { selectUsersOnline } from '../../redux/userSelector';
import { UsersListType } from './types';
import { IUserData } from '../../redux/types';

const UsersList: UsersListType = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { usersOnline } = useSelector(selectUsersOnline);

  return (
    <div className="users-online">
      {usersOnline.length &&
        usersOnline.map((singleUser: IUserData) => (
          <div key={singleUser.id} className="user">
            {singleUser.userName}
          </div>
        ))}
    </div>
  );
};

export default UsersList;
