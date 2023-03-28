import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDmbv6EKW-sAjBsa7dHPaer0ZSVQ9r4Ncs',
  authDomain: 'shoe-store-7b838.firebaseapp.com',
  projectId: 'shoe-store-7b838',
  storageBucket: 'shoe-store-7b838.appspot.com',
  messagingSenderId: '255552343161',
  appId: '1:255552343161:web:cac204521ad98b82e358a8',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const colRef = collection(db, 'person');
