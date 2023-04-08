import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../UserSlice';

const store = configureStore({
  reducer: UserSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
