import React from 'react';
import './styles.css';
import { UsersListT } from './types';
import { IUserData } from '../../redux/types';
import useUserList from '../../hooks/useUserList';

const UsersList: UsersListT = () => {
  const { usersOnline } = useUserList();
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
