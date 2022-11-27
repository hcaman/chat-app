import React, { useEffect } from 'react';
import '../../styles/UsersList.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, UserData } from '../../redux/userSlice';
import { selectUsersOnline } from '../../redux/userSelector';

const UsersList: () => JSX.Element = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { usersOnline } = useSelector(selectUsersOnline);

  return (
    <div className="users-online">
      {usersOnline.length &&
        usersOnline.map(
          (singleUser: UserData): JSX.Element => (
            <div key={singleUser.id} className="user">
              {singleUser.userName}
            </div>
          )
        )}
    </div>
  );
};

export default UsersList;
