import { useAppDispatch, useAppSelector } from '@/Features/Redux/Hooks';
import { app, newEmail, newPassword, userSignOut } from '@/Firebase/config';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import React from 'react';
import AboutUser from '../AboutUser';
import ProfileIMg from '../ProfileImg';
import style from './Information.module.scss';

const Information = () => {
  const auth = getAuth(app);
  const route = useRouter();
  const dispatch = useAppDispatch();

  return (
    <div className={style.info}>
      <div className={style.side}>
        <ProfileIMg />
        <AboutUser />
      </div>
      <div className={style.main}>
        <button onClick={() => userSignOut(auth, route, dispatch)}>Log out</button>{' '}
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
