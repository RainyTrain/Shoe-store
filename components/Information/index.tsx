import React from 'react';
import AboutUser from '../AboutUser';
import ProfileIMg from '../ProfileImg';
import UserMain from '../UserMain';
import style from './Information.module.scss';

const Information = () => {

  return (
    <div className={style.info}>
      <div className={style.side}>
        <ProfileIMg />
        <AboutUser />
      </div>
      <div className={style.main}>
        {/* <button onClick={() => userSignOut(auth, route, dispatch)}>Log out</button> */}
        <UserMain />
      </div>
    </div>
  );
};

export default Information;
