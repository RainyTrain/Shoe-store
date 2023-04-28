import { useAppDispatch } from '@/Features/Redux/Hooks';
import { app, userSignOut } from '@/Firebase/config';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import AboutUser from '../AboutUser';
import History from '../History';
import ProfileCart from '../ProfileCart';
import ProfileIMg from '../ProfileImg';
import UserMain from '../UserMain';
import style from './Information.module.scss';

const Information = () => {
  const auth = getAuth(app);
  const route = useRouter();
  const dispatch = useAppDispatch();

  const pages = {
    Cart: <ProfileCart />,
    History: <History />,
  };

  const [selected, setSelected] = useState<string>('Cart');

  return (
    <div className={style.info}>
      <div className={style.side}>
        <ProfileIMg />
        <AboutUser />
      </div>
      <div className={style.main}>
        <button onClick={() => userSignOut(auth, route, dispatch)}>Log out</button>
        <UserMain selected={selected} setSelected={setSelected} />
      </div>
      <div className={style.content}>{pages[selected as keyof typeof pages]}</div>
    </div>
  );
};

export default Information;
