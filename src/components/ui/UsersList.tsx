import React, { useEffect } from 'react';
import '../../styles/UsersList.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, UserData } from '../../redux/userSlice';
import { RootState } from '../../store';

const UsersList: () => JSX.Element = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { usersOnline } = useSelector((state: RootState) => state.user);

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
