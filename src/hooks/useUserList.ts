import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsersOnline } from '../redux/userSelector';
import { getUsers } from '../redux/userSlice';

const useUserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { usersOnline } = useSelector(selectUsersOnline);
  return { usersOnline };
};

export default useUserList;
