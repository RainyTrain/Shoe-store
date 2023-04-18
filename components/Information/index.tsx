import { useAppDispatch, useAppSelector } from '@/Features/Redux/Hooks';
import { app, newEmail, newPassword, userSignOut } from '@/Firebase/config';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import React from 'react';
import ProfileIMg from '../ProfileImg';
import style from './Information.module.scss';

const Information = () => {
  const auth = getAuth(app);
  const user = useAppSelector((state) => state.user);
  const route = useRouter();
  const dispatch = useAppDispatch();

  return (
    <div className={style.info}>
      <div className={style.side}>
        <ProfileIMg />
      </div>
      <div className={style.main}>
        <div className={style.personal}>
          {user.name} {user.surname} Profile
        </div>
        <button onClick={() => console.log(user)}>Get data</button>
        <button onClick={() => userSignOut(auth, route, dispatch)}>Log out</button>{' '}
        <button
          onClick={() => {
            newPassword(auth, '');
            console.log(auth.currentUser);
          }}>
          Change password
        </button>
        <button
          onClick={() => {
            newEmail(auth, 'qwerty');
            console.log(auth.currentUser);
          }}>
          Change email
        </button>
      </div>
    </div>
  );
};

export default Information;
