import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { IUsersAppData } from './types';

const initialState: IUsersAppData = {
  usersOnline: [],
  userLogged: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<string>) {
      const indexUser = state.usersOnline.findIndex(
        (singleUser) => singleUser.userName === action.payload
      );
      if (indexUser >= 0) {
        state.usersOnline[indexUser].isOnline = true;
      } else {
        const userRegData = {
          id: uuidv4(),
          userName: action.payload,
          isOnline: true,
        };
        state.usersOnline.push(userRegData);
      }
      state.userLogged = action.payload;
      state.isLoggedIn = true;
    },
    getUsers(state) {
      state.usersOnline = state.usersOnline.filter(
        (singleUser) => singleUser.isOnline
      );
    },
  },
});

export const { loginUser, getUsers } = userSlice.actions;
export default userSlice.reducer;
