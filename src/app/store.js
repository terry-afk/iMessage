import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice.js';
import chatSlice from '../features/chatSlice.js';

export const store = configureStore({
  reducer: {
    user: userSlice,
    chat: chatSlice,
  },
});

export default store;
