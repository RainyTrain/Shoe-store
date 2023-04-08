import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDocs, query, where } from 'firebase/firestore';
import { usersRef } from '../../../Firebase/config';

interface IUser {
  name: string;
  surname: string;
  email: string;
}

interface IInitialState {
  user: IUser;
  isAuth: true | false;
}

const initialState: IInitialState = {
  user: {
    name: '',
    surname: '',
    email: '',
  },
  isAuth: false,
};

export const getUserData = createAsyncThunk('user/data', async (email: string) => {
  const q = query(usersRef, where('email', '==', email));
  const getUser = await getDocs(q);
  console.log('data here ', getUser.docs[0].data());
  return getUser.docs[0].data() as IUser;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.user = action.payload
    });
  },
});

export const { setAuth } = userSlice.actions;
export default userSlice.reducer;
