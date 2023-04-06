import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  isAuth: true | false;
}

const initialState:IUser = {
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = userSlice.actions;
export default userSlice.reducer;
