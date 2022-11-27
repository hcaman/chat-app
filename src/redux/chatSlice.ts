import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
  ChatAppData,
  ConvertTimeType,
  IMessageModified,
  IMsgDataPayload,
} from './types';

const initialState: ChatAppData = {
  msgsChat: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getMsg(state) {
      state.msgsChat = state.msgsChat.sort((a, b) => b.addTime - a.addTime);
    },
    addMsg(state, action: PayloadAction<IMsgDataPayload>) {
      const convertTime: ConvertTimeType = (timeString) => {
        const formatTwoNums: (num: number) => string = (num) => {
          const checkLength = num.toString().length === 1;
          return checkLength ? `0${num}` : `${num}`;
        };
        const timeToDate = new Date(Number(timeString));
        const hourOfTime = formatTwoNums(timeToDate.getHours());
        const minOfTime = formatTwoNums(timeToDate.getMinutes());
        return `${hourOfTime}:${minOfTime}`;
      };
      const timeMilisec = new Date().getTime();

      state.msgsChat.push({
        id: uuidv4(),
        message: action.payload.message,
        user: action.payload.user,
        addTime: timeMilisec,
        hourAndMinutes: convertTime(timeMilisec),
      });
      state.msgsChat = state.msgsChat.sort((a, b) => b.addTime - a.addTime);
    },
    deleteMsg(state, action: PayloadAction<string>) {
      const msgFiltered = state.msgsChat.filter(
        (msg) => msg.id !== action.payload
      );
      state.msgsChat = msgFiltered.sort((a, b) => b.addTime - a.addTime);
    },
    updateMsg(state, action: PayloadAction<IMessageModified>) {
      const msgIndex = state.msgsChat.findIndex(
        (msg) => msg.id === action.payload.id
      );
      if (msgIndex >= 0) {
        const msgToUpdate = state.msgsChat[msgIndex];
        if (msgToUpdate) {
          msgToUpdate.message = action.payload.message;
          state.msgsChat[msgIndex] = msgToUpdate;
        }
      }
    },
  },
});

export const { addMsg, deleteMsg, updateMsg, getMsg } = chatSlice.actions;
export default chatSlice.reducer;
