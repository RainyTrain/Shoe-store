import { AppDispatch } from '@/Features/Redux/Store';
import { setAuth } from '@/Features/Redux/UserSlice';
import { initializeApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import {  NextRouter } from 'next/router';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSEGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

export const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const personRef = collection(db, 'person');
export const usersRef = collection(db, 'users');

export const userSignOut = async (auth: Auth, route: NextRouter, dispatch: AppDispatch) => {
  await auth.signOut();
  setTimeout(() => {
    dispatch(setAuth(false));
    route.push('/register');
  }, 1000);
};
