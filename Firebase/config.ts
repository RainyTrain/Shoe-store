import { AppDispatch } from '@/Features/Redux/Store';
import { setAuth } from '@/Features/Redux/UserSlice';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, StorageReference, uploadBytes } from 'firebase/storage';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { NextRouter } from 'next/router';
import { UserType } from './Types';

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

export const storage = getStorage(app);

export const personRef = collection(db, 'person');
export const usersRef = collection(db, 'users');

const signUp = async ({ auth, email, password }: UserType, name: string, surname: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async () => {
      const getData = await getDocs(usersRef);
      const userData = {
        id: getData.docs.length + 1,
        name: name,
        surname: surname,
        email: email,
      };
      await addDoc(usersRef, userData).then(() => console.log('User added to colletion'));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error:', errorCode, errorMessage);
    });
};

export const signIn = async (
  { auth, email, password }: UserType,
  dispatch: AppDispatch,
  route: NextRouter,
) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      dispatch(setAuth(true));
      setTimeout(() => {
        route.push('/profile');
      }, 3000);
      console.log('You are sign up!');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error:', errorCode, errorMessage);
    });
};

export const userSignOut = async (auth: Auth, route: NextRouter, dispatch: AppDispatch) => {
  await auth.signOut();
  setTimeout(() => {
    dispatch(setAuth(false));
    route.push('/register');
  }, 1000);
};

export const newEmail = async (auth: Auth, newEmail: string) => {
  await updateEmail(auth.currentUser!, newEmail).then(() => {
    console.log('Email has been updated');
  });
};

export const newPassword = async (auth: Auth, newPassword: string) => {
  await updatePassword(auth.currentUser!, newPassword).then(() => {
    console.log('New password has been updated');
  });
};

export const newPhoto = async (auth: Auth, photoURL: string) => {
  updateProfile(auth.currentUser!, {
    photoURL: photoURL,
  }).then(() => {
    console.log('Logo has been updated');
  });
};

export const uploadFile = async (auth: Auth, ref: StorageReference, file: File) => {
  await uploadBytes(ref, file).then(async () => {
    console.log('Files have been uploaded');
    await getDownloadURL(ref).then(async (url) => {
      await newPhoto(auth, url);
    });
  });
};
